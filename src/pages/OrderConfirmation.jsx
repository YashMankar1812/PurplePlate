import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { FiCheckCircle, FiHome, FiShoppingBag } from "react-icons/fi";
import { format } from "date-fns";

const OrderConfirmationPage = () => {
  const navigate = useNavigate();
  const [order, setOrder] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading delay for better UX
    const timer = setTimeout(() => {
      const storedOrder = JSON.parse(localStorage.getItem("orderDetails"));
      if (!storedOrder) {
        navigate("/");
      } else {
        setOrder(storedOrder);
        setIsLoading(false);
      }
    }, 800);

    return () => clearTimeout(timer);
  }, [navigate]);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-pulse flex flex-col items-center">
          <div className="h-12 w-12 bg-gray-200 rounded-full mb-4"></div>
          <div className="h-4 bg-gray-200 rounded w-48"></div>
        </div>
      </div>
    );
  }

  if (!order) return null;

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 font-nunito mt-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl mx-auto"
      >
        <div className="text-center mb-12">
          <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-green-100 mb-4">
            <FiCheckCircle className="h-10 w-10 text-green-600" />
          </div>
          <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl mb-2">
            Order Confirmed!
          </h1>
          <p className="text-lg text-gray-600">
            Your order #{order.orderId} has been placed successfully
          </p>
        </div>

        <div className="bg-white shadow rounded-lg overflow-hidden mb-8">
          <div className="px-6 py-5 border-b border-gray-200 bg-gray-50">
            <h2 className="text-lg font-medium text-gray-900">
              Order Summary
            </h2>
          </div>
          <div className="px-6 py-5">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-lg font-medium text-gray-900">
                  Thank you, {order.customer.name}!
                </h3>
                <p className="text-gray-600">{order.customer.email}</p>
              </div>
              <div className="text-right">
                <p className="text-sm text-gray-500">Order Date</p>
                <p className="font-medium text-gray-900">
                  {format(new Date(order.date), "MMMM do, yyyy 'at' h:mm a")}
                </p>
              </div>
            </div>

            <div className="border-t border-gray-200 pt-6">
              <h3 className="text-lg font-medium text-gray-900 mb-4">
                Items Ordered
              </h3>
              <ul className="divide-y divide-gray-200">
                {order.items.map((item) => (
                  <li key={item.id} className="py-4 flex">
                    <div className="flex-shrink-0 h-20 w-20 rounded-md overflow-hidden bg-gray-200">
                      {/* Replace with actual image if available */}
                      <div className="h-full w-full flex items-center justify-center text-gray-500">
                        <FiShoppingBag className="h-8 w-8" />
                      </div>
                    </div>
                    <div className="ml-4 flex-1 flex flex-col">
                      <div>
                        <h4 className="text-base font-medium text-gray-900">
                          {item.name}
                        </h4>
                        <p className="mt-1 text-sm text-gray-500">
                          Quantity: {item.quantity}
                        </p>
                      </div>
                      <div className="flex-1 flex items-end justify-between">
                        <p className="text-sm font-medium text-gray-500">
                          ${item.price.toFixed(2)} each
                        </p>
                        <p className="text-base font-medium text-gray-900">
                          ${(item.price * item.quantity).toFixed(2)}
                        </p>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="border-t border-gray-200 pt-6">
              <div className="flex justify-between text-base font-medium text-gray-900">
                <p>Total</p>
                <p>${order.total}</p>
              </div>
              <p className="mt-1 text-sm text-gray-500">
                Shipping and taxes calculated at checkout
              </p>
            </div>
          </div>
        </div>

        <div className="text-center">
          <p className="text-gray-600 mb-6">
            We've sent a confirmation email to {order.customer.email}. Your
            order will be processed shortly.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => navigate("/")}
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              <FiHome className="mr-2" />
              Return to Homepage
            </motion.button>
            {/* <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => navigate("/orders")} // Assuming you have an orders page
              className="inline-flex items-center px-6 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              <FiShoppingBag className="mr-2" />
              View Order History
            </motion.button> */}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default OrderConfirmationPage;