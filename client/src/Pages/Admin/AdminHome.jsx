import React, { useState } from "react";
import SideNav from "./SideNav";
import Dashboard from "./Dashboard";
import User from "./User";
import Settings from "./Settings";
import Statistics from "./Statistics";

const AdminHome = () => {
  const [activeSection, setActiveSection] = useState('Dashboard');

  return (
    <div className="w-full px-8 py-5 flex gap-5 items-start">
      <SideNav setActiveSection={setActiveSection} />
      
      {activeSection === 'Dashboard' && <Dashboard />}
      {activeSection === 'User' && <User />}
      {activeSection === 'Statistics' && <Statistics/>}
      {activeSection === 'Settings' && <Settings/>}
    </div>
  );
};

export default AdminHome;
