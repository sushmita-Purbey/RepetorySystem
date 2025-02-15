import Dashboard from "./Dashboard";
import NavbarDoctor from "./NavbarDoctor";
import PatientHistory from "./PatientHistory";
import PatientRequests from "./PatientRequests";
import PatientSummaryChart from "./PatientSummaryChart";
import Sidebar from "./Sidebar";


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
