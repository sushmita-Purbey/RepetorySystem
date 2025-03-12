// src/components/Overview.js
import React, { useState, useEffect } from 'react';
import { FaHeartbeat, FaChartLine, FaCalendarAlt } from 'react-icons/fa';

const Overview = () => {
  const [patient, setPatient] = useState({
    name: 'user',
   
    profilePicture: 'public/race-women-looking-young-horizontal-standing2-transformed (1).png',
    pastAppointments: [
      { date: '2025-01-15', type: 'Check-up' },
      { date: '2024-12-05', type: 'Consultation' },
    ],
    currentAppointments: [
      { date: '2025-02-10', type: 'Follow-up' },
      { date: '2025-02-20', type: 'Check-up' },
    ],
    reportLink: '#',
  });

  // ✅ Fetch user data from localStorage after login
  useEffect(() => {
    const loggedInUser = localStorage.getItem('user');
    if (loggedInUser) {
      const userData = JSON.parse(loggedInUser);
      setPatient((prev) => ({
        ...prev,
        name: userData.name || 'Unknown', // ✅ Use logged-in user's name
      }));
    }
  }, []);

  return (
    <div className="flex-1 w-[1260px] bg-blue-100 absolute top-0 right-0">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* ✅ Patient Information Section */}
        <div className="bg-white mt-10 rounded-lg shadow-lg p-6">
          <div className="flex items-center mb-6">
            <img
              src={patient.profilePicture}
              alt="Patient Profile"
              className="w-24 border-blue-300 border-2 h-24 rounded-full mr-6"
            />
            <div>
              <h2 className="text-3xl font-semibold">{patient.name}</h2>
              {/* <p className="text-blue-500 text-sm">{patient.disease}</p> */}
            </div>
          </div>
          <div className="text-lg">
            {/* <p className="mb-4"><strong>Age:</strong> {patient.age}</p>
            <p className="mb-4"><strong>Pulse Rate:</strong> {patient.pulseRate} bpm</p>
            <p className="mb-4"><strong>Blood Pressure:</strong> {patient.bp}</p> */}
            <a href={patient.reportLink} className="text-blue-500 hover:underline mt-4 block">
              View Patient Report
            </a>
          </div>
        </div>

        {/* ✅ Appointments Section */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          <div className="flex items-center mb-6">
            <FaCalendarAlt className="text-blue-500 text-3xl mr-4" />
            <h2 className="text-3xl font-semibold">Appointments</h2>
          </div>

          {/* Past Appointments */}
          <div className="mb-6">
            <h3 className="text-xl font-semibold text-blue-700 mb-4">Past Appointments</h3>
            <div className="space-y-3">
              {patient.pastAppointments.map((appointment, index) => (
                <div key={index} className="flex justify-between bg-blue-100 p-4 rounded-lg">
                  <div>
                    <p className="font-medium">{appointment.date}</p>
                    <p className="text-sm text-blue-500">{appointment.type}</p>
                  </div>
                  <FaChartLine className="text-green-500 text-2xl" />
                </div>
              ))}
            </div>
          </div>

          {/* Current Appointments */}
          <div>
            <h3 className="text-xl font-semibold text-blue-700 mb-4">Current Appointments</h3>
            <div className="space-y-3">
              {patient.currentAppointments.map((appointment, index) => (
                <div key={index} className="flex justify-between bg-blue-100 p-4 rounded-lg">
                  <div>
                    <p className="font-medium">{appointment.date}</p>
                    <p className="text-sm text-blue-500">{appointment.type}</p>
                  </div>
                  <FaChartLine className="text-blue-500 text-2xl" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;
