import { useState, createContext, useContext, useEffect } from "react";
import axios from "axios";

const AuthContext = createContext();

// Provider functions
const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({
    user: null,
    token: "",
  });

  // axios config
  axios.defaults.baseURL = import.meta.env.VITE_REACT_APP_API_URL;
  axios.defaults.headers.common["Authorization"] = `Bearer ${auth?.user?.token}`;

  // retrieve the user from local storage
  useEffect(() => {
    const data = localStorage.getItem("auth");
    if (data) {
      const parsedData = JSON.parse(data);
      setAuth({ ...auth, user: parsedData.user, token: parsedData.user.token });
    }
  }, []);

  // console.log(auth.user);

  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

// hook
const useAuth = () => useContext(AuthContext);

export { useAuth, AuthProvider };