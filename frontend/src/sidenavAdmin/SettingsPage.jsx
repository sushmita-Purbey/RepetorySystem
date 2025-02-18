// SettingsPage.jsx
import React, { useState } from "react";
import AdminDashSidebar from "../components/AdminDashSidebar";

const SettingsPage = () => {
  // Simulating user data (You can replace this with real data)
  const [user, setUser] = useState({
    name: "John Doe",
    email: "johndoe@example.com",
    phone: "123-456-7890",
    profilePic: "public/race-women-looking-young-horizontal-standing2-transformed (1).png", // Placeholder image
  });

  // Form data state for editing
  const [formData, setFormData] = useState({
    name: user.name,
    email: user.email,
    phone: user.phone,
    profilePic: user.profilePic,
    password: "",
    newPassword: "",
    confirmPassword: "",
  });

  // Handling input change for profile and password
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handling profile picture upload
  const handleProfilePicChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData((prevData) => ({
          ...prevData,
          profilePic: reader.result,
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  // Handle form submission (e.g., save changes)
  const handleSaveChanges = (e) => {
    e.preventDefault();
    // Simulate saving data (You can replace this with API call)
    setUser(formData);
    alert("Profile updated successfully!");
  };

  // Handle password change (simplified validation)
  const handlePasswordChange = (e) => {
    e.preventDefault();
    if (formData.newPassword !== formData.confirmPassword) {
      alert("Passwords do not match.");
      return;
    }
    // Simulate password change logic
    alert("Password changed successfully!");
    setFormData({ ...formData, password: "", newPassword: "", confirmPassword: "" });
  };

  return (
    <div>
         <div className="flex flex-col h-screen">
            <AdminDashSidebar/>
        </div>
    <div className="flex-1 w-[1276px]  bg-blue-100 h-[100vh] absolute top-0 right-0  ">
      <h2 className="text-3xl px-10 py-4 font-semibold mb-6">Settings</h2>
      <div className="flex">

      {/* Profile Section */}
      <form onSubmit={handleSaveChanges} className="bg-white mx-5 p-6 h-[532px] rounded-lg shadow-md mb-6 w-[48%]">
        <h3 className="text-xl font-semibold mb-4">Edit Profile</h3>

        <div className="flex items-center mb-6">
          <img
            src={formData.profilePic}
            alt="Profile"
            className="w-[100px] h-[100px] rounded-full border-4 border-blue-200 mr-6"
          />
          <div>
            <label htmlFor="profilePic" className="block text-sm text-gray-600">
              Change Profile Picture
            </label>
            <input
              type="file"
              id="profilePic"
              name="profilePic"
              accept="image/*"
              onChange={handleProfilePicChange}
              className="mt-2"
            />
          </div>
        </div>

        <div className="mb-4">
          <label htmlFor="name" className="block text-sm text-gray-600">Full Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-lg mt-2"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block text-sm text-gray-600">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-lg mt-2"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="phone" className="block text-sm text-gray-600">Phone Number</label>
          <input
            type="text"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-lg mt-2"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-lg mt-4 hover:bg-blue-600"
        >
          Save Profile
        </button>
      </form>

      {/* Password Change Section */}
      <form onSubmit={handlePasswordChange} className="bg-white w-[48%] h-[532px] mx-6 p-6 rounded-lg shadow-md">
        <h3 className="text-xl font-semibold mb-4">Change Password</h3>

        <div className="mb-4">
          <label htmlFor="password" className="block text-sm text-gray-600">Current Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-lg mt-2"
            required
          />
        </div>

        <div className="mb-4mt-[50px]">
          <label htmlFor="newPassword" className="block text-sm text-gray-600">New Password</label>
          <input
            type="password"
            id="newPassword"
            name="newPassword"
            value={formData.newPassword}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-lg mt-2"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="confirmPassword" className="block text-sm text-gray-600">Confirm New Password</label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-lg mt-2"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-green-500 text-white py-2 rounded-lg mt-4 hover:bg-green-600"
        >
          Change Password
        </button>
      </form>
      </div>
    </div>
    </div>
  );
};

export default SettingsPage;
