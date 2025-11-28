import React, { useState } from "react";
import Login from "./Login";
import SuperAdminDashboard from "./SuperAdminDashboard";
import AdminDashboard from "./AdminDashboard";
import UserDashboard from "./UserDashboard";

function App() {
  const [role, setRole] = useState(localStorage.getItem("role") || "");

  const handleLogout = () => {
    localStorage.clear();
    setRole("");
  };

  if (!role) {
    return <Login setRole={setRole} />;
  }

  return (
    <div>
      <button
        onClick={handleLogout}
        style={{ float: "right", margin: "10px" }}
      >
        Logout
      </button>

      {role === "superadmin" && <SuperAdminDashboard />}
      {role === "admin" && <AdminDashboard />}
      {role === "user" && <UserDashboard />}
    </div>
  );
}

export default App;
