import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom"; // React Router for page navigation

const LoginPage = () => {
  const navigate = useNavigate();
  const handleBack = () => {
    navigate("/");  // If no history, redirect to Home
  };
  // State to manage role (admin/doctor)
  const [role, setRole] = useState("doctor");

  // Form state
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  // Handle form data changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login Submitted", formData);

    // Clear form after submission (optional)
    setFormData({
      email: "",
      password: "",
    });
  };

  return (
    <div className="min-h-screen bg-cover bg-center" style={{ backgroundImage: "url('public/back 1.png')" }}>
      <div className="flex items-center justify-center min-h-screen bg-blue-700 bg-opacity-10">
        <div className="max-w-md  w-full bg-blue-300 opacity-90 p-8 rounded-xl shadow-lg">
          <h2 className="text-center text-3xl font-semibold font-italic text-gray-900">Login</h2>

          {/* Role Selection */}
          <div className="flex justify-center space-x-4 mt-4">
            <button
              className={`${
                role === "doctor" ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-800"
              } w-32 py-2 rounded-md transition duration-200 hover:bg-blue-500`}
              onClick={() => setRole("doctor")}
            >
              Doctor
            </button>
            <button
              className={`${
                role === "admin" ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-800"
              } w-32 py-2 rounded-md transition duration-200 hover:bg-blue-500`}
              onClick={() => setRole("admin")}
            >
              Admin
            </button>
          </div>

          <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
            {/* Email Input */}
            <div>
              <label htmlFor="email" className="sr-only">Email Address</label>
              <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 bg-transparent text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
              placeholder="Email Address"
            />

            </div>

            {/* Password Input */}
            <div>
              <label htmlFor="password" className="sr-only">Password</label>
              <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 bg-transparent text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
              placeholder="Password"
            />

            </div>

            {/* Submit Button */}
            <div>
            <button
              type="submit"
              className="group relative w-full py-2 px-4 border border-gray-300 text-sm font-medium rounded-md text-gray-900 bg-white shadow-xl hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
            >
              Log In
            </button>
          </div>

          </form>

          {/* Forgot Password and Create Account Links */}
          <div className="flex justify-between mt-4">
            <Link to="/forgot-password" className="text-sm text-green-600 hover:text-green-700 font-semibold">
              Forgot Password?
            </Link>
            <div className="text-sm text-gray-600">
              <span>Don't have an account? </span>
              <Link to="/create" className="text-green-600 hover:text-green-700 font-semibold">
                Create one
              </Link>
            </div>
          </div>
        </div>
        <button className=" absolute bottom-10  right-10 bg-blue-900 block rounded px-3 py-1" onClick={handleBack}>Go Back</button>

      </div>
    </div>
  );
};

export default LoginPage;
