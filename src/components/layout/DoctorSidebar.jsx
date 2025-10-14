import React from 'react';
import { FaHome, FaCalendarAlt, FaUser, FaSignOutAlt } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const DoctorSidebar = ({ activeTab, setActiveTab }) => {
  const navigate = useNavigate();

  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: FaHome, path: '/DoctorDashboard' },
    { id: 'appointments', label: 'Appointments', icon: FaCalendarAlt, path: '/DoctorAppointments' },
    { id: 'profile', label: 'Profile', icon: FaUser, path: '/DoctorProfile' },
  ];

  const handleMenuClick = (item) => {
    setActiveTab(item.id);
    if (item.path) navigate(item.path);
  };

  const handleLogout = () => {
    console.log('Logout clicked');
    navigate('/'); // 👈 Redirect to login or home page after logout
  };

  return (
    <div className="w-64 bg-gradient-to-b from-sky-200 to-blue-100 min-h-screen p-6 flex flex-col">
      {/* Sidebar Menu */}
      <nav className="flex-1 space-y-2">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.id;

          return (
            <button
              key={item.id}
              onClick={() => handleMenuClick(item)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
                isActive
                  ? 'bg-white text-blue-600 shadow-md font-semibold'
                  : 'text-gray-700 hover:bg-white/50'
              }`}
            >
              <Icon size={20} />
              <span>{item.label}</span>
              {isActive && <span className="ml-auto text-blue-600">▶</span>}
            </button>
          );
        })}
      </nav>

      {/* Logout Button */}
      <button
        onClick={handleLogout}
        className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-white/50 rounded-lg transition-all mt-auto"
      >
        <FaSignOutAlt size={20} />
        <span>Logout</span>
      </button>
    </div>
  );
};

export default DoctorSidebar;
