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
    type: Number,
    required: true,
  },
  dateOfBirth: {
    type: Date,
    default: Date.now,
  },
  mobileNumber: {
    type: Number,
    required: true,
  },
  year: {
    type: String,
    required: true,
  },
  subjects: [
    {
      name: {
        type: String,
        required: true,
      },
    },
  ],
  userID: String,
});

const StudentModel = mongoose.model("student", studentScehma);

module.exports = {
  StudentModel,
};
