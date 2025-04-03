import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

import { useNavigate } from "react-router-dom"; // ✅ Import useNavigate

const images = [
  "https://bootstrapmade.com/content/demo/Yummy/assets/img/hero-img.png",
  "https://bootstrapmade.com/content/demo/Yummy/assets/img/menu/menu-item-2.png",
  "https://bootstrapmade.com/content/demo/Yummy/assets/img/menu/menu-item-4.png",
  "https://bootstrapmade.com/content/demo/Yummy/assets/img/menu/menu-item-3.png",
];

const FoodShowcase = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const navigate = useNavigate(); // ✅ Initialize useNavigate

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 4000); // Change image every 4 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative flex flex-col sm:flex-row  sm:h-screen items-center justify-between max-w-7xl mx-auto p-10 mt-10 font-nunito bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url('https://t3.ftcdn.net/jpg/02/05/87/60/360_F_205876015_hYYs7ugqoU8QAobSS3TbnGQ92qyS5gEc.jpg')` }}>
      
      {/* Black Opacity Overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Content */}
      <div className="relative z-10 md:w-1/2 text-center md:text-left" data-aos="">
        <h1 className="text-3xl md:text-6xl font-bold text-gray-200">
          Enjoy Your Healthy <br /> Delicious Food
        </h1>
        <p className="text-gray-300 mt-9">
          We are a team of talented designers making websites with Bootstrap.
        </p>
        
        {/* ✅ Navigate to Booking Page */}
        <div className="mt-5 flex flex-col md:flex-row gap-3 items-center md:items-start">
          <button 
            className="px-8 py-3 bg-gradient-to-r from-red-500 to-red-900 text-white font-semibold rounded-full hover:shadow-xl transition transform hover:-translate-y-1"
            onClick={() => navigate("/reservation")} // ✅ Navigates to "/booking"
          >
            Book a Table
          </button>
        </div>
      </div>

      {/* Right Side: Animated Image */}
      <motion.div className="relative z-10 md:w-1/2 flex justify-center" 
        animate={{ y: [0, -10, 0], rotate: [0, 5, -5, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}>
        <img src={images[currentImage]} alt="Delicious Food" 
          className="w-[250px] h-[250px] md:w-[450px] md:h-[450px] object-cover rounded-lg" />
      </motion.div>
    </div>
  );
};

export default FoodShowcase;
