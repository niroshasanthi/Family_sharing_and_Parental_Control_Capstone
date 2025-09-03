import React, { useState } from "react";
import apiClient from "../api/api";
import "./ChildLogin.css";

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    try {
      const res = await apiClient.post("/auth/login", { username, password });
      onLogin(res.data);
    } catch (err) {
      setError("Invalid username or password");
    }
  };

  return (
    <div className="child-login-bg">
      <form className="child-login-card" onSubmit={handleSubmit}>
        <h2>Child Login</h2>
        {error && <div className="login-error">{error}</div>}
        <input
          className="login-input"
          type="text"
          required
          placeholder="Username"
          value={username}
          onChange={e => setUsername(e.target.value)}
        />
        <input
          className="login-input"
          type="password"
          required
          placeholder="Password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        <button className="login-btn" type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;