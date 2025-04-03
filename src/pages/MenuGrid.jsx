// // MenuGrid Component (MenuGrid.jsx)
// import { useState } from "react";
// import Modal from "./Modal";

// const MenuGrid = ({ foodItems, addToCart }) => {
//   const [selectedFood, setSelectedFood] = useState(null);

//   return (
//     <div>
//       {/* Modal Component */}
//       <Modal selectedFood={selectedFood} setSelectedFood={setSelectedFood} addToCart={addToCart} />

//       {/* MenuGrid Section */}
//       <div className="w-full mt-10" id="MenuGrid">
//         <h6 className="text-center text-gray-500 uppercase tracking-wider" data-aos="fade-down">
//           MenuGrid
//         </h6>
//         <h2 className="text-center text-3xl font-bold font-nunito" data-aos="fade-up">
//           What's on your{" "}
//           <span className="text-5xl text-purple-700 font-dancing font-semibold">Mind</span>?
//         </h2>

//         {/* Food Items Grid */}
//         <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-10 place-items-center">
//           {foodItems.map((item, index) => (
//             <div
//               key={index}
//               className="relative rounded-lg overflow-hidden bg-white backdrop-blur-lg 
//               transition-transform duration-300 ease-out hover:scale-105 hover:rotate-1 cursor-pointer w-32 h-40"
//               onClick={() => setSelectedFood(item)}
//               data-aos="flip-left"
//               data-aos-delay={index * 100}
//             >
//               <img
//                 src={item.img}
//                 alt={item.name}
//                 data-aos="flip-left"
//                 data-aos-delay={index * 100}
//                 className="w-full h-full shadow-2xl object-cover"
//               />
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default MenuGrid;


// import { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { FiPlus, FiEye, FiHeart } from "react-icons/fi";
// import Modal from "./Modal";

// const MenuGrid = ({ foodItems, addToCart }) => {
//   const [selectedFood, setSelectedFood] = useState(null);
//   const [hoveredItem, setHoveredItem] = useState(null);

//   return (
//     <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-50">
//       <div className="max-w-7xl mx-auto">
//         {/* Header */}
//         <div className="text-center mb-12">
//           <span className="inline-block px-4 py-1 text-xs font-semibold tracking-wider text-purple-600 uppercase bg-purple-100 rounded-full mb-4">
//             Our Menu
//           </span>
//           <h2 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
//             What's on your{" "}
//             <span className="text-purple-600 font-dancing">Mind?</span>
//           </h2>
//           <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500">
//             Explore our delicious offerings
//           </p>
//         </div>

//         {/* Food Grid */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//           {foodItems.map((item, index) => (
//             <motion.div
//               key={item.id}
//               className="relative bg-white rounded-xl shadow-md overflow-hidden"
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5, delay: index * 0.05 }}
//               onHoverStart={() => setHoveredItem(item.id)}
//               onHoverEnd={() => setHoveredItem(null)}
//             >
//               {/* Image with overlay */}
//               <div className="relative h-48 overflow-hidden cursor-pointer">
//                 <img
//                   src={item.img}
//                   alt={item.name}
//                   className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
//                   loading="lazy"
//                 />

//                 {/* Hover overlay with action buttons */}
//                 <AnimatePresence>
//                   {hoveredItem === item.id && (
//                     <motion.div
//                       className="absolute inset-0 bg-black/50 flex items-center justify-center gap-4"
//                       initial={{ opacity: 0 }}
//                       animate={{ opacity: 1 }}
//                       exit={{ opacity: 0 }}
//                     >
//                       <motion.button
//                         className="p-3 bg-white rounded-full text-purple-600 hover:bg-purple-50"
//                         whileHover={{ scale: 1.1 }}
//                         onClick={(e) => {
//                           e.stopPropagation();
//                           addToCart(item);
//                         }}
//                         aria-label="Quick add to cart"
//                       >
//                         <FiPlus className="w-5 h-5" />
//                       </motion.button>
//                       <motion.button
//                         className="p-3 bg-white rounded-full text-purple-600 hover:bg-purple-50"
//                         whileHover={{ scale: 1.1 }}
//                         onClick={(e) => {
//                           e.stopPropagation();
//                           setSelectedFood(item);
//                         }}
//                         aria-label="View details"
//                       >
//                         <FiEye className="w-5 h-5" />
//                       </motion.button>
//                       <motion.button
//                         className="p-3 bg-white rounded-full text-purple-600 hover:bg-purple-50"
//                         whileHover={{ scale: 1.1 }}
//                         aria-label="Add to favorites"
//                       >
//                         <FiHeart className="w-5 h-5" />
//                       </motion.button>
//                     </motion.div>
//                   )}
//                 </AnimatePresence>
//               </div>

