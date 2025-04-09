


import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiChevronLeft, FiChevronRight, FiHeart, FiX, FiShoppingCart } from "react-icons/fi";
import { useCart } from "../context/CartContext";
import { toast } from "react-toastify";

const foodItems = [
  { 
    id: 1,
    img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/8f508de7-e0ac-4ba8-b54d-def9db98959e_cake.png",
    name: "Chocolate Cake",
    price: 5.99,
    description: "A rich and moist dessert with deep chocolate flavor."
  },
  { 
    id: 2,
    img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/8f508de7-e0ac-4ba8-b54d-def9db98959e_chole%20bhature.png",
    name: "Chole Bhature",
    price: 8.99,
    description: "A spicy chickpea curry served with fluffy fried bread."   
  },
  { 
    id: 3,
    img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_Khichdi.png",
    name: "Khichdi",
    price: 7.49,
    description: "A comforting one-pot dish of lentils and rice, lightly spiced."
  },
  { 
    id: 4,
    img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_Biryani.png",
    name: "Biryani",
    price: 12.99,
    description: "A fragrant rice dish layered with spiced meat or vegetables."
  },
  { 
    id: 5,
    img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_Noodles.png",
    name: "Noodles",
    price: 9.99,
    description: "A stir-fried or soupy delight, packed with flavors and veggies"
  },
  { 
    id: 6,
    img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_Paratha.png",
    name: "Paratha",
    price: 6.49,
    description: "A crispy, layered Indian flatbread, stuffed or plain."
  },
  { 
    id: 7,
    img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/3f2c40d3-96c7-44ce-8b35-aef6ea746cdc_lassi.png",
    name: "Lassi",
    price: 3.99,
    description: "A refreshing yogurt-based drink, sweet or salted."
  },
  { 
    id: 8,
    img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_Gulab%20jamun.png",
    name: "Gulab Jamun",
    price: 4.99,
    description: "Soft, deep-fried milk dumplings soaked in sugar syrup."
  },
  {
    id: 9,
    img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/MERCHANDISING_BANNERS/IMAGES/MERCH/2025/1/24/897bc750-6b57-4e7d-9365-87c1ab2c6d7e_Chinese2.png",
    name: "Chinese Platter",
    price: 11.99,
    description: "A fusion of bold flavors, stir-fries, and savory sauces."
  },
  {
    id: 10,
    img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/8f508de7-e0ac-4ba8-b54d-def9db98959e_Rasgulla.png",
    name: "Rasgulla",
    price: 4.99,
    description: "Spongy, syrup-soaked cottage cheese dumplings."
  },
  {
    id: 11,
    img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/8f508de7-e0ac-4ba8-b54d-def9db98959e_Pure%20Veg.png",
    name: "Vegetarian Thali",
    price: 10.99,
    description: "A colorful medley of fresh vegetables, herbs, and spices."
  },
  {
    id: 12,
    img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/MERCHANDISING_BANNERS/IMAGES/MERCH/2025/1/24/05a939eb-fd4e-4308-b989-d1c54f4421b3_northindian1.png",
    name: "North Indian Feast",
    price: 13.99,
    description: "A flavorful blend of spices, herbs, and tender meat or vegetables."
  },
  {
    id: 13,
    img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_Desserts.png",
    name: "Dessert Platter",
    price: 7.99,
    description: "A sweet treat, often creamy, fruity, or nutty."
  },
  {
    id: 14,
    img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/MERCHANDISING_BANNERS/IMAGES/MERCH/2025/2/4/2b999748-b33c-4560-a422-e90f3e60a5fb_Poori1.png",
    name: "Poori",
    price: 5.99,
    description: "A crispy, puffed Indian flatbread, often served with a side of chutney"
  },
  {
    id: 15,
    img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/8f508de7-e0ac-4ba8-b54d-def9db98959e_Salad-1.png",
    name: "South Indian",
    price: 6.99,
    description: "A fresh mix of greens, veggies, and sometimes proteins, all tossed together."
  }
];

const MenuGrid = () => {
  const { addToCart, addToFavorites, favorites, removeFromFavorites } = useCart(); // Get addToFavorites and favorites from context

  const toggleFavorite = (item) => {
    if(favorites.some((favItem) => favItem.id === item.id)){
      removeFromFavorites(item.id)
    } else {
      addToFavorites(item);
    }
  };
  const [selectedFood, setSelectedFood] = useState(null);
  const sliderRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);


  const scrollToItem = (index) => {
    if (sliderRef.current) {
      const item = sliderRef.current.children[index];
      item.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "center",
      });
      setCurrentIndex(index);
    }
  };

  const nextSlide = () => {
    const newIndex = (currentIndex + 1) % foodItems.length;
    scrollToItem(newIndex);
  };

  const prevSlide = () => {
    const newIndex = (currentIndex - 1 + foodItems.length) % foodItems.length;
    scrollToItem(newIndex);
  };

  return (
    <section
      className="py-12 px-4 sm:px-6 lg:px-8 relative font-nunito"
      style={{
        background: "linear-gradient(135deg, #000000 0%, #2d0a3a 50%, #5a1a5a 100%)",
      }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-gray-200 sm:text-5xl">
            Our Menu
          </h2>
          <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-300">
            Explore a world of flavors where every bite is designed to delight your senses
          </p>
        </div>

        <div className="relative">
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition -ml-4"
            aria-label="Previous item"
          >
            <FiChevronLeft className="h-6 w-6 text-gray-700" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition -mr-4"
            aria-label="Next item"
          >
            <FiChevronRight className="h-6 w-6 text-gray-700" />
          </button>

          <div
            ref={sliderRef}
            className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide space-x-6 py-4"
            style={{ scrollSnapType: "x mandatory" }}
          >
            {foodItems.map((item) => (
              <motion.div
                key={item.id}
                className="flex-shrink-0 w-64 snap-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                whileHover={{ scale: 1.05 }}
              >
                <div
                  className="relative  overflow-hidden h-full"
                  onClick={() => setSelectedFood(item)}
                >
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

                  <div className="relative h-46 overflow-hidden p-5 cursor-pointer">
                    <img
                      src={item.img}
                      alt={item.name}
                      className="w-full h-50 object-cover rounded-xl transition-transform duration-500 hover:scale-110"
                      loading="lazy"
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = "https://via.placeholder.com/300x200?text=Food+Image";
                      }}
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <AnimatePresence>
          {selectedFood && (
            <motion.div
              className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedFood(null)}
            >
              <motion.div
                className="bg-white rounded-xl max-w-md w-full max-h-[90vh] overflow-y-auto"
                initial={{ scale: 0.9, y: 20 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.9, y: 20 }}
                onClick={(e) => e.stopPropagation()}
              >
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-2xl font-bold">{selectedFood.name}</h3>
                    <button
                      onClick={() => setSelectedFood(null)}
                      className="text-gray-500 hover:text-gray-700"
                    >
                      <FiX size={24} />
                    </button>
                  </div>

                  <img
                    src={selectedFood.img}
                    alt={selectedFood.name}
                    className="w-full h-64 object-cover rounded-lg mb-4"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = "https://via.placeholder.com/600x400?text=Food+Image";
                    }}
                  />

                  <p className="text-gray-700 mb-4">{selectedFood.description}</p>

                  <div className="flex justify-between items-center">
                    <span className="text-xl font-bold text-purple-600">${selectedFood.price.toFixed(2)}</span>
                    <button
                      onClick={() => {
                        addToCart(selectedFood);
                        setSelectedFood(null);
                        toast.success(`${selectedFood.name} added to cart!`, {
                          position: "top-right",
                          autoClose: 2000,
                        });
                      }}
                      className="flex items-center bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700"
                    >
                      <FiShoppingCart className="mr-2" />
                      Add to Order
                    </button>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
};

export default MenuGrid;