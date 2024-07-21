import React, { useMemo } from "react";
import { CircleUserRound, LucideCircleUserRound } from "lucide-react"; 
import "./components-css/LoginButton.css"
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import { useEffect, useState, useCallback } from "react";
import { useIsLoggedIn } from "../hooks/useIsLoggedIn";

const LoginButton = () => { 
    const [user, setUser] = useState(null);
    const nav = useNavigate();



    const checkUser = async () => { 
        try { 
            const loggedIn = await axios.get("http://localhost:8080/user", { withCredentials: true });
            setUser(loggedIn);
        } catch {
            setUser(null);
        }
    }

    //using useMemo now means that this function is only ran if user is changed, so if the value of user is not
    //changed between rerenders, then it will not run checkUser meaning that flickering is prevented
    const userChecked = useMemo(checkUser, user);

    // useEffect(() => {

    //     const checkUser = async () => { 
    //         try { 
    //             const loggedIn = await axios.get("http://localhost:8080/user", { withCredentials: true });
    //             setUser(loggedIn);
    //         } catch {
    //             setUser(null);
    //         }
    //     }

    //     checkUser();
    // }, [])

    //flickering reason: https://stackoverflow.com/questions/73675786/how-to-stop-react-application-from-flashing-on-every-refresh
    if (!user) { 
        return ( 
            <button onClick={()=> nav("/register")} className="login-icon" >
            <p className="sign-in">sign in</p> 
            </button>
        );
    }

    return ( 
        <button onClick={()=> nav("/register")} className="login-icon" >
        <CircleUserRound size={30}/>
        </button>
    ); 
    
}

export default LoginButton;