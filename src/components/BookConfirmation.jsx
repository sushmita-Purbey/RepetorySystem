import { useEffect } from "react";
import { useLocation, useNavigate, Link } from "react-router-dom";
import axios from "axios";

const API_BASE_URL = "http://localhost:5000/api";

const BookingConfirmation = () => {
  const location = useLocation();
  const navigate = useNavigate();
  
  // Get data from location state
  const { appointmentId, doctorName, formData } = location.state || {};
  
  // Redirect if no data is available
  useEffect(() => {
    if (!appointmentId || !doctorName || !formData) {
      navigate('/');
    }
  }, [appointmentId, doctorName, formData, navigate]);
  
  // If no data, show loading
  if (!appointmentId || !doctorName || !formData) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  // Fetch appointment status
  const [status, setStatus] = useState("");
  
  useEffect(() => {
    const fetchStatus = async () => {
      try {
        const response = await axios.get(`${API_BASE_URL}/appointments/${appointmentId}`);
        setStatus(response.data.status);
      } catch (error) {
        console.error("Error fetching appointment status:", error);
      }
    };
    fetchStatus();
  }, [appointmentId]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-100 px-4 bg-cover" style={{ backgroundImage: "url('/back 1.png')" }}>
      <div className="max-w-md w-full bg-white bg-opacity-90 backdrop-blur-lg rounded-lg shadow-lg p-8">
        <div className="text-center mb-6">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 text-green-500 mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h1 className="text-3xl font-bold text-blue-800">Booking Confirmed!</h1>
          <p className="text-gray-600 mt-2">Your appointment has been scheduled successfully.</p>
        </div>
        
        <div className="bg-blue-50 rounded-lg p-4 my-6">
          <h2 className="font-bold text-lg text-blue-800 mb-2">Appointment Details</h2>
          <p><strong>Doctor:</strong> {doctorName}</p>
          <p><strong>Date:</strong> {formData.appointmentDate}</p>
          <p><strong>Time:</strong> {formData.appointmentTime}</p>
          <p><strong>Type:</strong> {formData.appointmentType}</p>
          
          <div className="mt-3 pt-3 border-t border-blue-100">
            <p className="text-sm text-blue-600">Confirmation ID: {appointmentId}</p>
            <p className="text-sm text-gray-600 mt-1">Please keep this ID for your reference.</p>
            <p className="text-sm text-gray-600 mt-1">Status: {status}</p>
          </div>
        </div>
        
        <div className="text-center space-y-4">
          <p className="text-gray-600">
            We've sent a confirmation email to <strong>{formData.patientEmail}</strong> with all the details.
          </p>
          
          <p className="text-sm text-gray-500">
            You can check the status of your appointment or manage your bookings in your account.
          </p>
          
          <div className="mt-6 pt-4 border-t border-gray-200 flex justify-center space-x-4">
            <Link 
              to="/"
              className="bg-blue-500 text-white py-2 px-6 rounded-lg hover:bg-blue-700 transition"
            >
              Back to Home
            </Link>
            
            <Link 
              to="/my-appointments"
              className="bg-gray-200 text-gray-800 py-2 px-6 rounded-lg hover:bg-gray-300 transition"
            >
              My Appointments
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingConfirmation;
