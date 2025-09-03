import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import WelcomePage from "./WelcomePage";
import ParentRolePage from "./ParentShell";


const ChildLoginPage = () => <div>Child Login Page (Child login form here)</div>;

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<WelcomePage />} />
      <Route path="/parent" element={<ParentRolePage />} />
      <Route path="/child-login" element={<ChildLoginPage />} />
    </Routes>
  </BrowserRouter>
);