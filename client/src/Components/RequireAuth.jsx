import React from "react";
import { useSelector } from "react-redux";
import { useToast } from "@chakra-ui/react";
import { Navigate } from "react-router-dom";

const RequireAuth = ({ children }) => {
  const isAuth = JSON.parse(localStorage.getItem("isAuth")) || false;
  const toast = useToast();
  console.log("isAuth............>", isAuth);

  if (!isAuth) {
    toast({
      title: "Please Login First",
      status: "warning",
      duration: 5000,
      isClosable: true,
    });
  }

  return (
    <>
      <Navigate to="/dashboard" />
    </>
  );

  return children;
};

export default RequireAuth;
