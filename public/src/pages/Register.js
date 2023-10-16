import React, { useState } from "react";
import { Link } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import axios from "axios";
const Register = () => {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post("http://localhost:4000/register", {
        ...values,
      });
    } catch (err) {
      console.log(err.message);
    }
  };
  return (
    <div className="container">
      <h2>Register Account</h2>
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
          Already have an account? <Link to={"/login"}>Log In</Link>
        </span>
      </form>
      <ToastContainer />
    </div>
  );
};

export default Register;
