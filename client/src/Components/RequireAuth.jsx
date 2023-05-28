import React from "react";
import { useSelector } from "react-redux";
import { useToast } from "@chakra-ui/react";
import { Navigate } from "react-router-dom";

const RequireAuth = ({ children }) => {
  const isAuth = useSelector((state) => state.AuthReducer.isAuth);
  console.log("isAuth............>", isAuth);
  return (
    <>
      <Navigate to="/" />
    </>
  );
};

export default RequireAuth;