//               {/* Food info */}
//               <div 
//                 className="p-4 cursor-pointer"
//                 onClick={() => setSelectedFood(item)}
//               >
//                 <div className="flex justify-between items-start">
//                   <h3 className="font-bold text-gray-900">{item.name}</h3>
//                   <span className="font-bold text-purple-600">
//                     ${item.price.toFixed(2)}
//                   </span>
//                 </div>
//                 <p className="text-sm text-gray-500 mt-1 line-clamp-2">
//                   {item.description}
//                 </p>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>

//       {/* Food Detail Modal */}
//       <AnimatePresence>
//         {selectedFood && (
//           <Modal 
//             selectedFood={selectedFood} 
//             setSelectedFood={setSelectedFood} 
//             addToCart={addToCart}
//           />
//         )}
//       </AnimatePresence>
//     </section>
//   );
// };

// export default MenuGrid;


// import { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { FiPlus, FiX, FiHeart, FiShoppingCart } from "react-icons/fi";

// const foodItems = [
//   { 
//     id: 1,
//     img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/8f508de7-e0ac-4ba8-b54d-def9db98959e_cake.png",
//     name: "Chocolate Cake",
//     price: 5.99,
//     description: "A rich and moist dessert with deep chocolate flavor."
//   },
//   { 
//     id: 2,
//     img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/8f508de7-e0ac-4ba8-b54d-def9db98959e_chole%20bhature.png",
//     name: "Chole Bhature",
//     price: 8.99,
//     description: "A spicy chickpea curry served with fluffy fried bread."   
//   },
//   { 
//     id: 3,
//     img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_Khichdi.png",
//     name: "Khichdi",
//     price: 7.49,
//     description: "A comforting one-pot dish of lentils and rice, lightly spiced."
//   },
//   { 
//     id: 4,
//     img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_Biryani.png",
//     name: "Biryani",
//     price: 12.99,
//     description: "A fragrant rice dish layered with spiced meat or vegetables."
//   },
//   { 
//     id: 5,
//     img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_Noodles.png",
//     name: "Noodles",
//     price: 9.99,
//     description: "A stir-fried or soupy delight, packed with flavors and veggies"
//   },
//   { 
//     id: 6,
//     img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_Paratha.png",
//     name: "Paratha",
//     price: 6.49,
//     description: "A crispy, layered Indian flatbread, stuffed or plain."
//   },
//   { 
//     id: 7,
//     img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/3f2c40d3-96c7-44ce-8b35-aef6ea746cdc_lassi.png",
//     name: "Lassi",
//     price: 3.99,
//     description: "A refreshing yogurt-based drink, sweet or salted."
//   },
//   { 
//     id: 8,
//     img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_Gulab%20jamun.png",
//     name: "Gulab Jamun",
//     price: 4.99,
//     description: "Soft, deep-fried milk dumplings soaked in sugar syrup."
//   },
//   {
//     id: 9,
//     img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/MERCHANDISING_BANNERS/IMAGES/MERCH/2025/1/24/897bc750-6b57-4e7d-9365-87c1ab2c6d7e_Chinese2.png",
//     name: "Chinese Platter",
//     price: 11.99,
//     description: "A fusion of bold flavors, stir-fries, and savory sauces."
//   },
//   {
//     id: 10,
//     img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/8f508de7-e0ac-4ba8-b54d-def9db98959e_Rasgulla.png",
//     name: "Rasgulla",
//     price: 4.99,
//     description: "Spongy, syrup-soaked cottage cheese dumplings."
//   },
//   {
//     id: 11,
//     img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/8f508de7-e0ac-4ba8-b54d-def9db98959e_Pure%20Veg.png",
//     name: "Vegetarian Thali",
//     price: 10.99,
//     description: "A colorful medley of fresh vegetables, herbs, and spices."
//   },
//   {
//     id: 12,
//     img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/MERCHANDISING_BANNERS/IMAGES/MERCH/2025/1/24/05a939eb-fd4e-4308-b989-d1c54f4421b3_northindian1.png",
//     name: "North Indian Feast",
//     price: 13.99,
//     description: "A flavorful blend of spices, herbs, and tender meat or vegetables."
//   },
//   {
//     id: 13,
//     img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_Desserts.png",
//     name: "Dessert Platter",
//     price: 7.99,
//     description: "A sweet treat, often creamy, fruity, or nutty."
//   },
//   {
//     id: 14,
//     img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/MERCHANDISING_BANNERS/IMAGES/MERCH/2025/2/4/2b999748-b33c-4560-a422-e90f3e60a5fb_Poori1.png",
//     name: "Poori",
//     price: 5.99,
//     description: "A crispy, puffed Indian flatbread, often served with a side of chutney"
//   },
//   {
//     id: 15,
//     img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/8f508de7-e0ac-4ba8-b54d-def9db98959e_Salad-1.png",
//     name: "Fresh Salad",
//     price: 6.99,
//     description: "A fresh mix of greens, veggies, and sometimes proteins, all tossed together."
//   }
// ];


