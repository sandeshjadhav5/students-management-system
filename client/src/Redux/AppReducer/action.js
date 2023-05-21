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
      console.log(res);
    })
    .catch((err) => {
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
