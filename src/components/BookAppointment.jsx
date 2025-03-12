import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const BookAppointment = () => {
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [doctorName, setDoctorName] = useState("");
  const [problem, setProblem] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [paymentMode, setPaymentMode] = useState("Cash");
  const [message, setMessage] = useState("");

  const handleAppointment = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/book-appointment", {
        name,
        contact,
        doctorName,
        problem,
        date,
        time,
        paymentMode,
      });

      if (response.data.success) {
        setMessage("✅ Appointment booked successfully!");
      } else {
        setMessage("❌ " + response.data.message);
      }
    } catch (error) {
      setMessage("❌ Appointment booking failed. Try again.");
    }
  };

  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-3xl font-bold mb-4">Book an Appointment</h1>
      {message && <p className="text-red-500">{message}</p>}
      <form onSubmit={handleAppointment} className="bg-white p-6 rounded-lg shadow-md w-96 space-y-2">
        <input
          type="text"
          placeholder="Patient Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full p-2 border rounded"
          required
        />
        <input
          type="text"
          placeholder="Contact Number"
          value={contact}
          onChange={(e) => setContact(e.target.value)}
          className="w-full p-2 border rounded"
          required
        />
        <input
          type="text"
          placeholder="Doctor Name"
          value={doctorName}
          onChange={(e) => setDoctorName(e.target.value)}
          className="w-full p-2 border rounded"
          required
        />
        <textarea
          placeholder="Describe your problem"
          value={problem}
          onChange={(e) => setProblem(e.target.value)}
          className="w-full p-2 border rounded"
          required
        ></textarea>
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="w-full p-2 border rounded"
          required
        />
        <input
          type="time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          className="w-full p-2 border rounded"
          required
        />
        <select
          value={paymentMode}
          onChange={(e) => setPaymentMode(e.target.value)}
          className="w-full p-2 border rounded"
          required
        >
          <option value="Cash">Cash</option>
          <option value="Credit Card">Credit Card</option>
          <option value="UPI">UPI</option>
        </select>
        <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded">Book Appointment</button>
      </form>
      <Link className="mt-4 text-blue-600 hover:underline" to="/user-dashboard">View Appointments</Link>
    </div>
  );
};

export default BookAppointment;
