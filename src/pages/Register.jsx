import React from "react";
import "../index.css";
import axios from "axios";
import { useRef } from "react";
import styles from "./styles/Register.module.css"



const Register = () => {
  const email = useRef("");
  const username = useRef("");
  const password = useRef("");

  async function handleSubmit() { 
    axios.defaults.withCredentials = true;

    
    try{ 
      const res = await axios.post(`http://localhost:8080/register`, { 
        username: username.current.value,
        password: password.current.value,
        email: email.current.value 
      }, {withCredentials: true})
      return res.data;
    } catch (err) { 
      alert(err.response.data)
    }

 }

  return (
    <>
      <div className={styles.outside}>
        <div className={styles.registerBox}>

          <h2>register</h2>
          <div className={styles.registerBoxItems}>
            <p>email</p>
            <input ref={email}></input>
          </div>
          <div className={styles.registerBoxItems}>
            <p>username</p>
            <input ref={username}></input>
          </div>
          <div className={styles.registerBoxItems}>
          <p>password</p>
            <input ref={password}></input>
          </div>
          <div className={styles.registerBoxItems}>
          <button onClick={handleSubmit}>submit</button>
          </div>
        </div>
        
      </div>

    </>
  );
};

export default Register;
