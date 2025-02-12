// src/components/Overview.js
import React from 'react';
import { FaHeartbeat, FaChartLine, FaCalendarAlt } from 'react-icons/fa'; // Adding icons for a better UI
import DocDashSidebar from './DocDashSidebar';

const DocOverview = () => {
  const doctor = {
    name: 'John Doe',
    pulseRate: 72,
    introduction: "Dedicated cardiologist with 10+ years of experience in treating heart-related conditions. Passionate about providing the best care and improving patient health.",
    Experience: "10+",
    spacialist: 'Cardiologist',
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
  }; 

  return (
    <div className='flex'>
          <div className="w-64">
        <DocDashSidebar />
      </div>
    <div className="flex-1 w-[1260px] bg-blue-100 absolute top-0 right-0">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Patient Information Section */}
        <div className="bg-white mt-10 rounded-lg shadow-lg p-6">
          <div className="flex  items-center mb-6">
            <img
              src={doctor.profilePicture}
              alt="Patient Profile"
              className="w-24 border-blue-300 border-2 h-24 rounded-full mr-6"
            />
            <div>
              <h2 className="text-3xl font-semibold">{doctor.name}</h2>
              <p className="text-blue-500 text-sm">{doctor.spacialist}</p>
            </div>
          </div>
          <div className="text-lg">
            <p className="mb-4 text-sm text-gray-900">Experience: {doctor.Experience}</p>
            <p className="mb-4 text-gray-900 text-sm "> {doctor.introduction}</p>
            
          </div>
        </div>

        {/* Appointments Section */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          <div className="flex items-center mb-6">
            <FaCalendarAlt className="text-blue-500 text-3xl mr-4" />
            <h2 className="text-3xl font-semibold">Appointments</h2>
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-semibold text-blue-700 mb-4">Past Appointments</h3>
            <div className="space-y-3">
              {doctor.pastAppointments.map((appointment, index) => (
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

          <div>
            <h3 className="text-xl font-semibold text-blue-700 mb-4">Current Appointments</h3>
            <div className="space-y-3">
              {doctor.currentAppointments.map((appointment, index) => (
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
    </div>
  );
};

export default DocOverview;
