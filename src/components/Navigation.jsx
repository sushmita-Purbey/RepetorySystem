import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Navigation = () => {
  const [isSearching, setIsSearching] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchToggle = () => {
    setIsSearching(!isSearching);
  };
  const navigate = useNavigate();

  const handleClick = () => {
    // Redirect to login page when button is clicked
    navigate('/login');
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim() !== "") {
      alert(`Searching for: ${searchQuery}`);
    }
    setIsSearching(false); // Close the search input after performing the search
    setSearchQuery(""); // Clear the input
  };

  return (
    <nav className="bg-blue-800 text-white p-4 flex justify-between items-center">
      {/* Left Section: Navigation Links */}
      <ul className="flex gap-8 ml-6">
        <li>
          <Link to="/" className="text-blue-200 hover:text-white transition duration-200">
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" className="text-blue-200 hover:text-white transition duration-200">
            About Us
          </Link>
        </li>
        <li>
          <Link to="/doctors" className="text-blue-200 hover:text-white transition duration-200">
            Doctors
          </Link>
        </li>
        <li>
          <Link to="/contact" className="text-blue-200 hover:text-white transition duration-200">
            Contacts
          </Link>
        </li>
      </ul>

      {/* Middle Section: Button and Search */}
      <div className="flex items-center gap-6">
        {/* Appointment Button */}
        <Link to="/appointment">
          <button className="text-black text-sm rounded-3xl bg-blue-200 px-4 py-2 hover:bg-blue-100 transition duration-200">
            Appointment
          </button>
        </Link>

        {/* Search Icon or Input */}
        <div className="relative">
          {!isSearching ? (
            <button
              onClick={handleSearchToggle}
              className="w-10 h-10 p-1.5 bg-white text-gray-800 rounded-full hover:bg-gray-200 transition duration-200 flex items-center justify-center"
              style={{ fontSize: "16px" }}
            >
              🔍
            </button>
          ) : (
            <form
              onSubmit={handleSearch}
              className="flex items-center bg-white rounded-lg overflow-hidden"
            >
              <input
                type="text"
                placeholder="Search..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="px-3 py-2 bg-white text-gray focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </form>
          )}
        </div>
      </div>

      {/* Right Section: Create Account Button */}
      <button
       onClick={handleClick}
      className="text-black text-sm rounded-3xl bg-blue-200 px-4 py-2 hover:bg-blue-100 transition duration-200">
        Create Account
      </button>
    </nav>
  );
};

export default Navigation;
