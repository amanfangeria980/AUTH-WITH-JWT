const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const app = express();
const authRoutes = require("./Routes/AuthRoutes");
const cookieParser = require("cookie-parser");
const localURL="mongodb://127.0.0.1:27017/jwt";
const cloudURL="mongodb+srv://root:root%40123@cluster0.ggxoapv.mongodb.net/";
app.use(
  cors({
    origin: ["https://authjwtsite.netlify.app"],
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
  .connect(cloudURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("DB Connection Success!");
  })
  .catch((err) => {
    console.log(err.message);
  });
