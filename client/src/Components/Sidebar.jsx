import { useState } from "react";
import "./Sidebar.css";
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

const Sidebar = ({ isOpen, variant, onClose }) => {
  const [isModalOpen, setIsOpen] = useState(false);
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
      bg="#EBF8FF"
    >
      <VStack onClick={onClose}>
        <Heading as="h3" size="lg" pt="2" pb="2">
          SGGSIE&T{" "}
        </Heading>
        <Button w="100%">Home</Button>
        <Button onClick={handleOpenModal} w="100%">
          Add Student
        </Button>
        <Button w="100%">Contact</Button>
      </VStack>

      <Modal isOpen={isModalOpen} onClose={handleCloseModal} size="xl">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add Student to Database</ModalHeader>
          <ModalBody>
            <form className="modalForm">
              <div>
                <label>Name of Student:</label>
                <input type="text" />
              </div>
              <div>
                <label>Registration Number :</label>
                <input type="text" />
              </div>

              <div>
                <label>Date Of Birth :</label>
                <br />
                <input type="date" />
              </div>

              <div>
                <label>Mobile Number :</label>
                <input type="number" />
              </div>

              <div>
                <label>Select Year :</label> <br />
                <select>
                  <option>First</option>
                  <option>Second</option>
                  <option>Third</option>
                  <option>Fourth</option>
                </select>
              </div>
            </form>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={handleCloseModal}>
              Close
            </Button>
            <Button variant="ghost">Submit</Button>
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
                <Button w="100%">Home</Button>
                <Button onClick={handleOpenModal} w="100%">
                  Add Student
                </Button>
                <Button w="100%">Contact</Button>
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
            <form className="modalForm">
              <div>
                <label>Name of Student:</label>
                <input type="text" />
              </div>
              <div>
                <label>Registration Number :</label>
                <input type="text" />
              </div>

              <div>
                <label>Date Of Birth :</label>
                <br />
                <input type="date" />
              </div>

              <div>
                <label>Mobile Number :</label>
                <input type="number" />
              </div>

              <div>
                <label>Select Year :</label> <br />
                <select>
                  <option>First</option>
                  <option>Second</option>
                  <option>Third</option>
                  <option>Fourth</option>
                </select>
              </div>
            </form>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={handleCloseModal}>
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
