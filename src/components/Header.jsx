const Header = () => {
  return (
    <div className="flex justify-between items-center p-2">
      {/* Left Section: Title */}
      <div className="text-black m-4 text-2xl">
        REPERATORY MANAGEMENT SYSTEM
      </div>

      {/* Right Section: Work Hour */}
      <div className="flex  flex-col gap-2 items-center">
        <div className="flex items-center gap-4">
          <img
            src="public/clock.png"
            className="w-8 h-8 rounded-lg object-contain"
            alt="clock.png"
          />
          <div>
            <p className="text-sm text-gray-800 font-semibold">WORK HOUR</p>
            <p className="text-sm text-blue-400 font-semibold">24*7</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
