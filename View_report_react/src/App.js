import React, { useState, useEffect } from "react";
import MembersList from "./components/MembersList";
import DailyUsageReport from "./components/DailyUsageReport";

function App() {
  const [selectedChildId, setSelectedChildId] = useState(null);
  const [selectedDate, setSelectedDate] = useState(
    new Date().toISOString().slice(0, 10)
  );
  const [showReport, setShowReport] = useState(false);

  useEffect(() => {
    // Show report automatically when both are selected
    if (selectedChildId && selectedDate) {
      setShowReport(true);
    } else {
      setShowReport(false);
    }
  }, [selectedChildId, selectedDate]);

  return (
    <div className="container mt-4" style={{ maxWidth: 700 }}>
      <h1 className="mb-4">VAS Parental Control - View Members & Reports</h1>

      <MembersList
        selectedChildId={selectedChildId}
        setSelectedChildId={setSelectedChildId}
      />

      <div className="mb-3">
        <label htmlFor="reportDate" className="form-label">
          Select Report Date:
        </label>
        <input
          type="date"
          id="reportDate"
          className="form-control"
          value={selectedDate}
          max={new Date().toISOString().slice(0, 10)}
          onChange={(e) => setSelectedDate(e.target.value)}
        />
      </div>

      {/* Remove the View Report button */}

      {showReport && <DailyUsageReport childId={selectedChildId} date={selectedDate} />}
    </div>
  );
}

export default App;