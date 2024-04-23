import React, { useState } from 'react'
import '../css/Login.css';
import { ToastContainer, toast } from 'react-toastify';
import signinIcon from "../assets/icons/signinIcon.png"
import signin from "../assets/images/Signindan.png"
import { FaRegEye } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/Auth';



const Login = () => {
  // hooks/
  const [email, setEmail] = useState("gidi@email.com");
  const [password, setPassword] = useState("password");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false)

  const navigate = useNavigate()
  const { login } = useAuth();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  }
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
<<<<<<< HEAD:src/page/Login.jsx
    // const url = "https://fragrancehubbe.onrender.com/api/v1/auth/login"
=======
>>>>>>> 67844eebe0c55040019555630050f64ac44db47c:src/pages/Login.jsx

    if (!email || !password) {
      return toast.error("Enter all fields");
    }
    const emailRegex = /\S+@\S+\.\S+/;
    if(!emailRegex.test(email)){
      return toast.error("invalid email address"); 
    }
    const pwdTrim = password.trim();
    if(!password || pwdTrim.length < 6){
      return toast.error("Enter a valid password");
    }
    try {
      
<<<<<<< HEAD:src/page/Login.jsx
      setLoading(true);
    const { data } = await axios.post('/auth/login',{
      email,
      password,
    });

    // check for successful login
    if(!data?.error){
      toast.success("Login successful")
      setLoading(false);
      // save login data to local storage
      localStorage.setItem("auth", JSON.stringify(data));

      // clear the form input
      setEmail("");
      setPassword("");

      setTimeout(()=>{
          navigate("/")
      }, 5000)
    }else{
      toast.error("Login failed")
    }
=======
    //   setLoading(true);
    // const { data } = await axios.post( "/auth/login",{
    //   email,
    //   password,
    // });

    // // check for successful login
    // if(!data?.error){
    //   toast.success("Login successful")
    //   setLoading(false);
    //   // save login data to local storage
    //   localStorage.setItem("auth", JSON.stringify(data));

    //   // clear the form input
    //   setEmail("");
    //   setPassword("");

    //   setTimeout(()=>{
    //       navigate("/")
    //   }, 5000)
    // }else{
    //   toast.error("Login failed")
    // }
    setLoading(true);
      const success = await login(email, password);
      setLoading(false);

      if (success) {
        toast.success("Login successful");
        navigate("/");
      } else {
        toast.error("Login failed. Please check your credentials.");
      }
>>>>>>> 67844eebe0c55040019555630050f64ac44db47c:src/pages/Login.jsx
  } catch (err) {
    console.log(err);
    const { error } = err?.response?.data
    toast.error(error)
    setLoading(false)
  }
  };

  return (
          <div>
          <ToastContainer/>
          <div className="dan">
            
          <div className= "top-section">
          <img className='ww' src={signinIcon} alt="" />
          <h2><b>Welcome to FragranceHub</b></h2>
          
            
          <div className="middle-section">
          <p>Enter your details to access your account</p>
          </div>
          <form className='form-dan' onSubmit={handleSubmit}>

                  <div className="form-action">
                  <label>Email</label>
                    <input type="email" className='form-control'
                    placeholder="Enter your email" value= {email} onChange={handleEmailChange}
                    />

                  </div>
                  
                  <div className="form-action">
                  <label>Password </label>
                  <div className="password-input-wrapper">
                    <input type={showPassword ? "text" : "password"}
                    className='form-control'
                    placeholder="Enter your password" 
                    value={password} 
                    onChange={handlePasswordChange}
                />
                <span onClick={() => setShowPassword(!showPassword)}>
                  {showPassword ? (
                    <FaRegEye className="icon" />
                  ) : (
                    <FaRegEyeSlash className="icon" />
                  )}
                </span>
                  </div>
                  </div>
                  
                  
                </form>

              <div className='ddd'>
                <div className='yp'>
                  <input type="checkbox" />
                <h6>Remember me</h6>
                </div>
                
                <div>
                  <a href=""><p>Forgot Password?</p></a>
                </div>
                
              </div>

              <div className='black'>
              <button onClick={handleSubmit}>
              {loading ? (
                  <>
                  <span
                    className="spinner-border spinner-border-sm"
                    aria-hidden="true"
                  ></span>
                  <span role="status">Loading...</span>
                  </>
                ) :(
                  "Sign In"
                )}
              </button>
              </div>
              <div className='dat'>
                <div className='line1'></div>
                <span>
                &nbsp;&nbsp;
                or
                &nbsp;&nbsp;
              </span>
              <div className='line2'></div>
              </div>
              
                <div className='white'>
                <button>
                  {/* <img className='pic mx-2' src={img2}alt="" /> */}
                  <a href="https://www.google.com/">Continue with Google</a>
              
                </button>

                </div>
                <div className="dd">
                <p>New User? <a href="">Sign Up</a></p>
                </div>
                
                </div>
                <div className="right-side">
            <div className="logo ">
                  <img src={signin} alt="" />
              </div>
              </div>
            
            </div>
            
            </div>
        




          
        
        )
}

export default  Login