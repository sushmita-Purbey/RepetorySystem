import { useEffect, useState } from "react";
import axios from "axios";

const PatientRequests = () => {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    fetchAppointments();
  }, []);

  const fetchAppointments = async () => {
    try {
      const response = await axios.get("http://localhost:5000/appointments/pending");
      setAppointments(response.data);
    } catch (error) {
      console.error("Error fetching appointments:", error);
    }
  };

  const updateStatus = async (id, status) => {
    try {
      await axios.put(`http://localhost:5000/appointments/update-status/${id}`, { status });
      fetchAppointments(); // Refresh the list
    } catch (error) {
      console.error("Error updating status:", error);
    }
  };

  return (
    <div className="flex flex-wrap gap-4 p-4 w-3/4 ml-[270px]">
      {appointments.length === 0 ? (
        <p>There are no new appointment requests.</p>
      ) : (
        appointments.map((appointment) => (
          <div key={appointment._id} className="bg-white p-2 rounded-lg shadow-md w-[264px] h-[180px] flex flex-col justify-between">
            <p><strong>Patient:</strong> {appointment.name}</p>
            <p><strong>Date:</strong> {appointment.date}</p>
            <p><strong>Time:</strong> {appointment.time}</p>
            <div className="mt-2 flex gap-2">
              <button
                onClick={() => updateStatus(appointment._id, "accepted")}
                className="bg-green-500 text-white p-1 rounded"
              >
                Accept
              </button>
              <button
                onClick={() => updateStatus(appointment._id, "rejected")}
                className="bg-red-500 text-white p-1 rounded"
              >
                Reject
              </button>
              <button
                onClick={() => updateStatus(appointment._id, "pending")}
                className="bg-gray-500 text-white p-1 rounded"
              >
                Reset
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default PatientRequests;
