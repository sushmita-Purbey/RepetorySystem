import React, { useState } from "react";
import Sidebar from "./Sidebar";

const PatientList = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [patients] = useState(
    Array.from({ length: 110 }, (_, index) => ({
      id: index + 1,
      name: `Patient ${index + 1}`,
      contact: `123-456-${(index + 1).toString().padStart(4, "0")}`,
      date: `2024-02-${(index % 28) + 1}`,
      problem: "General Checkup",
      prescription: "Vitamin C, Paracetamol",
      paymentMode: "Credit Card",
      amount: `${(200 + (index % 5) * 100)}`,
      time: `${9 + (index % 8)}:00 AM`,
    }))
  );

  const filteredPatients = patients.filter((patient) =>
    patient.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="flex">
        <div>
            <Sidebar/>
        </div>
    <div className="p-4 absolute right-0 w-[1250px] h-screen">
      <h2 className="text-xl  font-semibold mb-4">Patient List</h2>
      <input
        type="text"
        placeholder="Search by name..."
        className="border bg-blue-100 border-black p-2 mb-4 w-full"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <div className="overflow-y-auto max-h-[570px] border border-gray-300">
        <table className="w-full border-collapse border border-gray-300">
          <thead className="bg-blue-200">
            <tr>
              <th className="border border-gray-300 p-2">Name</th>
              <th className="border border-gray-300 p-2">Contact</th>
              <th className="border border-gray-300 p-2">Date</th>
              <th className="border border-gray-300 p-2">Problem</th>
              <th className="border border-gray-300 p-2">Prescription</th>
              <th className="border border-gray-300 p-2">Payment</th>
              <th className="border border-gray-300 p-2">Amount</th>
              <th className="border border-gray-300 p-2">Time</th>
            </tr>
          </thead>
          <tbody>
            {filteredPatients.map((patient) => (
              <tr key={patient.id} className="text-center">
                <td className="border border-gray-300 p-2">{patient.name}</td>
                <td className="border border-gray-300 p-2">{patient.contact}</td>
                <td className="border border-gray-300 p-2">{patient.date}</td>
                <td className="border border-gray-300 p-2">{patient.problem}</td>
                <td className="border border-gray-300 p-2">{patient.prescription}</td>
                <td className="border border-gray-300 p-2">{patient.paymentMode}</td>
                <td className="border border-gray-300 p-2">{patient.amount}</td>
                <td className="border border-gray-300 p-2">{patient.time}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    </div>
  );
};

export default PatientList;
