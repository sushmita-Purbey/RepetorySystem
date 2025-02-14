const DashboardCard = ({ title, value, icon }) => {
    return (
      <div className=" p-5 rounded-lg  shadow-md flex bg-blue-200 hover:bg-blue-300 hover:scale-105 items-center space-x-4">
        <div className="p-3 rounded-full bg-gray-100 text-2xl ">{icon}</div>
        <div>
          <h3 className="text-white ">{title}</h3>
          <h1 className="text-xl font-bold text-white ">{value}</h1>
        </div>
      </div>
    );
  };
  
  export default DashboardCard;
  