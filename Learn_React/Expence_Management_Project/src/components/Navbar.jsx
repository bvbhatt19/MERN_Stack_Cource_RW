import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

export default function Navbar() {
  const { user, logout } = useAuth();
  const nav = useNavigate();
  const handleLogout = async () => {
    await logout();
    nav("/login");
  };
  return (
    <nav className="bg-white shadow">
      <div className="container flex items-center justify-between py-3">
        <div className="flex items-center space-x-4">
          <Link to="/" className="font-bold text-lg">
            ExpenseManager
          </Link>
          {user && (
            <>
              <Link to="/expenses" className="text-sm">
                Expenses
              </Link>
              <Link to="/employees" className="text-sm">
                Employees
              </Link>
              <Link to="/clients" className="text-sm">
                Clients
              </Link>
            </>
          )}
        </div>
        <div>
          {user ? (
            <div className="flex items-center gap-3">
              <span className="text-sm">Hi, {user.email}</span>
              <button
                onClick={handleLogout}
                className="px-3 py-1 bg-red-500 text-white rounded"
              >
                Logout
              </button>
            </div>
          ) : (
            <div className="space-x-2">
              <Link to="/login" className="px-3 py-1 border rounded">
                Login
              </Link>
              <Link
                to="/register"
                className="px-3 py-1 bg-indigo-600 text-white rounded"
              >
                Register
              </Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
