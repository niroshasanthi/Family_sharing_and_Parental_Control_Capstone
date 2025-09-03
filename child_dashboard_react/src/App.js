import React, { useState } from "react";
import Login from "./components/Login";
import ChildDashboard from "./components/ChildDashBoard";

function App() {
  const [username, setUsername] = useState(null);

  return username ? (
    <ChildDashboard username={username} onLogout={() => setUsername(null)} />
  ) : (
    <Login onLogin={setUsername} />
  );
}

export default App;