const express = require("express");
const { connection } = require("./configs/db");
const { userRouter } = require("./routes/User.routes");
const { studentRouter } = require("./routes/Student.routes");

require("dotenv").config();
const cors = require("cors");

const app = express();
app.use(express.json());

app.use(
  cors({
    origin: "*",
  })
);

app.get("/", (req, res) => {
  res.send("Welcome to Student Management System");
});

app.use("/users", userRouter);
app.use("/students", studentRouter);

app.listen(process.env.port, async () => {
  try {
    await connection;
    console.log("Connected to DB");
  } catch (err) {
    console.log(err);
  }
  console.log(`listening at port : ${process.env.port}`);
});
