const express = require("express");

const { StudentModel } = require("../models/Students.model");
const { default: mongoose } = require("mongoose");

const studentRouter = express.Router();

//GET REQUEST - GET STUDENTS
studentRouter.get("/", async (req, res) => {
  const {year, subject} = req.query;
  sub = new mongoose.Types.ObjectId(subject)
  try {
    if(year&&sub){
      const students = await StudentModel.find({subjects:{$elemMatch:{$eq:sub}},year:year});
      res.send(students);
    }else{
      const students = await StudentModel.find();
      res.send(students);
    }
  } catch (err) {
   res.status(400).send(err)
  }
});

//GET REQUEST - SINGLE STUDENT ALL DATA
studentRouter.get("/:id", async (req, res) => {
  const id = req.params.id;
  try {
    let data = await StudentModel.findById(id)
      .populate({
        path: "subjects",
        populate: { path: "lectures", select: "-absent" },
      })
      .lean()
      .exec();
    data.subjects.forEach((el) => {
      let count = 0;
      el.lectures.forEach((e) => {
        if (e.present.includes(id)) {
          count++;
        }
      });
      let avg = Math.round((count / el.lectures.length) * 100);
      el["attendence_percentage"] = avg;
    });
    res.status(200).send({ ...data });
  } catch (err) {
    res.status(400).send("No Student was found", err);
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
  try {
    await StudentModel.findByIdAndUpdate(id, payload);
    res.send("updated student information");
  } catch (err) {
    console.log(err);
    res.status(400).send({ msg: "Something Went Wrong" });
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
