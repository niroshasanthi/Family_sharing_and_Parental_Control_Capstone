import React, { useContext, useState } from 'react';
import ParentLoginForm from './ParentLoginForm';
import { AuthContext } from '../api/context/AuthContext';
import "./ParentLoginForm.css";

const ParentLogin = () => {
  const { setAuthUser } = useContext(AuthContext);
  const [message, setMessage] = useState(null);
  const [messageType, setMessageType] = useState(null);

  const handleLoginSuccess = (userData) => {
    setAuthUser(userData);
    setMessageType('success');
    setMessage('Login successful! Redirecting...');
    setTimeout(() => {
      window.location.href = 'http://localhost:3008';
    }, 1500);
  };

  const handleLoginError = () => {
    setMessageType('error');
    setMessage('Invalid email or password. Please try again.');
    setTimeout(() => {
      setMessage(null);
      setMessageType(null);
    }, 3000);
  };

  return (
    <div className="welcome-bg">
      <div className="welcome-card" style={{ maxWidth: 450 }}>
        {message && (
          <div
            className={`message ${messageType}`}
            style={{
              marginBottom: '1rem',
              padding: '10px',
              borderRadius: '5px',
              fontWeight: 'bold',
              textAlign: 'center',
            }}
          >
            {message}
          </div>
        )}
        <ParentLoginForm onLoginSuccess={handleLoginSuccess} onLoginError={handleLoginError} />
      </div>
    </div>
  );
};

export default ParentLogin;