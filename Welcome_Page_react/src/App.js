// App.js
import React from "react";
import { BrowserRouter, Routes, Route, useNavigate, Navigate } from "react-router-dom";

// Welcome page component (your updated code)
const WelcomePage = () => {
  const navigate = useNavigate();

  const handleParentClick = () => {
    navigate("/parent"); // Internal shell page for parent
  };

  const handleChildClick = () => {
    navigate("/child-login"); // Child login page route to redirect externally
  };

  return (
    <div
      style={{
        maxWidth: 400,
        margin: "100px auto",
        padding: 20,
        border: "1px solid #ccc",
        borderRadius: 8,
        fontFamily: "Arial, sans-serif",
        textAlign: "center",
      }}
    >
      <h1>Parental Control</h1>
      <p style={{ marginBottom: 30 }}>Choose your role to continue</p>

      <button
        onClick={handleParentClick}
        style={{
          display: "block",
          margin: "10px auto",
          padding: "12px 20px",
          fontSize: 16,
          cursor: "pointer",
          width: "80%",
          borderRadius: 5,
        }}
      >
        I am a Parent
      </button>

      <button
        onClick={handleChildClick}
        style={{
          display: "block",
          margin: "10px auto",
          padding: "12px 20px",
          fontSize: 16,
          cursor: "pointer",
          width: "80%",
          borderRadius: 5,
        }}
      >
        I am a Child
      </button>
    </div>
  );
};

// Internal Parent role shell page with Login/Signup/Back buttons
const ParentRoleShell = () => {
  const navigate = useNavigate();

  const goToLogin = () => {
    window.location.href = "http://localhost:3001"; // Parent Login FE URL
  };

  const goToSignup = () => {
    window.location.href = "http://localhost:3002"; // Parent Signup FE URL
  };

  const goBack = () => {
    navigate("/");
  };

  return (
    <div
      style={{
        maxWidth: 320,
        margin: "50px auto",
        textAlign: "center",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <h2>Parent Portal</h2>
      <p>Please choose an option</p>

      <button
        style={{
          display: "block",
          margin: "15px auto",
          padding: "12px 20px",
          fontSize: 18,
          cursor: "pointer",
          width: "80%",
          borderRadius: 5,
        }}
        onClick={goToLogin}
      >
        Login
      </button>

      <button
        style={{
          display: "block",
          margin: "15px auto",
          padding: "12px 20px",
          fontSize: 18,
          cursor: "pointer",
          width: "80%",
          borderRadius: 5,
          backgroundColor: "#4CAF50",
          color: "white",
          border: "none",
        }}
        onClick={goToSignup}
      >
        Signup
      </button>

      <button
        style={{
          display: "block",
          margin: "25px auto",
          padding: "12px 20px",
          fontSize: 16,
          cursor: "pointer",
          width: "80%",
          borderRadius: 5,
          backgroundColor: "#ccc",
        }}
        onClick={goBack}
      >
        Back
      </button>
    </div>
  );
};

// Component to redirect child login directly
const ChildLoginRedirect = () => {
  React.useEffect(() => {
    window.location.href = "http://localhost:3003"; // Child Login FE URL
  }, []);
  return null;
};

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/parent" element={<ParentRoleShell />} />
        <Route path="/child-login" element={<ChildLoginRedirect />} />
        {/* Redirect invalid routes to home */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;