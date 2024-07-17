import React from "react";
import { useRef } from "react";

export const useIsLoggedIn = async () => { 
    const user = useRef(null);
    try { 
        const loggedIn = await axios.get("http://localhost:8080/user", { withCredentials: true });
        user.current = loggedIn.data
        return user.current;
    } catch {
        return user.current;
    }
    //does changing this to useref even do anything lol
}
