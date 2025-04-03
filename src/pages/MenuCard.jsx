// import React from "react";

// const MenuCard = ({ menuData }) => {
//   // Function to handle order confirmation
//   const handleOrder = (name) => {
//     alert(`Your order for ${name} has been confirmed!`);
//   };

//   return (
//     <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-8">
//       {menuData.map((curElem) => {
//         const { id, name, category, image, description } = curElem;

//         return (
//           <div className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-xl duration-300" key={id}>
//             <img src={image} alt={name} className="w-full h-48 object-cover" />
//             <div className="p-5 text-center">
//               <h2 className="text-2xl font-bold text-gray-800 mb-2">{name}</h2>
//               <p className="text-gray-500 text-sm mb-2">{category}</p>
//               <p className="text-gray-700 text-base mb-4">{description}</p>
//               <button
//                 className="mt-4 px-6 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50 transition duration-200"
//                 onClick={() => handleOrder(name)} // Trigger order confirmation
//               >
//                 Order Now
//               </button>
//             </div>
//           </div>
//         );
//       })}
//     </section>
//   );
// };

// export default MenuCard;




// import React from "react";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// const MenuCard = ({ menuData }) => {
//   const handleOrder = (name) => {
//     toast.success(`Your order for ${name} has been confirmed!`, {
//       position: "top-right",
//       autoClose: 3000,
//       hideProgressBar: false,
//       closeOnClick: true,
//       pauseOnHover: true,
//       draggable: true,
//       progress: undefined,
//       theme: "colored",
//       style: {
//         backgroundColor: "purple", // Purple background
//         color: "#FFFFFF",          // White text
//       },
//     });
//   };

//   return (
//     <>
//       <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-8">
//         {menuData.map((curElem) => {
//           const { id, name, category, image, description } = curElem;

//           return (
//             <div
//               key={id}
//               className="relative bg-white bg-opacity-20 backdrop-blur-lg shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-xl duration-300"
//             >
//               <img src={image} alt={name} className="w-10 h-10 object-cover" />
//               <div className="p-5 text-center">
//                 <h2 className="text-2xl font-bold text-gray-800 mb-2">{name}</h2>
//                 <p className="text-gray-500 text-sm mb-2">{category}</p>
//                 <p className="text-gray-700 text-base mb-4">{description}</p>
//                 <button
//                   className="mt-4 px-6 py-2 bg-orange-600 text-white rounded-lg hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50 transition duration-200"
//                   onClick={() => handleOrder(name)}
//                 >
//                   Order Now
//                 </button>
//               </div>
//             </div>
//           );
//         })}
//       </section>
//       {/* Toast Container */}
//       <ToastContainer />
//     </>
//   );
// };

// export default MenuCard;
