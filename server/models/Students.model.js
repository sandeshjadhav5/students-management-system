const mongoose = require("mongoose");
const studentScehma = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  avatar: {
    type: String,
    default: "https://i.imgur.com/xYtIRH7.png",
  },
  registrationNumber: {
    type: String,
    required: true,
  },
  dateOfBirth: {
    type: Date,
  },
  mobileNumber: {
    type: Number,
    required: true,
  },
  year: {
    type: String,
    required: true,
  },
  subjects:[{type:mongoose.Schema.Types.ObjectId,ref:"subject"}],
  userID: String,
},{versionKey: false});

const StudentModel = mongoose.model("student", studentScehma);

module.exports = {
  StudentModel,
};
