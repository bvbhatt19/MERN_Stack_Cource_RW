import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

const UserDash = () => {
  const navigate = useNavigate();
  const userName = localStorage.getItem("userName") || "User";
  const token = Cookies.get("token");

  useEffect(() => {
    if (!token) {
      navigate("/");
    }
  }, [token, navigate]);
  
  const handleLogout = () => {
    Cookies.remove("token");
    navigate("/");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#C6E2FF] via-[#FFD6E8] to-[#C8F7C5] p-4">
      <div className="w-full max-w-3xl bg-white/85 backdrop-blur-md rounded-2xl shadow-2xl p-8 border border-white/60 text-center">
        <h1 className="text-4xl font-semibold text-gray-800 mb-3">
          Welcome, <span className="text-[#5C6BC0]">{userName}</span> 👋
        </h1>
        <p className="text-gray-600 mb-8 text-lg">
          You are successfully logged in with a valid session token.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="p-6 bg-gradient-to-r from-[#81D4FA] to-[#A5D6A7] rounded-xl shadow-md hover:scale-105 transition-transform duration-300 cursor-pointer">
            <h3 className="text-white text-xl font-semibold mb-2">My Profile</h3>
            <p className="text-white/90 text-sm">
              View and update your personal information.
            </p>
          </div>

          <div className="p-6 bg-gradient-to-r from-[#F48FB1] to-[#CE93D8] rounded-xl shadow-md hover:scale-105 transition-transform duration-300 cursor-pointer">
            <h3 className="text-white text-xl font-semibold mb-2">Settings</h3>
            <p className="text-white/90 text-sm">
              Manage your preferences and security settings.
            </p>
          </div>

          <div className="p-6 bg-gradient-to-r from-[#A5D6A7] to-[#81D4FA] rounded-xl shadow-md hover:scale-105 transition-transform duration-300 cursor-pointer">
            <h3 className="text-white text-xl font-semibold mb-2">Activity</h3>
            <p className="text-white/90 text-sm">
              Check your recent activity and login history.
            </p>
          </div>

          <div className="p-6 bg-gradient-to-r from-[#CE93D8] to-[#F48FB1] rounded-xl shadow-md hover:scale-105 transition-transform duration-300 cursor-pointer">
            <h3 className="text-white text-xl font-semibold mb-2">Support</h3>
            <p className="text-white/90 text-sm">
              Need help? Contact our support team anytime.
            </p>
          </div>
        </div>

        <button
          onClick={handleLogout}
          className="mt-10 px-6 py-2 rounded-lg bg-gradient-to-r from-[#81D4FA] via-[#A5D6A7] to-[#F48FB1] text-white font-semibold shadow-md hover:opacity-90 transition duration-200"
        >
          Log Out
        </button>
      </div>
    </div>
  );
};

export default UserDash;
