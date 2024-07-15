import React from "react";
import { useRef } from "react";

//there should be a way of caching the setUser function between rerenders. 
export const useIsLoggedIn = async () => { 
    const user = useRef(null);

    try { 
        //TODO: change setUser to useRef so that we do not have to redo this process on every rerender?  
        const loggedIn = await axios.get("http://localhost:8080/user", { withCredentials: true });
        return user.current = loggedIn.data;
    } catch {
        return user.current = null;
    }
}
