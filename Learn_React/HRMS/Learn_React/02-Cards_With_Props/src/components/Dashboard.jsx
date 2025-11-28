import React from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();
  const isAdmin = true;

  const handleAdminAccess = () => {
    if (isAdmin) {
      navigate("/dashboard/admin");
    } else {
      alert("Access Denied. You are not an admin.");
    }
  };

  return (
    <div>
      <h2>Dashboard</h2>
      <nav>
        <Link to="settings">Settings</Link> |{" "}
        <button onClick={handleAdminAccess}>Go to Admin</button>
      </nav>
      <Outlet />
    </div>
  );
}

export default Dashboard;
