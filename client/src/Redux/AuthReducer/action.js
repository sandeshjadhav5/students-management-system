import * as types from "./actionTypes";
import axios from "axios";

const userLoginReq = () => {
  return { type: types.LOGIN_USER_REQUEST };
};

const userLoginSuccess = () => {
  return { type: types.LOGIN_USER_SUCCESS };
};

const userLoginFailure = () => {
  return { type: types.LOGIN_USER_FAILURE };
};

const logoutUser = () => {
  localStorage.removeItem("token");
  localStorage.setItem("isAuth", JSON.stringify(false));
  return { type: types.LOGOUT_USER };
};

const loginFunction = (payload) => (dispatch) => {
  dispatch(userLoginReq());
  return axios
    .post(`https://long-gray-cougar-toga.cyclic.app/users/login`, payload)
    .then((res) => {
      console.log(res);
      // let token = res.data.token;
      if (res.data == "Login Successful") {
        localStorage.setItem("isAuth", JSON.stringify(true));
        let x = document.getElementById("snackbar");
        x.className = "show";
        x.innerText = res.data;
        x.style.backgroundColor = "green";
        setTimeout(function () {
          x.className = x.className.replace("show", "");
          dispatch(userLoginSuccess());
        }, 3000);
      } else if (res.data == "Enter Correct Details") {
        localStorage.setItem("isAuth", JSON.stringify(false));
        dispatch(userLoginFailure());
        let x = document.getElementById("snackbar");
        x.innerText = res.data;
        x.style.backgroundColor = "red";
        x.className = "show";
        setTimeout(function () {
          x.className = x.className.replace("show", "");
        }, 3000);
      } else if (res.data == "Wrong Credentials") {
        localStorage.setItem("isAuth", JSON.stringify(false));
        dispatch(userLoginFailure());
        let x = document.getElementById("snackbar");
        x.innerText = res.data;
        x.style.backgroundColor = "red";
        x.className = "show";
        setTimeout(function () {
          x.className = x.className.replace("show", "");
        }, 3000);
      }
    })
    .catch((err) => {
      console.log(err);
      localStorage.setItem("isAuth", JSON.stringify(false));
      let x = document.getElementById("snackbar");
      x.innerText = "Error Loggin In";
      x.style.backgroundColor = "#1A5276";
      x.className = "show";
      setTimeout(function () {
        x.className = x.className.replace("show", "");
      }, 3000);
      dispatch(userLoginFailure());
    });
};

export {
  userLoginReq,
  userLoginSuccess,
  userLoginFailure,
  loginFunction,
  logoutUser,
};
