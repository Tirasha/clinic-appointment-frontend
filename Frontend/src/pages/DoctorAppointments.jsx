import { useState } from 'react';
import DoctorSidebar from '../components/layout/DoctorSidebar';
import AppointmentsTable from '../components/doctor/AppointmentsTable';

const DoctorAppointments = () => {
  const [activeTab, setActiveTab] = useState('appointments');

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <DoctorSidebar activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* Main Content */}
      <div className="flex-1 p-8 overflow-y-auto">
        <div className="max-w-7xl mx-auto">
          {/* Page Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-800">Appointments</h1>
            <p className="text-gray-600">Doctor • Appointments</p>
          </div>

          {/* Search Bar */}
          <div className="mb-6">
            <div className="relative max-w-md">
              <input
                type="date"
                defaultValue="2025-08-17"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          {/* Appointments Table */}
          <AppointmentsTable />
        </div>
      </div>
    </div>
  );
};

export default DoctorAppointments;