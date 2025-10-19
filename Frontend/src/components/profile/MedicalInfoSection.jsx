import { useState } from 'react';
import { FaTint, FaExclamationCircle, FaHeartbeat, FaPills, FaPhoneAlt } from 'react-icons/fa';

const MedicalInfoSection = ({ data, onSave }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState(data);

  const handleSave = () => {
    onSave(formData);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setFormData(data);
    setIsEditing(false);
  };

  const InfoRow = ({ icon: Icon, label, value, field }) => (
    <div className="flex items-center gap-3 py-3">
      <Icon size={18} className="text-red-500" />
      <span className="text-gray-600 font-medium w-40">{label}</span>
      {isEditing ? (
        <input
          type="text"
          value={formData[field]}
          onChange={(e) => setFormData({ ...formData, [field]: e.target.value })}
          className="flex-1 px-3 py-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      ) : (
        <span className="text-gray-800 flex-1">{value}</span>
      )}
    </div>
  );

  return (
    <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-6 shadow-md">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-xl font-bold text-gray-800">Medical Info</h3>
        {!isEditing ? (
          <button
            onClick={() => setIsEditing(true)}
            className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors text-sm font-medium"
          >
            Edit Information
          </button>
        ) : (
          <div className="flex gap-2">
            <button
              onClick={handleCancel}
              className="px-4 py-2 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400 transition-colors text-sm font-medium"
            >
              Cancel
            </button>
            <button
              onClick={handleSave}
              className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors text-sm font-medium"
            >
              Save
            </button>
          </div>
        )}
      </div>

      <div className="space-y-1">
        <InfoRow icon={FaTint} label="Blood Type" value={formData.bloodType} field="bloodType" />
        <InfoRow icon={FaExclamationCircle} label="Allergies" value={formData.allergies} field="allergies" />
        <InfoRow icon={FaHeartbeat} label="Chronic Conditions" value={formData.chronicConditions} field="chronicConditions" />
        <InfoRow icon={FaPills} label="Current Medications" value={formData.currentMedications} field="currentMedications" />
        <InfoRow icon={FaPhoneAlt} label="Emergency Contact" value={formData.emergencyContact} field="emergencyContact" />
    </div>
    </div>
  );
};

export default MedicalInfoSection;