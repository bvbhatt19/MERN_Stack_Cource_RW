import React from "react";
import { useForm } from "react-hook-form";
import { useAuth } from "../contexts/AuthContext";
import { useNavigate, Link } from "react-router-dom";

export default function Login() {
  const { register: reg, handleSubmit } = useForm();
  const { login } = useAuth();
  const nav = useNavigate();

  const onSubmit = async (data) => {
    try {
      await login(data.email, data.password);
      nav("/");
    } catch (e) {
      alert("Login failed: " + e.message);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-8 bg-white p-6 rounded shadow">
      <h2 className="text-xl font-semibold mb-4">Login</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
        <input
          {...reg("email")}
          placeholder="Email"
          className="w-full border p-2 rounded"
        />
        <input
          {...reg("password")}
          type="password"
          placeholder="Password"
          className="w-full border p-2 rounded"
        />
        <button
          type="submit"
          className="w-full bg-indigo-600 text-white py-2 rounded"
        >
          Login
        </button>
      </form>
      <p className="mt-3 text-sm">
        Don't have account?{" "}
        <Link to="/register" className="text-indigo-600">
          Register
        </Link>
      </p>
    </div>
  );
}
