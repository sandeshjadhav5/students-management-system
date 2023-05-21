import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./Login";
import Home from "./Home";
import MarkAttendance from "./MarkAttendance";

const MainRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Home />} />
        <Route path="/markattendance" element={<MarkAttendance />} />
      </Routes>
    </div>
  );
};

export default MainRoutes;
