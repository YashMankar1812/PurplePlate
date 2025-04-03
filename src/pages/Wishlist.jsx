import { useState } from "react";

const Wishlist = ({ wishlist, removeFromWishlist }) => {
  return (
    <div className="w-full min-h-screen p-10 bg-gray-100">
      <h2 className="text-center text-3xl font-bold font-nunito">
        Your <span className="text-purple-700 font-dancing">Wishlist</span>
      </h2>

      {wishlist.length === 0 ? (
        <p className="text-center text-gray-500 mt-4">Your wishlist is empty.</p>
      ) : (
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 place-items-center">
          {wishlist.map((item, index) => (
            <div
              key={index}
              className="relative flex flex-col items-center p-4 rounded-lg shadow-lg bg-white w-40"
            >
              <img src={item.img} alt={item.name} className="w-full h-32 object-cover rounded-md" />
              <h3 className="text-lg font-semibold mt-2">{item.name}</h3>
              <button
                onClick={() => removeFromWishlist(item)}
                className="mt-2 px-4 py-1 bg-red-500 text-white rounded-md hover:bg-red-600 transition"
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Wishlist;
