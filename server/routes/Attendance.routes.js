const express = require("express");

const { AttendanceModel } = require("../models/Attendance.model");
const { StudentModel } = require("../models/Students.model");
const { Router } = require("express");
const LectureModel = require("../models/Lecture.model");
const SubjectModel = require("../models/Subject.models");
const { default: mongoose } = require("mongoose");
const attendanceRouter = express.Router();

// GET AVG ATTENDENCE BASED ON SUBJECTS
attendanceRouter.get("/records/subject",async(req,res)=>{
  try{
    let {sub} = req.query
    objTypesubId = new mongoose.Types.ObjectId(sub);
    let totalEnrolledStudents = await StudentModel.countDocuments({subjects:{$elemMatch:{$eq:sub}}})
    let data = await LectureModel.aggregate([
      {
        $match:{subject_id:objTypesubId}
      },
     { $project: {
      strength: { $size: '$present'}
    }}
    ],{lean:true}).exec()
    let totalStrength=0
    data.forEach((el)=>{
      totalStrength+=el.strength
    })
    let avg = Math.round((totalStrength/(totalEnrolledStudents*data.length))*100)
    let output = {enrolledStudents:totalEnrolledStudents,average_attendence:avg,lectures_count:data.length}
    res.send(output)
  }catch(err){
    console.log(err)
    res.status(400).send({message:"something went wrong",err})
  }
})

// GET AVG ATTENDENCE BASED ON YEAR
attendanceRouter.get("/records/year",async(req,res)=>{
  const {year} = req.query
  try{
    let totalEnrolledStudents = await StudentModel.countDocuments({year})
    let data = await LectureModel.aggregate([
      {
        $match:{year:year}
      },
     { $project: {
      strength: { $size: '$present'}
    }}
    ],{lean:true}).exec()
    let totalStrength=0
    data.forEach((el)=>{
      totalStrength+=el.strength
    })
    let avg = Math.round((totalStrength/(totalEnrolledStudents*data.length))*100)
    let output = {enrolledStudents:totalEnrolledStudents,average_attendence:avg,lectures_count:data.length}
    res.send(output)
  }catch(err){
    console.log(err)
    res.status(400).send({message:"something went wrong",err})
  }
})
// GET AVG ATTENDENCE BASED ON THEORY
attendanceRouter.get("/records/theory",async(req,res)=>{
  try{

  }catch(err){
    console.log(err)
    res.status(400).send({message:"something went wrong",err})
  }
})

// GET AVG ATTENDENCE BASED ON YEAR
attendanceRouter.get("/records/subject",async(req,res)=>{
  try{


  }catch(err){
    console.log(err)
    res.status(400).send({message:"something went wrong",err})
  }
})



// New Lecture and attendence of present student
attendanceRouter.post("/",async(req,res)=>{
  try{
    let newLecture = new LectureModel(req.body);
    let lecture = await newLecture.save()
    // storing the lecture id in subject model
    await SubjectModel.findByIdAndUpdate(lecture.subject_id,{$push:{lectures:lecture._id}})
    res.status(200).send({message:"Attendence Recorded Successfully"})
  }catch(err){
    res.status(400).send({message:"sometihng went wrong"})
  }
})

module.exports = {
  attendanceRouter,
};
