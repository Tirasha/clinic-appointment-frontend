import { useState } from 'react';
import DoctorSidebar from '../components/layout/DoctorSidebar';

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

          {/* Placeholder for appointment content */}
          <div className="bg-white rounded-lg shadow p-6">
            <p className="text-gray-500">Appointment list will be displayed here</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorAppointments;