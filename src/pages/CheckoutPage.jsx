import { useCart } from "../context/CartContext";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import OrderConfirmation from "./OrderConfirmation";
import { FaSpinner } from 'react-icons/fa';
import LoadingSpinner from "../components/LoadingSpinner";

const CheckoutPage = () => {
  const { cart, clearCart } = useCart();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [orderPlaced, setOrderPlaced] = useState(false);

  // Calculate total amount
  const totalAmount = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  // Validate form
  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }
    if (!formData.address.trim()) newErrors.address = "Address is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      toast.error("Please fix the errors in the form");
      return;
    }

    setIsSubmitting(true);

    try {
      // In a real app, you would call your API here
      const orderDetails = {
        customer: formData,
        items: cart,
        total: totalAmount.toFixed(2),
        orderId: `ORD-${Date.now()}`,
        date: new Date().toISOString(),
      };

      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Store order details
      localStorage.setItem("orderDetails", JSON.stringify(orderDetails));
      
      toast.success("Order placed successfully!");
      setOrderPlaced(true);
      
      // Clear cart and navigate after a delay
      setTimeout(() => {
        clearCart();
        navigate("/order-confirmation");
      }, 1500);
      
    } catch (error) {
      toast.error("Failed to place order. Please try again.");
      console.error("Order submission error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  // Redirect if cart is empty
  useEffect(() => {
    if (cart.length === 0 && !orderPlaced) {
      toast.info("Your cart is empty");
      navigate("/");
    }
  }, [cart, orderPlaced, navigate]);

  if (orderPlaced) {
    return <OrderConfirmation />;
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl mt-10 font-nunito">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800">Checkout</h1>
        <p className="text-gray-600 mt-2">Complete your purchase</p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Billing Details Form */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4 text-gray-800">Billing Information</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Full Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="John Doe"
                value={formData.name}
                onChange={handleInputChange}
                className={`w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
                  errors.name ? "border-red-500" : "border-gray-300"
                }`}
              />
              {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name}</p>}
            </div>

            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email Address <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="john@example.com"
                value={formData.email}
                onChange={handleInputChange}
                className={`w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
                  errors.email ? "border-red-500" : "border-gray-300"
                }`}
              />
              {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
            </div>

            <div className="mb-6">
              <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">
                Shipping Address <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="address"
                name="address"
                placeholder="123 Main St, City, Country"
                value={formData.address}
                onChange={handleInputChange}
                className={`w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
                  errors.address ? "border-red-500" : "border-gray-300"
                }`}
              />
              {errors.address && <p className="mt-1 text-sm text-red-500">{errors.address}</p>}
            </div>
          </form>
        </div>

        {/* Order Summary */}
        <div className="bg-white p-6 rounded-lg shadow-md h-fit sticky top-4">
          <h2 className="text-xl font-semibold mb-4 text-gray-800">Order Summary</h2>
          
          <div className="divide-y divide-gray-200">
            {cart.map((item) => (
              <div key={item.id} className="py-3 flex justify-between items-center">
                <div className="flex items-center">
                  <div className="ml-4">
                    <p className="text-gray-800 font-medium">{item.name}</p>
                    <p className="text-gray-500 text-sm">Qty: {item.quantity}</p>
                  </div>
                </div>
                <p className="text-gray-800 font-medium">
                  ${(item.price * item.quantity).toFixed(2)}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-6 pt-4 border-t border-gray-200">
            <div className="flex justify-between mb-2">
              <span className="text-gray-600">Subtotal</span>
              <span className="text-gray-800">${totalAmount.toFixed(2)}</span>
            </div>
            <div className="flex justify-between mb-2">
              <span className="text-gray-600">Shipping</span>
              <span className="text-gray-800">Free</span>
            </div>
            <div className="flex justify-between text-lg font-bold mt-4 pt-2 border-t border-gray-200">
              <span>Total</span>
              <span>${totalAmount.toFixed(2)}</span>
            </div>
          </div>

          <button
            onClick={handleSubmit}
            disabled={isSubmitting}
            className={`w-full mt-6 py-3 px-4 rounded-lg font-medium text-white transition-colors ${
              isSubmitting
                ? "bg-blue-400 cursor-not-allowed"
                : "bg-blue-600 hover:bg-blue-700"
            }`}
          >
{isSubmitting ? (
  <span className="flex items-center justify-center">
    <FaSpinner className="animate-spin mr-2" />
    Processing...
  </span>
) : (
  "Place Order"
)}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;