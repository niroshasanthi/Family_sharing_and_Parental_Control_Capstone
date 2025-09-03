import React, { useState } from "react";
import { getDailyUsageReports } from "../api/api";
import "./styles.css";

export default function DailyUsageReport({ childId, date }) {
  const [reports, setReports] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleFetchReports = async (e) => {
    e.preventDefault();

    if (!childId || !date) {
      setError("Child and Date are required");
      return;
    }

    setLoading(true);
    setError("");
    setReports([]);

    try {
      const res = await getDailyUsageReports(childId, date);
      setReports(res.data);
    } catch (err) {
      setError("Failed to load usage reports");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mt-4" style={{ maxWidth: "700px" }}>
      <h2>Daily Usage Report</h2>

      <form onSubmit={handleFetchReports} className="mb-4">
        <button
          type="submit"
          className="btn btn-primary"
          disabled={loading}
        >
          {loading ? "Loading..." : "Get Report"}
        </button>
      </form>

      {error && (
        <div className="alert alert-danger">{error}</div>
      )}

      {(!loading && reports.length === 0 && !error && date) && (
        <div className="alert alert-info">
          No reports found for the selected date.
        </div>
      )}

      {reports.length > 0 && (
        <table className="table table-bordered table-striped">
          <thead className="table-dark">
            <tr>
              <th>App Name</th>
              <th>Data Used</th>
              <th>Time Used</th>
              <th>Custom Rule</th>
            </tr>
          </thead>
          <tbody>
            {reports.map((report) => (
              <tr key={report.reportId || report.id}>
                <td>{report.appName || report.appsUsed || "N/A"}</td>
                <td>{report.dataUsed || "N/A"}</td>
                <td>{report.timeUsed || report.usageTime || "N/A"}</td>
                <td>{report.customRule || "-"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}