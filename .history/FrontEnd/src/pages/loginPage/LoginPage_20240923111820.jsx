import { Link } from "react-router-dom";
import "./loginPage.css";

export default function Login() {
  return (
    <div className="login">
      <span className="loginTitle">Login</span>
      <form className="loginForm" onSubmit={handleSubmit}>
        <label>Username</label>
        <input className="loginInput" type="text" placeholder="Enter your username..." />
        <label>Password</label>
        <input className="loginInput" type="password" placeholder="Enter your password..." />
        <button className="loginButton" type="submit">Login</button>
      </form>
        <button className="loginRegisterButton">
          <Link to="/registerPage">Register</Link>
        </button>
    </div>
  );
}