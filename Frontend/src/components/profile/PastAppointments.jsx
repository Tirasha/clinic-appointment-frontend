const PastAppointments = () => {
  // Hardcoded past appointments data
  const pastAppointments = [
    {
      id: 3,
      date: 'Sep 1, 2025',
      time: '9.00 AM',
      appointmentId: '04',
      doctor: 'Dr. Jessica Smith',
      specialty: 'Pediatrician',
      roomNo: '18',
      status: 'Completed'
    },
  ];

  return (
    <div className="space-y-4 max-w-4xl mx-auto">
      {pastAppointments.map((appointment) => (
        <div
          key={appointment.id}
          className="bg-blue-50 border-2 border-blue-300 rounded-xl p-6"
        >
          <div className="flex justify-between items-start">
            <div className="space-y-3">
              {/* Date and Time - Less emphasized */}
              <div className="text-gray-700 font-medium">
                {appointment.date}  {appointment.time}
              </div>

              {/* Appointment Details */}
              <div className="space-y-1 text-gray-700">
                <p>
                  <span className="font-semibold">Appointment ID :</span> {appointment.appointmentId}
                </p>
                <p>
                  <span className="font-semibold">With :</span> {appointment.doctor} ({appointment.specialty})
                </p>
                <p>
                  <span className="font-semibold">Room No :</span> {appointment.roomNo}
                </p>
                <p>
                  <span className="font-semibold">Status :</span>{' '}
                  <span className="font-semibold text-blue-600">
                    {appointment.status}
                  </span>
                </p>
              </div>
            </div>

            {/* Rate Doctor Button */}
            <div>
              <button className="px-6 py-2 bg-yellow-400 hover:bg-yellow-500 text-gray-800 rounded-lg font-semibold transition-colors">
                Rate Doctor
              </button>
            </div>
          </div>
        </div>
      ))}

      {/* Empty state */}
      {pastAppointments.length === 0 && (
        <div className="text-center py-16 text-gray-500 text-lg">
          No past appointments found.
        </div>
      )}
    </div>
  );
};

export default PastAppointments;