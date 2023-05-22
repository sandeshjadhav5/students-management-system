import React, { useState, useEffect } from "react";
import axios from "axios";
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
const MarkAttendance = () => {
  const [studentsData, setStudentsData] = useState([]);
  const getStudents = () => {
    axios
      .get(`https://long-gray-cougar-toga.cyclic.app/students`)
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
        <Heading fontFamily="body">All Students</Heading>
        <Box>
          {/* <form>
            <select>
              <option>Select Year</option>
              <option>First</option>
              <option>Second</option>
              <option>Third</option>
              <option>Fourth</option>
            </select>
            <br />
            <select>
              <option>Select</option>
              <option>First</option>
              <option>Second</option>
              <option>Third</option>
              <option>Fourth</option>
            </select>
          </form> */}
          <TableContainer>
            <Table size="sm" variant="striped" colorScheme="purple">
              <TableCaption>List of All Students Enrolled</TableCaption>
              <Thead>
                <Tr>
                  <Th>Name</Th>
                  <Th>Registration Number</Th>
                  <Th>Roll Number</Th>
                  <Th>Attendance</Th>
                </Tr>
              </Thead>
              <Tbody>
                {studentsData.map((el) => (
                  <Tr key={el._id}>
                    <Td>{el.name}</Td>
                    <Td> {el.registrationNumber}</Td>
                    <Td>{el.year}</Td>
                    <Td>Mark</Td>
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
      </div>
    </div>
  );
};

export default MarkAttendance;
