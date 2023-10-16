import React from "react";
import { Link } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
const Register = () => {
  return (
    <div className="container">
      <h2>Register Account</h2>
      <form>
        <div>
          <label htmlFor="email">Email</label>
          <input type="email" name="email" placeholder="Enter Email" />
          <label htmlFor="password">Password</label>
          <input type="password" name="password" placeholder="Enter Password" />
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
