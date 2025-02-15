<<<<<<< HEAD
<<<<<<< HEAD
import Dashboard from "../DoctorDashboard/Dashboard";
import NavbarDoctor from "../DoctorDashboard/NavbarDoctor";
import PatientHistory from "../DoctorDashboard/PatientHistory";
import PatientRequests from "../DoctorDashboard/PatientRequests";
import PatientSummaryChart from "../DoctorDashboard/PatientSummaryChart";
import Sidebar from "../DoctorDashboard/Sidebar";
=======
=======

import Dashboard from "../DOCtorDashboard/Dashboard";
import NavbarDoctor from "../DOCtorDashboard/NavbarDoctor";
import PatientHistory from "../DOCtorDashboard/PatientHistory";
import PatientRequests from "../DOCtorDashboard/PatientRequests";
import PatientSummaryChart from "../DOCtorDashboard/PatientSummaryChart";
import Sidebar from "../DOCtorDashboard/Sidebar";
>>>>>>> fa83eb5dd801376b90f03316f0d1200c3db5dee9





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
