const UserModel = require("../Models/UserModel");
const jwt = require("jsonwebtoken");
const maxAge = 3 * 24 * 60 * 60;

const createToken = (id) => {
  return jwt.sign({ id }, "amanfang", {
    expiresIn: maxAge,
  });
};

module.export.register = async (req, res) => {};
module.export.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await UserModel.create({
      email,
      password,
    });
    const token = createToken(user._id);
    res.cookie("jwt", token, {
      withCredentials: true,
      httpOnly: false,
      maxAge: maxAge * 1000,
    });
    res.status(201).json({
      user: user._id,
      created: true,
    });
  } catch (err) {
    console.log(err.message);
  }
};
