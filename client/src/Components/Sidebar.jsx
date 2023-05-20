import { useState } from "react";
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
            <form>
              <label>
                Name :
                <input type="text" />
              </label>
              <br />
              <label>
                Registration Number :
                <input type="text" />
              </label>
              <br />
              <label>
                Date Of Birth :
                <input type="date" />
              </label>
              <br />
              <label>
                Mobile Number :
                <input type="number" />
              </label>
              <br />
              <label>
                Select Year :
                <select>
                  <option>First</option>
                  <option>Second</option>
                  <option>Third</option>
                  <option>Fourth</option>
                </select>
              </label>
              <br />
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
      {" "}
      <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
        <DrawerOverlay>
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>Chakra-UI</DrawerHeader>
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
            <form>
              <label>
                Name :
                <input type="text" />
              </label>
              <br />
              <label>
                Registration Number :
                <input type="text" />
              </label>
              <br />
              <label>
                Date Of Birth :
                <input type="date" />
              </label>
              <br />
              <label>
                Mobile Number :
                <input type="number" />
              </label>
              <br />
              <label>
                Select Year :
                <select>
                  <option>First</option>
                  <option>Second</option>
                  <option>Third</option>
                  <option>Fourth</option>
                </select>
              </label>
              <br />
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
