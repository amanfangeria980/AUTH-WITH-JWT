const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const app = express();
const authRoutes = require("./Routes/AuthRoutes");
const cookieParser = require("cookie-parser");

app.use(
  cors({
    // origin: ["http://localhost:3000"],
    origin: ["mongodb+srv://root:root%40123@cluster0.ggxoapv.mongodb.net/"],
    method: ["GET", "POST"],
    credentials: true,
  })
);

app.use(cookieParser());
app.use(express.json());
app.use("/", authRoutes);
app.listen(4000, () => {
  console.log("Server started on Port 4000");
});

mongoose
  .connect("mongodb://127.0.0.1:27017/jwt", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("DB Connection Success!");
  })
  .catch((err) => {
    console.log(err.message);
  });
