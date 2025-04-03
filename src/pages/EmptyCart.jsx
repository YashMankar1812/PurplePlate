import React from "react";
import { useNavigate } from "react-router-dom";

const EmptyCart = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-white text-center font-nunito" id="cart">
      <img
        // src="https://assets-v2.lottiefiles.com/a/76623d28-4e37-11ef-87f5-03e9496a5cb5/PR2PeUMHrd.gif" 
        src="https://comodorbyfleet.uk/images/webstrot/header/loader.gif"
        alt="Empty Cart"
        className="w-74 h-64"
      />
      <h2 className="text-2xl font-semibold mt-4">Cart is Empty</h2>
      <p className="text-gray-600 mt-2">Looks like you haven’t Order anything to your cart.</p>
      <button 
        className="mt-4 px-6 py-2 bg-purple-600 text-white rounded-full hover:bg-purple-700 transition transform scale-100 hover:translate-y-[-5px] hover:scale-105"
        onClick={() => navigate("/menu")}
      >
        Order Now
      </button>
    </div>
  );
};

export default EmptyCart;
