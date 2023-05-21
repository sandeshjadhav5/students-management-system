import { useState } from "react";
import "./Sidebar.css";
import { Link } from "react-router-dom";
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
import { addStudents } from "../Redux/AppReducer/action";
import { useDispatch, useSelector } from "react-redux";
const Sidebar = ({ isOpen, variant, onClose }) => {
  const [isModalOpen, setIsOpen] = useState(false);
  const [name, setName] = useState("");
  const [registrationNumber, setRegistrationNumber] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [year, setYear] = useState("");
  const dispatch = useDispatch();

  const handleSubmitAddStudent = (e) => {
    e.preventDefault();
    const payload = {
      name,
      registrationNumber,
      dateOfBirth,
      mobileNumber,
      year,
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
          <Link to="/markattendance">
            <Button w="100%">Attendance</Button>
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
                <input onChange={(e) => setName(e.target.value)} type="text" />
              </div>
              <div>
                <label>Registration Number :</label>
                <input
                  onChange={(e) => setRegistrationNumber(e.target.value)}
                  type="text"
                />
              </div>

              <div>
                <label>Date Of Birth :</label>
                <br />
                <input
                  onChange={(e) => setDateOfBirth(e.target.value)}
                  type="date"
                />
              </div>

              <div>
                <label>Mobile Number :</label>
                <input
                  onChange={(e) => setMobileNumber(e.target.value)}
                  type="number"
                />
              </div>

              <div>
                <label>Select Year :</label> <br />
                <select onChange={(e) => setYear(e.target.value)}>
                  <option>Select Year</option>
                  <option>First</option>
                  <option>Second</option>
                  <option>Third</option>
                  <option>Fourth</option>
                </select>
              </div>
              <input type="submit" />
            </form>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="teal" mr={3} onClick={handleCloseModal}>
              Close
            </Button>
            {/* <Button variant="ghost">Submit</Button> */}
          </ModalFooter>
        </ModalContent>
      </Modal>
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
                  <Link to="/markattendance">
                    <Button w="100%">Attendance</Button>
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
                <input onChange={(e) => setName(e.target.value)} type="text" />
              </div>
              <div>
                <label>Registration Number :</label>
                <input
                  onChange={(e) => setRegistrationNumber(e.target.value)}
                  type="text"
                />
              </div>

              <div>
                <label>Date Of Birth :</label>
                <br />
                <input
                  onChange={(e) => setDateOfBirth(e.target.value)}
                  type="date"
                />
              </div>

              <div>
                <label>Mobile Number :</label>
                <input
                  onChange={(e) => setMobileNumber(e.target.value)}
                  type="number"
                />
              </div>

              <div>
                <label>Select Year :</label> <br />
                <select onChange={(e) => setYear(e.target.value)}>
                  <option>Select Year</option>
                  <option>First</option>
                  <option>Second</option>
                  <option>Third</option>
                  <option>Fourth</option>
                </select>
              </div>
            </form>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="teal" mr={3} onClick={handleCloseModal}>
              Close
            </Button>
            <Button variant="ghost">Submit</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default Sidebar;
