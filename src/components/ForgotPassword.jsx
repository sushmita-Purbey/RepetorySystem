import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email) {
      alert("Please enter an email address.");
      return;
    }

    setIsSubmitting(true);

    // Simulating password reset process
    // Here, you can replace this with an API call to send the reset link to the user's email
    setTimeout(() => {
      setIsSubmitting(false);
      alert("Password reset link sent to your email.");
      navigate("/login"); // Redirect to login page after reset
    }, 2000);
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center px-4 sm:px-6 lg:px-8"
      style={{ backgroundImage: "url('public/back 1.png')"}} // Replace with your image URL
    >
      <div className="max-w-md w-full space-y-4 bg-blue-300 bg-opacity-80 p-8 rounded-lg shadow-lg">
        <h2 className="text-center text-3xl font-extrabold  text-gray-900">
          Forgot Password
        </h2>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="email" className="sr-only">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-blue-800 rounded-md text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-blue-800 focus:border-blue-800 sm:text-sm bg-transparent bg-opacity-50"
                placeholder="Email Address"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="group relative w-full py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-800 hover:bg-blue-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Sending..." : "Send Reset Link"}
            </button>
          </div>
        </form>
        <div className="text-center mt-6">
          <p className="text-sm text-gray-600">
            Remember your password?{" "}
            <Link
              to="/login"
              className="text-green-600 hover:text-green-700 font-semibold"
            >
              Log in here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
