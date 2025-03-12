import { FaUserInjured, FaUserMd, FaClock } from "react-icons/fa";
import DashboardCard from "./DashboardCard";

const Dashboard = () => {
  return (
    <div className="p-5 pl-72">
      <div className="grid grid-cols-3 gap-5">
        <DashboardCard title="Total Patients" value="200+" icon={<FaUserInjured />} />
        <DashboardCard title="Today's Patients" value="051" icon={<FaUserMd />} />
        <DashboardCard title="Today's Appointments" value="025" icon={<FaClock />} />
      </div>
    </div>
  );
};



export default Dashboard;
