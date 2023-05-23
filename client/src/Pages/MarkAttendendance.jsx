import React from "react";
import Sidebar_Header from "../Components/Sidebar_Header";
import { useState } from "react";
import "../Pages/Home.css";

import { Link } from "react-router-dom";
import { Heading, Text, useToast } from "@chakra-ui/react";

import { addStudents, addStudentsSuccess } from "../Redux/AppReducer/action";
import { useDispatch, useSelector } from "react-redux";

const MarkAttendendance = () => {
  const [name, setName] = useState("");
  const [registrationNumber, setRegistrationNumber] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [mobileNumber, setMobileNumber] = useState();
  const [year, setYear] = useState("");
  const dispatch = useDispatch();

  const handleSubmitAddStudent = (e) => {
    e.preventDefault();
    console.log(typeof mobileNumber);
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
  return (
    <div>
      <Sidebar_Header />
      <div className="mainContent">
        <Text textAlign="left" fontSize="1.5rem" p="2" fontWeight="2rem">
          Create New Lecture
        </Text>
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
        </form>
      </div>
    </div>
  );
};

export default MarkAttendendance;
