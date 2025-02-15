<<<<<<< HEAD
import Dashboard from "../DoctorDashboard/Dashboard";
import NavbarDoctor from "../DoctorDashboard/NavbarDoctor";
import PatientHistory from "../DoctorDashboard/PatientHistory";
import PatientRequests from "../DoctorDashboard/PatientRequests";
import PatientSummaryChart from "../DoctorDashboard/PatientSummaryChart";
import Sidebar from "../DoctorDashboard/Sidebar";
=======

import DocDashSidebar from '../sideNavDoc/DocDashSidebar'
import DocOverview from '../sideNavDoc/DocOverview'
>>>>>>> bc685b01bd2eb7dfabc80f0002a3e5d47b18259b


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
