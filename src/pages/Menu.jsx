

import React, { useState, useEffect } from "react";
import Modal from "./Modal";
import { foodItems } from "../data";
import "aos/dist/aos.css"; // Import AOS styles
import AOS from "aos"; // Import AOS library
import Testimonials from "./Testimonials";

const Menu = () => {
  const [selectedDish, setSelectedDish] = useState(null);
  const [filter, setFilter] = useState("All");

  useEffect(() => {
    AOS.init({
      duration: 1200,
      offset: 100,
      easing: "ease-in-out",
    });
  }, []);

  const filteredDishes = foodItems.filter((item) => {
    return filter === "All" || item.category === filter;
  });

  return (
    <div className="min-h-screen bg-white mt-10">
<header 
  className=" relative p-6 text-center bg-cover bg-center bg-no-repeat shadow "
  style={{ backgroundImage: "url('https://t4.ftcdn.net/jpg/02/92/20/37/360_F_292203735_CSsyqyS6A4Z9Czd4Msf7qZEhoxjpzZl1.jpg')" }} // Update with actual image path
>
  {/* Background Overlay for Better Readability */}
  <div className="absolute inset-0 bg-black bg-opacity-60"></div>

  {/* Section Title */}
  <h4 className="relative text-lg sm:text-xl font-semibold text-purple-200 font-pacifico flex items-center justify-center mt-5 sm:mt-10">
    <span className="w-10 sm:w-16 h-0.5 bg-purple-200"></span>
    <span className="mx-3 sm:mx-4">Menu</span>
    <span className="w-10 sm:w-16 h-0.5 bg-purple-200"></span>
  </h4>

  {/* Main Title & Categories */}
  <div className="relative flex flex-col items-center mt-4 sm:mt-5">
    <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white font-dancing text-center">
      Check Our <span className="text-purple-300">Tasty Menu</span>
    </h3>

    {/* Categories */}
    <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mt-4 sm:mt-6" data-aos="zoom-in">
      {["Starters", "Main Course", "Desserts", "Beverages"].map((category) => (
        <button
          key={category}
          className={`relative text-xs sm:text-sm md:text-base rounded-full font-medium p-2 transition-all ${
            filter === category ? "text-white hover:text-purple-400" : "text-gray-300 hover:text-purple-200"
          }`}
          onClick={() => setFilter(category)}
        >
          {category}
        </button>
      ))}
    </div>
  </div>
</header>



<main className="p-2 sm:p-4 md:p-6 lg:p-8 mx-2 sm:mx-4 md:mx-8 lg:mx-10">
  {/* Display Menu Items in a Responsive Grid */}
  <div className="grid grid-cols-1  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7  gap-8 p-10" data-aos="zoom-in">
    {filteredDishes.map((item, index) => (
      <div
        key={item.id}
        className=" bg-white p-4 transition-all duration-300 cursor-pointer group"
        onClick={() => setSelectedDish(item)}
        data-aos="zoom-in"
        data-aos-delay={index * 20}
      >
        {/* Image Container */}
        <div className="overflow-hidden rounded-lg">
          <img
            src={item.image}
            alt={item.name}
            className="w-full h-30 object-contain rounded-md transition-transform duration-300 group-hover:scale-105"
          />
        </div>

        {/* Name & Price Section */}
        <div className="mt-5 flex justify-between items-center">
          {/* <h3 className=" md:text-sm font-semibold  text-gray-800 m-5">{item.name}</h3> */}
          {/* <p className="text-lg font-bold text-red-500">${item.price}</p> */}
        </div>
      </div>
    ))}
  </div>
</main>


      {/* Display Modal when a dish is selected */}
      {selectedDish && <Modal dish={selectedDish} onClose={() => setSelectedDish(null)} />}

      {/* <Testimonials /> */}
    </div>
  );
};

export default Menu;


