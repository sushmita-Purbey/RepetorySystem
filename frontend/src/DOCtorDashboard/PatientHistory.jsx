import React, { useEffect, useState } from "react";

const PatientHistory = () => {
  const [appointments, setAppointments] = useState([
    { patientName: "John Doe", contact: "123-456-7890", date: "2024-02-10", doctor: "Dr. Smith", department: "Cardiology", problem: "Chest Pain", disease: "Hypertension", prescription: "Aspirin, Beta-blockers", paymentMode: "Credit Card", amount: "$200", status: "Completed" },
    { patientName: "Jane Doe", contact: "987-654-3210", date: "2024-02-08", doctor: "Dr. Brown", department: "Dermatology", problem: "Skin Rash", disease: "Eczema", prescription: "Hydrocortisone Cream", paymentMode: "Cash", amount: "$100", status: "Completed" },
    { patientName: "Alice Johnson", contact: "111-222-3333", date: "2024-02-07", doctor: "Dr. Taylor", department: "Neurology", problem: "Headache", disease: "Migraine", prescription: "Ibuprofen, Sumatriptan", paymentMode: "Debit Card", amount: "$150", status: "Completed" },
    { patientName: "Robert Brown", contact: "444-555-6666", date: "2024-02-05", doctor: "Dr. Wilson", department: "Orthopedics", problem: "Knee Pain", disease: "Arthritis", prescription: "Pain Relievers, Physical Therapy", paymentMode: "Insurance", amount: "1300", status: "Completed" },
    
   
  ]);

  return (
    <div className="p-1 ml-2 shadow " >
      <h2 className="text-xl font-semibold mb-2">Past Appointments</h2>
      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-blue-100">
            <th className="border border-gray-300 text-md p-1">Patient Name</th>
            <th className="border border-gray-300 text-md p-1">Contact</th>
            <th className="border border-gray-300 text-md p-1">Date </th>
            <th className="border border-gray-300 text-md p-1">Department</th>
            <th className="border border-gray-300 text-md p-1">Problem</th>
            <th className="border border-gray-300 text-md p-1">Prescription</th>
            <th className="border border-gray-300 text-md p-1">Payment Mode</th>
            <th className="border border-gray-300 text-md p-1">Amount</th>
          </tr>
        </thead>
        <tbody>
          {appointments.map((appointment, index) => (
            <tr key={index} className="text-center">
              <td className="border border-gray-300 text-md p-1 bg-white">{appointment.patientName}</td>
              <td className="border border-gray-300 text-md p-1 bg-white">{appointment.contact}</td>
              <td className="border border-gray-300 text-md p-1 bg-white">{appointment.date}</td>
              <td className="border border-gray-300 text-md p-1 bg-white">{appointment.department}</td>
              <td className="border border-gray-300 text-md p-1 bg-white">{appointment.problem}</td>
              <td className="border border-gray-300 text-md p-1 bg-white">{appointment.prescription}</td>
              <td className="border border-gray-300 text-md p-1 bg-white">{appointment.paymentMode}</td>
              <td className="border border-gray-300 text-md p-1 bg-white">{appointment.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PatientHistory;
