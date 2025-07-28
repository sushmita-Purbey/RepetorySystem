// AppointmentRequests.js
import { useState, useEffect } from "react";
import axios from "axios";
import Sidebar from "./Sidebar";

const API_BASE_URL = 'http://localhost:5000/api';

const AppointmentRequests = () => {
  const [requests, setRequests] = useState([]);

  useEffect(() => {
    fetchAppointments();
  }, []);

  const fetchAppointments = async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}/appointments`);
      setRequests(response.data);
    } catch (error) {
      console.error('Error fetching appointments:', error);
    }
  };

  const updateStatus = async (id, newStatus) => {
    try {
      await axios.patch(`${API_BASE_URL}/appointments/${id}/status`, { status: newStatus });
      fetchAppointments(); // Refresh the list after update
    } catch (error) {
      console.error('Error updating appointment status:', error);
    }
  };

  return (
    <div className="flex">
      <div>
        <Sidebar />
      </div>
      <div className="p-4 absolute right-10 top-10 w-[1200px]">
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
                <tr key={request._id} className="text-center">
                  <td className="border border-gray-300 p-2">{request.name}</td>
                  <td className="border border-gray-300 p-2">{request.contact}</td>
                  <td className="border border-gray-300 p-2">{request.date}</td>
                  <td className="border border-gray-300 p-2">{request.time}</td>
                  <td className="border border-gray-300 p-2">{request.problem}</td>
                  <td className="border border-gray-300 p-2">{request.paymentMode}</td>
                  <td className="border border-gray-300 p-2">{request.status}</td>
                  <td className="border border-gray-300 p-2">
                    <button
                      className="bg-green-500 text-white px-2 py-1 rounded-md mr-2 hover:bg-green-600 transition duration-300"
                      onClick={() => updateStatus(request._id, "Accepted")}
                    >
                      Accept
                    </button>
                    <button
                      className="bg-red-500 text-white px-2 py-1 rounded-md mr-2 hover:bg-red-600 transition duration-300"
                      onClick={() => updateStatus(request._id, "Rejected")}
                    >
                      Reject
                    </button>
                    <button
                      className="bg-gray-300 text-black px-2 py-1 rounded-md hover:bg-gray-400 transition duration-300"
                      onClick={() => updateStatus(request._id, "pending")}
                    >
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
