import React from 'react'
import { Phone, Mail, MapPin, Search } from "lucide-react";
import { Link as RouterLink } from "react-router-dom";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";

const Navbar = () => {
  const scrollToTop = () => {
    scroll.scrollToTop({ duration: 600, smooth: true });
  };

  return (
    <div className="w-full fixed top-0 left-0 z-50">
      {/* --- Top bar --- */}
      <div className="bg-emerald-400 text-white text-sm py-2 px-6 flex justify-between items-center">
        {/* Left side info */}
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

      <div className="bg-white shadow-sm py-4 px-6 flex justify-between items-center">
        <div className="flex items-center gap-2 cursor-pointer" onClick={scrollToTop}>
          <img
            src="/src/assets/logo.png"
            alt="MadiFax Logo"
            style={{ width: "150px", height: "50px" }}
            className="object-contain"
          />
        </div>

        {/* Menu */}
        <ul className="flex gap-8 text-gray-800 font-medium">
          <li
            onClick={scrollToTop}
            className="cursor-pointer hover:text-sky-500 transition"
          >
            Home
          </li>

          <li className="cursor-pointer hover:text-sky-500 transition">
            <ScrollLink to="about" smooth={true} duration={600} offset={-120}>
              About
            </ScrollLink>
          </li>

          <li className="cursor-pointer hover:text-sky-500 transition">
            <ScrollLink to="services" smooth={true} duration={600} offset={-120}>
              Services
            </ScrollLink>
          </li>

          <li className="hover:text-sky-500 transition">
            <RouterLink to="/pages">Pages</RouterLink>
          </li>
          <li className="hover:text-sky-500 transition">
            <RouterLink to="/blog">Blog</RouterLink>
          </li>
          <li className="hover:text-sky-500 transition">
            <RouterLink to="/contact">Contact</RouterLink>
          </li>
        </ul>

        <div className="flex items-center gap-4">
          <Search className="text-gray-700 cursor-pointer" size={20} />
           <ScrollLink
            to="appointment"
            smooth={true}
            duration={600}
            offset={-120}
          >
            <button className="bg-sky-500 text-white px-5 py-2 rounded-full font-medium hover:bg-sky-600 transition">
              Appointment
            </button>
          </ScrollLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
