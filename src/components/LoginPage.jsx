import { useState } from "react";
import { Link, useNavigate } from "react-router-dom"; 
import axios from "axios"; // React Router for page navigation

const LoginPage = () => {
  const navigate = useNavigate();
  
  // State to manage role (admin/doctor)
  const [role, setRole] = useState("doctor");

  // Form state
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  // State for messages
  const [message, setMessage] = useState("");

  // Handle form data changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleLogin = async (e) => {
    e.preventDefault();
    const { email, password } = formData; // Extract email & password correctly

    try {
      const response = await axios.post("http://localhost:5000/login", {
        email,
        password,
        role,
      });

      if (response.data.success) {
        setMessage("✅ Login successful! Redirecting...");

        // Redirect based on role after successful login
        setTimeout(() => {
          if (response.data.role === "user") {
            navigate("/admindashboard");
          } else {
            navigate("/doctordashboard");
          }
        }, 2000);
      } else {
        setMessage("❌ " + response.data.message);
      }
    } catch (error) {
      setMessage(`❌ Login failed. Try again. ${error.message}`);
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
          <h5 className="text-center text-xl text-gray-900 font-semibold text-black">({role} login)</h5>

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
              onClick={() => setRole("user")}
            >
              User
            </button>
          </div>

          {/* Display Login Message */}
          {message && <p className="text-center text-red-500">{message}</p>}

          <form className="mt-8 space-y-6" onSubmit={handleLogin}>
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
          onClick={() => navigate("/")}
        >
          Go Back
        </button>
      </div>
    </div>
  );
};

export default LoginPage;
