import * as types from "./actionTypes";
import axios from "axios";

const userLoginRequest = () => {
  return { type: types.USER_LOGIN_REQUEST };
};

const userLoginSuccess = () => {
  return { type: types.USER_LOGIN_SUCCESS };
};

const userLoginError = () => {
  return { type: types.USER_LOGIN_ERROR };
};

export { userLoginError, userLoginRequest, userLoginSuccess };
