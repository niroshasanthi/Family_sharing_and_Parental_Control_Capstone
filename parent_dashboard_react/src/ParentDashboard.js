import React, { useState } from "react";
import "./ParentDashboard.css"; // CSS file assumed existing with your styles

const iframeStyle = {
  position: "absolute",
  top:"15px",
  left: "650px",
  width: "30%",
  height: "600px",
  border: "none",
  borderRadius: "12px",
};

export default function ParentDashboard() {
  const [activePage, setActivePage] = useState("home"); // "home", "add", "restrict", "view"

  return (
    <div className="flex h-screen font-sans">
      {/* Sidebar */}
      <div className="sidebar">
        <div className="sidebar-title">Parent Panel</div>
        <button
          onClick={() => setActivePage("home")}
          className={`menu-btn ${activePage === "home" ? "active" : ""}`}
        >
          Home
        </button>
        <button
          onClick={() => setActivePage("add")}
          className={`menu-btn ${activePage === "add" ? "active" : ""}`}
        >
          Add Members
        </button>
        <button
          onClick={() => setActivePage("restrict")}
          className={`menu-btn ${activePage === "restrict" ? "active" : ""}`}
        >
          Set Restrictions
        </button>
        <button
          onClick={() => setActivePage("view")}
          className={`menu-btn ${activePage === "view" ? "active" : ""}`}
        >
          View Reports
        </button>
        <button
          className="logout-btn"
          onClick={() => {
            window.location.href = "http://localhost:3000";
          }}
        >
          Logout
        </button>
      </div>

      {/* Main content */}
      <div className="main-content">
        {activePage === "home" && (
          <div className="center-box">
            <h2
              style={{ textAlign: "center", marginBottom: "24px", fontWeight: 700 }}
            >
              Available Apps
            </h2>
            <div className="apps-grid">
              <a
                href="https://www.netflix.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="app-card"
              >
                <div className="app-card">
                  <img src="./pics/netflix.jpeg" alt="Netflix" className="app-icon" />
                  <span>Netflix</span>
                </div>
              </a>
              <a
                href="https://www.youtube.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="app-card"
              >
                <div className="app-card">
                  <img src="./pics/youtube.jpeg" alt="YouTube" className="app-icon" />
                  <span>YouTube</span>
                </div>
              </a>
              <a
                href="https://www.youtubekids.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="app-card"
              >
                <div className="app-card">
                  <img
                    src="/pics/youtubekids.jpeg"
                    alt="YouTube Kids"
                    className="app-icon"
                  />
                  <span>YouTube Kids</span>
                </div>
              </a>
              <a
                href="https://www.king.com/game/candycrush/"
                target="_blank"
                rel="noopener noreferrer"
                className="app-card"
              >
                <div className="app-card">
                  <img src="/pics/candycrush.jpeg" alt="Candy Crush" className="app-icon" />
                  <span>Candy Crush</span>
                </div>
              </a>
              <a
                href="https://www.crazygames.com/t/racing"
                target="_blank"
                rel="noopener noreferrer"
                className="app-card"
              >
                <div className="app-card">
                  <img src="/pics/racecars.jpeg" alt="RacerR" className="app-icon" />
                  <span>RacerR</span>
                </div>
              </a>
              <a
                href="https://open.spotify.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="app-card"
              >
                <div className="app-card">
                  <img src="/pics/spotify.jpeg" alt="Spotify" className="app-icon" />
                  <span>Spotify</span>
                </div>
              </a>
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="app-card"
              >
                <div className="app-card">
                  <img src="/pics/instagram.jpeg" alt="Instagram" className="app-icon" />
                  <span>Instagram</span>
                </div>
              </a>
              <a
                href="https://www.hotstar.com/in/home"
                target="_blank"
                rel="noopener noreferrer"
                className="app-card"
              >
                <div className="app-card">
                  <img src="/pics/hotstar.jpeg" alt="Hotstar" className="app-icon" />
                  <span>Hotstar</span>
                </div>
              </a>
              <a
                href="https://www.udemy.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="app-card"
              >
                <div className="app-card">
                  <img src="/pics/udemy.jpeg" alt="Udemy" className="app-icon" />
                  <span>Udemy</span>
                </div>
              </a>
            </div>
          </div>
        )}

        {activePage === "add" && (
          <iframe title="Add Members" src="http://localhost:3004" style={iframeStyle} />
        )}
        {activePage === "restrict" && (
          <iframe title="Set Restrictions" src="http://localhost:3005" style={iframeStyle} />
        )}
        {activePage === "view" && (
          <iframe title="View Members & Reports" src="http://localhost:3006" style={iframeStyle} />
        )}
      </div>
    </div>
  );
}