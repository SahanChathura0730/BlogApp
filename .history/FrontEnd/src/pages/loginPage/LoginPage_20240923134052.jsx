import { Link } from "react-router-dom";
import "./loginPage.css";
import { useContext, useRef } from "react";
import { Context } from "../../context/Context.js";
import axios from "axios";

export default function Login() {

  const userRef = useRef();
  const passwordRef = useRef(); 
  const {isFetching, dispatch} = useContext(Context)

  const handleSubmit =async (e) =>{
    e.preventDefault();
    dispatch({type: "LOGIN_START"})
    try{
      const res = await axios.post("api/auth/login", {
        username: userRef.current.value,
        password: passwordRef.current.value
      });
      dispatch({type:"LOGIN_SUCCESS", payload: res.data})
    }
    catch(err){
      dispatch({ type: "LOGIN_FAILURE" }) ;
    }
  }

  console.log(isFetching);
  return (
    <div className="login">
      <span className="loginTitle">Login</span>
      <form className="loginForm" onSubmit={handleSubmit}>
        <label>Username</label>
        <input className="loginInput" type="text" placeholder="Enter your username..." ref={userRef}/>
        <label>Password</label>
        <input className="loginInput" type="password" placeholder="Enter your password..." ref={passwordRef}/>
        <button className="loginButton" type="submit">Login</button>
      </form>
        <button className="loginRegisterButton">
          <Link to="/registerPage">Register</Link>
        </button>
    </div>
  );
}