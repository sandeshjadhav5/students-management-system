import * as types from "./actionTypes";

import axios from "axios";

const getStudents = (payload) => {
  return { type: types.GET_STUDENTS, payload };
};

const getStudentsRequest = () => {
  return { type: types.GET_STUDENTS_REQUEST };
};

const getStudentsSuccess = () => {
  return { type: types.GET_STUDENTS_SUCCESS };
};

const getStudentsError = () => {
  return { type: types.GET_STUDENTS_ERROR };
};

const addStudentsRequest = () => {
  return { type: types.ADD_STUDENTS_REQUEST };
};

const addStudentsSuccess = () => {
  return { type: types.ADD_STUDENTS_SUCCESS };
};

const addStudentsError = () => {
  return { type: types.ADD_STUDENTS_ERROR };
};

const addStudents = (payload) => (dispatch) => {
  dispatch(addStudentsRequest());
  return axios
    .post(
      `https://long-gray-cougar-toga.cyclic.app/students/addstudent`,
      payload
    )
    .then((res) => {
      console.log(res.data.msg);
      if (res.data.msg == "Student Added Successfully") {
        let x = document.getElementById("snackbar");
        x.className = "show";
        x.innerText = res.data.msg;
        x.style.backgroundColor = "#48BB78";
        setTimeout(function () {
          x.className = x.className.replace("show", "");
          dispatch(addStudentsSuccess());
        }, 3000);
      } else if (res.data.msg == "Something Went Wrong") {
        let x = document.getElementById("snackbar");
        x.innerText = res.data.msg;
        x.style.backgroundColor = "red";
        x.style.position = "fixed";

        x.className = "show";
        setTimeout(function () {
          x.className = x.className.replace("show", "");
          dispatch(addStudentsError());
        }, 3000);
      }
    })
    .catch((err) => {
      dispatch(addStudentsError());
      console.log(err);
    });
};

export {
  getStudents,
  getStudentsError,
  getStudentsRequest,
  getStudentsSuccess,
  addStudents,
  addStudentsError,
  addStudentsRequest,
  addStudentsSuccess,
};
