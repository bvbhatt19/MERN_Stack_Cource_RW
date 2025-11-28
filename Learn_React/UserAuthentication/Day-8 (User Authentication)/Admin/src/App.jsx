import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Login";
import Signup from "./Signup";
import SuperAdminDashboard from "./SuperAdminDashboard";
import AdminDashboard from "./AdminDashboard";
import UserDashboard from "./UserDashboard";

function App() {
  const [role, setRole] = useState(localStorage.getItem("role") || "");

  const handleLogout = () => {
    localStorage.clear();
    setRole("");
  };

  return (
    <Router>
      {!role ? (
        <Routes>
          <Route path="/" element={<Login setRole={setRole} />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      ) : (
        <div>
          <button
            onClick={handleLogout}
            style={{
              float: "right",
              margin: "10px",
              background: "red",
              color: "white",
              border: "none",
              padding: "5px 10px",
              cursor: "pointer",
            }}
          >
            Logout
          </button>

          {role === "superadmin" && <SuperAdminDashboard />}
          {role === "admin" && <AdminDashboard />}
          {role === "user" && <UserDashboard />}
        </div>
      )}
    </Router>
  );
}

export default App;