// const MenuGrid = ({ addToCart }) => {
//   const [selectedFood, setSelectedFood] = useState(null);
//   const [favorites, setFavorites] = useState([]);
//   const [loading, setLoading] = useState(true);

//   const toggleFavorite = (id) => {
//     setFavorites(prev => 
//       prev.includes(id) 
//         ? prev.filter(itemId => itemId !== id) 
//         : [...prev, id]
//     );
//   };

//   // Simulate loading completion
//   useState(() => {
//     const timer = setTimeout(() => setLoading(false), 1000);
//     return () => clearTimeout(timer);
//   }, []);

//   return (
//     <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-50 font-nunito">
//       <div className="max-w-7xl mx-auto">
//         <div className="text-center mb-12">
//           <h2 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
//             Our Menu
//           </h2>
//           <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500">
//             Discover our delicious offerings
//           </p>
//         </div>

//         {loading ? (
//           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//             {[...Array(8)].map((_, index) => (
//               <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden">
//                 <div className="h-48 bg-gray-200 animate-pulse"></div>
//                 <div className="p-4">
//                   <div className="h-6 bg-gray-200 animate-pulse rounded mb-2"></div>
//                   <div className="space-y-2">
//                     <div className="h-4 bg-gray-200 animate-pulse rounded"></div>
//                     <div className="h-4 bg-gray-200 animate-pulse rounded w-3/4"></div>
//                   </div>
//                   <div className="h-5 bg-gray-200 animate-pulse rounded w-1/3 mt-3"></div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         ) : (
//           <>
//             <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//               {foodItems.map((item) => (
//                 <motion.div
//                   key={item.id}
//                   className="relative bg-white rounded-xl shadow-md overflow-hidden"
//                   initial={{ opacity: 0, y: 20 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{ duration: 0.5 }}
//                   whileHover={{ y: -5 }}
//                   onClick={() => setSelectedFood(item)}
//                 >
//                   {/* Favorite Button */}
//                   <button
//                     onClick={(e) => {
//                       e.stopPropagation();
//                       toggleFavorite(item.id);
//                     }}
//                     className="absolute top-3 right-3 z-10 p-2 bg-white/80 rounded-full backdrop-blur-sm"
//                     aria-label={favorites.includes(item.id) ? "Remove from favorites" : "Add to favorites"}
//                   >
//                     <FiHeart
//                       className={`h-5 w-5 ${favorites.includes(item.id) ? 'text-red-500 fill-current' : 'text-gray-400'}`}
//                     />
//                   </button>

//                   {/* Food Image */}
//                   <div className="relative h-48 overflow-hidden">
//                     <img
//                       src={item.img}
//                       alt={item.name}
//                       className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
//                       loading="lazy"
//                       onError={(e) => {
//                         e.target.onerror = null;
//                         e.target.src = "https://via.placeholder.com/300x200?text=Food+Image";
//                       }}
//                     />
//                   </div>

//                   {/* Food Info */}
//                   <div className="p-4">
//                     <h3 className="font-bold text-gray-900 truncate">
//                       {item.name}
//                     </h3>
//                     <p className="text-sm text-gray-500 mt-1 line-clamp-2">
//                       {item.description}
//                     </p>
//                     <div className="mt-2 font-bold text-purple-600">
//                       ${item.price?.toFixed(2)}
//                     </div>
//                   </div>
//                 </motion.div>
//               ))}
//             </div>

//             {/* Food Detail Overlay */}
//             <AnimatePresence>
//               {selectedFood && (
//                 <motion.div
//                   className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
//                   initial={{ opacity: 0 }}
//                   animate={{ opacity: 1 }}
//                   exit={{ opacity: 0 }}
//                   onClick={() => setSelectedFood(null)}
//                 >
//                   <motion.div
//                     className="bg-white rounded-xl max-w-md w-full max-h-[90vh] overflow-y-auto"
//                     initial={{ scale: 0.9, y: 20 }}
//                     animate={{ scale: 1, y: 0 }}
//                     exit={{ scale: 0.9, y: 20 }}
//                     onClick={(e) => e.stopPropagation()}
//                   >
//                     <div className="p-6">
//                       <div className="flex justify-between items-start mb-4">
//                         <h3 className="text-2xl font-bold">{selectedFood.name}</h3>
//                         <button 
//                           onClick={() => setSelectedFood(null)}
//                           className="text-gray-500 hover:text-gray-700"
//                         >
//                           <FiX size={24} />
//                         </button>
//                       </div>
                      
