import { FaUser, FaCalendarAlt, FaCog, FaSignOutAlt } from 'react-icons/fa';

const Sidebar = ({ activeTab, setActiveTab }) => {
  const menuItems = [
    { id: 'profile', label: 'My Profile', icon: FaUser },
    { id: 'appointments', label: 'My Appointments', icon: FaCalendarAlt },
    { id: 'settings', label: 'Settings', icon: FaCog },
  ];

  return (
    <div className="w-64 bg-gradient-to-b from-emerald-300 to-teal-200 min-h-screen p-6 flex flex-col">
      {/* Menu Items */}
      <nav className="flex-1 space-y-2">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.id;
          
          return (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
                isActive
                  ? 'bg-white text-blue-500 shadow-md font-semibold'
                  : 'text-gray-700 hover:bg-white/50'
              }`}
            >
              <Icon size={20} />
              <span>{item.label}</span>
              {isActive && (
                <span className="ml-auto text-blue-500">▶</span>
              )}
            </button>
          );
        })}
      </nav>

      {/* Logout Button */}
      <button className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-white/50 rounded-lg transition-all mt-auto">
        <FaSignOutAlt size={20} />
        <span>Logout</span>
      </button>
    </div>
  );
};

export default Sidebar;