// src/components/Sidebar.js

import { Link, useNavigate } from "react-router-dom"; // Make sure to use react-router for navigation

const DocDashSidebar = () => {
    const navigate = useNavigate();

    // Handle logout
    const handleLogoutp = () => {
      // Clear login details from localStorage/sessionStorage
      localStorage.removeItem("user");  // Remove user data (e.g., token)
      sessionStorage.removeItem("user"); // Clear session if used
  
      // Redirect to login page
      navigate("/login");
    };

    const doctor = {
      name: "Dr. Jane Doe",
      specialization: "Cardiologist",
      profileImage: "/race-women-looking-young-horizontal-standing2-transformed.png", // Ensure image is in 'public/' folder
    };

  return (
    <div className="w-64 h-screen bg-[#1F2B6C] text-white font-semibold p-4">
      <ul>
        <li className="mb-4">
          <img
            src={doctor.profileImage}
            alt="Doctor"
            className="w-28 h-28 object-cover ml-[54px] rounded-full border-4 border-blue-500"
          />
          <div className="text-center mt-3">
            <h3 className="text-lg font-bold">{doctor.name}</h3>
            <p className="text-sm text-gray-300">{doctor.specialization}</p>
          </div>
        </li>

        <li className="mb-4">
          <Link to="/appointment-doc" className="hover:bg-gray-800 p-2 block rounded">Appointments</Link>
        </li>

        <li className="mb-4">
          <Link to="/patient" className="hover:bg-gray-800 p-2 block rounded">Patient list</Link>
        </li>

        <li className="mb-4">
          <Link to="/settings" className="hover:bg-gray-800 p-2 block rounded">Settings</Link>
        </li>

        <li className="mb-4">
          <Link to="/schedular" className="hover:bg-gray-800 p-2 block rounded">Schedular</Link>
        </li>

        <li className="mb-4">
          <Link to="/patient-report" className="hover:bg-gray-800 p-2 block rounded">PatientReport</Link>
        </li>

        <button
          onClick={handleLogoutp}
          className="mt-6 w-full bg-blue-300 hover:bg-blue-400 text-white font-semibold py-2 rounded-lg focus:outline-none"
        >
          Logout
        </button>
      </ul>
    </div>
  );
};

export default DocDashSidebar;
