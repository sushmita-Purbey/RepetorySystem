import Dashboard from "../DOCtorDashboard/Dashboard";
import NavbarDoctor from "../DOCtorDashboard/NavbarDoctor";
import PatientHistory from "../DOCtorDashboard/PatientHistory";
import PatientRequests from "../DOCtorDashboard/PatientRequests";
import PatientSummaryChart from "../DOCtorDashboard/PatientSummaryChart";
import Sidebar from "../DOCtorDashboard/Sidebar";


function DashboardNav() {
  return (
    <div className="flex  h-screen bg-gray-100">
      <Sidebar/>
      <div className="flex-1">
        <NavbarDoctor />
        <Dashboard/>
        <div className="p-2 pl-72 flex">
          <PatientSummaryChart />
          <PatientHistory/>
        </div>
        <PatientRequests/>

      </div>
    </div>
  );
}

export default DashboardNav;
