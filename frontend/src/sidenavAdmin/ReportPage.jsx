import React, { useState, useEffect } from "react";
import axios from "axios";
import AdminDashSidebar from "../components/AdminDashSidebar";

const ReportPage = () => {
  const [selectedTab, setSelectedTab] = useState("history");
  const [patientData, setPatientData] = useState(null);

  useEffect(() => {
    axios.get("http://localhost:5000/api/patient/12345") // Replace with real patient ID
      .then(response => setPatientData(response.data))
      .catch(error => console.error("❌ Error fetching patient data:", error));
  }, []);

  if (!patientData) return <p>Loading...</p>;

  return (
    <div>
      <div className="flex flex-col h-screen">
        <AdminDashSidebar />
      </div>
      <div className="mx-auto flex-1 w-[1276px] h-screen bg-blue-100 absolute top-0 right-0">
        <h2 className="text-2xl px-3 mt-8 font-semibold">Patient Report</h2>

        {/* Patient Profile */}
        <div className="flex items-center mb-8 p-6 bg-white rounded-lg shadow-md">
          <img
            src={patientData.profilePic}
            alt="Profile"
            className="w-24 h-24 rounded-full border-4 border-blue-300 mr-6"
          />
          <div>
            <h3 className="text-xl font-semibold">{patientData.name}</h3>
            <p><strong>Patient ID:</strong> {patientData.patientId}</p>
            <p><strong>DOB:</strong> {patientData.dateOfBirth}</p>
            <p><strong>Gender:</strong> {patientData.gender}</p>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex mb-6">
          <button className={`p-3 w-1/2 ${selectedTab === "history" ? "bg-blue-500 text-white" : "bg-blue-200"}`} onClick={() => setSelectedTab("history")}>
            Medical History
          </button>
          <button className={`p-3 w-1/2 ${selectedTab === "prescriptions" ? "bg-blue-500 text-white" : "bg-blue-200"}`} onClick={() => setSelectedTab("prescriptions")}>
            Prescriptions
          </button>
        </div>

        {/* Display Data */}
        <div className="bg-white rounded-lg shadow-md p-6">
          {selectedTab === "history" ? (
            <ul>
              {patientData.medicalHistory.map((entry, index) => (
                <li key={index} className="mb-4 bg-blue-50 p-4 rounded-lg shadow-sm">
                  <p><strong>Date:</strong> {entry.date}</p>
                  <p><strong>Diagnosis:</strong> {entry.diagnosis}</p>
                  <p><strong>Treatment:</strong> {entry.treatment}</p>
                </li>
              ))}
            </ul>
          ) : (
            <ul>
              {patientData.prescriptions.map((prescription, index) => (
                <li key={index} className="mb-4 bg-blue-50 p-4 rounded-lg shadow-sm">
                  <p><strong>Date:</strong> {prescription.date}</p>
                  <p><strong>Medication:</strong> {prescription.medication}</p>
                  <p><strong>Dosage:</strong> {prescription.dosage}</p>
                  <p><strong>Prescribed By:</strong> {prescription.prescribedBy}</p>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default ReportPage;
