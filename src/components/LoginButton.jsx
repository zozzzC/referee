import React from "react";
import { CircleUserRound, LucideCircleUserRound } from "lucide-react"; 
import "./components-css/LoginButton.css"
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import { useEffect } from "react";


//TODO: move this somewhere else
async function checkIfUserLoggedIn() { 

    axios.defaults.withCredentials = true;

    console.log("user login check running")
    try { 
        //TODO: cookie is already saved but this request does not seem to send the cookie saved in browsser

        const user = await axios.get("http://localhost:8080/login/status", { withCredentials: true})
        console.log(user)
    } catch (err) { 
        console.log(err)
    }
}

const LoginButton = ({ user }) => {
    const navigate = useNavigate();
    const userLogin = useEffect(() => { 
        checkIfUserLoggedIn()
    }, [])
    return ( 
        <div className="login-icon">
            <button onClick={()=> navigate("/register")}>
                <CircleUserRound size={30}/>
            </button>
        </div>
     );
}
 
export default LoginButton;