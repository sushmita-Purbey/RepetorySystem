import React from 'react'
import DocDashSidebar from '../sideNavDoc/DocDashSidebar'
import DocOverview from '../sideNavDoc/DocOverview'

const DoctorsDashboard = () => {
  return (
    <div className="flex min-h-screen">
     {/* Sidebar */}
     <DocDashSidebar/>

     {/* Main content area */}
     <div className="flex-1 bg-gray-100 ">
       <DocOverview/>
     </div>
   </div>
  )
}

export default DoctorsDashboard