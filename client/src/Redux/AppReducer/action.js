import * as types from "./actionTypes";

import axios from "axios";

const getStudents = () => {
  return { type: types.GET_STUDENTS };
};

const getStudentsRequest = () => {
  return { type: types.GET_STUDENTS_LOADING };
};

const getStudentsSuccess = () => {
  return { type: types.GET_STUDENTS_SUCCESS };
};

const getStudentsError = () => {
  return { type: types.GET_STUDENTS_ERROR };
};

export {
  getStudents,
  getStudentsError,
  getStudentsRequest,
  getStudentsSuccess,
};
