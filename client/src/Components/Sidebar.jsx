import { useEffect, useState } from "react";
import "../Pages/Home.css";
import "./Sidebar.css";
import { Link } from "react-router-dom";
import { Flex, Text, useToast } from "@chakra-ui/react";
import {
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from "@chakra-ui/react";
import {
  Box,
  Button,
  Drawer,
  DrawerOverlay,
  Heading,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  DrawerContent,
  VStack,
} from "@chakra-ui/react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "@chakra-ui/react";
import { addStudents, addStudentsSuccess } from "../Redux/AppReducer/action";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
const Sidebar = ({ isOpen, variant, onClose }) => {
  const [isModalOpen, setIsOpen] = useState(false);
  const [name, setName] = useState("");
  const [registrationNumber, setRegistrationNumber] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [mobileNumber, setMobileNumber] = useState();
  const [year, setYear] = useState("");
  const dispatch = useDispatch();
  const [subjectArr, setSubjectArr] = useState([]);
  const [subjects, setSubjects] = useState([]);
  const [sub, setSub] = useState([]);

  const isAddStudentsLoading = useSelector(
    (state) => state.AppReducer.addStudentsLoading
  );
  const isAddStudentsSuccess = useSelector(
    (state) => state.AppReducer.addStudentsSuccess
  );

  useEffect(() => {
    getSubjects();
  }, []);

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
  console.log(
    "isddLoading",
    isAddStudentsLoading,
    "isAddSuccess",
    isAddStudentsSuccess
  );
  const handleSubmitAddStudent = (e) => {
    setSubjects([]);
    e.preventDefault();
    const payload = {
      name,
      registrationNumber,
      dateOfBirth,
      mobileNumber,
      year,
      subjects: sub,
    };
    console.log(payload);
    if (payload) {
      dispatch(addStudents(payload));
    }
  };

  const handleOpenModal = () => {
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };
  const toast = useToast({});
  if (isAddStudentsSuccess) {
    toast({
      title: `Student Added Successfully`,
      position: "top-right",
      isClosable: true,
    });
  }

  const handleSubjectChange = (e) => {
    let exist = sub.filter((el) => {
      if (el === e.target.value) {
        return el;
      }
    });
    if (exist.length == 0) {
      setSub([...sub, e.target.value]);
    }
    let substr = "";
    subjectArr.forEach((el) => {
      if (el._id === e.target.value) {
        substr = el.name;
      }
    });
    setSubjects([...subjects, { subject_id: e.target.value, subject: substr }]);
  };
  return variant === "sidebar" ? (
    <Box
      position="fixed"
      left={0}
      p={5}
      w="200px"
      top={0}
      h="100%"
      bg="#CBD5E0"
    >
      <VStack onClick={onClose}>
        <Heading as="h3" size="lg" pt="2" pb="2">
          SGGSIE&T
        </Heading>
        <Box w="100%">
          <Link to="/">
            <Button w="100%">Home</Button>
          </Link>
        </Box>
        <Button onClick={handleOpenModal} w="100%">
          Add Student
        </Button>
        <Box w="100%">
          <Link to="/attendance">
            <Button w="100%">Attendance</Button>
          </Link>
        </Box>
        <Box w="100%">
          <Link to="/markattendance">
            <Button w="100%">Lectures</Button>
          </Link>
        </Box>
        <Box w="100%">
          <Link to="/records">
            <Button w="100%">Records</Button>
          </Link>
        </Box>
      </VStack>

      <Modal isOpen={isModalOpen} onClose={handleCloseModal} size="xl">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add Student to Database</ModalHeader>
          <ModalBody>
            <form onSubmit={handleSubmitAddStudent} className="modalForm">
              <div>
                <label>Name of Student:</label>
                <input
                  onChange={(e) => setName(e.target.value)}
                  type="text"
                  required
                />
              </div>
              <div>
                <label>Registration Number :</label>
                <input
                  onChange={(e) => setRegistrationNumber(e.target.value)}
                  type="text"
                  required
                />
              </div>

              <div>
                <label>Date Of Birth :</label>
                <br />
                <input
                  onChange={(e) => setDateOfBirth(e.target.value)}
                  type="date"
                  required
                />
              </div>

              <div>
                <label>Mobile Number :</label>
                <input
                  onChange={(e) => setMobileNumber(e.target.value)}
                  type="number"
                  required
                />
              </div>

              <div>
                <label>Select Year :</label> <br />
                <select onChange={(e) => setYear(e.target.value)} required>
                  <option>Select Year</option>
                  <option>First</option>
                  <option>Second</option>
                  <option>Third</option>
                  <option>Fourth</option>
                </select>
              </div>

              <div>
                <label>Asign Subjects :</label> <br />
                <select onChange={handleSubjectChange} required>
                  <option value="">--select subjects--</option>
                  {subjectArr.map((el, id) => (
                    <option key={id} value={el._id}>
                      {el.name}
                    </option>
                  ))}
                </select>
              </div>
              <Flex
                border={"2px"}
                height={10}
                alignItems={"center"}
                overflowY={"hidden"}
                overflowX={"auto"}
                css={{
                  "&::-webkit-scrollbar": { height: "8px" },
                  "&::-webkit-scrollbar-track": {
                    background: "#FF0055",
                    width: "90%",
                  },
                }}
              >
                {subjects.map((el, id) => (
                  <Text key={id} mx={"4"}>
                    {el.subject}
                  </Text>
                ))}
              </Flex>
              {!isAddStudentsLoading && (
                <input className="submitBtnAdmin" type="submit" />
              )}
              {isAddStudentsLoading && (
                <div className="submitBtnAdmin">
                  <img src="https://media.tenor.com/wpSo-8CrXqUAAAAi/loading-loading-forever.gif" />
                </div>
              )}
            </form>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="teal" mr={3} onClick={handleCloseModal}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      <div id="snackbar"></div>
    </Box>
  ) : (
    <>
      <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
        <DrawerOverlay>
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>Atendance Management </DrawerHeader>
            <DrawerBody>
              <VStack onClick={onClose}>
                <Heading as="h3" size="lg" pt="2" pb="2">
                  SGGSIE&T{" "}
                </Heading>
                <Box w="100%">
                  <Link to="/">
                    <Button w="100%">Home</Button>
                  </Link>
                </Box>
                <Button onClick={handleOpenModal} w="100%">
                  Add Student
                </Button>
                <Box w="100%">
                  <Link to="/attendance">
                    <Button w="100%">Attendance</Button>
                  </Link>
                </Box>
                <Box w="100%">
                  <Link to="/markattendance">
                    <Button w="100%">Lectures</Button>
                  </Link>
                </Box>
                <Box w="100%">
                  <Link to="/records">
                    <Button w="100%">Records</Button>
                  </Link>
                </Box>
              </VStack>
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>{" "}
      <Modal isOpen={isModalOpen} onClose={handleCloseModal} size="xl">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add Student to Database</ModalHeader>
          <ModalBody>
            <form onSubmit={handleSubmitAddStudent} className="modalForm">
              <div>
                <label>Name of Student:</label>
                <input
                  onChange={(e) => setName(e.target.value)}
                  type="text"
                  required
                />
              </div>
              <div>
                <label>Registration Number :</label>
                <input
                  onChange={(e) => setRegistrationNumber(e.target.value)}
                  type="text"
                  required
                />
              </div>

              <div>
                <label>Date Of Birth :</label>
                <br />
                <input
                  onChange={(e) => setDateOfBirth(e.target.value)}
                  type="date"
                  required
                />
              </div>

              <div>
                <label>Mobile Number :</label>
                <input
                  onChange={(e) => setMobileNumber(e.target.value)}
                  type="number"
                  required
                />
              </div>

              <div>
                <label>Select Year :</label> <br />
                <select onChange={(e) => setYear(e.target.value)} required>
                  <option>Select Year</option>
                  <option>First</option>
                  <option>Second</option>
                  <option>Third</option>
                  <option>Fourth</option>
                </select>
              </div>
              {!isAddStudentsLoading && (
                <input className="submitBtnAdmin" type="submit" />
              )}
              {isAddStudentsLoading && (
                <div className="submitBtnAdmin">
                  <img src="https://media.tenor.com/wpSo-8CrXqUAAAAi/loading-loading-forever.gif" />
                </div>
              )}
            </form>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="teal" mr={3} onClick={handleCloseModal}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      <div id="snackbar"></div>
    </>
  );
};

export default Sidebar;
