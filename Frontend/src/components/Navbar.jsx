import React from 'react'
import { Phone, Mail, MapPin, Search } from "lucide-react";

const Navbar = () => {
  return (
    <div className='w-full'>
      {/* --- Top bar --- */}
      <div className="bg-emerald-400 text-white text-sm py-2 px-6 flex justify-between item-center">
        {/* Left side info */}
        <div className='flex item-center gap-6'>
         <div className='flex item-center gap-2'>
            <Phone size={16} />
            <span>+1 (700) 230-0035</span>
         </div>
         <div className='flex item-center gap-2'>
             <Mail size={16} />
            <span>support@gmail.com</span>
         </div>
         <div className='flex item-center gap-2'>
             <MapPin size={16} />
            <span>2767 Sunrise Street, NY 1002, USA</span>
         </div>
        </div>

         {/* Right side social icons */}
         <div className='flex gap-4 text-white'>
          <a href='#' className='hover:text-gray-200'>
            <i className="fab fa-facebook-f"></i>
          </a>
           <a href="#" className="hover:text-gray-200">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#" className="hover:text-gray-200">
            <i className="fab fa-youtube"></i>
          </a>
          <a href="#" className="hover:text-gray-200">
            <i className="fab fa-google-plus-g"></i>
          </a>
      </div>
    </div>

      {/* --- Main navbar --- */}
      <div className='bg-white shadow-sm py-4 px-6 flex justify-between items-center'>
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img src="/src/assets/logo.png" alt="MadiFax Logo" style={{ width: "150px", height: "50px" }} className="object-contain"/>
        </div>
      

      {/* Menu */}
      <ul className='flex gap-8 text-gray-800 font-medium'>
          <li>Home</li>
          <li>About</li>
          <li>Services</li>
          <li>Pages</li>
          <li>Blog</li>
          <li>Contact</li>
        </ul>

       {/* Right side buttons */}
        <div className="flex items-center gap-4">
          <Search className="text-gray-700 cursor-pointer" size={20} />
          <button className="bg-sky-500 text-white px-5 py-2 rounded-full font-medium hover:bg-sky-600 transition">
            Appointment
          </button>
        </div>
      </div>
 </div>
  )
}

export default Navbar