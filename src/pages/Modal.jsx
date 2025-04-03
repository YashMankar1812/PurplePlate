// // Modal Component (Modal.jsx)
// import { IoClose } from "react-icons/io5";

// const Modal = ({ selectedFood, setSelectedFood, addToCart }) => {
//   if (!selectedFood) return null;

//   return (
//     <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50" data-aos="zoom-in">
//       <div className="bg-white bg-opacity-20 backdrop-blur-lg p-6 rounded-lg shadow-lg max-w-sm w-full text-center relative">
//         <button
//           className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
//           onClick={() => setSelectedFood(null)}
//         >
//           <IoClose size={34} className="text-red-400 hover:text-red-600" />
//         </button>

//         <img
//           src={selectedFood.img}
//           alt={selectedFood.name}
//           className="w-full h-60 object-contain rounded-lg mb-4"
//         />

//         <p className="text-gray-100 font-semibold">{selectedFood.description}</p>

//         <button
//           className="mt-4 bg-orange-700 text-white px-4 py-2 rounded-lg hover:bg-orange-200 hover:text-black transition"
//           onClick={() => {
//             addToCart(selectedFood);
//             setSelectedFood(null);
//           }}
//         >
//           Order Now
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Modal;

import { motion, AnimatePresence } from "framer-motion";
import { FiX, FiShoppingCart } from "react-icons/fi";

const Modal = ({ selectedFood, setSelectedFood, addToCart }) => {
  return (
    <AnimatePresence>
      {selectedFood && (
        <motion.div
          className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="bg-white rounded-xl max-w-md w-full max-h-[90vh] overflow-y-auto"
            initial={{ scale: 0.9, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.9, y: 20 }}
          >
            {/* Modal content */}
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
                className="w-full h-48 object-cover rounded-lg mb-4"
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
  );
};

export default Modal;