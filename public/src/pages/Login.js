import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import axios from "axios";
const Login = () => {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const generateError = (err) => {
    toast.error(err, {
      position: "bottom-right",
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        "http://localhost:4000/login",
        {
          ...values,
        },
        {
          withCredentials: true,
        }
      );
      console.log(data);
      if (data) {
        if (data.errors) {
          const { email, password } = data.errors;
          if (email) generateError(email);
          else if (password) generateError(password);
        } else {
          navigate("/");
        }
      }
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <div className="container">
      <h2>Login Account</h2>
      <form onSubmit={(e) => handleSubmit(e)}>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            placeholder="Enter Email"
            onChange={(e) => {
              setValues({
                ...values,
                [e.target.name]: e.target.value,
              });
            }}
          />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            placeholder="Enter Password"
            onChange={(e) => {
              setValues({
                ...values,
                [e.target.name]: e.target.value,
              });
            }}
          />
        </div>
        <button type="submit">Submit</button>
        <span>
          New to app? <Link to={"/register"}>Register</Link>
        </span>
      </form>
      <ToastContainer />
    </div>
  );
};

export default Login;
