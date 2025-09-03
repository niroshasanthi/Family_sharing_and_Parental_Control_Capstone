import React from "react";
import { useNavigate } from "react-router-dom";
import "./ParentShell.css";

export default function ParentShell() {
  const navigate = useNavigate();

  return (
    <div className="welcome-bg">
      <div className="parent-shell-container">
        <h2>Parent Portal</h2>
        <p>Please choose an option</p>

        <button
          className="parent-btn login-btn"
          onClick={() => (window.location.href = "http://localhost:3001")}
        >
          Login
        </button>

        <button
          className="parent-btn signup-btn"
          onClick={() => (window.location.href = "http://localhost:3002")}
        >
          Signup
        </button>

        <button
          className="parent-btn back-btn"
          onClick={() => navigate("/")}
        >
          Back
        </button>
      </div>
    </div>
  );
}