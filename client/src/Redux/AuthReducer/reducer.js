import * as types from "./actionTypes";

const initialState = {
  isAuth: false,
  isRegistered: false,
  isAuthLoading: false,
  isAuthFailure: false,
  isAdminLogin: false,
  token: "",
};

const reducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case types.LOGIN_USER_REQUEST:
      return { ...state, isAuthLoading: true };
    case types.LOGIN_USER_SUCCESS:
      return { ...state, isAuth: true, isAuthLoading: false };
    case types.LOGIN_USER_FAILURE:
      return {
        ...state,
        isAuthFailure: true,
        isAuthLoading: false,
        isAuth: false,
      };
    case types.LOGOUT_USER:
      return {
        ...state,
        isAuth: false,
        isAdminLogin: false,
      };
    default:
      return state;
  }
};

export { reducer };
