import React from "react";

export const Login = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-500 via-indigo-500 to-purple-600 animate-gradient px-4">
      <div className="w-full max-w-md bg-white/20 backdrop-blur-xl shadow-2xl border border-white/30 rounded-2xl p-8 animate-fadeIn">
        <h2 className="text-3xl font-bold text-center text-white drop-shadow mb-6">
          HR Management System
        </h2>

        <form className="space-y-6">
          <h3 className="text-xl font-semibold text-white text-center drop-shadow">
            Login
          </h3>
          <div className="flex flex-col">
            <label className="text-white mb-1">Email</label>
            <input
              type="email"
              placeholder="Enter Email"
              className="px-3 py-2 border border-white/50 bg-white/20 text-white rounded-lg
              focus:outline-none focus:ring-2 focus:ring-yellow-300 focus:border-yellow-300 placeholder-gray-200 transition-all duration-300"
            />
          </div>

          <div className="flex flex-col">
            <label className="text-white mb-1">Password</label>
            <input
              type="password"
              placeholder="******"
              className="px-3 py-2 border border-white/50 bg-white/20 text-white rounded-lg
              focus:outline-none focus:ring-2 focus:ring-yellow-300 focus:border-yellow-300 placeholder-gray-200 transition-all duration-300"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-yellow-400 hover:bg-yellow-500 text-black py-2 rounded-lg font-bold 
            shadow-lg transition-all duration-300 hover:scale-105 active:scale-95"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};
