// src/components/MainDashboard.js
import React from "react";
import AdminDashSidebar from "./AdminDashSidebar";
import Overview from "../sidenavAdmin/Overview";

const AdminsDashboard = () => {
  return (
   
     <div className="flex min-h-screen">
     {/* Sidebar */}
     <AdminDashSidebar/>

     {/* Main content area */}
     <div className="flex-1 bg-gray-100 p-6">
       <Overview/>
     </div>
   </div>
  );
};

export default AdminsDashboard;
