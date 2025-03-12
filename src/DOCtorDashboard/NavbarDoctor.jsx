import { FaSearch, FaBell, FaEnvelope } from "react-icons/fa";

const NavbarDoctor = () => {
  return (
    <div className="bg-white bg-blue-800 text-white p-4 flex justify-between items-center shadow-md pl-72">
      <h1 className="text-xl font-semibold">Dashboard</h1>
      <div className="flex items-center space-x-4">
      
        <FaEnvelope className="text-white text-xl" />
        <FaBell className="text-white text-xl" />
      </div>
    </div>
  );
};


export default NavbarDoctor;
