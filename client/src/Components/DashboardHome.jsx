import React, { useState, useEffect } from "react";
import { Box, Heading } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
ChartJS.register(ArcElement, Tooltip, Legend);

const DashboardHome = () => {
  const [studentsData, setStudentsData] = useState([]);
  const getStudents = () => {
    axios
      .get(`https://long-gray-cougar-toga.cyclic.app/students`)
      .then((res) => {
        console.log(res.data);
        setStudentsData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  let first = 0;
  let second = 0;
  let third = 0;
  let four = 0;
  let totalCount = 0;

  for (let i = 0; i < studentsData.length; i++) {
    if (studentsData[i].year == "First") {
      first++;
    } else if (studentsData[i].year == "Second") {
      second++;
    } else if (studentsData[i].year == "Third") {
      third++;
    } else if (studentsData[i].year == "Fourth") {
      four++;
    }
    totalCount++;
  }

  const data = {
    labels: ["First Year", "Second Year", "Third Year", "Fourth Year"],

    datasets: [
      {
        label: "Number of Students",
        data: [first, second, third, four],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  useEffect(() => {
    getStudents();
  }, []);
  return (
    <div className="mainContent">
      <Box m="auto" w={{ base: "90%", sm: "80%", md: "50%", lg: "40%" }}>
        <Doughnut data={data} />
      </Box>
      <Heading fontFamily="body" m="5">
        Total Students = {totalCount}
      </Heading>
    </div>
  );
};

export default DashboardHome;
