import React from "react";

const MyProfile = ({ restrictions }) => {
  if (!restrictions) return <div>No restriction info found.</div>;

  return (
    <div style={{ margin: "40px auto", maxWidth: 400 }}>
      <div style={{ background: "#fff", borderRadius: 8, boxShadow: "0 0 10px #eee", padding: 32 }}>
        <h3>My Restrictions</h3>
        <div><strong>Bedtime:</strong> {restrictions.bedtime || "Not set"}</div>
        <div><strong>Daily Screen Limit:</strong> {restrictions.dailyLimit || "-"} Hours</div>
        <div><strong>Restricted Apps:</strong> {(restrictions.restrictedApps || []).join(', ') || "None"}</div>
      </div>
    </div>
  );
};

export default MyProfile;