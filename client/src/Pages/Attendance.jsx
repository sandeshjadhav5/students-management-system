import React, { useState, useEffect } from "react";
import axios from "axios";
import StudentList from "../Components/StudentList";
import Sidebar_Header from "../Components/Sidebar_Header";
import { Box, Heading, Image, Button } from "@chakra-ui/react";

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
} from "@chakra-ui/react";
const Attendance = () => {
  const [studentsData, setStudentsData] = useState([]);
  const [selectedYear, setSelectedYear] = useState("");

  // console.log("selected year is", selectedYear);
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
  }, []);
  return (
    <div>
      <Sidebar_Header />
      <div className="mainContent">
        {/* <Heading fontFamily="body">All Students</Heading> */}
        <Box textAlign="left">
          <Box p="4">
            <select
              onChange={(e) => setSelectedYear(e.target.value)}
              style={{
                border: "solid 2px black",
                width: "10rem",
                height: "4rem",
                padding: "1rem",
              }}
            >
              <option value="">Select Year</option>
              <option value="First">First</option>
              <option value="Second">Second</option>
              <option value="Third">Third</option>
              <option value="Four">Four</option>
            </select>
          </Box>
          <TableContainer border="solid #ccc 1px">
            <Table size="md" variant="striped" colorScheme="purple">
              <TableCaption>List of All Students Enrolled</TableCaption>
              <Thead>
                <Tr>
                  <Th>Name</Th>
                  <Th>Registration Number</Th>
                  <Th>Academic Year</Th>
                  <Th>Mobile Number</Th>
                </Tr>
              </Thead>
              <Tbody>
                <StudentList selectedYear={selectedYear} />
              </Tbody>
            </Table>
          </TableContainer>
        </Box>
      </div>
    </div>
  );
};

export default Attendance;
