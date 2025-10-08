import React, { useState } from "react";
import { MdPerson, MdPhone, MdEmail, MdLocationOn } from "react-icons/md";
import { FaStethoscope, FaPills, FaCamera } from "react-icons/fa";

const DoctorProfile = () => {
  const daysOfWeek = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  const dummyDoctor = {
    firstName: "Amal",
    lastName: "Perera",
    nic: "200012345678",
    dob: "1980-05-10",
    title: "Consultant Cardiologist",
    specializations: ["Cardiology", "Internal Medicine"],
    fee: 5000,
    phone: "+94 77 123 4567",
    email: "amal.perera@example.com",
    address: "No. 123, Galle Road, Colombo 03",
    registration: "SLMC/12345",
    notes: "Specializes in heart conditions. Fluent in Sinhala & English.",
    profileImage: "", // new field
    availability: {
      Monday: { active: true, from: "09:00", to: "12:00" },
      Wednesday: { active: true, from: "14:00", to: "17:00" },
      Friday: { active: false, from: "", to: "" },
    },
  };

  const [doc, setDoc] = useState(dummyDoctor);
  const [isEditing, setIsEditing] = useState(false);

  const updateField = (field, value) => {
    setDoc((prev) => ({ ...prev, [field]: value }));
  };

  const toggleDay = (day) => {
    setDoc((prev) => ({
      ...prev,
      availability: {
        ...prev.availability,
        [day]: {
          active: !prev.availability?.[day]?.active,
          from: prev.availability?.[day]?.from || "09:00",
          to: prev.availability?.[day]?.to || "12:00",
        },
      },
    }));
  };

  const updateTime = (day, type, value) => {
    setDoc((prev) => ({
      ...prev,
      availability: {
        ...prev.availability,
        [day]: {
          ...prev.availability?.[day],
          [type]: value,
        },
      },
    }));
  };

  // Handle profile image upload
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        updateField("profileImage", reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSave = () => {
    setIsEditing(false);
    alert("Doctor details updated!");
  };

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-6">
      <div className="max-w-5xl mx-auto bg-white shadow-xl rounded-2xl p-8 border border-gray-200">
        {/* Header */}
        <div className="flex justify-between items-center mb-8 border-b pb-4">
          <h1 className="text-3xl font-bold text-gray-800">Doctor Profile</h1>
          {!isEditing && (
            <button
              onClick={() => setIsEditing(true)}
              className="px-5 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md shadow-sm"
            >
              Edit Profile
            </button>
          )}
        </div>

        {/* Profile Image */}
        <div className="flex flex-col items-center mb-10">
          <div className="relative">
            <img
              src={
                doc.profileImage ||
                "https://www.outsourceyourmarketing.co.uk/wp-content/uploads/2023/09/doctor-linkedin-marketing-10.jpeg"
              }
              alt="Profile"
              className="w-32 h-32 object-cover rounded-full border-4 border-gray-200 shadow"
            />
            {isEditing && (
              <label className="absolute bottom-0 right-0 bg-blue-600 p-2 rounded-full cursor-pointer hover:bg-blue-700">
                <FaCamera className="text-white" />
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                  className="hidden"
                />
              </label>
            )}
          </div>
          <h2 className="mt-4 text-xl font-semibold text-gray-700">
            {doc.firstName} {doc.lastName}
          </h2>
          <p className="text-gray-500">{doc.title}</p>
        </div>

        {/* Personal Info */}
        <section className="mb-10">
          <h2 className="text-xl font-semibold text-gray-700 flex items-center gap-2 mb-4">
            <MdPerson /> Personal Information
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {isEditing ? (
              <>
                <div>
                  <label className="text-sm text-gray-500">First Name</label>
                  <input
                    value={doc.firstName}
                    onChange={(e) => updateField("firstName", e.target.value)}
                    className="w-full mt-1 px-3 py-2 border rounded-md"
                  />
                </div>
                <div>
                  <label className="text-sm text-gray-500">Last Name</label>
                  <input
                    value={doc.lastName}
                    onChange={(e) => updateField("lastName", e.target.value)}
                    className="w-full mt-1 px-3 py-2 border rounded-md"
                  />
                </div>
                <div>
                  <label className="text-sm text-gray-500">NIC</label>
                  <input
                    value={doc.nic}
                    onChange={(e) => updateField("nic", e.target.value)}
                    className="w-full mt-1 px-3 py-2 border rounded-md"
                  />
                </div>
                <div>
                  <label className="text-sm text-gray-500">Date of Birth</label>
                  <input
                    type="date"
                    value={doc.dob}
                    onChange={(e) => updateField("dob", e.target.value)}
                    className="w-full mt-1 px-3 py-2 border rounded-md"
                  />
                </div>
              </>
            ) : (
              <>
                <p>
                  <strong>NIC:</strong> {doc.nic}
                </p>
                <p>
                  <strong>Date of Birth:</strong> {doc.dob}
                </p>
              </>
            )}
          </div>
        </section>

        {/* Channeling Details */}
        <section className="mb-10">
          <h2 className="text-xl font-semibold text-gray-700 flex items-center gap-2 mb-4">
            <FaStethoscope /> Channeling Details
          </h2>
          {isEditing ? (
            <>
              <div className="mb-4">
                <label className="text-sm text-gray-500">Specializations</label>
                <input
                  value={doc.specializations.join(", ")}
                  onChange={(e) =>
                    updateField(
                      "specializations",
                      e.target.value.split(",").map((s) => s.trim())
                    )
                  }
                  className="w-full mt-1 px-3 py-2 border rounded-md"
                />
              </div>
              <div className="mb-4">
                <label className="text-sm text-gray-500">
                  Consultation Fee
                </label>
                <input
                  type="number"
                  value={doc.fee}
                  onChange={(e) => updateField("fee", e.target.value)}
                  className="w-full mt-1 px-3 py-2 border rounded-md"
                />
              </div>
              <div>
                <label className="text-sm text-gray-500 block mb-2">
                  Availability
                </label>
                <div className="space-y-3">
                  {daysOfWeek.map((day) => (
                    <div
                      key={day}
                      className="flex items-center justify-between bg-gray-50 p-3 rounded-md"
                    >
                      <label className="flex items-center gap-2">
                        <input
                          type="checkbox"
                          checked={doc.availability?.[day]?.active || false}
                          onChange={() => toggleDay(day)}
                        />
                        <span>{day}</span>
                      </label>
                      {doc.availability?.[day]?.active && (
                        <div className="flex items-center gap-2">
                          <input
                            type="time"
                            value={doc.availability?.[day]?.from || ""}
                            onChange={(e) =>
                              updateTime(day, "from", e.target.value)
                            }
                            className="border rounded-md px-2 py-1"
                          />
                          <span>to</span>
                          <input
                            type="time"
                            value={doc.availability?.[day]?.to || ""}
                            onChange={(e) =>
                              updateTime(day, "to", e.target.value)
                            }
                            className="border rounded-md px-2 py-1"
                          />
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </>
          ) : (
            <>
              <p>
                <strong>Specializations:</strong>{" "}
                {doc.specializations.join(", ")}
              </p>
              <p>
                <strong>Fee:</strong> Rs. {doc.fee}
              </p>
              <div>
                <strong>Availability:</strong>
                <ul className="list-disc ml-6">
                  {Object.entries(doc.availability).map(([day, val]) =>
                    val.active ? (
                      <li key={day}>
                        {day}: {val.from} - {val.to}
                      </li>
                    ) : null
                  )}
                </ul>
              </div>
            </>
          )}
        </section>

        {/* Contact Info */}
        <section className="mb-10">
          <h2 className="text-xl font-semibold text-gray-700 flex items-center gap-2 mb-4">
            <MdPhone /> Contact Information
          </h2>
          {isEditing ? (
            <div className="space-y-4">
              <input
                value={doc.phone}
                onChange={(e) => updateField("phone", e.target.value)}
                className="w-full mt-1 px-3 py-2 border rounded-md"
              />
              <input
                value={doc.email}
                onChange={(e) => updateField("email", e.target.value)}
                className="w-full mt-1 px-3 py-2 border rounded-md"
              />
              <input
                value={doc.address}
                onChange={(e) => updateField("address", e.target.value)}
                className="w-full mt-1 px-3 py-2 border rounded-md"
              />
            </div>
          ) : (
            <>
              <p>
                <strong>Phone:</strong> {doc.phone}
              </p>
              <p>
                <strong>Email:</strong> {doc.email}
              </p>
              <p>
                <strong>Address:</strong> {doc.address}
              </p>
            </>
          )}
        </section>

        {/* Notes */}
        <section className="mb-10">
          <h2 className="text-xl font-semibold text-gray-700 flex items-center gap-2 mb-4">
            <FaPills /> Additional Notes
          </h2>
          {isEditing ? (
            <textarea
              value={doc.notes}
              onChange={(e) => updateField("notes", e.target.value)}
              className="w-full mt-1 px-3 py-2 border rounded-md"
              rows={4}
            />
          ) : (
            <p>{doc.notes}</p>
          )}
        </section>

        {/* Buttons */}
        {isEditing && (
          <div className="flex justify-end gap-4">
            <button
              onClick={() => setIsEditing(false)}
              className="px-5 py-2 bg-gray-200 rounded-md hover:bg-gray-300"
            >
              Cancel
            </button>
            <button
              onClick={handleSave}
              className="px-5 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
            >
              Save Changes
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default DoctorProfile;