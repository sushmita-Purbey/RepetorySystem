import React, { useState } from "react";

const PatientRequests = () => {
  const [requests, setRequests] = useState([
    { id: 1, patientName: "John Doe", contact: "123-456-7890", date: "2024-02-15", problem: "Chest Pain", status: "Pending" , time:"10:00 am" },
    { id: 2, patientName: "Jane Doe", contact: "987-654-3210", date: "2024-02-16", problem: "Skin Rash", status: "Pending" , time:"4:10 pm" },
    { id: 3, patientName: "Alice Johnson", contact: "111-222-3333", date: "2024-02-17", problem: "Headache", status: "Pending" , time:"5:20 pm" },
  ]);

  const updateStatus = (id, newStatus) => {
    setRequests(requests.map(request => 
      request.id === id ? { ...request, status: newStatus } : request
    ));
  };

  return (
    <div className="p-1 w-[1220px] rounded absolute right-8 shadow">
      <h2 className="text-md font-semibold mb-1">Current Appointment Requests</h2>
      <table className="w-full rounded  border-collapse text-md border border-gray-300">
        <thead>
          <tr className="bg-blue-100">
            <th className="border border-gray-300 p-2">Patient Name</th>
            <th className="border border-gray-300 p-2">Contact</th>
            <th className="border border-gray-300 p-2">Date </th>
            <th className="border border-gray-300 p-2">Time</th>
            <th className="border border-gray-300 p-2">Problem</th>
            <th className="border border-gray-300 p-2">Status</th>
            <th className="border border-gray-300 p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {requests.map((request) => (
            <tr key={request.id} className="text-center">
              <td className="text-xs font-semibold border border-gray-300 p-2">{request.patientName}</td>
              <td className="text-xs font-semibold border border-gray-300 p-2">{request.contact}</td>
              <td className="text-xs font-semibold border border-gray-300 p-2">{request.date}</td>
              <td className="text-xs font-semibold border border-gray-300 p-2">{request.time}</td>
              <td className="text-xs font-semibold border border-gray-300 p-2">{request.problem}</td>
              <td className="text-xs font-semibold border border-gray-300 p-2">{request.status}</td>
              <td className="text-xs font-semibold border border-gray-300 p-2">
                <button className="bg-green-500 text-white px-2 py-1 rounded-lg mr-2" onClick={() => updateStatus(request.id, "Approved")}>
                  Approve
                </button>
                <button className="bg-red-500 text-white px-2 py-1 rounded-lg mr-2" onClick={() => updateStatus(request.id, "Rejected")}>
                  Reject
                </button>
                <button className="bg-blue-400 text-white px-2 py-1 rounded-lg" onClick={() => updateStatus(request.id, "Pending")}>
                  Reset
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PatientRequests;
