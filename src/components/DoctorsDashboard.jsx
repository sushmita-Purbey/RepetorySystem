<<<<<<< HEAD
import { useState } from "react";
=======

>>>>>>> 47aec47d6630cd4414b3a6f1d6bf364f867e1886

const DoctorsDashboard = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [doctor, setDoctor] = useState({
    name: "Dr. John Doe",
    specialization: "Cardiologist",
    experience: "10+ years in cardiology",
    description: "Passionate about providing the best cardiac care with a holistic approach.",
    email: "johndoe@example.com",
    phone: "+91 9876543210",
    fees: "500",
    availabilityDays: ["Monday", "Wednesday", "Friday"],
    availabilityDates: ["2025-02-15", "2025-02-20"],
    mode: "Online & Offline",
  });

  const [appointments, setAppointments] = useState([
    { id: 1, patient: "Alice Johnson", date: "2025-02-12", status: "Pending" },
    { id: 2, patient: "Michael Smith", date: "2025-02-14", status: "Approved" },
  ]);

  const [reviews] = useState([
    { patient: "Sarah Lee", rating: 5, comment: "Amazing doctor, very understanding." },
    { patient: "David Brown", rating: 4, comment: "Great experience, very professional." },
  ]);

  const [history] = useState([
    { patient: "Alice Johnson", diagnosis: "Hypertension", lastVisit: "2025-01-12" },
    { patient: "Michael Smith", diagnosis: "Arrhythmia", lastVisit: "2025-01-18" },
  ]);

  const toggleEdit = () => setIsEditing(!isEditing);

  const updateDoctorDetails = (e) => {
    const { name, value } = e.target;
    setDoctor((prev) => ({ ...prev, [name]: value }));
  };

  const handleAppointmentAction = (id, status) => {
    setAppointments((prev) =>
      prev.map((apt) => (apt.id === id ? { ...apt, status } : apt))
    );
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-lg p-6">
        {/* Doctor Profile & Edit */}
        <div className="flex flex-col md:flex-row items-center md:items-start gap-6 border-b pb-6">
          <img
            src="/doctor-profile.jpg"
            alt="Doctor"
            className="w-32 h-32 object-cover rounded-full border-4 border-blue-500"
          />
          <div className="flex-1">
            {isEditing ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input type="text" name="name" value={doctor.name} onChange={updateDoctorDetails} className="border p-2 rounded" />
                <input type="text" name="specialization" value={doctor.specialization} onChange={updateDoctorDetails} className="border p-2 rounded" />
                <input type="email" name="email" value={doctor.email} onChange={updateDoctorDetails} className="border p-2 rounded" />
                <input type="text" name="phone" value={doctor.phone} onChange={updateDoctorDetails} className="border p-2 rounded" />
                <input type="text" name="fees" value={doctor.fees} onChange={updateDoctorDetails} className="border p-2 rounded" />
                <textarea name="description" value={doctor.description} onChange={updateDoctorDetails} className="border p-2 rounded col-span-2"></textarea>
                <input type="text" name="experience" value={doctor.experience} onChange={updateDoctorDetails} className="border p-2 rounded col-span-2" />
              </div>
            ) : (
              <div>
                <h2 className="text-2xl font-bold">{doctor.name}</h2>
                <p className="text-gray-600">{doctor.specialization}</p>
                <p className="text-gray-700">{doctor.email}</p>
                <p className="text-gray-700">{doctor.phone}</p>
                <p className="text-gray-700">Fees: ₹{doctor.fees}</p>
                <p className="mt-2">{doctor.description}</p>
                <p className="text-gray-700 mt-1">{doctor.experience}</p>
              </div>
            )}
          </div>
          <button onClick={toggleEdit} className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
            {isEditing ? "Save" : "Edit"}
          </button>
        </div>

        {/* Appointment Details */}
        <div className="mt-6">
          <h3 className="text-xl font-semibold text-blue-600">Appointments</h3>
          <div className="mt-3 bg-gray-50 p-4 rounded-lg shadow">
            {appointments.map((apt) => (
              <div key={apt.id} className="flex justify-between items-center border-b py-3">
                <p className="text-gray-700">{apt.patient} - {apt.date} ({apt.status})</p>
                {apt.status === "Pending" && (
                  <div className="flex gap-2">
                    <button className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600" onClick={() => handleAppointmentAction(apt.id, "Approved")}>Approve</button>
                    <button className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600" onClick={() => handleAppointmentAction(apt.id, "Rejected")}>Reject</button>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Availability Settings */}
        <div className="mt-6">
          <h3 className="text-xl font-semibold text-blue-600">Availability</h3>
          <div className="bg-gray-50 p-4 rounded-lg shadow mt-3">
            <label className="block font-semibold">Available Days</label>
            <input type="text" name="availabilityDays" value={doctor.availabilityDays.join(", ")} onChange={updateDoctorDetails} className="border p-2 rounded w-full" />
            <label className="block font-semibold mt-3">Available Dates</label>
            <input type="text" name="availabilityDates" value={doctor.availabilityDates.join(", ")} onChange={updateDoctorDetails} className="border p-2 rounded w-full" />
          </div>
        </div>

        {/* Reviews */}
        <div className="mt-6">
          <h3 className="text-xl font-semibold text-blue-600">Reviews</h3>
          <div className="bg-gray-50 p-4 rounded-lg shadow mt-3">
            {reviews.map((review, index) => (
              <p key={index} className="border-b pb-2 mb-2">{review.patient}: ⭐ {review.rating} - "{review.comment}"</p>
            ))}
          </div>
        </div>

        {/* Past Patients History */}
        <div className="mt-6">
          <h3 className="text-xl font-semibold text-blue-600">Past Patients History</h3>
          <div className="bg-gray-50 p-4 rounded-lg shadow mt-3">
            {history.map((record, index) => (
              <p key={index} className="border-b pb-2 mb-2">{record.patient}: {record.diagnosis} (Last Visit: {record.lastVisit})</p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorsDashboard;
