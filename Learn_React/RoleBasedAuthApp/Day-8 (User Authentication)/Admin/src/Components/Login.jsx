import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import { saveAuth } from "../utils/auth";

export default function SignIn() {
  const [form, setForm] = useState({ email: "", password: "" });
  const [err, setErr] = useState("");
  const navigate = useNavigate();

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const submit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/api/auth/signin", form);
      saveAuth(res.data.token, res.data.user);
      const role = res.data.user.role;
      if (role === "superadmin") navigate("/superadmin-dashboard");
      else if (role === "admin") navigate("/admin-dashboard");
      else navigate("/user-dashboard");
    } catch (error) {
      setErr(error.response?.data?.message || "Signin failed");
    }
  };

  return (
    <div style={{ margin: "30px" }}>
      <h2>Sign In</h2>
      {err && <p style={{ color: "red" }}>{err}</p>}
      <form onSubmit={submit}>
        <div>
          <label>Email:</label>
          <br />
          <input
            name="email"
            type="email"
            value={form.email}
            onChange={onChange}
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <br />
          <input
            name="password"
            type="password"
            value={form.password}
            onChange={onChange}
            required
          />
        </div>
        <button type="submit">Sign In</button>
      </form>
      <p>
        New user? <Link to="/signup">Create an account</Link>
      </p>
    </div>
  );
}
