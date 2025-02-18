import { useState, useEffect } from "react";
import Sidebar from "./Sidebar";
import { fetchPayments } from "../api";

const PaymentPage = () => {
  const [search, setSearch] = useState("");
  const [payments, setPayments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Move filteredPayments declaration before any usage
  const filteredPayments = payments.filter((payment) =>
    payment.patientName.toLowerCase().includes(search.toLowerCase())
  );

  useEffect(() => {
    const loadPayments = async () => {
      try {
        console.log("Fetching payments...");
        setLoading(true);
        const data = await fetchPayments();
        console.log("Fetched data:", data);
        setPayments(data);
        setError(null);
      } catch (err) {
        console.error("Error details:", err);
        setError('Failed to fetch payments. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    loadPayments();
  }, []);

  // Console logs after filteredPayments is defined
  console.log("Current payments:", payments);
  console.log("Filtered payments:", filteredPayments);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div>Loading payments...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="text-red-500">{error}</div>
      </div>
    );
  }

  return (
    <div className="flex">
      <div>
        <Sidebar />
      </div>
      <div className="p-8 w-[1300px] absolute h-screen right-12 max-w-6xl mx-auto">
        <h1 className="text-2xl text-blue-900 font-semibold mb-4">
          Patient Payment History
        </h1>
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
                <th className="border border-gray-400 font-semibold text-gray-600 p-2">
                  Patient Name
                </th>
                <th className="border border-gray-400 font-semibold text-gray-600 p-2">
                  Amount
                </th>
                <th className="border border-gray-400 font-semibold text-gray-600 p-2">
                  Date
                </th>
                <th className="border border-gray-400 font-semibold text-gray-600 p-2">
                  Status
                </th>
              </tr>
            </thead>
            <tbody>
              {filteredPayments.length > 0 ? (
                filteredPayments.map((payment) => (
                  <tr key={payment._id} className="text-center">
                    <td className="border border-gray-400 font-semibold text-gray-600 p-2">
                      {payment.patientName}
                    </td>
                    <td className="border border-gray-400 font-semibold text-gray-600 p-2">
                      {payment.amount}
                    </td>
                    <td className="border border-gray-400 font-semibold text-gray-600 p-2">
                      {payment.date}
                    </td>
                    <td className="border border-gray-400 font-semibold text-gray-600 p-2">
                      <span
                        className={
                          payment.status === "Paid"
                            ? "text-green-600"
                            : "text-red-600"
                        }
                      >
                        {payment.status}
                      </span>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="4" className="text-center p-4">
                    No payments found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default PaymentPage;