const AppointmentSummaryCard = ({ title, count, color = 'blue' }) => {
  const colorClasses = {
    blue: 'bg-blue-400',
    lightblue: 'bg-blue-400',
    skyblue: 'bg-blue-400'
  };

  return (
    <div className={`${colorClasses[color]} rounded-2xl p-6 text-white shadow-lg hover:shadow-xl transition-shadow`}>
      <h3 className="text-sm font-medium mb-2 opacity-90">{title}</h3>
      <p className="text-5xl font-bold">{count.toString().padStart(2, '0')}</p>
    </div>
  );
};

export default AppointmentSummaryCard;