import React, { useState } from "react";
import Sidebar from "./Sidebar";

const PaymentPage = () => {
  const [search, setSearch] = useState("");
  const [payments, setPayments] = useState(
    Array.from({ length: 100 }, (_, i) => ({
      id: i + 1,
      patientName: `Patient ${i + 1}`,
      amount: 500,
      date: `2025-02-${String((i % 28) + 1).padStart(2, "0")}`,
      status: i % 2 === 0 ? "Paid" : "Unpaid",
    }))
  );

  const filteredPayments = payments.filter((payment) =>
    payment.patientName.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="flex ">
        <div>
            <Sidebar/>
        </div>
    <div className="p-8 w-[1300px] absolute h-screen  right-12 max-w-6xl mx-auto">
      <h1 className="text-2xl text-blue-900 font-semibold mb-4">Patient Payment History</h1>
      <input
        type="text"
        placeholder="Search by patient name..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="mb-4 p-2 border border-blue-800 rounded w-full"
      />
      <div className="border border-gray-300 rounded p-4 overflow-y-scroll h-[550px]">
        <table className="w-full border-collapse border bg-white shadow border-gray-400">
          <thead>
            <tr className="bg-blue-100">
              <th className="border border-gray-400 font-semibold text-gray-600 p-2">Patient Name</th>
              <th className="border border-gray-400 font-semibold text-gray-600 p-2">Amount</th>
              <th className="border border-gray-400 font-semibold text-gray-600 p-2">Date</th>
              <th className="border border-gray-400 font-semibold text-gray-600 p-2">Status</th>
            </tr>
          </thead>
          <tbody>
            {filteredPayments.map((payment) => (
              <tr key={payment.id} className="text-center">
                <td className="border border-gray-400 font-semibold text-gray-600 p-2">{payment.patientName}</td>
                <td className="border border-gray-400 font-semibold text-gray-600 p-2">{payment.amount}</td>
                <td className="border border-gray-400 font-semibold text-gray-600 p-2">{payment.date}</td>
                <td className="border border-gray-400 font-semibold text-gray-600 p-2">
                  <span className={
                    payment.status === "Paid" ? "text-green-600" : "text-red-600"
                  }>
                    {payment.status}
                  </span>
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

export default PaymentPage;