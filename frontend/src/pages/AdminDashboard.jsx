import React from "react";
import "../css/admin.css";

export const AdminDashboard = () => {
  return (
    <div className="admin-container">
      <aside className="sidebar">
        <h2 className="logo">HR Admin</h2>
        <ul>
          <li>Dashboard</li>
          <li>Employees</li>
          <li>Attendance</li>
          <li>Leave Requests</li>
          <li>Payroll</li>
          <li>Settings</li>
        </ul>
      </aside>

      <main className="main-area">
        <h1 className="title">Welcome, HR Admin</h1>

        <div className="cards">
          <div className="card">Total Employees: 120</div>
          <div className="card">Active Attendance: 89</div>
          <div className="card">Pending Leave Requests: 12</div>
          <div className="card">Monthly Salary Processed: 84</div>
        </div>
      </main>
    </div>
  );
};
