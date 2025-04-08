import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useCart } from "../context/CartContext"; // Import useCart

AOS.init();

export const dailySpecialsData = [
  // Starters
  {
    id: 1,
    name: "Margherita Pizza",
    category: "Starters",
    img: "https://bootstrapmade.com/content/demo/Yummy/assets/img/menu/menu-item-1.png",
    description: "Classic margherita pizza with fresh basil and mozzarella.",
    price: "$ 15.99",
  },
  {
    id: 2,
    name: "Caesar Salad",
    category: "Starters",
    img: "https://bootstrapmade.com/content/demo/Yummy/assets/img/menu/menu-item-2.png",
    description: "Crisp romaine lettuce with Caesar dressing and croutons.",
    price: "$ 8.99",
  },
  {
    id: 3,
    name: "Tandoori Paneer",
    category: "Starters",
    img: "...",
    price: "$11.49",
    description: "Spiced paneer grilled to perfection.",
  },
  {
    id: 4,
    name: "Garlic Bread",
    category: "Starters",
    img: "...",
    price: "$6.49",
    description: "Crispy bread with garlic & cheese.",
  },
  {
    id: 5,
    name: "Loaded Nachos",
    category: "Starters",
    img: "...",
    price: "$9.99",
    description: "Crunchy nachos with cheese & salsa.",
  },

  // Main Course
  {
    id: 6,
    name: "Grilled Chicken",
    category: "Main Course",
    img: "...",
    price: "$12.99",
    description: "Juicy grilled chicken with herbs & spices.",
  },
  {
    id: 7,
    name: "Pasta Alfredo",
    category: "Main Course",
    img: "...",
    price: "$10.99",
    description: "Creamy Alfredo sauce over fresh pasta.",
  },
  {
    id: 8,
    name: "Sushi Platter",
    category: "Main Course",
    img: "...",
    price: "$14.99",
    description: "Assorted fresh sushi rolls.",
  },
  {
    id: 9,
    name: "Beef Steak",
    category: "Main Course",
    img: "...",
    price: "$15.99",
    description: "Tender grilled steak with garlic butter.",
  },
  {
    id: 10,
    name: "Shrimp Tacos",
    category: "Main Course",
    img: "...",
    price: "$13.99",
    description: "Spicy shrimp tacos with fresh toppings.",
  },
  {
    id: 11,
    name: "Margarita Pizza",
    category: "Main Course",
    img: "...",
    price: "$11.99",
    description: "Classic pizza with basil & mozzarella.",
  },
  {
    id: 12,
    name: "BBQ Ribs",
    category: "Main Course",
    img: "...",
    price: "$17.99",
    description: "Slow-cooked BBQ ribs with smoky flavor.",
  },
  {
    id: 13,
    name: "Lamb Biryani",
    category: "Main Course",
    img: "...",
    price: "$14.99",
    description: "Aromatic rice with spiced lamb.",
  },

  // Desserts
  {
    id: 14,
    name: "Gulab Jamun",
    category: "Desserts",
    img: "...",
    price: "$6.99",
    description: "Soft & sweet Indian dessert.",
  },
  {
    id: 15,
    name: "Chocolate Cake",
    category: "Desserts",
    img: "...",
    price: "$7.49",
    description: "Rich and decadent chocolate cake.",
  },
  {
    id: 16,
    name: "Ice Cream Sundae",
    category: "Desserts",
    img: "...",
    price: "$5.99",
    description: "Vanilla ice cream with various toppings.",
  },
];

const categoriesToShow = ["All", "Starters", "Main Course", "Desserts"];

