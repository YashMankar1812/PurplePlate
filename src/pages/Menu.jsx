import React, { useState, useEffect } from "react";
import { foodItems } from "../data"; // Assuming your data is in data.js
import AOS from "aos";
import "aos/dist/aos.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useCart } from "../context/CartContext";
import { FiHeart } from 'react-icons/fi'; // Ensure you import FiHeart

AOS.init();

const Menu = () => {
  const [filter, setFilter] = useState("All");
  const { addToCart, addToFavorites, removeFromFavorites } = useCart();
  const [favorites, ] = useState([]); // Initialize favorites state

  const toggleFavorite = (item) => {
    if(favorites.some((favItem) => favItem.id === item.id)){
      removeFromFavorites(item.id)
    } else {
      addToFavorites(item);
    }
  };

  useEffect(() => {
    AOS.init({
      duration: 1200,
      offset: 100,
      easing: "ease-in-out",
    });
  }, []);

  const filteredDishes = foodItems.filter(
    (item) => filter === "All" || item.category === filter
  );

  const handleAddToCart = (dish) => {
    const parsedPrice = typeof dish.price === "string" ? parseFloat(dish.price.replace("$", "")) : dish.price;

    if (isNaN(parsedPrice)) {
      console.error("Invalid price for dish:", dish);
      toast.error("Invalid price! Please try again.");
      return;
    }

    addToCart({ ...dish, price: parsedPrice });
    toast.success(`${dish.name} added to cart!`, {
      position: "top-right",
      autoClose: 2000,
    });
  };




  return (
    <div className="min-h-screen bg-gray-100 text-gray-800 py-8 px-4 sm:px-6 lg:px-10 font-nunito">
      <ToastContainer />
      <h2 className="text-5xl text-purple-700 text-center uppercase p-10">Menu</h2>
      <div className="flex justify-center items-center mb-6">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-dancing font-bold text-purple-700 text-center">
          Our Delicious Dishes
        </h2>
      </div>
      <div className="flex overflow-x-auto gap-3 sm:gap-4 p-5 scrollbar-hide justify-center">
        {["All", "Starters", "Main Course", "Desserts", "Beverages"].map((category, index) => (
          <button
            key={category}
            className={`px-4 sm:px-6 py-2 text-sm sm:text-base font-semibold rounded-full transition-all ${
              filter === category
                ? "bg-purple-600 text-white shadow-lg scale-110"
                : "bg-gray-200 hover:bg-purple-400 hover:text-white"
            }`}
            onClick={() => setFilter(category)}
            style={{ transitionDelay: `${index * 50}ms` }}
          >
            {category}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto mt-6">
        {filteredDishes.map((dish, index) => (
          <div
            key={`${dish.id}-${index}`} // Use a composite key to ensure uniqueness
            className="bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transition-all transform duration-300 m-10"
            data-aos="fade-up"
            data-aos-delay={index * 100}
          >
            <img
              src={dish.image}
              alt={dish.name}
              className="w-full h-40 object-cover rounded-md"
            />
            <h3 className="mt-3 text-lg font-bold">{dish.name}</h3>
            <p className="text-gray-600 text-sm">{dish.description}</p>
            <p className="text-purple-700 font-semibold mt-2">{dish.price}</p>
            <div className="flex justify-between mt-3">
            <button
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleFavorite(item);
                    }}
                    className="absolute top-3 right-3 z-10 p-2 bg-white/80 rounded-full backdrop-blur-sm"
                    aria-label={favorites.some((favItem) => favItem.id === item.id) ? "Remove from favorites" : "Add to favorites"}
                  >
                    <FiHeart
                      className={`h-5 w-5 ${favorites.some((favItem) => favItem.id === item.id) ? "text-red-500 fill-current" : "text-gray-400"}`}
                    />
                  </button>
   
              <button
                className="border border-orange-500 text-orange-500 font-semibold px-4 py-2 rounded-lg hover:bg-orange-400 hover:text-white transition-all"
                onClick={() => handleAddToCart(dish)}
              >
                Pick Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;