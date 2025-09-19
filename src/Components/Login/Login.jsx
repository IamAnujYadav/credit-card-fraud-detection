import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

import email from "../../Assets/email-icon.png";
import password from "../../Assets/passowrd-icon.png";
import user from "../../Assets/user-icon.png";

const Login = ({ setIsLoggedIn }) => {
  const [action, setAction] = useState("Sign Up");
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  // 📝 Handle input change
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // 🚀 Just simulate login/signup (no localStorage, no backend)
  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage("");

    if (action === "Sign Up") {
      setMessage("Signup successful! Please login.");
      setAction("Login");
      setForm({ name: "", email: "", password: "" });
    } else {
      if (form.email && form.password) {
        setMessage("Login successful!");
        setIsLoggedIn(true);
        navigate("/transaction", { replace: true });
      } else {
        setMessage("Invalid credentials!");
      }
    }
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <div className="login-title">{action}</div>
        <div className="login-underline"></div>

        <div className="login-inputs">
          {action === "Sign Up" && (
            <div className="login-input-group">
              <img src={user} alt="user" width="20px" />
              <input
                className="login-input"
                type="text"
                name="name"
                placeholder="Name"
                value={form.name}
                onChange={handleChange}
                required
              />
            </div>
          )}

          <div className="login-input-group">
            <img src={email} alt="email" width="20px" />
            <input
              className="login-input"
              type="email"
              name="email"
              placeholder="Email ID"
              value={form.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="login-input-group">
            <img src={password} alt="password" width="20px" />
            <input
              className="login-input"
              type="password"
              name="password"
              placeholder="Password"
              value={form.password}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        {action === "Login" && (
          <div className="login-forget">
            Lost Password? <span>Click here!</span>
          </div>
        )}

        {message && <p className="login-message">{message}</p>}

        <div className="login-submit-container">
          <div
            className={action === "Login" ? "login-submit" : "login-submit gray"}
            onClick={() => setAction("Sign Up")}
          >
            Sign Up
          </div>
          <div
            className={action === "Sign Up" ? "login-submit" : "login-submit gray"}
            onClick={() => setAction("Login")}
          >
            Login
          </div>
        </div>

        <button className="login-button" type="submit">
          {action}
        </button>
      </form>
    </div>
  );
};

export default Login;
