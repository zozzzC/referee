import React from "react";
import { CircleUserRound, LucideCircleUserRound } from "lucide-react"; 
import "./components-css/LoginButton.css"
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import { useEffect, useState, useCallback } from "react";
import { useIsLoggedIn } from "../hooks/useIsLoggedIn";

const LoginButton = () => { 
    const [user, setUser] = useState(null);
    const nav = useNavigate();

    useEffect(() => {



        const checkUser = async () => { 
            try { 
                const loggedIn = await axios.get("http://localhost:8080/user", { withCredentials: true });
                setUser(loggedIn.data);
            } catch {
                setUser(null);
            }
        }

        checkUser();
    }, [])


    if (!user) { 
        return ( 
            <button onClick={()=> nav("/register")} className="login-icon" >
            <CircleUserRound size={30}/>
            </button>
        );
    }

    return(
        <p>logged in</p>
    );
    
}

export default LoginButton;