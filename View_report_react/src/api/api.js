// src/api.js
import axios from "axios";

// ----------------------
// Restrictions API (Children related)
// ----------------------
const restrictionApi = axios.create({
  baseURL: "http://localhost:8085/api/restrictions",
  headers: { "Content-Type": "application/json" },
  withCredentials: true, // 🔑 carry JSESSIONID cookie
});

// Get children for authenticated parent
export const getMyChildren = () => restrictionApi.get("/my-children");

// ----------------------
// Reports API
// ----------------------
const reportApi = axios.create({
  baseURL: "http://localhost:8086/api/reports",
  headers: { "Content-Type": "application/json" },
  withCredentials: true, // 🔑 important, so session cookie is used here too
});

// Get daily usage reports for a specific child on a specific date
export const getDailyUsageReports = (childId, date) =>
  reportApi.get(`/${childId}`, { params: { date } });