import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom"; // React Router for page navigation

const LoginPage = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/"); // If no history, redirect to Home
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

    // Navigate based on role
    if (role === "doctor") {
      navigate("/doctordashboard"); // Redirect to user dashboard
    } else if (role === "admin") {
      navigate("/admindashboard"); // Redirect to admin dashboard
    }
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center"
      style={{
        backgroundImage: "url('public/front-view-female-researcher-with-medical-mask-vaccine 1.png')",
      }}
    >
      <div className="flex items-center justify-center min-h-screen bg-blue-900 bg-opacity-20 inset-0">
        <div className="absolute top-50 max-w-md w-full space-y-6 p-6 rounded-2xl shadow-2xl bg-blue-500 bg-opacity-30 backdrop-blur-md">
          <h2 className="text-center text-3xl font-semibold font-italic text-black mt-2">Login</h2>
          <h5 className="text-center text-xl text-gray-900  font-semibold text-black ">({role} login)</h5>

          {/* Role Selection */}
          <div className="flex justify-center space-x-4 mt-8">
            <button
              className={`${
                role === "doctor" ? "bg-blue-600 text-black font-semibold" : "bg-gray-200 text-black"
              } w-32 py-2 rounded-md transition duration-200 hover:bg-blue-600`}
              onClick={() => setRole("doctor")}
            >
              Doctor
            </button>
            <button
              className={`${
                role === "admin" ? "bg-blue-300 text-black font-semibold" : "bg-gray-200 text-black"
              } w-32 py-2 rounded-md font-semibold transition duration-200 hover:bg-blue-600`}
              onClick={() => setRole("admin")}
            >
              User
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
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 bg-transparent text-black placeholder-gray-900 focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
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
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 bg-transparent text-black placeholder-gray-900 focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
                placeholder="Password"
              />
            </div>

            {/* Submit Button */}
            <div>
              <button
                type="submit"
                className="group mt-3 relative w-full py-2 px-4 border border-gray-300 text-sm font-medium rounded-md text-black bg-blue-300 shadow-xl hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
              >
                Log In
              </button>
            </div>
          </form>

          {/* Forgot Password and Create Account Links */}
          <div className="flex justify-between mt-4">
            <Link to="/forgotpassword" className="text-sm mt-2 mb-8 text-green-900 hover:text-green-800 font-semibold">
              Forgot Password?
            </Link>
            <div className="text-sm text-gray-900 mt-2">
              <span>Don't have an account? </span>
              <Link to="/create" className="mt-2 text-green-900 font-semibold hover:text-green-900 font-semibold">
                Create one
              </Link>
            </div>
          </div>
        </div>
        <button
          className="absolute bottom-10 transform active:scale-95 transition-transform right-10 bg-blue-300 font-semibold block rounded px-3 py-1"
          onClick={handleBack}
        >
          Go Back
        </button>
      </div>
    </div>
  );
};

export default LoginPage;
