import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const CreateAccount = () => {
  const navigate = useNavigate();
 
    const handleBack = () => {
      navigate("/");  // If no history, redirect to Home
    };
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    phone: "",
    address: "",
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
    });

    navigate("/login"); // Redirect to login page after successful account creation
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-left px-4 sm:px-6 lg:px-8"
      style={{ backgroundImage:"url('public/front-view-female-researcher-with-medical-mask-vaccine 1.png')" }} // Replace with your image URL
    >
      <div className="absolute inset-0 bg-blue-800 opacity-20"></div> {/* Dark overlay for better contrast */}
      
      <div className=" absolute top-20 max-w-md w-full space-y-6 p-6 rounded-2xl shadow-2xl bg-blue-500 bg-opacity-20 backdrop-blur-md">
        <h2 className="text-center text-3xl font-extrabold text-black">Create Your Account</h2>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="rounded-md shadow-sm -space-y-px">
            {/* Name Input */}
            <div>
              <label htmlFor="name" className="sr-only">Full Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="appearance-none mt-3 rounded-md relative block w-full px-3 py-2 border border-white   rounded-md text-gray-900 placeholder-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-white  bg-transparent"
                placeholder="Full Name"
              />
            </div>

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
                className="appearance-none mt-3 rounded-md relative block w-full px-3 py-2 border border-white   rounded-md text-gray-900 placeholder-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-white  bg-transparent"
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
                className="appearance-none mt-3 rounded-md relative block w-full px-3 py-2 border border-white   rounded-md text-gray-900 placeholder-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-white  bg-transparent"
                placeholder="Password"
              />
            </div>

            {/* Confirm Password Input */}
            <div>
              <label htmlFor="confirmPassword" className="sr-only">Confirm Password</label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
                className="appearance-none mt-3 rounded-md relative block w-full px-3 py-2 border border-white   rounded-md text-gray-900 placeholder-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-white  bg-transparent"
                placeholder="Confirm Password"
              />
            </div>

            {/* Phone Number Input */}
            <div>
              <label htmlFor="phone" className="sr-only">Phone Number</label>
              <input
                type="text"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="appearance-none mt-3 rounded-md relative block w-full px-3 py-2 border border-white   rounded-md text-gray-900 placeholder-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-white  bg-transparent"
                placeholder="Phone Number"
              />
            </div>

            {/* Address Input */}
            <div>
              <label htmlFor="address" className="sr-only">Address</label>
              <input
                type="text"
                id="address"
                name="address"
                value={formData.address}
                onChange={handleChange}
                required
                className="appearance-none mt-3  rounded-md relative block w-full px-3 py-2 border border-white   rounded-md text-gray-900 placeholder-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-white  bg-transparent"
                placeholder="Address"
              />
            </div>
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="group  relative w-full py-3 px-4 border border-transparent text-lg font-medium rounded-md text-black bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Create Account
            </button>
          </div>
        </form>

        {/* Login Link */}
        <div className="text-center mt-6">
          <p className="text-sm text-black">
            Already have an account?{" "}
            <Link to="/login" className="text-blue-700 hover:text-blue-900 font-semibold">
              Log in here
            </Link>
          </p>
        </div>
        <button className=" absolute top-[550px] transform active:scale-95 transition-transform   left-[850px] bg-blue-600 font-semibold h-10 w-[100px] rounded px-3 py-1" onClick={handleBack}>Go Back</button>

      </div>
    </div>
  );
};

export default CreateAccount;
