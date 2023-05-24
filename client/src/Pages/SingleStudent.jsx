import React, { useEffect, useState } from "react";
import SidebarHeader from "../Components/Sidebar_Header";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Box, Image, Text } from "@chakra-ui/react";
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

const SingleStudent = () => {
  const id = useParams();

  const [studentDetails, setStudentDetails] = useState({});
  const [subjects, setSubjects] = useState([]);

  const getSingleStudentRecords = () => {
    axios
      .get(`https://long-gray-cougar-toga.cyclic.app/students/${id.id}`)
      .then((res) => {
        setStudentDetails(res.data);
        setSubjects(res.data.subjects);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    getSingleStudentRecords();
  }, []);
  return (
    <div>
      <SidebarHeader />
      <div className="mainContent">
        <Box
          borderBottom="solid #ccc 3px"
          display="flex"
          m="auto"
          justifyContent="space-between"
        >
          <Box w="26%">
            <Image
              src={studentDetails.avatar}
              alt="Student Img"
              border="solid #ccc 1px"
              m="2"
            />
          </Box>
          <Box w="50%" alignItems="center" alignContent="center" m="2">
            <Text textAlign="left" fontSize="1.5rem">
              Name : - {studentDetails.name}
            </Text>
            <br />
            <Text textAlign="left" fontSize="1.5rem">
              Registration Number : - {studentDetails.registrationNumber}
            </Text>
            <br />
            <Text textAlign="left" fontSize="1.5rem">
              Mobile Number : - {studentDetails.mobileNumber}
            </Text>
            <br />
            <Text textAlign="left" fontSize="1.5rem">
              Year : - {studentDetails.year}
            </Text>
          </Box>
        </Box>
        <Box mt="2">
          {subjects && <Text fontSize="1.5rem">Attendance Report</Text>}
          {/* {studentDetails.subjects == [] && (
            <Text m="4" fontSize="1rem">
              No Attendance Report Available For this Student
            </Text>
          )} */}
          <TableContainer border="solid #ccc 1px">
            <Table size="lg" variant="striped" colorScheme="green">
              <TableCaption>{studentDetails.name} Details</TableCaption>
              <Thead>
                <Tr>
                  <Th>Name</Th>
                  <Th>Attendance in %</Th>
                  <Th>Total Lectures</Th>
                </Tr>
              </Thead>
              <Tbody>
                {subjects &&
                  subjects.map((el) => (
                    <Tr
                      key={el._id}
                      _hover={{
                        background: "white",
                        fontWeight: "bold",
                        color: "black",
                      }}
                    >
                      <Td>{el.name}</Td>
                      <Td>{el.attendence_percentage} %</Td>
                      <Td>{el.lectures.length}</Td>

                      <Td></Td>
                    </Tr>
                  ))}
              </Tbody>
            </Table>
          </TableContainer>
        </Box>
      </div>
    </div>
  );
};

export default SingleStudent;
