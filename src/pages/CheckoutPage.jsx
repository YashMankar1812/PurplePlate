import { useCart } from "../context/CartContext";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import OrderConfirmation from "./OrderConfirmation";

const CheckoutPage = () => {
  const { cart, clearCart } = useCart();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
  });

  const [orderPlaced, setOrderPlaced] = useState(false); // Track order status

  const totalAmount = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleOrder = () => {
    if (!formData.name || !formData.email || !formData.address) {
      toast.error("⚠️ Please fill in all details before placing the order!");
      return;
    }

    // Store order details
    const orderDetails = {
      customer: formData,
      items: cart,
      total: totalAmount.toFixed(2),
      date: new Date().toLocaleString(),
    };

    localStorage.setItem("orderDetails", JSON.stringify(orderDetails));
    toast.success("✅ Order placed successfully!");

    setOrderPlaced(true); // Mark order as placed

    setTimeout(() => {
      clearCart(); // Clear cart after placing order
      navigate("/order-confirmation"); // Navigate to confirmation page
    }, 1500);
  };

  return (
    <div className="w-full mt-10 p-5">
      <h2 className="text-3xl font-bold text-center text-green-700">Checkout</h2>

      {/* If order is placed, redirect to Order Confirmation */}
      {orderPlaced ? (
        <div className="text-center text-xl text-green-600 font-semibold mt-6">
        <OrderConfirmation/>
        </div>
      ) : (
        <>
          {/* Billing Details Form */}
          <div className="mt-6 bg-white p-6 rounded-lg shadow-lg max-w-lg mx-auto">
            <h3 className="text-xl font-semibold mb-4">Billing Details</h3>
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleInputChange}
              className="w-full p-2 mb-3 border rounded-lg"
            />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full p-2 mb-3 border rounded-lg"
            />
            <input
              type="text"
              name="address"
              placeholder="Shipping Address"
              value={formData.address}
              onChange={handleInputChange}
              className="w-full p-2 mb-3 border rounded-lg"
            />
          </div>

          {/* Order Summary */}
          <div className="mt-6 bg-gray-100 p-6 rounded-lg shadow-lg max-w-lg mx-auto">
            <h3 className="text-xl font-semibold mb-4">Order Summary</h3>
            {cart.map((item) => (
              <div key={item.id} className="flex justify-between mb-3">
                <p>{item.name} (x{item.quantity})</p>
                <p>${(item.price * item.quantity).toFixed(2)}</p>
              </div>
            ))}
            <hr className="my-2" />
            <div className="flex justify-between font-bold">
              <p>Total:</p>
              <p>${totalAmount.toFixed(2)}</p>
            </div>
          </div>

          {/* Place Order Button */}
          <div className="mt-6 flex justify-center">
            <button
              className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-800 transition-all"
              onClick={handleOrder}
            >
              Place Order
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default CheckoutPage;

