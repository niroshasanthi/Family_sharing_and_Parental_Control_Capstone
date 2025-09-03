import React from "react";
import { useNavigate } from "react-router-dom";
import "./WelcomePage.css";

export default function WelcomePage() {
  const navigate = useNavigate();

  return (
    <div className="welcome-bg">
      <div className="welcome-card">
        <h1>Parental Control</h1>
        <p>Choose your role to continue</p>
        <button
          className="welcome-btn"
          onClick={() => (window.location.href = "http://localhost:3007")}
        >
          I am a Child
        </button>
        <button
          className="welcome-btn"
          onClick={() => navigate("/parent")}
        >
          I am a Parent
        </button>
      </div>
    </div>
  );
}