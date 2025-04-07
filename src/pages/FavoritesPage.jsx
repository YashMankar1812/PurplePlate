import React from 'react';
import { useCart } from '../context/CartContext';
import { FiX, FiShoppingCart } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const FavoritesPage = () => {
  const { favorites, removeFromFavorites, addToCart } = useCart();

  const handleAddToCartAndRemoveFavorite = (item) => {
    addToCart(item);
    removeFromFavorites(item.id);
  };

  if (favorites.length === 0) {
    return (
      <div className="flex justify-center items-center h-screen font-nunito">
        <div className="text-center">
          <p className="text-2xl font-semibold text-gray-700 mb-4">Your Favorites list is empty.</p>
          <Link to="/menu" className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            Browse Menu
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-16 px-4 sm:px-6 lg:px-8 bg-gray-50 font-nunito">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-extrabold text-gray-900 mb-8 text-center">Your Favorites</h1>
        <ul className="space-y-6">
          {favorites.map((item) => (
            <li key={item.id} className="bg-white shadow overflow-hidden rounded-lg px-4 py-5 sm:p-6 flex items-center justify-between">
              <div className="flex items-center space-x-6">
                <div className="flex-shrink-0">
                  <img src={item.img} alt={item.name} className="h-20 w-20 rounded-md object-cover" />
                </div>
                <div>
                  <h3 className="text-lg leading-6 font-medium text-gray-900">{item.name}</h3>
                  <p className="mt-1 text-sm text-gray-500">${item.price.toFixed(2)}</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <button
                  onClick={() => handleAddToCartAndRemoveFavorite(item)}
                  className="text-indigo-600 hover:text-indigo-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  aria-label={`Add ${item.name} to cart and remove from favorites`}
                >
                  <FiShoppingCart size={24} />
                </button>
                <button
                  onClick={() => removeFromFavorites(item.id)}
                  className="text-red-500 hover:text-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                  aria-label={`Remove ${item.name} from favorites`}
                >
                  <FiX size={24} />
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default FavoritesPage;