import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ParentLogin from "./components/ParentLogin";
import { AuthProvider } from "./api/context/AuthContext";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ParentLogin />} />
          <Route path="/parent/login" element={<ParentLogin />} />
          {/* Add other routes here */}
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;