import React, { useState } from "react";
import "./Home.css";

import {
  Box,
  Flex,
  Stack,
  Heading,
  Text,
  Container,
  Input,
  Button,
  SimpleGrid,
  Avatar,
  AvatarGroup,
  useBreakpointValue,
  IconProps,
  Icon,
} from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { useColorMode } from "@chakra-ui/react";
import Navbar from "../Components/Navbar";

const Home = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  let darkLightMode =
    colorMode == "dark" ? "class-name-dark" : "class-name-light";

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const payload = {
      email,
      password,
    };

    if (payload) {
    }
  };

  return (
    <div>
      <Navbar />
      <Box position={"relative"}>
        <Container
          as={SimpleGrid}
          maxW={"7xl"}
          columns={{ base: 1, md: 2 }}
          spacing={{ base: 10, lg: 32 }}
          py={{ base: 10, sm: 20, lg: 32 }}
        >
          <Stack spacing={{ base: 10, md: 20 }}>
            <Heading
              lineHeight={1.2}
              fontSize={{ base: "3xl", sm: "4xl", md: "5xl", lg: "6xl" }}
            >
              STUDENTS MANAGEMENT SYSTEM
              <Text
                as={"span"}
                bgGradient="linear(to-r, red.400,pink.400)"
                bgClip="text"
              ></Text>
            </Heading>
          </Stack>
          <Stack
            bgColor={colorMode == "dark" ? "#171923" : "#e9d7ff"}
            rounded={"xl"}
            p={{ base: 4, sm: 6, md: 8 }}
            spacing={{ base: 8 }}
            maxW={{ lg: "lg" }}
          >
            <Stack spacing={4}>
              <Heading
                lineHeight={1.1}
                fontSize={{ base: "2xl", sm: "3xl", md: "4xl" }}
              >
                Sign In
                <Text
                  ml="0.5rem"
                  as={"span"}
                  bgGradient="linear(to-r, red.400,pink.400)"
                  bgClip="text"
                >
                  !
                </Text>
              </Heading>
              <Text color={"gray.500"} fontSize={{ base: "sm", sm: "md" }}>
                Enter Admin Credentials to Get Started
              </Text>
            </Stack>
            <form onSubmit={handleSubmit}>
              <Stack spacing={4}>
                <input
                  type="email"
                  onChange={(e) => setEmail(e.target.value)}
                  className={darkLightMode}
                  placeholder="Enter Email Id"
                />
                <input
                  type="password"
                  onChange={(e) => setPassword(e.target.value)}
                  className={darkLightMode}
                  placeholder="Enter Password"
                />
              </Stack>
              <input className="submitBtnAdmin" type="submit" />
            </form>
          </Stack>
        </Container>
      </Box>
    </div>
  );
};

export default Home;
