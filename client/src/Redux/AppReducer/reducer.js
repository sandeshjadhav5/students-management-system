import * as types from "./actionTypes";

const initialState = {
  students: [],
  getStudentsLoading: false,
  getStudentsSuccess: false,
  getStudentsError: false,
  addStudentsLoading: false,
  addStudentsSuccess: false,
  addStudentsError: false,
};

const reducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case types.GET_STUDENTS:
      return { ...state, students: payload, getStudentsLoading: false };
    case types.GET_STUDENTS_REQUEST:
      return { ...state, getStudentsLoading: true };
    case types.GET_STUDENTS_SUCCESS:
      return { ...state, getStudentsSuccess: true, getStudentsLoading: false };
    case types.GET_STUDENTS_ERROR:
      return {
        ...state,
        getStudentsError: true,
        getStudentsLoading: false,
        getStudentsSuccess: false,
      };
    case types.ADD_STUDENTS:
      return {
        ...state,
        student: payload,
      };
    case types.ADD_STUDENTS_REQUEST:
      return {
        ...state,
        addStudentsLoading: true,
      };
    case types.ADD_STUDENTS_SUCCESS:
      return {
        ...state,
        addStudentsSuccess: true,
        addStudentsLoading: false,
        addStudentsError: false,
      };
    case types.ADD_STUDENTS_ERROR:
      return {
        ...state,
        addStudentsLoading: false,
        addStudentsSuccess: false,
        addStudentsError: true,
      };
    default:
      return state;
  }
};

export { reducer };
