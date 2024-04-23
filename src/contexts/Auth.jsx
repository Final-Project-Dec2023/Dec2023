import { useState, createContext, useContext, useEffect } from "react";

const AuthContext  = createContext();

// Provider functions
const AuthProvider = ({children})=>{
    const [auth, setAuth] = useState({
        user: null,
        token: "",
    })


    // axios config


    // retrieve the user from local storage
    useEffect(()=>{
        const data = localStorage.getItem("auth");
        if(data){
            const parsedData = JSON.parse(data);
            setAuth({...auth, user: parsedData.user, token: parsedData.user.token});
        }
    }, [])


    return (
        <AuthContext.Provider value={[auth, setAuth]}>
            {children}
        </AuthContext.Provider>
    )
}

// hook
const useAuth = () =>(AuthContext);

export { useAuth, AuthProvider};