import { useState, useEffect } from "react";
import axios from "axios";

import Dashboard from "../DoctorDashboard/Dashboard";
import NavbarDoctor from "../DoctorDashboard/NavbarDoctor";
import PatientHistory from "../DoctorDashboard/PatientHistory";
import PatientRequests from "../DoctorDashboard/PatientRequests";
import PatientSummaryChart from "../DoctorDashboard/PatientSummaryChart";
import Sidebar from "../DoctorDashboard/Sidebar";



function DoctorsDashboard() {
  const [patients, setPatients] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPatients = async () => {
      try {
        setLoading(true);
        setError(null);
        const response = await axios.get("http://localhost:5000/api/patients");
        setPatients(response.data);
      } catch (error) {
        setError("Error loading patient appointments.");
      } finally {
        setLoading(false);
      }
    };

    fetchPatients();

    // Listen for updates
    const handlePatientUpdate = () => fetchPatients();
    window.addEventListener("patientListUpdated", handlePatientUpdate);

    return () => {
      window.removeEventListener("patientListUpdated", handlePatientUpdate);
    };
  }, []);

  return (
    <div className="flex  h-screen bg-gray-100">
      <Sidebar/>
      <div className="flex-1">
        <NavbarDoctor />
        <Dashboard/>
        <div className="p-2 pl-72 flex">
          <PatientSummaryChart />
          <PastAppointments patients={patients} loading={loading} error={error} />

         
        </div>
        <PatientRequests/>

      </div>
    </div>
  );
}
const PastAppointments = ({ patients, loading, error }) => {
  return (
    <div className="bg-white ml-5 shadow-lg rounded-lg p-4 w-full">
      <h2 className="text-xl font-semibold mb-2">Past Appointments</h2>
      {error && <p className="text-red-500">{error}</p>}
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border rounded-lg">
            <thead className="bg-blue-300 text-white">
              <tr>
                <th className="px-6 py-3">Name</th>
                <th className="px-6 py-3">Date</th>
                <th className="px-6 py-3">Problem</th>
                <th className="px-6 py-3">Prescription</th>
                <th className="px-6 py-3">Payment</th>
              </tr>
            </thead>
            <tbody>
              {patients.slice(-4).reverse().map((patient) => (
                <tr key={patient._id} className="border-b hover:bg-gray-50">
                  <td className="px-6 py-4">{patient.name}</td>
                  <td className="px-6 py-4">{patient.date}</td>
                  <td className="px-6 py-4">{patient.problem}</td>
                  <td className="px-6 py-4">{patient.prescription}</td>
                  <td className="px-6 py-4">{patient.paymentMode}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};


export default DoctorsDashboard;
