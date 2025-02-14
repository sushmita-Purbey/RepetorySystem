import { FaCalendarAlt, FaUser, FaUserInjured , FaSignOutAlt, FaTachometerAlt, FaCreditCard } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";


const Sidebar = () => {
  const navigate = useNavigate();

  const handleLogoutp = () => {
    // Clear login details from localStorage/sessionStorage
    localStorage.removeItem("doctor");  // Remove user data (e.g., token)
    sessionStorage.removeItem("doctor"); // Clear session if used

    // Redirect to login page
    navigate("/login");
  };
  return (
    <div className="bg-white  h-screen w-64 shadow-md p-5 fixed">
      <div className="flex flex-col items-center mb-5">
        <img src="public/race-women-looking-young-horizontal-standing3-transformed.png" alt="Doctor" className="rounded-full bg-blue-200 w-28 h-28 border-blue-900 border-2" />
        <h2 className="text-blue-600 text-lg font-bold">Dr. Marttin Deo</h2>
        <p className="text-gray-500 text-xs font-semibold">MBBS, MD (Medicine), MCPS</p>
      </div>
      <div className="space-y-4">
      <Link to="/dashboard-nav" className="flex items-center space-x-2 text-blue-600 p-2 hover:bg-blue-100 rounded-md w-full">
        <FaTachometerAlt /> <span>Dashboard</span>
      </Link>

      <Link to="/docappointment" className="flex items-center space-x-2 text-gray-700 p-2 hover:bg-blue-100 rounded-md w-full">
        <FaCalendarAlt /> <span>Appointment</span>
      </Link>

      <Link to="/payment" className="flex items-center space-x-2 text-gray-700 p-2 hover:bg-blue-100 rounded-md w-full">
        <FaCreditCard /> <span>Payment</span>
      </Link>

      <Link to="/time-schedule" className="flex items-center space-x-2 text-gray-700 p-2 hover:bg-blue-100 rounded-md w-full">
        <FaUser /> <span>schedule</span>
      </Link>

      <Link to="/patient-list" className="flex items-center space-x-2 text-gray-700 p-2 hover:bg-blue-100 rounded-md w-full">
        <FaUserInjured  /> <span>Patient list</span>
      </Link>

      <button
        onClick={handleLogoutp}
        className="mt-6 w-full bg-blue-300 hover:bg-blue-400 text-white font-semibold py-2 rounded-lg focus:outline-none"
      >
        Logout
      </button>
      </div>
    </div>
  );
};

export default Sidebar;
