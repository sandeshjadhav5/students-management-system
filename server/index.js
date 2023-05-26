const express = require("express");
const { connection } = require("./configs/db");
const { userRouter } = require("./routes/User.routes");
const { StudentModel } = require("./models/Students.model");
const { studentRouter } = require("./routes/Student.routes");
const { subjectRouter } = require("./routes/Subject.router");
const { attendanceRouter } = require("./routes/Attendance.routes");

require("dotenv").config();
const cors = require("cors");

const app = express();
app.use(express.json());

app.use(
  cors({
    origin: "*",
  })
);

app.get("/", (req, res) => {
  res.send("Welcome to Student Management System");
});

app.use("/users", userRouter);
app.use("/students", studentRouter);
app.use("/subjects", subjectRouter);
app.use("/attendance", attendanceRouter);

//GET STUDENTS BY YEAR
app.get("/year", async (req, res) => {
  console.log(req.query);
  try {
    const data = await StudentModel.find(req.query);
    res.send(data);
    console.log(data);
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: "Server error" });
  }
});

app.listen(process.env.port, async () => {
  try {
    await connection;
    console.log("Connected to DB");
  } catch (err) {
    console.log(err);
  }
  console.log(`listening at port : ${process.env.port}`);
});
