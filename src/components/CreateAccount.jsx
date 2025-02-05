import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const CreateAccount = () => {
  // State to manage role (admin/user)
  const [role, setRole] = useState("user");
  const navigate = useNavigate();
  const handleBack = () => {
    navigate("/");  // If no history, redirect to Home
  };

  // Form state for Admin and User
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    phone: "",
    address: "",
    adminCode: "", // Admin-only field
  });

  // Handle changes in form inputs
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    // Submit form data (you can integrate API call here)
    console.log("Form submitted", formData);

    // Clear form after submission
    setFormData({
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
      phone: "",
      address: "",
      adminCode: "",
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center  bg-gray-50  px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-4 bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-center text-3xl font-extrabold text-gray-900">
          Create an Account
        </h2>
        <div className="flex justify-center space-x-4 mt-2">
          <button
            className={`${
              role === "user" ? "bg-blue-900 text-white" : "bg-gray-200 text-gray-800"
            } w-32 py-2 rounded-md`}
            onClick={() => setRole("user")}
          >
            User
          </button>
          <button
            className={`${
              role === "admin" ? "bg-blue-900 text-white" : "bg-gray-200 text-gray-800"
            } w-32 py-2 rounded-md`}
            onClick={() => setRole("admin")}
          >
            Admin
          </button>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="name" className="sr-only">Full Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 rounded-t-md text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
                placeholder="Full Name"
              />
            </div>
            <div>
              <label htmlFor="email" className="sr-only">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 rounded-md text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
                placeholder="Email Address"
              />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 rounded-md text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
                placeholder="Password"
              />
            </div>
            <div>
              <label htmlFor="confirmPassword" className="sr-only">Confirm Password</label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 rounded-b-md text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
                placeholder="Confirm Password"
              />
            </div>
            {role === "admin" && (
              <div>
                <label htmlFor="adminCode" className="sr-only">Admin Code</label>
                <input
                  type="text"
                  id="adminCode"
                  name="adminCode"
                  value={formData.adminCode}
                  onChange={handleChange}
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 rounded-md text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
                  placeholder="Mobile no."
                />
              </div>
            )}
            {role === "user" && (
              <>
                <div>
                  <label htmlFor="phone" className="sr-only">Phone Number</label>
                  <input
                    type="text"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 rounded-md text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
                    placeholder="Phone Number"
                  />
                </div>
                <div>
                  <label htmlFor="address" className="sr-only">Address</label>
                  <input
                    type="text"
                    id="address"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    required
                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 rounded-md text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
                    placeholder="Address"
                  />
                </div>
              </>
            )}
          </div>

          <div>
            <button
              type="submit"
              className="group relative w-full py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-900 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
            >
              Create Account
            </button>
            {/* Statement for Existing Users */}
            <div className="text-center mt-6">
            <p className="text-sm text-gray-600">
                Already have an account?{" "}
                <Link to="/login" className="text-green-600 hover:text-green-700 font-semibold">
                Log in here
                </Link>
            </p>
            </div>
          </div>
        </form>
        <button className=" absolute bottom-10  right-10 bg-blue-900 block rounded px-3 py-1" onClick={handleBack}>Go Back</button>

      </div>

    </div>
  );
};

export default CreateAccount;
