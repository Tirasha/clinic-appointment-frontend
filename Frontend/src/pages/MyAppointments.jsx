import { useState } from 'react';
import Sidebar from '../components/layout/Sidebar';

const MyAppointments = () => {
  const [activeTab, setActiveTab] = useState('appointments');
  const [appointmentTab, setAppointmentTab] = useState('upcoming');

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* Main Content */}
      <div className="flex-1 p-8 overflow-y-auto">
        <div className="max-w-5xl mx-auto">
          {/* Page Title */}
          <h1 className="text-3xl font-bold text-gray-800 mb-8">My Appointments</h1>

          {/* Tab Buttons */}
          <div className="flex gap-4 mb-8">
            <button
              onClick={() => setAppointmentTab('upcoming')}
              className={`px-8 py-3 rounded-lg font-semibold transition-all ${
                appointmentTab === 'upcoming'
                  ? 'bg-blue-200 text-blue-700'
                  : 'bg-gray-200 text-gray-600 hover:bg-gray-300'
              }`}
            >
              Upcoming Appointments
            </button>
            <button
              onClick={() => setAppointmentTab('past')}
              className={`px-8 py-3 rounded-lg font-semibold transition-all ${
                appointmentTab === 'past'
                  ? 'bg-blue-200 text-blue-700'
                  : 'bg-gray-200 text-gray-600 hover:bg-gray-300'
              }`}
            >
              Past Appointments
            </button>
          </div>

          {/* Placeholder for appointment cards */}
          <div className="text-center py-12 text-gray-500">
            {appointmentTab === 'upcoming' ? 'Upcoming' : 'Past'} appointments will be displayed here
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyAppointments;