import React, { useEffect } from "react";
import { useState } from "react";
import "../Pages/Home.css";

import { Link } from "react-router-dom";
import {
  Box,
  Heading,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Text,
  Tfoot,
  Th,
  Thead,
  Toast,
  Tr,
  useToast,
} from "@chakra-ui/react";

import { addLecture } from "../Redux/AppReducer/action";
import { useDispatch } from "react-redux";
import SidebarHeader from "../Components/Sidebar_Header";
import axios from "axios";

const MarkAttendendance = () => {
  const [data, setData] = useState({
    lecture_date: "",
    start_at: "",
    end_at: "",
    year: "",
    lecture_type: "",
  });
  const dispatch = useDispatch();
  const [subjectArr, setSubjectArr] = useState([]);
  const [subject, setSubject] = useState(null);
  const [studentsData, setStudentsData] = useState([]);
  const [present, setPresent] = useState([]);

  useEffect(() => {
    getSubjects();
    if (data.year && subject) {
      getStudents();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data.year, subject?.subject_id]);
  const getSubjects = async () => {
    try {
      let res = await axios.get(
        "https://long-gray-cougar-toga.cyclic.app/subjects"
      );
      setSubjectArr(res.data);
    } catch (err) {
      throw err;
    }
  };
  console.log(studentsData);
  const getStudents = async () => {
    try {
      let res = await axios.get(
        `https://long-gray-cougar-toga.cyclic.app/students?year=${data.year}&subject=${subject?.subject_id}`
      );
      setStudentsData(res.data);
    } catch (err) {}
  };
  const handleSubmitAddStudent = (e) => {
    e.preventDefault();
    if (present.length) {
      const payload = { ...data, ...subject, present: present };
      dispatch(addLecture(payload));
    } else {
      alert("Lecture cannot be without any attendence !");
    }
  };

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubjectChange = (e) => {
    let subName;
    subjectArr.forEach((el) => {
      if (el._id === e.target.value) {
        subName = el.name;
      }
    });
    setSubject({ subject: subName, subject_id: e.target.value });
  };

  const handlePresent = (val, e) => {
    if (e.target.checked) {
      setPresent([...present, val]);
    } else {
      let removeElem = present.filter((el) => {
        if (el !== val) {
          return true;
        }
      });
      setPresent(removeElem);
    }
  };
  return (
    <Box w={"100%"}>
      <SidebarHeader />
      <Box
        w={"60%"}
        m={"auto"}
        textAlign={"left"}
        className="mainContent"
        p={10}
      >
        <Text textAlign="left" fontSize="1.5rem" p="2" fontWeight="2rem">
          Create New Lecture
        </Text>
        <form onSubmit={handleSubmitAddStudent} className="modalForm">
          <div>
            <label>Lecture Date :</label>
            <br />
            <input
              onChange={handleChange}
              name="lecture_date"
              type="date"
              required
              value={data.lecture_date}
            />
          </div>

          <div>
            <label>Lecture Start Time :</label>
            <br />
            <input
              name="start_at"
              onChange={handleChange}
              type="time"
              required
              value={data.start_at}
            />
          </div>

          <div>
            <label>Lecture End Time :</label>
            <br />
            <input
              onChange={handleChange}
              type="time"
              name="end_at"
              required
              value={data.end_at}
            />
          </div>

          <div>
            <label>Select Year :</label> <br />
            <select name="year" onChange={handleChange} required>
              <option value="">--select--</option>
              <option value={"First"}>First</option>
              <option value={"Second"}>Second</option>
              <option value={"Third"}>Third</option>
              <option value={"Fourth"}>Fourth</option>
            </select>
          </div>

          <div>
            <label>Lecture Type :</label> <br />
            <select name="lecture_type" required onChange={handleChange}>
              <option value="">--select type--</option>
              <option value="Theory">Theory</option>
              <option value="Practical">Practical</option>
            </select>
            {/* <input type="text" name="" value={data.lecture_type} onChange={handleChange} placeholder="Theory, Pratical..." /> */}
          </div>

          <div>
            <label>Select Lecture Subject :</label>
            <select name="subject" onChange={handleSubjectChange}>
              <option value="">--select Subject--</option>
              {subjectArr.map((el, id) => (
                <option key={id} value={el._id}>
                  {el.name}
                </option>
              ))}
            </select>
          </div>
          <Box border={2}>
            <TableContainer>
              <Table size="sm" variant="striped" colorScheme="purple">
                <TableCaption>List of All Students Enrolled</TableCaption>
                <Thead>
                  <Tr>
                    <Th>Name</Th>
                    <Th>Registration Number</Th>
                    <Th>Roll Number</Th>
                    <Th>Present</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {studentsData.length === 0 && (
                    <Tr textAlign={"center"} color={"gray.500"}>
                      Please Select Lecture and Year to Get Students
                    </Tr>
                  )}
                  {studentsData.map((el) => (
                    <Tr key={el._id}>
                      <Td>{el.name}</Td>
                      <Td> {el.registrationNumber}</Td>
                      <Td>{el._id}</Td>
                      <Td>
                        <input
                          onChange={(e) => handlePresent(el._id, e)}
                          type="checkbox"
                        />
                      </Td>
                    </Tr>
                  ))}
                </Tbody>
                <Tfoot>
                  <Tr>
                    <Th>Total={studentsData.length}</Th>
                  </Tr>
                </Tfoot>
              </Table>
            </TableContainer>
          </Box>
          <input className="submitBtnAdmin" type="submit" />
        </form>
      </Box>
    </Box>
  );
};

export default MarkAttendendance;
