import React from 'react'
import { Phone, Mail, MapPin, Search } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="w-full fixed top-0 left-0 z-50">
      
      {/* --- Top bar --- */}
      <div className="bg-emerald-400 text-white text-sm py-2 px-6 flex justify-between items-center">
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <Phone size={16} />
            <span>+1 (700) 230-0035</span>
          </div>
          <div className="flex items-center gap-2">
            <Mail size={16} />
            <span>support@gmail.com</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin size={16} />
            <span>2767 Sunrise Street, NY 1002, USA</span>
          </div>
        </div>

        <div className="flex gap-4 text-white">
          <a href="#" className="hover:text-gray-200"><i className="fab fa-facebook-f"></i></a>
          <a href="#" className="hover:text-gray-200"><i className="fab fa-twitter"></i></a>
          <a href="#" className="hover:text-gray-200"><i className="fab fa-youtube"></i></a>
          <a href="#" className="hover:text-gray-200"><i className="fab fa-google-plus-g"></i></a>
        </div>
      </div>

      {/* --- Main Navbar --- */}
      <div className="bg-white shadow-sm py-4 px-6 flex justify-between items-center">
        
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 cursor-pointer">
          <img
            src="/src/assets/logo.png"
            alt="MadiFax Logo"
            style={{ width: "150px", height: "50px" }}
            className="object-contain"
          />
        </Link>

        {/* Menu Items */}
        <ul className="flex gap-8 text-gray-800 font-medium">
          <li className="hover:text-sky-500 transition">
            <Link to="/">Home</Link>
          </li>
          <li className="hover:text-sky-500 transition">
            <Link to="/about">About</Link>
          </li>
          <li className="hover:text-sky-500 transition">
            <Link to="/services">Services</Link>
          </li>
          <li className="hover:text-sky-500 transition">
            <Link to="/pages">Pages</Link>
          </li>
          <li className="hover:text-sky-500 transition">
            <Link to="/blog">Blog</Link>
          </li>
          <li className="hover:text-sky-500 transition">
            <Link to="/contact">Contact</Link>
          </li>
        </ul>

        <div className="flex items-center gap-4">
          <Link to="/login" className="text-gray-700 hover:text-sky-500 font-medium">Login</Link>
          <Link to="/register" className="text-gray-700 hover:text-sky-500 font-medium">Register</Link>
          <Link to="/book-appointment">
          <button className="bg-sky-500 text-white px-5 py-2 rounded-full font-medium hover:bg-sky-600 transition">
            Appointment
          </button>
          </Link>
       </div>

      </div>
    </div>
  );
};

export default Navbar;