const SpecialDishes = () => {
  const [filter, setFilter] = useState("All");
  const { addToCart } = useCart(); // Use the useCart hook

  const filteredDishes = dailySpecialsData.filter(
    (dish) => filter === "All" || dish.category === filter
  );

  const handleAddToCart = (dish) => {
    const parsedPrice = typeof dish.price === 'string' ? parseFloat(dish.price.replace('$', '')) : dish.price;

    if (isNaN(parsedPrice)) {
      console.error("Invalid price for dish:", dish);
      toast.error("Invalid price! Please try again.");
      return;
    }

    addToCart({ ...dish, price: parsedPrice }); // Use addToCart from context
    toast.success(`${dish.name} added to cart!`, {
      position: "top-right",
      autoClose: 2000,
    });
  };

  return (
    <div className="min-h-screen bg-gray-100 text-gray-800 py-8 px-4 sm:px-6 lg:px-10 font-nunito">
      <ToastContainer />
      <h2 className="text-5xl text-purple-700 text-center uppercase p-10">Our Specials</h2>
      <div className="flex flex-col md:flex-row items-center justify-center gap-y-4 md:gap-x-6 py-4">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-dancing font-bold text-purple-700 text-center md:text-left">Special Dishes</h2>
        <div className="overflow-x-auto scrollbar-hide md:overflow-visible">
          <div className="flex flex-row gap-2 sm:gap-3 p-3 sm:p-0 justify-start md:justify-center">
            {categoriesToShow.map((category, index) => (
              <button
                key={category}
                className={`px-3 py-1.5 text-xs font-semibold rounded-full whitespace-nowrap min-w-[80px] text-center transition-all ${
                  filter === category
                    ? "bg-purple-600 text-white shadow-md scale-105"
                    : "bg-gray-200 hover:bg-purple-400 hover:text-white"
                }`}
                onClick={() => setFilter(category)}
                style={{ transitionDelay: `${index * 50}ms` }}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto mt-6 ">
        {filteredDishes.map((dish, index) => (
          <div
            key={dish.id}
            className="bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transition-all transform duration-300 m-10"
            data-aos="fade-up"
            data-aos-delay={index * 100}
          >
            <img src={dish.img} alt={dish.name} className="w-full h-40 object-cover rounded-md" />
            <h3 className="mt-3 text-lg font-bold">{dish.name}</h3>
            <p className="text-gray-600 text-sm">{dish.description}</p>
            <p className="text-purple-700 font-semibold mt-2">{dish.price}</p>
            <button
              className="mt-3 w-full border border-orange-500 text-orange-500 font-semibold px-4 py-2 rounded-lg hover:bg-orange-400 hover:text-white transition-all"
              onClick={() => handleAddToCart(dish)}
            >
              Pick Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SpecialDishes;


// import { useState } from "react";
// import { useCart } from "../context/CartContext"; // Import global context
// import AOS from "aos";
// import "aos/dist/aos.css";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// AOS.init();

// const dailySpecials = {
//   Monday: [
//     { name: "Grilled Chicken", image: "https://www.foxandbriar.com/wp-content/uploads/2023/07/Grilled-BBQ-Chicken-15-of-18.jpg", price: "$12.99", description: "Juicy grilled chicken with herbs & spices." },
//     { name: "Pasta Alfredo", image: "https://previews.123rf.com/images/naiklon/naiklon2305/naiklon230508589/205133946-top-view-fettuccine-alfredo-on-white-round-plate-on-white-background.jpg", price: "$10.99", description: "Creamy Alfredo sauce over fresh pasta." },
//   ],
//   Tuesday: [
//     { name: "Tandoori Paneer", image: "https://media.istockphoto.com/id/1186759790/photo/paneer-tikka-at-skewers-in-black-bowl-at-dark-slate-background-paneer-tikka-is-an-indian.jpg?s=612x612&w=0&k=20&c=cITToqM1KEnrixXjoLhEciqP24SxdKtW3QXykq-W5OE=", price: "$11.49", description: "Spiced paneer grilled to perfection." },
//     { name: "Caesar Salad", image: "https://media.istockphoto.com/id/1304648757/photo/caesar-salad-with-grilled-chicken-meat-romaine-and-parmesan-shot-from-the-top.jpg?s=612x612&w=0&k=20&c=gD1UdTalKcTAM8PVbyaRyJHRoZmvTSUCRgQW36UZUMY=", price: "$8.99", description: "Crisp romaine lettuce with classic dressing." },
//   ],
// };

// const SpecialDishes = () => {
//   const { addToCart, addToFavorites } = useCart();
//   const [selectedDay, setSelectedDay] = useState("Monday");

//   return (
//     <div className="min-h-screen bg-gray-100 text-gray-800 py-8 px-4 sm:px-6 lg:px-10 font-nunito">
//       <ToastContainer />

//       <div className="flex justify-center items-center mb-6">
//         <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-purple-700 text-center">
//           Special Dishes
//         </h2>
//       </div>

//       <div className="flex overflow-x-auto gap-3 sm:gap-4 pb-4 px-2 scrollbar-hide justify-center">
//         {Object.keys(dailySpecials).map((day, index) => (
//           <button
//             key={day}
//             className={`px-4 sm:px-6 py-2 text-sm sm:text-base font-semibold rounded-full transition-all ${
//               selectedDay === day
//                 ? "bg-purple-600 text-white shadow-lg scale-110"
//                 : "bg-gray-200 hover:bg-purple-400 hover:text-white"
//             }`}
//             onClick={() => setSelectedDay(day)}
//             style={{ transitionDelay: `${index * 50}ms` }}
//           >
//             {day}
//           </button>
//         ))}
//       </div>

//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto mt-6">
//         {dailySpecials[selectedDay].map((dish, index) => (
//           <div
//             key={index}
//             className="bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transition-all transform duration-300"
//             data-aos="fade-up"
//             data-aos-delay={index * 100}
//           >
//             <img
//               src={dish.image}
//               alt={dish.name}
//               className="w-full h-40 object-cover rounded-md"
//             />
//             <h3 className="mt-3 text-lg font-bold">{dish.name}</h3>
//             <p className="text-gray-600 text-sm">{dish.description}</p>
//             <p className="text-purple-700 font-semibold mt-2">{dish.price}</p>
//             <div className="flex gap-2 mt-3">
//               <button
//                 className="w-full border border-orange-500 text-orange-500 font-semibold px-4 py-2 rounded-lg hover:bg-orange-400 hover:text-white transition-all"
//                 onClick={() => addToCart(dish)}
//               >
//                 Pick Now
//               </button>
//               <button
//                 className="w-full border border-blue-500 text-blue-500 font-semibold px-4 py-2 rounded-lg hover:bg-blue-400 hover:text-white transition-all"
//                 onClick={() => addToFavorites(dish)}
//               >
//                 ⭐ Favorite
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default SpecialDishes;



















































// import { useState } from "react";
// import AOS from "aos";
// import "aos/dist/aos.css";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// // Initialize AOS animations
// AOS.init();

// // Sample Special Dishes for Each Day
// const dailySpecials = {
//   Monday: [
//     { name: "Grilled Chicken", image: "https://www.foxandbriar.com/wp-content/uploads/2023/07/Grilled-BBQ-Chicken-15-of-18.jpg", price: "$12.99", description: "Juicy grilled chicken with herbs & spices." },
//     { name: "Pasta Alfredo", image: "https://previews.123rf.com/images/naiklon/naiklon2305/naiklon230508589/205133946-top-view-fettuccine-alfredo-on-white-round-plate-on-white-background.jpg", price: "$10.99", description: "Creamy Alfredo sauce over fresh pasta." },
//   ],
//   Tuesday: [
//     { name: "Tandoori Paneer", image: "https://media.istockphoto.com/id/1186759790/photo/paneer-tikka-at-skewers-in-black-bowl-at-dark-slate-background-paneer-tikka-is-an-indian.jpg?s=612x612&w=0&k=20&c=cITToqM1KEnrixXjoLhEciqP24SxdKtW3QXykq-W5OE=", price: "$11.49", description: "Spiced paneer grilled to perfection." },
//     { name: "Caesar Salad", image: "https://media.istockphoto.com/id/1304648757/photo/caesar-salad-with-grilled-chicken-meat-romaine-and-parmesan-shot-from-the-top.jpg?s=612x612&w=0&k=20&c=gD1UdTalKcTAM8PVbyaRyJHRoZmvTSUCRgQW36UZUMY=", price: "$8.99", description: "Crisp romaine lettuce with classic dressing." },
//   ],
// };

// const SpecialDishes = () => {
//   const [selectedDay, setSelectedDay] = useState("Monday");
//   const [cart, setCart] = useState([]); // 🛒 Cart State

//   // Add item to cart
//   const handleAddToCart = (dish) => {
//     setCart((prevCart) => [...prevCart, dish]);
//     toast.success(`${dish.name} added to cart!`, {
//       position: "top-right",
//       autoClose: 2000,
//     });
//   };

//   // Remove item from cart
//   const handleRemoveFromCart = (index) => {
//     setCart((prevCart) => prevCart.filter((_, i) => i !== index));
//   };

//   return (
//     <div className="min-h-screen bg-gray-100 text-gray-800 py-8 px-4 sm:px-6 lg:px-10 font-nunito">
//       <ToastContainer />

//       {/* Header */}
//       <div className="flex justify-center items-center mb-6">
//         <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-purple-700 text-center">
//           Special Dishes
//         </h2>
//       </div>

//       {/* Scrollable Day Selection */}
//       <div className="flex overflow-x-auto gap-3 sm:gap-4 pb-4 px-2 scrollbar-hide justify-center">
//         {Object.keys(dailySpecials).map((day, index) => (
//           <button
//             key={day}
//             className={`px-4 sm:px-6 py-2 text-sm sm:text-base font-semibold rounded-full transition-all ${
//               selectedDay === day
//                 ? "bg-purple-600 text-white shadow-lg scale-110"
//                 : "bg-gray-200 hover:bg-purple-400 hover:text-white"
//             }`}
//             onClick={() => setSelectedDay(day)}
//             style={{ transitionDelay: `${index * 50}ms` }}
//           >
//             {day}
//           </button>
//         ))}
//       </div>

//       {/* Special Dishes */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto mt-6">
//         {dailySpecials[selectedDay].map((dish, index) => (
//           <div
//             key={index}
//             className="bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transition-all transform duration-300"
//             data-aos="fade-up"
//             data-aos-delay={index * 100}
//           >
//             <img
//               src={dish.image}
//               alt={dish.name}
//               className="w-full h-40 object-cover rounded-md"
//             />
//             <h3 className="mt-3 text-lg font-bold">{dish.name}</h3>
//             <p className="text-gray-600 text-sm">{dish.description}</p>
//             <p className="text-purple-700 font-semibold mt-2">{dish.price}</p>
//             <button
//               className="mt-3 w-full border border-orange-500 text-orange-500 font-semibold px-4 py-2 rounded-lg hover:bg-orange-400 hover:text-white transition-all"
//               onClick={() => handleAddToCart(dish)}
//             >
//               Pick Now
//             </button>
//           </div>
//         ))}
//       </div>

//       {/* Cart Section */}
//       <div className="max-w-4xl mx-auto mt-10 bg-white p-6 rounded-lg shadow-lg">
//         <h2 className="text-2xl font-bold text-center text-purple-700 mb-4">
//           Your Cart 🛒
//         </h2>

//         {cart.length === 0 ? (
//           <p className="text-center text-gray-500">Your cart is empty.</p>
//         ) : (
//           <div className="space-y-4">
//             {cart.map((item, index) => (
//               <div key={index} className="flex justify-between items-center border p-4 rounded-lg shadow-sm">
//                 <div className="flex items-center gap-4">
//                   <img
//                     src={item.image}
//                     alt={item.name}
//                     className="w-16 h-16 object-cover rounded-md"
//                   />
//                   <div>
//                     <h3 className="font-bold text-lg">{item.name}</h3>
//                     <p className="text-purple-700 font-semibold">{item.price}</p>
//                   </div>
//                 </div>
//                 <button
//                   className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-all"
//                   onClick={() => handleRemoveFromCart(index)}
//                 >
//                   Remove
//                 </button>
//               </div>
//             ))}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default SpecialDishes;





// import { useState, useEffect } from "react";
// import AOS from "aos";
// import "aos/dist/aos.css";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import { useCart } from "../context/CartContext"; // Import Cart Context

// const dailySpecials = {
//   Monday: [
//     { name: "Grilled Chicken", image: "https://www.foxandbriar.com/wp-content/uploads/2023/07/Grilled-BBQ-Chicken-15-of-18.jpg", price: 12.99, description: "Juicy grilled chicken with herbs & spices." },
//     { name: "Pasta Alfredo", image: "https://previews.123rf.com/images/naiklon/naiklon2305/naiklon230508589/205133946-top-view-fettuccine-alfredo-on-white-round-plate-on-white-background.jpg", price: 10.99, description: "Creamy Alfredo sauce over fresh pasta." },
//   ],
//   Tuesday: [
//     { name: "Tacos", image: "https://upload.wikimedia.org/wikipedia/commons/3/3a/NCI_Visuals_Food_Taco.jpg", price: 9.99, description: "Crispy tacos with fresh toppings." },
//     { name: "Caesar Salad", image: "https://www.simplyrecipes.com/thmb/xu0UUGURmbhtj7KLR1BQCOy6_4g=/1800x1200/filters:fill(auto,1)/Simply-Recipes-Caesar-Salad-LEAD-04-8310bb79c4e24912853043a0127e2386.jpg", price: 7.99, description: "Classic Caesar salad with parmesan and croutons." },
//   ],
// };

// const SpecialDishes = () => {
//   const [selectedDay, setSelectedDay] = useState("Monday");
//   const { addToCart } = useCart();

//   // Initialize AOS once
//   useEffect(() => {
//     AOS.init({ duration: 800, easing: "ease-in-out" });
//   }, []);

//   const handleAddToCart = (dish) => {
//     addToCart(dish);
//     toast.success(`${dish.name} added to cart!`, {
//       position: "top-right",
//       autoClose: 2000,
//       hideProgressBar: false,
//       closeOnClick: true,
//       pauseOnHover: true,
//       draggable: true,
//       progress: undefined,
//       theme: "light",
//     });
//   };

//   return (
//     <div className="min-h-screen bg-gray-100 text-gray-800 py-8 px-4 sm:px-6 lg:px-10 font-nunito">
//       <ToastContainer /> {/* Toast Container to display messages */}

//       {/* Header */}
//       <div className="flex justify-center items-center mb-6">
//         <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-purple-700 text-center">
//           Special Dishes
//         </h2>
//       </div>

//       {/* Scrollable Day Selection */}
//       <div className="flex overflow-x-auto gap-3 sm:gap-4 pb-4 px-2 scrollbar-hide justify-center">
//         {Object.keys(dailySpecials).map((day, index) => (
//           <button
//             key={day}
//             className={`px-4 sm:px-6 py-2 text-sm sm:text-base font-semibold rounded-full transition-all ${
//               selectedDay === day
//                 ? "bg-purple-600 text-white shadow-lg scale-110"
//                 : "bg-gray-200 hover:bg-purple-400 hover:text-white"
//             }`}
//             onClick={() => setSelectedDay(day)}
//             style={{ transitionDelay: `${index * 50}ms` }}
//           >
//             {day}
//           </button>
//         ))}
//       </div>

//       {/* Special Dishes */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto mt-6">
//         {dailySpecials[selectedDay].map((dish, index) => (
//           <div
//             key={index}
//             className="bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transition-all transform duration-300"
//             data-aos="fade-up"
//             data-aos-delay={index * 100}
//           >
//             <img
//               src={dish.image}
//               alt={dish.name}
//               className="w-full h-40 object-cover rounded-md"
//             />
//             <h3 className="mt-3 text-lg font-bold">{dish.name}</h3>
//             <p className="text-gray-600 text-sm">{dish.description}</p>
//             <p className="text-purple-700 font-semibold mt-2">${dish.price.toFixed(2)}</p>
//             <button
//               className="mt-3 w-full border border-orange-500 text-orange-500 font-semibold px-4 py-2 rounded-lg hover:bg-orange-400 hover:text-white transition-all"
//               onClick={() => handleAddToCart(dish)}
//             >
//               Pick Now
//             </button>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default SpecialDishes;
