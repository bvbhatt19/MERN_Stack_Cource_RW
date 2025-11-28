import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("", { name, email, pass })
      .then((result) => console.log(result))
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <center>
        <h1>SignUp </h1>
        <br />
        <form onSubmit={handleSubmit}>
          <div>
            <input
              type="text"
              placeholder="Enter Name "
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <br />
            <br />
            <input
              type="Enter Email"
              placeholder="Email "
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <br />
            <br />
            <input
              type="Enter Password"
              placeholder="Password "
              value={pass}
              onChange={(e) => setPass(e.target.value)}
            />
          </div>
          <br />
          <br />
          <button type="submit">Register </button>
          <br />
          <br />
          <a>Already Have an Account ? </a>
          <Link to="/login">Login</Link>
        </form>
      </center>
    </div>
  );
};
