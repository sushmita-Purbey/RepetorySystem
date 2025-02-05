import React from 'react';

const AdminDashboard = () => {
  // Example Data (You would fetch this data from an API)
  const user = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    profilePic: 'https://via.placeholder.com/150', // Placeholder image
    appointments: [
      { date: '2025-02-10', time: '10:00 AM', status: 'Upcoming' },
      { date: '2025-01-30', time: '02:00 PM', status: 'Completed' },
      { date: '2025-01-15', time: '11:00 AM', status: 'Canceled' },
    ],
    paymentHistory: [
      { amount: '100 USD', date: '2025-01-30', mode: 'Online', status: 'Paid' },
      { amount: '150 USD', date: '2025-01-15', mode: 'Cash', status: 'Paid' },
    ],
    ratings: 4.5, // Example average rating
  };

  return (
    <div className="max-w-screen-lg mx-auto p-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Profile Section */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center">
            <img
              className="w-16 h-16 rounded-full object-cover"
              src={user.profilePic}
              alt="Profile"
            />
            <div className="ml-4">
              <h2 className="text-xl font-semibold">{user.name}</h2>
              <p className="text-gray-600">{user.email}</p>
            </div>
          </div>
          <div className="mt-4">
            <h3 className="text-lg font-semibold">Ratings</h3>
            <div className="flex items-center space-x-1">
              {Array.from({ length: 5 }, (_, index) => (
                <svg
                  key={index}
                  xmlns="http://www.w3.org/2000/svg"
                  fill={index < user.ratings ? 'yellow' : 'gray'}
                  className="w-5 h-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 15l-5.878 3.09 1.12-6.52-4.745-4.63 6.56-.91L10 2l2.943 6.13 6.56.91-4.745 4.63 1.12 6.52L10 15z"
                    clipRule="evenodd"
                  />
                </svg>
              ))}
            </div>
          </div>
        </div>

        {/* Appointments Section */}
        <div className="bg-white p-6 rounded-lg shadow-md col-span-2">
          <h3 className="text-lg font-semibold mb-4">Appointments</h3>
          <div>
            {user.appointments.map((appointment, index) => (
              <div key={index} className="flex justify-between py-2">
                <div>
                  <p className="font-semibold">{appointment.date} at {appointment.time}</p>
                  <p className="text-sm text-gray-600">{appointment.status}</p>
                </div>
                <div>
                  {appointment.status === 'Completed' && (
                    <button className="px-4 py-2 text-white bg-green-500 rounded-md">View Details</button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Payment History Section */}
      <div className="mt-6 bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-lg font-semibold mb-4">Payment History</h3>
        <div>
          {user.paymentHistory.map((payment, index) => (
            <div key={index} className="flex justify-between py-2">
              <div>
                <p className="font-semibold">{payment.date}</p>
                <p className="text-sm text-gray-600">Amount: {payment.amount}</p>
                <p className="text-sm text-gray-600">Mode: {payment.mode}</p>
              </div>
              <div>
                <span
                  className={`px-4 py-2 rounded-md ${
                    payment.status === 'Paid' ? 'bg-green-500' : 'bg-yellow-500'
                  } text-white`}
                >
                  {payment.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Receipt Report Section */}
      <div className="mt-6 bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-lg font-semibold mb-4">Receipt Reports</h3>
        <button className="px-4 py-2 text-white bg-blue-500 rounded-md">Download Report</button>
      </div>
    </div>
  );
};

export default AdminDashboard;
