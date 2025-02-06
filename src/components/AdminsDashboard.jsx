import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AdminDashboard = () => {
  const navigate = useNavigate();
  
  // Admin Profile Data (Example, replace with dynamic data fetching)
  const [admin, setAdmin] = useState({
    name: "Admin User",
    email: "admin@example.com",
    role: "admin", 
    profilePicture: "https://via.placeholder.com/150", // Profile image
  });

  // Profile update form data
  const [updateForm, setUpdateForm] = useState({
    name: admin.name,
    email: admin.email,
  });

  // Sample data for users and appointments (replace with dynamic data fetching)
  const [users, setUsers] = useState([
    { id: 1, name: "John Doe", email: "john@example.com", role: "doctor" },
    { id: 2, name: "Jane Smith", email: "jane@example.com", role: "doctor" },
  ]);

  const [appointments, setAppointments] = useState([
    { id: 1, date: "2025-02-10", time: "10:00 AM", patient: "John Doe", status: "Scheduled", paymentStatus: "Pending" },
    { id: 2, date: "2025-02-12", time: "02:00 PM", patient: "Jane Smith", status: "Completed", paymentStatus: "Paid" },
  ]);

  const [activeSection, setActiveSection] = useState("profile");

  // Handle Profile Update
  const handleProfileUpdate = (e) => {
    e.preventDefault();
    setAdmin(updateForm); // Update profile with new data
    setActiveSection("profile");
  };

  // Handle Logout
  const handleLogout = () => {
    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-gray-100 flex">
      {/* Sidebar */}
      <div className="w-64 bg-blue-800 text-white p-6">
        <h2 className="text-2xl font-bold text-center">Admin Dashboard</h2>
        <nav className="mt-8">
          <ul>
            <li>
              <button
                onClick={() => setActiveSection("profile")}
                className="w-full text-left py-2 px-4 hover:bg-blue-600 rounded-md"
              >
                Profile
              </button>
            </li>
            <li>
              <button
                onClick={() => setActiveSection("userReports")}
                className="w-full text-left py-2 px-4 hover:bg-blue-600 rounded-md"
              >
                User Reports
              </button>
            </li>
            <li>
              <button
                onClick={() => setActiveSection("appointments")}
                className="w-full text-left py-2 px-4 hover:bg-blue-600 rounded-md"
              >
                Appointments
              </button>
            </li>
            <li className="mt-8">
              <button
                onClick={handleLogout}
                className="w-full py-2 px-4 bg-red-600 rounded-md hover:bg-red-700"
              >
                Logout
              </button>
            </li>
          </ul>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6">
        <header className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold">{activeSection.charAt(0).toUpperCase() + activeSection.slice(1)}</h1>
        </header>

        {/* Profile Section */}
        {activeSection === "profile" && (
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold">Profile</h2>
            <div className="flex items-center mt-6">
              <img src={admin.profilePicture} alt="Profile" className="w-32 h-32 rounded-full object-cover mr-6" />
              <div>
                <p><strong>Name: </strong>{admin.name}</p>
                <p><strong>Email: </strong>{admin.email}</p>
                <p><strong>Role: </strong>{admin.role}</p>
                <button
                  onClick={() => setActiveSection("updateProfile")}
                  className="mt-4 text-blue-600 hover:underline"
                >
                  Edit Profile
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Profile Update Section */}
        {activeSection === "updateProfile" && (
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold">Update Profile</h2>
            <form onSubmit={handleProfileUpdate} className="mt-6">
              <div className="mb-4">
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                <input
                  type="text"
                  id="name"
                  value={updateForm.name}
                  onChange={(e) => setUpdateForm({ ...updateForm, name: e.target.value })}
                  className="mt-2 w-full px-4 py-2 border rounded-md"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  id="email"
                  value={updateForm.email}
                  onChange={(e) => setUpdateForm({ ...updateForm, email: e.target.value })}
                  className="mt-2 w-full px-4 py-2 border rounded-md"
                />
              </div>
              <button type="submit" className="w-full py-2 bg-blue-600 text-white rounded-md">Save Changes</button>
            </form>
          </div>
        )}

        {/* User Reports Section */}
        {activeSection === "userReports" && (
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold">User Reports</h2>
            <table className="min-w-full mt-4">
              <thead>
                <tr>
                  <th className="px-4 py-2 border">Name</th>
                  <th className="px-4 py-2 border">Email</th>
                  <th className="px-4 py-2 border">Role</th>
                  <th className="px-4 py-2 border">Action</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user) => (
                  <tr key={user.id}>
                    <td className="px-4 py-2 border">{user.name}</td>
                    <td className="px-4 py-2 border">{user.email}</td>
                    <td className="px-4 py-2 border">{user.role}</td>
                    <td className="px-4 py-2 border">
                      <button className="text-blue-600 hover:underline">Edit</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {/* Appointments Section */}
        {activeSection === "appointments" && (
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold">Appointments</h2>
            <table className="min-w-full mt-4">
              <thead>
                <tr>
                  <th className="px-4 py-2 border">Date</th>
                  <th className="px-4 py-2 border">Time</th>
                  <th className="px-4 py-2 border">Patient</th>
                  <th className="px-4 py-2 border">Status</th>
                  <th className="px-4 py-2 border">Payment Status</th>
                </tr>
              </thead>
              <tbody>
                {appointments.map((appointment) => (
                  <tr key={appointment.id}>
                    <td className="px-4 py-2 border">{appointment.date}</td>
                    <td className="px-4 py-2 border">{appointment.time}</td>
                    <td className="px-4 py-2 border">{appointment.patient}</td>
                    <td className="px-4 py-2 border">{appointment.status}</td>
                    <td className="px-4 py-2 border">{appointment.paymentStatus}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminDashboard;
