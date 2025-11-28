import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import { saveAuth } from "../utils/auth";

export default function SignUp() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    role: "",
  });
  const [roles, setRoles] = useState([]);
  const [err, setErr] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch roles dynamically
    const fetchRoles = async () => {
      try {
        const res = await axios.get("/api/auth/roles");
        setRoles(res.data);
        setForm((prev) => ({ ...prev, role: res.data[0] || "user" }));
      } catch (error) {
        console.error("Error fetching roles:", error);
      }
    };
    fetchRoles();
  }, []);

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const submit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/api/auth/signup", form);
      saveAuth(res.data.token, res.data.user);
      const role = res.data.user.role;
      if (role === "superadmin") navigate("/superadmin-dashboard");
      else if (role === "admin") navigate("/admin-dashboard");
      else navigate("/user-dashboard");
    } catch (error) {
      setErr(error.response?.data?.message || "Signup failed");
    }
  };

  return (
    <div style={{ margin: "30px" }}>
      <h2>Sign Up</h2>
      {err && <p style={{ color: "red" }}>{err}</p>}
      <form onSubmit={submit}>
        <div>
          <label>Name:</label>
          <br />
          <input name="name" value={form.name} onChange={onChange} required />
        </div>
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
        <div>
          <label>Role:</label>
          <br />
          <select name="role" value={form.role} onChange={onChange}>
            {roles.map((r) => (
              <option key={r} value={r}>
                {r}
              </option>
            ))}
          </select>
        </div>
        <button type="submit">Sign Up</button>
      </form>
      <p>
        Already have an account? <Link to="/signin">Sign in</Link>
      </p>
    </div>
  );
}
