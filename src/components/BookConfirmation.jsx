import { useLocation, useNavigate } from "react-router-dom";

const BookConfirmation = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { formData } = location.state || {};

  if (!formData) {
    return <p className="text-center text-red-500">No booking details found. Please book an appointment first.</p>;
  }

  return (
    <div
      className="h-screen flex flex-col items-center justify-center bg-cover p-4"
      style={{ backgroundImage: "url('/bghome.png')" }}
    >
      <h1 className="text-3xl font-bold text-blue-800 mb-6">Booking Confirmation</h1>

      {/* Form Section with enhanced backdrop-blur effect */}
      <div className="bg-white bg-opacity-60 backdrop-blur-md p-8 rounded-2xl shadow-2xl grid grid-cols-2 gap-6 w-full max-w-xl border border-white/50">

        {/* Left Side: Patient Details */}
        <div className="flex flex-col p-4">
          <h2 className="text-xl font-bold text-blue-800 mb-2">Patient Details</h2>
          <p><strong>Name:</strong> {formData.name}</p>
          <p><strong>Age:</strong> {formData.age}</p>
          <p><strong>Email:</strong> {formData.email}</p>
          <p><strong>Address:</strong> {formData.address}</p>
          <p><strong>Appointment Date:</strong> {formData.date}</p>
          <p><strong>Reason for Visit:</strong> {formData.reason}</p>
        </div>

        {/* Right Side: Payment Options */}
        <div className="flex flex-col justify-start items-center p-4 space-y-4">
          <h2 className="text-xl font-bold text-blue-800 mb-4">Payment Options</h2>
          <button className="text-black text-sm rounded-3xl bg-blue-200 px-6 py-2 hover:bg-blue-100 transition duration-200">
            Pay Online
          </button>
          <button className="text-black text-sm rounded-3xl bg-blue-200 px-6 py-2 hover:bg-blue-100 transition duration-200">
            Pay via Cash
          </button>
          <button 
            onClick={() => navigate("/")}
            className="text-black text-sm rounded-3xl bg-blue-200 px-6 py-2 hover:bg-blue-100 transition duration-200">
            Cancel Appointment
          </button>
        </div>

      </div>
    </div>
  );
};

export default BookConfirmation;
