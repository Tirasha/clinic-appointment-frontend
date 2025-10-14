import React from "react";
import { Routes, Route } from "react-router-dom";
import AdminSidebar from "../components/AdminSidebar"; // import the new Sidebar
import Dashboard from "./Dashboard";
import Doctors from "./Doctors";
import Appointments from "./Appointments";
import Patients from "./Patients";
import ClinicSettings from "./ClinicSettings";
import Profile from "./Profile";

const AdminLayout = () => {
  return (
    <div style={{ display: "flex", height: "100vh" }}>
      {/* Sidebar */}
      <AdminSidebar />

      {/* Main Content */}
      <div style={{ flex: 1, padding: "2rem" }}>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="doctors" element={<Doctors />} />
          <Route path="appointments" element={<Appointments />} />
          <Route path="patients" element={<Patients />} />
          <Route path="clinic-settings" element={<ClinicSettings />} />
          <Route path="profile" element={<Profile />} />
        </Routes>
      </div>
    </div>
  );
};

export default AdminLayout;
