import React, { useState } from "react";
import Sidebar from "./Sidebar";

const AppointmentRequests = () => {
  const [requests, setRequests] = useState(
    Array.from({ length: 20 }, (_, index) => ({
      id: index + 1,
      name: `Patient ${index + 1}`,
      contact: `123-456-${(index + 1).toString().padStart(4, "0")}`,
      date: `2024-02-${(index % 28) + 1}`,
      time: `${9 + (index % 8)}:00 AM`,
      problem: "General Checkup",
      paymentMode: index % 2 === 0 ? "Online" : "Offline",
      status: "Pending",
    }))
  );

  const updateStatus = (id, newStatus) => {
    setRequests(requests.map(request => 
      request.id === id ? { ...request, status: newStatus } : request
    ));
  };

  return (
    <div className="flex">
      <div>
        <Sidebar/>
      </div>
    <div className="p-4 absolute right-10 top-10 w-[1200px] ">
      <h2 className="text-xl font-semibold mb-4">Appointment Requests</h2>
      <div className="overflow-y-auto max-h-[580px] border border-gray-300">
        <table className="w-full border-collapse border border-gray-300">
          <thead className="bg-blue-200">
            <tr>
              <th className="border border-gray-300 p-2">Name</th>
              <th className="border border-gray-300 p-2">Contact</th>
              <th className="border border-gray-300 p-2">Date</th>
              <th className="border border-gray-300 p-2">Time</th>
              <th className="border border-gray-300 p-2">Problem</th>
              <th className="border border-gray-300 p-2">Payment</th>
              <th className="border border-gray-300 p-2">Status</th>
              <th className="border border-gray-300 p-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {requests.map((request) => (
              <tr key={request.id} className="text-center">
                <td className="border border-gray-300 p-2">{request.name}</td>
                <td className="border border-gray-300 p-2">{request.contact}</td>
                <td className="border border-gray-300 p-2">{request.date}</td>
                <td className="border border-gray-300 p-2">{request.time}</td>
                <td className="border border-gray-300 p-2">{request.problem}</td>
                <td className="border border-gray-300 p-2">{request.paymentMode}</td>
                <td className="border border-gray-300 p-2">{request.status}</td>
                <td className="border border-gray-300 p-2">
                  <button className="bg-green-500 text-white px-2 py-1 rounded-md mr-2" onClick={() => updateStatus(request.id, "Accepted")}>
                    Accept
                  </button>
                  <button className="bg-red-500 text-white px-2 py-1 rounded-md mr-2" onClick={() => updateStatus(request.id, "Rejected")}>
                    Reject
                  </button>
                  <button className="bg-gray-500 text-white px-2 py-1 rounded-md" onClick={() => updateStatus(request.id, "Pending")}>
                    Reset
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    </div>
  );
};

export default AppointmentRequests;
