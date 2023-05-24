import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./Login";
import Home from "./Home";
import Attendance from "./Attendance";
import MarkAttendendance from "./MarkAttendendance";
import SingleStudent from "./SingleStudent";
import Records from "./Records";

const MainRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Home />} />
        <Route path="/attendance" element={<Attendance />} />
        <Route path="/markattendance" element={<MarkAttendendance />} />
        <Route path="/attendance/:id" element={<SingleStudent />} />
        <Route path="/records" element={<Records />} />
      </Routes>
    </div>
  );
};

export default MainRoutes;
