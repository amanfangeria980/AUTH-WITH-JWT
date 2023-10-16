const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const app = express();
const authRoutes = require("./Routes/AuthRoutes");

app.use(
  cors({
    origin: ["http://localhost:3000"],
    method: ["GET", "POST"],
    credentials: true,
  })
);

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
