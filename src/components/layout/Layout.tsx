import React from "react";
import { Outlet } from "react-router-dom";
import DashboardSidebar from "../static/DashboardSidebar";
import VendorHeader from "../static/VendorHeader";
// Import dark mode context

const VendorLayout: React.FC = () => {
  return (
    <div>
      <div className="flex h-screen">
        {/* Sidebar */}
        <DashboardSidebar />

        {/* Main Content */}
        <div className="flex-1 flex flex-col">
          {/* Header */}
          <VendorHeader />{" "}
          {/* No need to pass darkMode here, since it can use the context */}
          {/* Scrollable Outlet */}
          <main className="flex-1 overflow-y-auto p-4">
            <Outlet />
          </main>
        </div>
      </div>
    </div>
  );
};

export default VendorLayout;
