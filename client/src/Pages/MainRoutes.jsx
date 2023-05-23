import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./Login";
import Home from "./Home";
import Attendance from "./Attendance";
import MarkAttendendance from "./MarkAttendendance";

const MainRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Home />} />
        <Route path="/attendance" element={<Attendance />} />
        <Route path="/markattendance" element={<MarkAttendendance />} />
      </Routes>
    </div>
  );
};

export default MainRoutes;
