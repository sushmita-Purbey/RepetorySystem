import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = ({ setUser }) => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/api/auth/login", formData);
      localStorage.setItem("token", res.data.token);
      setUser(res.data.name);
      navigate(res.data.role === "doctor" ? "/doctor-dashboard" : "/user-dashboard");
    } catch {
      alert("Invalid credentials");
    }
  };

  return (
    <div className="flex flex-col items-center p-6">
      <h2 className="text-2xl font-bold">Login</h2>
      <form onSubmit={handleLogin} className="mt-4 flex flex-col gap-3">
        <input className="border p-2" type="email" placeholder="Email" onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
        <input className="border p-2" type="password" placeholder="Password" onChange={(e) => setFormData({ ...formData, password: e.target.value })} />
        <button className="bg-blue-500 text-white p-2" type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
