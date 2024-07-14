import React from "react";
import { CircleUserRound, LucideCircleUserRound } from "lucide-react"; 
import "./components-css/LoginButton.css"
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import { useEffect } from "react";


//TODO: move this somewhere else
async function checkIfUserLoggedIn(props) { 
    axios.defaults.withCredentials = true;
    try { 
        const user = await axios.get("http://localhost:8080/user", { withCredentials: true})
        //TODO: redo this 
        
    } catch (err) { 
        console.log(err)
    }
}

const LoginButton = ({ user }) => {
    const navigate = useNavigate();
    const userLogin = useEffect(() => { 
        checkIfUserLoggedIn(navigate)
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