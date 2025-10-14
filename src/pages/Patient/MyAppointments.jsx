import { useState } from 'react';
import Sidebar from '../../components/layout/Sidebar';
import UpcomingAppointments from '../../components/profile/UpcomingAppointments';
import PastAppointments from '../../components/profile/PastAppointments';

const MyAppointments = () => {
  const [activeTab, setActiveTab] = useState('appointments');
  const [appointmentTab, setAppointmentTab] = useState('upcoming');

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* Main Content */}
      <div className="flex-1 p-8 overflow-y-auto">
        <div className="max-w-6xl mx-auto">
          {/* Page Title - Centered */}
          <h1 className="text-3xl font-bold text-gray-800 mb-12 text-center">My Appointments</h1>

          {/* Tab Buttons - Centered and Full Width */}
          <div className="flex gap-6 mb-12 max-w-4xl mx-auto">
            <button
              onClick={() => setAppointmentTab('upcoming')}
              className={`flex-1 px-8 py-4 rounded-xl font-semibold text-lg transition-all ${
                appointmentTab === 'upcoming'
                  ? 'bg-blue-200 text-blue-700 shadow-md'
                  : 'bg-gray-200 text-gray-600 hover:bg-gray-300'
              }`}
            >
              Upcoming Appointments
            </button>
            <button
              onClick={() => setAppointmentTab('past')}
              className={`flex-1 px-8 py-4 rounded-xl font-semibold text-lg transition-all ${
                appointmentTab === 'past'
                  ? 'bg-blue-200 text-blue-700 shadow-md'
                  : 'bg-gray-200 text-gray-600 hover:bg-gray-300'
              }`}
            >
              Past Appointments
            </button>
          </div>

          {/* Render the appropriate component based on selected tab */}
          {appointmentTab === 'upcoming' ? <UpcomingAppointments /> : <PastAppointments />}
        </div>
      </div>
    </div>
  );
};

export default MyAppointments;