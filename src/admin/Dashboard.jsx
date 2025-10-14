import React from "react";
import { Handshake, CheckCircle, MessageSquare, User, Stethoscope, BedDouble } from "lucide-react";

const Dashboard = () => {
  const cards = [
    { title: "Total Appointments", value: 550, sub: "24 Today", icon: <Handshake size={30} />, color: "#E3ECFF" },
    { title: "Done Appointments", value: 444, sub: "12 Today", icon: <CheckCircle size={30} />, color: "#E3ECFF" },
    { title: "Pending Appointments", value: 20, sub: "10 Today", icon: <MessageSquare size={30} />, color: "#E3ECFF" },
    { title: "Total Doctors", value: 100, sub: "", icon: <User size={30} />, color: "#E3ECFF" },
    { title: "Active Doctors", value: 56, sub: "", icon: <Stethoscope size={30} />, color: "#E3ECFF" },
    { title: "Total Patients", value: 10, sub: "", icon: <BedDouble size={30} />, color: "#E3ECFF" },
  ];

  return (
    <div>
      <h2 className="text-2xl font-semibold text-[#4A5FC1] mb-6">Dashboard Overview</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {cards.map((card, i) => (
          <div
            key={i}
            className="bg-[#4A5FC1] text-white rounded-xl p-5 flex flex-col items-center justify-center shadow-md"
          >
            <div className="mb-2">{card.icon}</div>
            <h3 className="text-lg font-semibold">{card.title}</h3>
            <p className="text-3xl font-bold">{card.value}</p>
            {card.sub && <span className="text-sm mt-1">{card.sub}</span>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
