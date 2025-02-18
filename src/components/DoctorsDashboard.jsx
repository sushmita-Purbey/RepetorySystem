
import Dashboard from "../DoctorDashboard/Dashboard";
import NavbarDoctor from "../DoctorDashboard/NavbarDoctor";
import PatientHistory from "../DoctorDashboard/PatientHistory";
import PatientRequests from "../DoctorDashboard/PatientRequests";
import PatientSummaryChart from "../DoctorDashboard/PatientSummaryChart";
import Sidebar from "../DoctorDashboard/Sidebar";



function DoctorsDashboard() {
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

export default DoctorsDashboard;