//                       <img 
//                         src={selectedFood.img}
//                         alt={selectedFood.name}
//                         className="w-full h-64 object-cover rounded-lg mb-4"
//                         onError={(e) => {
//                           e.target.onerror = null;
//                           e.target.src = "https://via.placeholder.com/600x400?text=Food+Image";
//                         }}
//                       />
                      
//                       <p className="text-gray-700 mb-4">{selectedFood.description}</p>
                      
//                       <div className="flex justify-between items-center">
//                         <span className="text-xl font-bold text-purple-600">
//                           ${selectedFood.price.toFixed(2)}
//                         </span>
//                         <button
//                           onClick={() => {
//                             addToCart(selectedFood);
//                             setSelectedFood(null);
//                           }}
//                           className="flex items-center bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700"
//                         >
//                           <FiShoppingCart className="mr-2" />
//                           Add to Order
//                         </button>
//                       </div>
//                     </div>
//                   </motion.div>
//                 </motion.div>
//               )}
//             </AnimatePresence>
//           </>
//         )}
//       </div>
//     </section>
//   );
// };

// export default MenuGrid;

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiChevronLeft, FiChevronRight, FiHeart, FiX, FiShoppingCart } from "react-icons/fi";
import { useCart } from "../context/CartContext"; // Import useCart
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
    name: "Fresh Salad",
    price: 6.99,
    description: "A fresh mix of greens, veggies, and sometimes proteins, all tossed together."
  }
];

const MenuGrid = () => {
  const { addToCart } = useCart(); // Get addToCart from context
  const [selectedFood, setSelectedFood] = useState(null);
  const [favorites, setFavorites] = useState([]);
  const sliderRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  // const [isPaused, setIsPaused] = useState(false);

  const toggleFavorite = (id) => {
    setFavorites(prev => 
      prev.includes(id) 
        ? prev.filter(itemId => itemId !== id) 
        : [...prev, id]
    );
  };

  const scrollToItem = (index) => {
    if (sliderRef.current) {
      const item = sliderRef.current.children[index];
      item.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
        inline: 'center'
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
    background: 'linear-gradient(135deg, #000000 0%, #2d0a3a 50%, #5a1a5a 100%)'
    
  }}
>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-gray-200 sm:text-5xl">
            Our Menu
          </h2>
          {/* <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500">
            Discover our delicious offerings
          </p> */}
          <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-300">
  Explore a world of flavors where every bite is designed to delight your senses
</p>
        </div>

        {/* Slider Container */}
        <div className="relative">
          {/* Navigation Arrows */}
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

          {/* Slider Track */}
          <div 
            ref={sliderRef}
            className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide space-x-6 py-4"
            style={{ scrollSnapType: 'x mandatory' }}
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
                  {/* Favorite Button */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleFavorite(item.id);
                    }}
                    className="absolute top-3 right-3 z-10 p-2 bg-white/80 rounded-full backdrop-blur-sm"
                    aria-label={favorites.includes(item.id) ? "Remove from favorites" : "Add to favorites"}
                  >
                    <FiHeart
                      className={`h-5 w-5 ${favorites.includes(item.id) ? 'text-red-500 fill-current' : 'text-gray-400'}`}
                    />
                  </button>

                  {/* Food Image */}
                  <div className="relative h-46 overflow-hidden p-5 cursor-pointer">
                    <img
                      src={item.img}
                      alt={item.name}
                      className="w-full h-60 object-cover rounded-xl transition-transform duration-500 hover:scale-110"
                      loading="lazy"
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = "https://via.placeholder.com/300x200?text=Food+Image";
                      }}
                    />
                  </div>

                  {/* Food Info */}
                  <div className="p-2">
                    {/* <h3 className="font-bold text-gray-900 truncate">
                      {item.name}
                    </h3> */}
                    {/* <p className="text-sm text-gray-500 mt-1 line-clamp-2">
                      {item.description}
                    </p> */}
                    {/* <div className="mt-2 font-bold text-purple-600">
                      ${item.price?.toFixed(2)}
                    </div> */}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Food Detail Overlay */}
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
                    <span className="text-xl font-bold text-purple-600">
                      ${selectedFood.price.toFixed(2)}
                    </span>
                    <button
    onClick={() => {
      addToCart(selectedFood);
      setSelectedFood(null);
      toast.success(`${selectedFood.name} added to cart!`, {
        position: "top-right",
        autoClose: 3000,
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

      {/* Custom scrollbar styles */}
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