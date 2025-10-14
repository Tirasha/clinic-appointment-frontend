import React, { useState } from "react";
import { Edit3, Calendar } from "lucide-react";

const Doctors = () => {
  const [date, setDate] = useState("2025-08-17");
  const [activePage, setActivePage] = useState(1);

  const doctors = [
    { id: 1, name: "Dr.Dulanka Nimsara", specialization: "Cardiologist", availability: "Mon–Fri, 9AM–5PM", status: "Active" },
    { id: 2, name: "Dr.Dulanka Nimsara", specialization: "Cardiologist", availability: "Mon–Fri, 9AM–5PM", status: "Active" },
    { id: 3, name: "Dr.Dulanka Nimsara", specialization: "Cardiologist", availability: "Mon–Fri, 9AM–5PM", status: "Active" },
    { id: 4, name: "Dr.Dulanka Nimsara", specialization: "Cardiologist", availability: "Mon–Fri, 9AM–5PM", status: "Active" },
    { id: 5, name: "Dr.Dulanka Nimsara", specialization: "Cardiologist", availability: "Mon–Fri, 9AM–5PM", status: "Active" },
  ];

  return (
    <div className="flex w-full bg-[#F8FAFC] min-h-screen">
      {/* Main Content */}
      <div className="flex-1 p-10">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-[#2563EB]">Doctors Management</h1>
            <p className="text-sm text-gray-500 mt-1">
              Administrator ► Doctors Management
            </p>
          </div>

          {/* Date Picker */}
          <div className="flex items-center bg-white border border-gray-300 rounded-lg px-3 py-2 shadow-sm hover:shadow-md transition">
            <Calendar size={18} className="text-gray-500 mr-2" />
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="outline-none text-gray-700 cursor-pointer"
            />
          </div>
        </div>

        {/* Add Button */}
        <button className="bg-gradient-to-r from-[#3B82F6] to-[#2563EB] text-white px-6 py-2 rounded-full font-semibold shadow-md hover:scale-105 transition">
          + Add New Doctor
        </button>

        {/* Table Section */}
        <div className="bg-white mt-6 rounded-2xl shadow-lg overflow-hidden border border-gray-100">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-[#DCEBFF] text-[#1E3A8A] font-semibold text-sm uppercase">
                <th className="px-6 py-3">Doctor ID</th>
                <th className="px-6 py-3">Name</th>
                <th className="px-6 py-3">Specialization</th>
                <th className="px-6 py-3">Availability</th>
                <th className="px-6 py-3">Status</th>
                <th className="px-6 py-3 text-center">Action</th>
              </tr>
            </thead>
            <tbody>
              {doctors.map((doc) => (
                <tr
                  key={doc.id}
                  className="hover:bg-[#EFF6FF] transition border-b border-gray-200"
                >
                  <td className="px-6 py-4 text-gray-700">{doc.id}</td>
                  <td className="px-6 py-4 font-medium text-gray-800">{doc.name}</td>
                  <td className="px-6 py-4 text-gray-700">{doc.specialization}</td>
                  <td className="px-6 py-4 text-gray-700">{doc.availability}</td>
                  <td className="px-6 py-4">
                    <span className="text-green-600 font-semibold bg-green-100 px-3 py-1 rounded-full text-sm">
                      {doc.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <button
                      className="flex items-center justify-center gap-1 mx-auto text-blue-600 hover:text-blue-800 font-medium hover:scale-105 transition"
                      title="Edit Doctor"
                    >
                      <Edit3 size={18} className="stroke-2" /> Edit
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="flex justify-center items-center mt-6 space-x-3">
          <button
            onClick={() => setActivePage((prev) => Math.max(prev - 1, 1))}
            className={`px-4 py-2 rounded-lg font-semibold ${
              activePage === 1
                ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                : "bg-[#3B82F6] text-white hover:bg-[#2563EB] transition"
            }`}
          >
            Previous
          </button>

          <span className="text-gray-600 font-medium">Page {activePage} of 2</span>

          <button
            onClick={() => setActivePage((prev) => Math.min(prev + 1, 2))}
            className={`px-4 py-2 rounded-lg font-semibold ${
              activePage === 2
                ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                : "bg-[#3B82F6] text-white hover:bg-[#2563EB] transition"
            }`}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Doctors;
