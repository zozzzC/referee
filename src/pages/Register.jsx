import React from "react";
import "../index.css";
import useWindowSize from "../hooks/useWindowResize.jsx";
import Mobile from "../components/Mobile.jsx";
import axios from "axios";
import Footer from "../components/Footer.jsx";
import { useRef } from "react";

const Register = () => {
  const email = useRef("");
  const username = useRef("");
  const password = useRef("");

  async function handleSubmit() { 
    const res = await axios.post(`http://localhost:8080/register`, { 
      username: username.current.value,
      password: password.current.value,
      email: email.current.value 
    })
    console.log(res)
  }

  return (
    <>
      <div className="register-box">
        <h2>register</h2>
        <p>email</p>
        <input ref={email}></input>
        <p>username</p>
        <input ref={username}></input>
        <p>password</p>
        <input ref={password}></input>
        <button onClick={handleSubmit}>submit</button>
      </div>

    </>
  );
};

export default Register;
