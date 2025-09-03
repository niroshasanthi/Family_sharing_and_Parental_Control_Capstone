import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const AuthContext = createContext({
  authUser: null,
  setAuthUser: () => {},
  fetchAuthUser: () => {},
});

export const AuthProvider = ({ children }) => {
  const [authUser, setAuthUser] = useState(null);

  const fetchAuthUser = async () => {
  try {
    const response = await axios.get('http://localhost:8081/api/parents/profile', 
      {withCredentials: true,}
    );
    console.log('Profile response:', response.data);  // Log success response
    if (response.status === 200) {
      setAuthUser(response.data);
    } else {
      setAuthUser(null);
    }
  } catch (error) {
    console.error('Error fetching profile:', error.response || error.message);  // Log error details
    setAuthUser(null);
  }
};


  useEffect(() => {
    fetchAuthUser();
  }, []);

  return (
    <AuthContext.Provider value={{ authUser, setAuthUser, fetchAuthUser }}>
      {children}
    </AuthContext.Provider>
  );
};