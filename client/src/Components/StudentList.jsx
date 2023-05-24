import React, { useEffect, useState } from "react";
import axios from "axios";

import { Link } from "react-router-dom";
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Box,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const StudentList = ({ selectedYear }) => {
  const [studentsData, setStudentsData] = useState([]);
  const studentId = JSON.parse(localStorage.getItem("studentId")) || "";
  const navigate = useNavigate();

  const getStudents = () => {
    axios
      .get(`https://long-gray-cougar-toga.cyclic.app/year?year=${selectedYear}`)
      .then((res) => {
        console.log(res.data);
        setStudentsData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    getStudents();
  }, [selectedYear]);
  return (
    <>
      {studentsData.map((el) => (
        <Tr
          key={el._id}
          _hover={{
            background: "white",
            fontWeight: "bold",
            color: "black",
          }}
        >
          <Td>
            <Link to={`/attendance/${el._id}`}> {el.name}</Link>
          </Td>
          <Td>
            <Link to={`/attendance/${el._id}`}> {el.registrationNumber}</Link>
          </Td>
          <Td>{el.year}</Td>
          <Td>{el.mobileNumber}</Td>
        </Tr>
      ))}
    </>
  );
};

export default StudentList;
