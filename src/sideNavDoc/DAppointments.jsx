// src/pages/DAppointment.js
import React, { useState, useEffect } from "react";
import DocDashSidebar from "./DocDashSidebar";

const DAppointment = () => {
  // Get today's date in YYYY-MM-DD format
  const today = new Date().toISOString().split("T")[0];

  // Sample appointment requests (these would normally come from an API)
  const [appointmentRequests, setAppointmentRequests] = useState([
    { id: 1, name: "John Doe", age: 45, contact: "123-456-7890", reason: "Chest pain", time:"3:00 pm",mode:"offline" ,date: "2025-02-15"  },
    { id: 2, name: "Emma Smith", age: 32, contact: "987-654-3210", reason: "Regular check-up", time:"12:00 pm",mode:"online" ,date: "2025-02-18" },
    { id: 3, name: "Michael Brown", age: 50, contact: "555-678-1234", reason: "Heart palpitations", time:"4:00 pm",mode:"offline" ,date: "2025-02-20" },
  ]);

  // State for Confirmed, Rejected, and Past Appointments
  const [confirmedAppointments, setConfirmedAppointments] = useState([]);
  const [rejectedAppointments, setRejectedAppointments] = useState([]);
  const [pastAppointments, setPastAppointments] = useState([]);

  // Handle Accept Appointment
  const acceptAppointment = (appointment) => {
    setConfirmedAppointments([...confirmedAppointments, appointment]);
    setAppointmentRequests(appointmentRequests.filter((req) => req.id !== appointment.id));
  };

  // Handle Reject Appointment
  const rejectAppointment = (appointment) => {
    setRejectedAppointments([...rejectedAppointments, appointment]);
    setAppointmentRequests(appointmentRequests.filter((req) => req.id !== appointment.id));
  };

  // Move confirmed appointments to past if the date has passed
  useEffect(() => {
    const updatedPastAppointments = confirmedAppointments.filter((appointment) => appointment.date < today);
    setPastAppointments([...pastAppointments, ...updatedPastAppointments]);
    setConfirmedAppointments(confirmedAppointments.filter((appointment) => appointment.date >= today));
  }, [confirmedAppointments, today]);

  return (
    <div className="flex">
      {/* Sidebar */}
      <div className="w-64">
        <DocDashSidebar />
      </div>

      {/* Main Content */}
      <div className="flex-1 bg-blue-100 h-screen p-6">
        <h2 className="text-3xl font-bold text-center mb-6">Doctor's Appointments</h2>

        {/* Pending Appointment Requests */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-4">Patient Appointment Requests</h3>
          {appointmentRequests.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {appointmentRequests.map((appointment) => (
                <div key={appointment.id} className="bg-blue-300 p-4 rounded-lg shadow-md">
                  <h4 className="text-lg font-semibold">{appointment.name} (Age: {appointment.age})</h4>
                  <p className="text-sm">Reason: {appointment.reason}</p>
                  <p className="text-sm">Date: {appointment.date}</p>
                  <p className="text-sm">Time: {appointment.time}</p>
                  <p className="text-sm">mode: {appointment.mode }</p>
                  <p className="text-sm">Contact: {appointment.contact}</p>
                  <div className="mt-3 flex gap-2">
                    <button
                      onClick={() => acceptAppointment(appointment)}
                      className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded"
                    >
                      Accept
                    </button>
                    <button
                      onClick={() => rejectAppointment(appointment)}
                      className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded"
                    >
                      Reject
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-gray-500">No appointment requests.</p>
          )}
        </div>

        {/* Confirmed Appointments */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-4">Confirmed Appointments</h3>
          {confirmedAppointments.length > 0 ? (
            <ul className="space-y-3">
              {confirmedAppointments.map((appointment) => (
                <li
                  key={appointment.id}
                  className="bg-green-300 p-3 rounded-lg shadow-md flex justify-between items-center"
                >
                  <span>
                    <strong>{appointment.name}</strong> (Age: {appointment.age}) - {appointment.reason} 
                    <br /> 📅 {appointment.date} | 📞 {appointment.contact}
                  </span>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-500">No confirmed appointments.</p>
          )}
        </div>

        {/* Rejected Appointments */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-4">Rejected Appointments</h3>
          {rejectedAppointments.length > 0 ? (
            <ul className="space-y-3">
              {rejectedAppointments.map((appointment) => (
                <li
                  key={appointment.id}
                  className="bg-red-300 p-3 rounded-lg shadow-md flex justify-between items-center"
                >
                  <span>
                    <strong>{appointment.name}</strong> (Age: {appointment.age}) - {appointment.reason} 
                    <br /> 📅 {appointment.date} | 📞 {appointment.contact}
                  </span>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-500">No rejected appointments.</p>
          )}
        </div>

        {/* Past Appointments */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Past Appointments</h3>
          {pastAppointments.length > 0 ? (
            <ul className="space-y-3">
              {pastAppointments.map((appointment) => (
                <li
                  key={appointment.id}
                  className="bg-gray-400 p-3 rounded-lg shadow-md flex justify-between items-center"
                >
                  <span>
                    <strong>{appointment.name}</strong> (Age: {appointment.age}) - {appointment.reason} 
                    <br /> 📅 {appointment.date} | 📞 {appointment.contact}
                  </span>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-500">No past appointments.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default DAppointment;
