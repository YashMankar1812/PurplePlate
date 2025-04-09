import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const images = [
  "https://bootstrapmade.com/content/demo/Yummy/assets/img/hero-img.png",
  "https://bootstrapmade.com/content/demo/Yummy/assets/img/menu/menu-item-2.png",
  "https://bootstrapmade.com/content/demo/Yummy/assets/img/menu/menu-item-4.png",
  "https://bootstrapmade.com/content/demo/Yummy/assets/img/menu/menu-item-3.png",
];

const FoodShowcase = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-screen flex flex-col-reverse sm:flex-row items-center justify-center sm:justify-between px-4 sm:px-10 pt-16 pb-10 sm:py-0 font-nunito bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url('https://t3.ftcdn.net/jpg/02/05/87/60/360_F_205876015_hYYs7ugqoU8QAobSS3TbnGQ92qyS5gEc.jpg')` }}>
      
      {/* Black Opacity Overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Content */}
      <div className="relative z-10 w-full sm:w-1/2 text-center sm:text-left mb-8 sm:mb-0">
        <motion.h1 
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Enjoy Your Healthy <br className="hidden sm:block" /> Delicious Food
        </motion.h1>
        
        <motion.p 
          className="text-gray-200 mt-4 sm:mt-6 text-lg sm:text-xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Fresh ingredients, authentic recipes, unforgettable flavors
        </motion.p>
        
        <motion.div 
          className="mt-8 flex flex-col sm:flex-row gap-4 justify-center sm:justify-start"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <button 
            className="px-6 py-3 bg-gradient-to-r from-red-500 to-red-700 text-white font-semibold rounded-full hover:shadow-xl transition-all duration-300 hover:scale-105"
            onClick={() => navigate("/reservation")}
          >
            Book a Table
          </button>
          <button 
            className="px-6 py-3 bg-white text-red-600 font-semibold rounded-full hover:shadow-xl transition-all duration-300 hover:scale-105"
            onClick={() => navigate("/menu")}
          >
            View Menu
          </button>
        </motion.div>
      </div>

      {/* Right Side: Animated Image */}
      <motion.div 
        className="relative z-10 w-full sm:w-1/2 flex justify-center mt-8 sm:mt-0"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      >
<motion.img
  src={images[currentImage]}
  alt="Delicious Food"
  className="w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 object-contain"
  key={currentImage}
  initial={{ opacity: 0 }}
  animate={{ 
    opacity: 1,  // Fade-in effect
    y: [0, -10, 0],  // Floating animation
    rotate: [0, 5, -5, 0]  // Gentle rotation
  }}
  exit={{ opacity: 0 }}
  transition={{
    opacity: { duration: 0.5 },  // Faster fade
    y: { 
      duration: 4, 
      repeat: Infinity, 
      ease: "easeInOut" 
    },
    rotate: { 
      duration: 8, 
      repeat: Infinity, 
      ease: "easeInOut" 
    }
  }}
/>
      </motion.div>
    </div>
  );
};

export default FoodShowcase;