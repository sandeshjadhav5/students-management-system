import * as types from "./actionTypes";
import axios from "axios";

const userLoginRequest = () => {
  return { type: types.USER_LOGIN_REQUEST };
};

const userLoginSuccess = (payload) => {
  return { type: types.USER_LOGIN_SUCCESS, payload };
};

const userLoginError = () => {
  return { type: types.USER_LOGIN_ERROR };
};

const userLoginFunction = (payload) => (dispatch) => {
  dispatch(userLoginRequest());
  return axios
    .post(`https://odd-tan-mackerel-wig.cyclic.app/users/login`, payload)
    .then((res) => {
      console.log(res);
      let token = res.data.token;
      if (token) {
        localStorage.setItem("token", JSON.stringify(res.data.token));
        let x = document.getElementById("snackbar");
        x.className = "show";
        x.innerText = res.data.msg;
        x.style.backgroundColor = "green";
        setTimeout(function () {
          x.className = x.className.replace("show", "");
          dispatch(userLoginSuccess());
        }, 3000);
      } else if (res.data == "Something Went Wrong") {
        dispatch(userLoginError());
        let x = document.getElementById("snackbar");
        x.innerText = res.data;
        x.style.backgroundColor = "red";
        x.className = "show";
        setTimeout(function () {
          x.className = x.className.replace("show", "");
        }, 3000);
      } else if (res.data == "Wrong Credentials") {
        dispatch(userLoginError());
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
      let x = document.getElementById("snackbar");
      x.innerText = "Error Loggin In";
      x.style.backgroundColor = "#1A5276";
      x.className = "show";
      setTimeout(function () {
        x.className = x.className.replace("show", "");
      }, 3000);
      dispatch(userLoginError());
    });
};
export {
  userLoginFunction,
  userLoginError,
  userLoginRequest,
  userLoginSuccess,
};
