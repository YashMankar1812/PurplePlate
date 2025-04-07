import React from 'react';
import { FaTimes, FaPlus, FaMinus } from 'react-icons/fa';

const MenuModal = ({ dish, onClose, onAddToCart }) => {
  const [quantity, setQuantity] = React.useState(1);

  const handleQuantityChange = (newQuantity) => {
    if (newQuantity < 1) return;
    setQuantity(newQuantity);
  };

  const handleAddToCart = () => {
    onAddToCart({ ...dish, quantity });
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="relative">
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-600 hover:text-gray-800 z-10"
          >
            <FaTimes size={24} />
          </button>
          
          <div className="grid md:grid-cols-2 gap-6 p-6">
            <div className="overflow-hidden rounded-lg">
              <img 
                src={dish.image} 
                alt={dish.name} 
                className="w-full h-64 md:h-full object-cover rounded-md"
                loading="lazy"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "https://via.placeholder.com/300x200?text=Food+Image";
                }}
              />
            </div>
            
            <div className="flex flex-col">
              <div className="mb-4">
                <span className="text-sm text-purple-600 font-medium">{dish.category}</span>
                <h2 className="text-2xl font-bold text-gray-800 mt-1">{dish.name}</h2>
                <p className="text-gray-600 mt-2">{dish.description || "Delicious food item"}</p>
              </div>
              
              <div className="mt-auto">
                <div className="flex items-center justify-between mb-6">
                  <span className="text-2xl font-bold text-purple-600">{dish.price}</span>
                  
                  <div className="flex items-center border rounded-lg">
                    <button 
                      onClick={() => handleQuantityChange(quantity - 1)}
                      className="px-3 py-1 text-gray-600 hover:bg-gray-100"
                    >
                      <FaMinus />
                    </button>
                    <span className="px-3 py-1 text-gray-800">{quantity}</span>
                    <button 
                      onClick={() => handleQuantityChange(quantity + 1)}
                      className="px-3 py-1 text-gray-600 hover:bg-gray-100"
                    >
                      <FaPlus />
                    </button>
                  </div>
                </div>
                
                <button
                  onClick={handleAddToCart}
                  className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3 px-4 rounded-lg font-medium transition-colors"
                >
                  Order Now 
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuModal;