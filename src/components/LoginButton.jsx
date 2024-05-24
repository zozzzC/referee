import React from "react";
import { CircleUserRound, LucideCircleUserRound } from "lucide-react"; 
import "./components-css/LoginButton.css"
import { useNavigate } from "react-router-dom";

// toRegister('/register')

const LoginButton = () => {
    const navigate = useNavigate();
    return ( 
        <div className="login-icon">
            <button onClick={()=> navigate("/register")}>
                <CircleUserRound size={30}/>
            </button>
        </div>
     );
}
 
export default LoginButton;