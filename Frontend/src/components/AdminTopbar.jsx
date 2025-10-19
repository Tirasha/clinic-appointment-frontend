import React from "react";

const AdminTopbar = () => {
  return (
    <div className="flex items-center justify-between px-6 py-3 bg-white border-b shadow-sm">
      <div>
        <h2 className="text-xl font-bold text-[#4A5FC1]">Dashboard</h2>
        <p className="text-sm text-gray-500">Administrator ▸ Dashboard</p>
      </div>
      <div className="text-gray-700 font-medium">Welcome, Admin</div>
    </div>
  );
};

export default AdminTopbar;
