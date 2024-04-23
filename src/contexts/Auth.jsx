import { useState, createContext, useContext, useEffect } from "react";
import axios from "axios";
import { Outlet, Navigate } from "react-router-dom";
// import { useAuth } from "../../contexts/Auth";


const AuthContext = createContext();

// Provider functions
const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({
    user: null,
    token: "",
  });

  // axios config
  axios.defaults.baseURL = import.meta.env.VITE_REACT_APP_API_URL;
  // axios.defaults.headers.common["Authorization"] = `Bearer ${auth?.token}`;

  // Update axios headers when auth changes
  useEffect(() => {
    axios.defaults.headers.common["Authorization"] = `Bearer ${auth?.token}`;
  }, [auth?.token]);

  // retrieve the user from local storage
  useEffect(() => {
    const data = localStorage.getItem("auth");
    if (data) {
      const parsedData = JSON.parse(data);
      setAuth({ ...auth, user: parsedData.user, token: parsedData.user.token });
    }
  }, []);

  const login = async (email, password) => {
    try {
      const { data } = await axios.post("/auth/login", {
        email,
        password,
      });

      if (!data?.error) {
        // Login successful
        setAuth({ user: data.user, token: data.user.token });
        localStorage.setItem("auth", JSON.stringify(data));
        return true;
      } else {
        // Login failed
        return false;
      }
    } catch (error) {
      console.error("Login error:", error.message);
      if (error?.response && error?.response?.data && error?.response?.data?.error) {
        throw new Error(error?.response?.data?.error); 
      } else {
        throw new Error("An error occurred while logging in");
      }
    }
  };

  // Signup function
  const signup = async (name, email, password) => {
    try {
      const { data } = await axios.post("/auth/register", {
        name,
        email,
        password,
      });

      if (!data.error) {
        setAuth({
          user: data?.user,
          token: data?.user?.token,
        });

        // Save signup data to local storage
        localStorage.setItem("auth", JSON.stringify(data));
      }

      return data;
    } catch (error) {
      console.error("Signup Error:", error.message);
      if (error?.response && error?.response?.data && error?.response?.data?.error) {
        throw new Error(error?.response?.data?.error); 
      } else {
        throw new Error("Failed to register");
      }
      // return { error: "Failed to register" };
    }
  };

  const logout = () => {
    // Clear auth data
    localStorage.removeItem("auth");
    setAuth({ user: null, token: "" });
  };

const PrivateRouter = () => {
   return auth?.token ? <Outlet/> : <Navigate to="/"/>
}


  // console.log(auth.user);

  return (
    <AuthContext.Provider value={{ auth, setAuth, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// hook
const useAuth = () => useContext(AuthContext);

export { useAuth, AuthProvider };



// import React from 'react'

// const PrivateRoute = () => {
// const {auth} = useAuth();



//   return auth.token ? <Outlet/> : <Navigate to="/"/>;
// }

// export default PrivateRoute