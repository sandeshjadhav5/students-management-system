const express = require("express");

const { StudentModel } = require("../models/Students.model");

const studentRouter = express.Router();

//GET REQUEST - GET STUDENTS
studentRouter.get("/", async (req, res) => {
  try {
    const students = await StudentModel.find(req.body);
    res.send(students);
  } catch (err) {
    console.log("err is => ", err);
  }
});

//GET REQUEST - SINGLE STUDENT
studentRouter.get("/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const student = await StudentModel.findOne({ _id: id });
    console.log(student);
    res.send(student);
  } catch (err) {
    console.log(err);
  }
});

//POST REQUEST - ADD STUDENT
studentRouter.post("/addstudent", async (req, res) => {
  const payload = req.body;
  try {
    const newStudent = new StudentModel(payload);
    await newStudent.save();
    res.send({ msg: "Student Added Successfully" });
  } catch (err) {
    console.log(err);
    res.send({ msg: "Something Went Wrong" });
  }
});

//PATCH REQUEST - UPDATE STUDENT DATA
studentRouter.patch("/update/:id", async (req, res) => {
  const payload = req.body;
  const id = req.params.id;
  const student = await StudentModel.find({ _id: id });
  try {
    await StudentModel.findByIdAndUpdate({ _id: id }, payload);
    res.send("updated student information");
  } catch (err) {
    res.send({ msg: "Something Went Wrong" });
  }
});

//DELETE REQUEST - REMOVE STUDENT
studentRouter.delete("/delete/:id", async (req, res) => {
  const id = req.params.id;
  try {
    await StudentModel.findByIdAndDelete({ _id: id });
    res.send("Removed Student from Database");
  } catch (err) {
    console.log(err);
    res.send({ msg: "Something Went Wrong" });
  }
});

module.exports = {
  studentRouter,
};
