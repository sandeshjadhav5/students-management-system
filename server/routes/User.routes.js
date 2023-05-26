const express = require("express");

const { UserModel } = require("../models/User.model");

const bcrypt = require("bcrypt");

const jwt = require("jsonwebtoken");

const userRouter = express.Router();

//R E G I S T E R

userRouter.post("/register", async (req, res) => {
  const { name, email, password } = req.body;

  //H A S H I N G

  try {
    bcrypt.hash(password, 8, async (err, hashedPassword) => {
      if (err) {
        console.log(err);
      } else {
        const user = new UserModel({
          name,
          email,
          password: hashedPassword,
        });
        await user.save();

        res.send(`${name} , You are Successfully Registered`);
      }
    });
  } catch (err) {
    res.send("Error in Registration");
    console.log(err);
  }
});

//L O G I N
userRouter.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await UserModel.find({ email });

    if (user.length > 0) {
      const hashed_password = user[0].password;
      bcrypt.compare(password, hashed_password, (err, result) => {
        if (result) {
          const token = jwt.sign({ userID: user[0]._id }, process.env.key, {
            expiresIn: "1d",
          });
          console.log("login Success");
          res.send("Login Successful");
        } else {
          res.send("Wrong Credentials");
        }
      });
    } else {
      res.send("Enter Correct Details");
    }
  } catch (err) {
    console.log(err);
    res.send("Something Went Wrong");
  }
});

module.exports = {
  userRouter,
};
