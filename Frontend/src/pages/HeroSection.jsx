import React from 'react';
import { Phone, Star, Heart, FileText, User } from 'lucide-react'; // Importing icons for the floating elements

const HeroSection = () => {
  return (
    // Outer container with background, padding, and height
    // The background gradient is a close approximation of the image.
    <section className="relative w-full min-h-[600px] overflow-hidden bg-gradient-to-r from-[#e0f7fa] via-[#e8f5e9] to-[#ffffff] py-16 lg:py-24">

      {/* Content Container (to center and limit width) */}
      <div className="container mx-auto px-6 flex flex-col lg:flex-row items-center justify-between">
        
        {/* --- Left Content Area (Text and Stats) --- */}
        <div className="lg:w-1/2 z-10 space-y-8 text-left py-10 lg:py-0">
          
          {/* Logo/Welcome Text */}
          <div className="flex items-center text-sky-500 font-bold text-lg">
            Welcome to MadiFax
          </div>

          {/* Main Heading */}
          <h1 className="text-6xl font-extrabold text-gray-900 leading-tight">
            We Are Committed To Your Health
          </h1>

          {/* Subtext */}
          <p className="text-lg text-gray-600 max-w-lg">
            Elevating your health journey with compassionate care and medical excellence. We provide comprehensive services designed around your well-being, because your health is our greatest commitment</p>

          {/* Button */}
          <button className="bg-sky-500 text-white px-10 py-3 rounded-full font-medium text-lg shadow-lg hover:bg-sky-600 transition duration-300">
            Meet A Doctor
          </button>
          
          {/* Statistics Bar */}
          <div className="flex space-x-10 pt-10">
            
            {/* Stat 1: Recovered Patients */}
            <div className="text-gray-900">
              <p className="text-4xl font-bold">355k+</p>
              <p className="text-base text-gray-600">Recovered Patients</p>
            </div>

            {/* Stat 2: Good Review */}
            <div className="text-gray-900">
              <p className="text-4xl font-bold">98%</p>
              <p className="text-base text-gray-600">Good Review</p>
            </div>

            {/* Stat 3: Popular Doctors */}
            <div className="text-gray-900">
              <p className="text-4xl font-bold">120+</p>
              <p className="text-base text-gray-600">Popular Doctors</p>
            </div>
             
             {/* Review Card (Approximation) */}
          <div className="pt-8">
            <div className="bg-white p-4 rounded-lg shadow-xl inline-flex items-center space-x-3">
              <User className="text-gray-500" size={32}/>
              <div>
                <div className="flex text-yellow-500">
                  <Star size={16} fill="currentColor"/>
                  <Star size={16} fill="currentColor"/>
                  <Star size={16} fill="currentColor"/>
                  <Star size={16} fill="currentColor"/>
                  <Star size={16} fill="currentColor"/>
                </div>
                <span className="text-sm text-gray-700">5-Star Review</span>
              </div>
            </div>
          </div>

          </div>
        </div>

        {/* --- Right Image Area --- */}
        <div className="lg:w-1/2 flex justify-center mt-10 lg:mt-0">
          {/* Note: In a real application, replace the URL with your actual image path */}
          <img
            src="/src/assets/banner_img.png"// Replace with actual image path
            alt="Smiling female doctor in blue scrubs giving a thumbs up"
            className="w-full max-w-lg h-auto object-cover rounded-tl-[100px] shadow-2xl"
            // The image in the original design seems to be cut/masked in a specific way,
            // but for simplicity and responsiveness, a large, well-positioned image is used here.
            // A more complex clip-path or overlay might be needed for a pixel-perfect match.
          />
        </div>

      </div>
    </section>
  );
};

export default HeroSection;