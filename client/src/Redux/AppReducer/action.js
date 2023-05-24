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

const addLectureRequest = ()=>{
  return {type:types.ADD_LECTURE_REQUEST}
}
const addLecturesuccess = ()=>{
  return {type:types.ADD_LECTURE_SUCCESS}
}
const addLecturfailure = ()=>{
  return {type:types.ADD_LECTURE_ERROR}
}

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
      setTimeout(function () {
        dispatch(addStudentsError());
      }, 1000);
        dispatch(addStudentsSuccess());
      } else if (res.data.msg == "Something Went Wrong") {
        let x = document.getElementById("snackbar");
        x.innerText = res.data.msg;
        x.style.backgroundColor = "red";
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

const addLecture = (payload) => async(dispatch)=>{
  try{
    dispatch(addLectureRequest());
    let res = await axios.post(`https://long-gray-cougar-toga.cyclic.app/attendance`,payload)
    console.log(res)
    dispatch(addLecturesuccess())
  }catch(err){
    dispatch(addLecturfailure())
  }
}




export {
  getStudents,
  getStudentsError,
  getStudentsRequest,
  getStudentsSuccess,
  addStudents,
  addStudentsError,
  addStudentsRequest,
  addStudentsSuccess,

  addLecture,
  addLectureRequest,
  addLecturesuccess,
  addLecturfailure
};
