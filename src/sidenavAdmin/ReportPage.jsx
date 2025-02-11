// ReportPage.jsx
import React, { useState } from "react";
import AdminDashSidebar from "../components/AdminDashSidebar";

// Sample patient data (You can replace this with data from an API or a database)
const patientData = {
  patientId: "12345",
  name: "John Doe",
  dateOfBirth: "1985-08-15",
  gender: "Male",
  profilePic: "public/race-women-looking-young-horizontal-standing2-transformed (1).png", // Placeholder image, replace with actual image URL
  medicalHistory: [
    {
      date: "2023-02-15",
      diagnosis: "Flu",
      treatment: "Antiviral medication prescribed",
    },
    {
      date: "2022-09-10",
      diagnosis: "High blood pressure",
      treatment: "Lifestyle changes, blood pressure medication",
    },
  ],
  prescriptions: [
    {
      date: "2023-02-15",
      medication: "Oseltamivir 75 mg",
      dosage: "Twice a day for 5 days",
      prescribedBy: "Dr. Smith",
    },
    {
      date: "2022-09-10",
      medication: "Lisinopril 10 mg",
      dosage: "Once a day",
      prescribedBy: "Dr. Johnson",
    },
  ],
};

const ReportPage = () => {
  const [selectedTab, setSelectedTab] = useState("history"); // Toggle between 'history' and 'prescriptions'

  return (
    <div >
        <div className="flex flex-col h-screen">
            <AdminDashSidebar/>
        </div>
    <div className=" mx-auto flex-1 w-[1276px] h-screen  bg-blue-100 absolute top-0 right-0 ">
      <div className="flex justify-between mb-6">
        <h2 className="text-2xl px-3 mt-8 font-semibold">Patient Report</h2>
      </div>

      {/* Patient Profile Section */}
      <div className="flex items-center mb-8 p-6 bg-white rounded-lg shadow-md">
        <img
          src={patientData.profilePic}
          alt="Profile"
          className="w-32 h-32 rounded-full border-4 border-blue-300 mr-6"
        />
        <div>
          <h3 className="text-xl font-semibold">{patientData.name}</h3>
          <p className="text-sm text-blue-600">
            <strong>Patient ID:</strong> {patientData.patientId}
          </p>
          <p className="text-sm text-blue-600">
            <strong>DOB:</strong> {patientData.dateOfBirth}
          </p>
          <p className="text-sm text-blue-600">
            <strong>Gender:</strong> {patientData.gender}
          </p>
        </div>
      </div>

      {/* Tabs for Medical History and Prescriptions */}
      <div className="flex mb-6">
        <button
          className={`${
            selectedTab === "history"
              ? "bg-blue-500 text-white"
              : "bg-blue-200 text-blue-800"
          } p-3 rounded-l-lg w-1/2 text-center`}
          onClick={() => setSelectedTab("history")}
        >
          Medical History
        </button>
        <button
          className={`${
            selectedTab === "prescriptions"
              ? "bg-blue-500 text-white"
              : "bg-blue-200 text-blue-800"
          } p-3 rounded-r-lg w-1/2 text-center`}
          onClick={() => setSelectedTab("prescriptions")}
        >
          Prescriptions
        </button>
      </div>

      {/* Display content based on selected tab */}
      <div className="bg-white rounded-lg shadow-md p-6">
        {selectedTab === "history" ? (
          <div>
            <h4 className="text-lg font-semibold mb-4">Medical History</h4>
            {patientData.medicalHistory.length > 0 ? (
              <ul>
                {patientData.medicalHistory.map((entry, index) => (
                  <li key={index} className="mb-4">
                    <div className="bg-blue-50 p-4 rounded-lg shadow-sm">
                      <p className="text-sm font-medium text-blue-700">
                        <strong>Date:</strong> {entry.date}
                      </p>
                      <p className="text-sm text-blue-600">
                        <strong>Diagnosis:</strong> {entry.diagnosis}
                      </p>
                      <p className="text-sm text-blue-600">
                        <strong>Treatment:</strong> {entry.treatment}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            ) : (
              <p>No medical history available.</p>
            )}
          </div>
        ) : (
          <div>
            <h4 className="text-lg font-semibold mb-4">Prescriptions</h4>
            {patientData.prescriptions.length > 0 ? (
              <ul>
                {patientData.prescriptions.map((prescription, index) => (
                  <li key={index} className="mb-4">
                    <div className="bg-blue-50 p-4 rounded-lg shadow-sm">
                      <p className="text-sm font-medium text-blue-700">
                        <strong>Date:</strong> {prescription.date}
                      </p>
                      <p className="text-sm text-blue-600">
                        <strong>Medication:</strong> {prescription.medication}
                      </p>
                      <p className="text-sm text-blue-600">
                        <strong>Dosage:</strong> {prescription.dosage}
                      </p>
                      <p className="text-sm text-blue-600">
                        <strong>Prescribed By:</strong> {prescription.prescribedBy}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            ) : (
              <p>No prescriptions available.</p>
            )}
          </div>
        )}
      </div>
    </div>
    </div>
  );
};

export default ReportPage;
