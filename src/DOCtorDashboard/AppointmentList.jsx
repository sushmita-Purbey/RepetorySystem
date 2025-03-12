import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const AppointmentList = () => {
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [filter, setFilter] = useState("all"); // all, pending, accepted, rejected, rescheduled

  useEffect(() => {
    fetchAppointments();
  }, []);

  const fetchAppointments = async () => {
    try {
      setLoading(true);
      setError("");
      
      const response = await axios.get('/api/appointments/doctor', {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`
        }
      });
      
      if (response.data.success) {
        setAppointments(response.data.appointments);
      }
    } catch (error) {
      console.error("Error fetching appointments:", error);
      setError("Failed to load appointments. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  // Filter appointments based on status
  const filteredAppointments = filter === "all" 
    ? appointments 
    : appointments.filter(app => app.status === filter);

  // Format date for display
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  // Get status badge color
  const getStatusBadgeColor = (status) => {
    switch(status) {
      case 'pending': return 'bg-yellow-100 text-yellow-800';
      case 'accepted': return 'bg-green-100 text-green-800';
      case 'rejected': return 'bg-red-100 text-red-800';
      case 'rescheduled': return 'bg-blue-100 text-blue-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-blue-800 mb-6">My Appointments</h1>
      
      {error && (
        <div className="bg-red-100 text-red-700 p-4 mb-4 rounded-lg">
          {error}
        </div>
      )}
      
      <div className="mb-6">
        <div className="flex space-x-2">
          <button 
            onClick={() => setFilter("all")}
            className={`px-4 py-2 rounded-lg text-sm ${filter === "all" ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-800"}`}
          >
            All
          </button>
          <button 
            onClick={() => setFilter("pending")}
            className={`px-4 py-2 rounded-lg text-sm ${filter === "pending" ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-800"}`}
          >
            Pending
          </button>
          <button 
            onClick={() => setFilter("accepted")}
            className={`px-4 py-2 rounded-lg text-sm ${filter === "accepted" ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-800"}`}
          >
            Accepted
          </button>
          <button 
            onClick={() => setFilter("rejected")}
            className={`px-4 py-2 rounded-lg text-sm ${filter === "rejected" ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-800"}`}
          >
            Rejected
          </button>
          <button 
            onClick={() => setFilter("rescheduled")}
            className={`px-4 py-2 rounded-lg text-sm ${filter === "rescheduled" ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-800"}`}
          >
            Rescheduled
          </button>
        </div>
      </div>
      
      {loading ? (
        <div className="flex justify-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
        </div>
      ) : filteredAppointments.length === 0 ? (
        <div className="bg-gray-100 rounded-lg p-8 text-center">
          <p className="text-lg text-gray-600">No appointments found.</p>
        </div>
      ) : (
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {filteredAppointments.map((appointment) => (
            <div 
              key={appointment._id} 
              className="bg-white rounded-lg shadow-md p-4 border-l-4 border-blue-500 hover:shadow-lg transition"
            >
              <div className="flex justify-between items-start mb-3">
                <h3 className="font-bold text-lg">{appointment.patientName}</h3>
                <span className={`text-xs px-2 py-1 rounded-full ${getStatusBadgeColor(appointment.status)}`}>
                  {appointment.status.charAt(0).toUpperCase() + appointment.status.slice(1)}
                </span>
              </div>
              
              <div className="space-y-2 text-sm">
                <p><strong>Date:</strong> {formatDate(appointment.appointmentDate)}</p>
                <p><strong>Time:</strong> {appointment.appointmentTime}</p>
                <p><strong>Type:</strong> {appointment.appointmentType}</p>
                {appointment.reason && <p><strong>Reason:</strong> {appointment.reason}</p>}
              </div>
              
              <div className="mt-4 pt-4 border-t border-gray-200 flex justify-end">
                <Link 
                  to={`/doctor/appointments/${appointment._id}`}
                  className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition text-sm"
                >
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AppointmentList;