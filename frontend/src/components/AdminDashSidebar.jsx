// src/components/Sidebar.js
import React from "react";
import { Link, useNavigate } from "react-router-dom"; // Make sure to use react-router for navigation

const AdminDashSidebar = () => {
    const navigate = useNavigate();

    // Handle logout
    const handleLogout = () => {
      // Clear login details from localStorage/sessionStorage
      localStorage.removeItem("user");  // Remove user data (e.g., token)
      sessionStorage.removeItem("user"); // Clear session if used
  
      // Redirect to login page
      navigate("/login");
    };
  return (
    <div className="w-64 h-screen  bg-[#1F2B6C] fixed z-10 text-white font-semibold p-4 ">
      <div className="flex justify-center mb-10">
        <h2 className="text-2xl font-semibold ">Admin Dashboard</h2>
      </div>
      <ul>
        <li className="mb-4">
          <Link to="/admindashboard" className="hover:bg-gray-800 p-2 block rounded">Overview</Link>
        </li>
        <li className="mb-4">
          <Link to="/appointmentadmin" className="hover:bg-gray-800 p-2 block rounded">Appointments</Link>
        </li>
        
        <li className="mb-4">
          <Link to="/reportpage" className="hover:bg-gray-800 p-2 block rounded">Reports</Link>
        </li>
        <li className="mb-4">
          <Link to="/settingsadmin" className="hover:bg-gray-800 p-2 block rounded">Settings</Link>
        </li>
        <li className="mb-4">
          <Link to="/helpcenter" className="hover:bg-gray-800 p-2 block rounded">Help Center</Link>
        </li>
        <li className="mb-4">
          <Link to="/home" className="hover:bg-gray-800 p-2 block rounded">Go to Home</Link>
        </li>
        <button
        onClick={handleLogout}
        className="mt-6 w-full bg-blue-300 hover:bg-blue-400 text-white font-semibold py-2 rounded-lg focus:outline-none"
      >
        Logout
      </button>
      </ul>
    </div>
  );
};

export default AdminDashSidebar;
