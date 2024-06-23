import React from "react";
import "../index.css";
import useWindowSize from "../hooks/useWindowResize.jsx";
import Mobile from "../components/Mobile.jsx";
import axios from "axios";
import Footer from "../components/Footer.jsx";
import { useRef } from "react";

const Login = () => {
  const email = useRef("");
  const username = useRef("");
  const password = useRef("");

  async function handleSubmit() { 
    try{ 
      const res = await axios.post(`http://localhost:8080/login`, { 
        email: email.current.value,
        password: password.current.value,
      })
      return res.data;
    } catch (err) { 
      alert(err.response.data)
    }

 }

  return (
    <>
      <div className="register-box">
        <h2>login</h2>
        <p>email</p>
        <input ref={email}></input>
        <p>password</p>
        <input ref={password}></input>
        <button onClick={handleSubmit}>submit</button>
      </div>

    </>
  );
};

export default Login;
