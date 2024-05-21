import React from "react";
import "../index.css";
import useWindowSize from "../hooks/useWindowResize.jsx";
import Mobile from "../components/Mobile.jsx";
import axios from "axios";

const Register = () => {
  return (
    <>
      <div className="register-box">
        <h2>register</h2>
        <p>username</p>
        <input></input>
        <p>password</p>
        <input></input>
        <button>submit</button>
      </div>
    </>
  );
};

export default Register;
