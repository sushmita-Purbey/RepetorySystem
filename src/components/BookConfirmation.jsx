import { useLocation, useNavigate } from "react-router-dom";

const BookConfirmation = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { doctorName, formData } = location.state || {};

  if (!formData) {
    return <p className="text-center text-red-500">No booking details found. Please book an appointment first.</p>;
  }

  return (
    <div
      className="h-screen flex flex-col items-center justify-center bg-cover p-4"
      style={{ backgroundImage: "url('/appoinbg.jpg')" }}
    >
      <h1 className="text-3xl font-bold text-blue-800 mb-6">Booking Confirmation</h1>

      {/* Top: Doctor's Image and Name */}
      <div className="flex flex-col items-center mb-6">
        <img
          src="/allergies.jpg"
          alt="Doctor"
          className="rounded-lg w-32 h-32 mb-4" // Reduced size of the image
        />
        <p className="text-xl font-bold text-blue-600">{doctorName}</p>
      </div>

      {/* Form Section (2x2 grid layout) */}
      <div className="bg-white bg-opacity-80 backdrop-blur-lg p-8 rounded shadow-lg grid grid-cols-2 gap-6 w-full max-w-xl">

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
