import React, { useState } from "react";
import { Link } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
const Login = () => {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
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
