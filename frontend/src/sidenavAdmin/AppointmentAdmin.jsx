// src/components/Appointments.js

import { FaCalendarAlt, FaChartLine } from 'react-icons/fa'; // Adding icons for a better UI

import AdminDashSidebar from '../components/AdminDashSidebar';

const AppointmentAdmin = () => {
  const patient = {
    name: 'John Doe',
    pastAppointments: [
      { date: '2025-01-15', type: 'Check-up', doctor: 'Dr. Smith', location: 'Room 101' },
      { date: '2024-12-05', type: 'Consultation', doctor: 'Dr. Johnson', location: 'Room 203' },
    ],
    currentAppointments: [
      { date: '2025-02-10', type: 'Follow-up', doctor: 'Dr. Lee', location: 'Room 102' },
      { date: '2025-02-20', type: 'Check-up', doctor: 'Dr. Smith', location: 'Room 104' },
    ],
  };

  return (
    <div>
    <div className="flex flex-col h-screen">
        <AdminDashSidebar/>
    </div>
    <div className="flex-1 w-[1276px]  bg-[#ADD8E6] absolute top-0 right-0 ">
      <div className="grid  grid-cols-1 md:grid-cols-2 gap-6">
        {/* Appointments Section */}
        <div className="bg-blue-100 rounded-lg shadow-lg p-6">
          <div className="flex items-center mb-4">
            <FaCalendarAlt className="text-blue-500 text-3xl mr-4" />
            <h2 className="text-3xl font-semibold">Appointments for {patient.name}</h2>
          </div>

          {/* Past Appointments */}
          <div className="mb-6">
            <h3 className="text-xl font-semibold text-blue-700 mb-4">Past Appointments</h3>
            <div className="space-y-3">
              {patient.pastAppointments.map((appointment, index) => (
                <div key={index} className="flex justify-between bg-white p-4 rounded-lg">
                  <div>
                    <p className="font-medium">{appointment.date}</p>
                    <p className="text-sm text-blue-500">{appointment.type}</p>
                    <p className="text-sm text-blue-500">Doctor: {appointment.doctor}</p>
                    <p className="text-sm text-blue-500">Location: {appointment.location}</p>
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
                <div key={index} className="flex justify-between bg-white p-4 rounded-lg  ">
                  <div>
                    <p className="font-medium">{appointment.date}</p>
                    <p className="text-sm text-blue-500">{appointment.type}</p>
                    <p className="text-sm text-gray-500">Doctor: {appointment.doctor}</p>
                    <p className="text-sm text-gray-500">Location: {appointment.location}</p>
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

export default AppointmentAdmin;
