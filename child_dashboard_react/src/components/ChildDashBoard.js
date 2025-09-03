import React, { useEffect, useState } from "react";
import apiClient from "../api/api";
import "./ChildDashBoard.css";

// Api helpers
const fetchApps = (username) =>
  apiClient
    .get(`/child-dashboard/dashboard/apps?username=${encodeURIComponent(username)}`)
    .then(res => res.data);

const fetchRestrictions = (username) =>
  apiClient
    .get(`/child-dashboard/restrictions?username=${encodeURIComponent(username)}`)
    .then(res => res.data);

const ChildDashboard = ({ username, onLogout }) => {
  const [view, setView] = useState("dashboard");
  const [apps, setApps] = useState([]);
  const [restrictions, setRestrictions] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    setError(null);
    fetchApps(username).then(setApps).catch(() => setError("Failed to load apps"));
    fetchRestrictions(username).then(setRestrictions).catch(() => setError("Failed to load restrictions"));
  }, [username]);

  return (
    <div className="child-dashboard-bg">
      <div className="child-dashboard-main-card">
        <header className="dashboard-header">
          <nav>
            <button className={`dashboard-nav-btn${view === "dashboard" ? " active" : ""}`} disabled={view === "dashboard"} onClick={() => setView("dashboard")}>Dashboard</button>
            <button className={`dashboard-nav-btn${view === "profile" ? " active" : ""}`} disabled={view === "profile"} onClick={() => setView("profile")}>My Profile</button>
          </nav>
          <button className="logout-btn" onClick={()=>{window.location.href="http://localhost:3000"}}
        >Logout</button>
        </header>
        {error && <div className="dashboard-error">{error}</div>}
        {view === "dashboard" && (
          <div>
            <h2 className="card-title">Available Apps</h2>
            <div className="apps-container">
              {apps.length === 0 ? (
                <p className="apps-empty-text">No apps available.</p>
              ) : (
                apps.map(app => (
                  <div key={app.name} className={`app-card${app.restricted ? " restricted" : ""}`}>
                    <span>{app.name}</span>
                    {app.restricted && <span className="app-restricted-tag">Restricted</span>}
                  </div>
                ))
              )}
            </div>
          </div>
        )}
        {view === "profile" && (
          <div>
            <h2 className="card-title">My Restrictions</h2>
            {restrictions.length === 0 ? (
              <p className="apps-empty-text">No restrictions set.</p>
            ) : (
              <ul className="restrictions-list">
                {restrictions.map(r => (
                  <li key={r.id} className="restriction-item">
                    <strong>{r.appName}</strong><br />
                    Time Limit: {r.timeLimit || "-"}<br />
                    Data Limit: {r.dataLimit || "-"}<br />
                    Custom Rule: {r.customRule || "-"}
                  </li>
                ))}
              </ul>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default ChildDashboard;