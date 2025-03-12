import { useState, useEffect, useRef } from "react";
import { FaCalendarAlt, FaUser, FaUserInjured, FaSignOutAlt, FaTachometerAlt, FaCreditCard, FaEdit } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

const Sidebar = () => {
  const navigate = useNavigate();
  const fileInputRef = useRef(null);
  const defaultProfileImage = "/race-women-looking-young-horizontal-standing3-transformed.png"; // Default image

  const [doctorInfo, setDoctorInfo] = useState({
    name: "Dr. Sushmita",
    qualification: "MBBS, MD (Medicine), MCPS",
    profileImage: defaultProfileImage,
  });

  // Load doctor data from localStorage when component mounts
  useEffect(() => {
    const doctorData = localStorage.getItem("doctorData");
    if (doctorData) {
      const parsedData = JSON.parse(doctorData);
      const formattedName = parsedData.name.startsWith("Dr.") ? parsedData.name : `Dr. ${parsedData.name}`;
      
      setDoctorInfo({
        name: formattedName,
        qualification: parsedData.qualification || "MBBS, MD (Medicine), MCPS",
        profileImage: parsedData.profileImage || defaultProfileImage, 
      });
    }
  }, []);

  // Logout function
  const handleLogout = () => {
    localStorage.removeItem("doctorData");
    sessionStorage.removeItem("doctor");
    navigate("/login");
  };
  
  // Handle file upload
  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      
      reader.onloadend = () => {
        const base64String = reader.result;
        const updatedInfo = {
          ...doctorInfo,
          profileImage: base64String,
        };

        setDoctorInfo(updatedInfo);
        localStorage.setItem("doctorData", JSON.stringify(updatedInfo)); // Save updated image
      };

      reader.readAsDataURL(file); // Convert image to base64
    }
  };

  // Trigger file input
  const triggerFileInput = () => {
    fileInputRef.current.click();
  };

  return (
    <div className="bg-white h-screen w-64 shadow-md p-5 fixed">
      <div className="flex flex-col items-center mb-5 relative">
        <div className="relative">
          <img 
            src={doctorInfo.profileImage} 
            alt="Doctor" 
            className="rounded-full bg-blue-200 w-28 h-28 border-blue-900 border-2 object-cover" 
          />
          <button 
            onClick={triggerFileInput}
            className="absolute bottom-0 right-0 bg-blue-500 text-white p-1 rounded-full"
            title="Change profile image"
          >
            <FaEdit size={16} />
          </button>
          
          {/* Hidden file input */}
          <input 
            type="file" 
            ref={fileInputRef} 
            onChange={handleFileUpload} 
            accept="image/*" 
            className="hidden" 
          />
        </div>
        <h2 className="text-blue-600 text-lg font-bold mt-2">{doctorInfo.name}</h2>
        <p className="text-gray-500 text-xs font-semibold">{doctorInfo.qualification}</p>
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
          <FaUser /> <span>Schedule</span>
        </Link>

        <Link to="/patient-list" className="flex items-center space-x-2 text-gray-700 p-2 hover:bg-blue-100 rounded-md w-full">
          <FaUserInjured /> <span>Patient list</span>
        </Link>

        <button
          onClick={handleLogout}
          className="mt-6 w-full bg-blue-300 hover:bg-blue-400 text-white font-semibold py-2 rounded-lg focus:outline-none"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
