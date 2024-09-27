import { Link } from "react-router-dom"
import "./registerPage.css"
import { useState } from "react"
import axios from "axios";

export default function RegisterPage() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/api/auth/register", {
        username,
        email, 
        password,
      });
      console.log("Registration successful:", res.data);
      res.data && window.location.replace("/loginPage");
    } catch (error) {
      console.error("Error during registration:", error.response ? error.response.data : error.message);
    }
  };
  

    return (
        <div className="register">
      <span className="registerTitle">Register</span>
      <form className="registerForm" onSubmit={handleSubmit}>
        <label>Username</label>
        <input 
          className="registerInput" 
          type="text" 
          placeholder="Enter your username..."
          onChange={e=>setUsername(e.target.value)} />
        <label>Email</label>
        <input 
          className="registerInput" 
          type="text" 
          placeholder="Enter your email..."
          onChange={e=>setEmail(e.target.value)} />
        <label>Password</label>
        <input 
          className="registerInput" 
          type="password" 
          placeholder="Enter your password..."
          onChange={e=>setPassword(e.target.value)} />
        <button className="registerButton">Register</button>
      </form>
        <button className="registerLoginButton" type="submit">
          <Link to="/loginPage">Login</Link>
        </button>
    </div>
    )
}
