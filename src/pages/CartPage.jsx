import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";
import EmptyCart from "./EmptyCart";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { motion, AnimatePresence } from "framer-motion";

const CartPage = () => {
  const { cart, updateQuantity, removeFromCart, clearCart } = useCart();
  const navigate = useNavigate();

  // Toast configuration
  const toastConfig = {
    position: "top-right",
    autoClose: 2000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    theme: "light",
  };

  const handleDecreaseQuantity = (id, quantity, name) => {
    if (quantity > 1) {
      updateQuantity(id, quantity - 1);
      toast.info(`${name} quantity decreased`, toastConfig);
    }
  };
  
  const handleIncreaseQuantity = (id, quantity, name) => {
    updateQuantity(id, quantity + 1);
    toast.success(`${name} quantity increased`, toastConfig);
  };

  const handleRemoveItem = (id, name) => {
    removeFromCart(id);
    toast.error(`${name} removed from cart`, toastConfig);
  };

  const handleClearCart = () => {
    clearCart();
    toast.info("Cart cleared", toastConfig);
  };

  // Calculate totals
  const subtotal = cart.reduce((sum, item) => sum + (Number(item.price) * item.quantity), 0);
  const taxRate = 0.1; // 10% tax
  const tax = subtotal * taxRate;
  const grandTotal = subtotal + tax;
  const deliveryFee = subtotal > 50 ? 0 : 5.99; // Free delivery for orders over $50

  // Animation variants
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, x: -100 }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 font-nunito">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl mt-10">
            Your Shopping Cart
          </h1>
          <p className="mt-3 text-xl text-gray-500">
            {cart.length} item{cart.length !== 1 ? 's' : ''} in your cart
          </p>
        </div>

        {cart.length === 0 ? (
          <EmptyCart />
        ) : (
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Cart Items */}
            <div className="lg:w-2/3">
              <div className="bg-white shadow-lg rounded-xl overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th scope="col" className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Product
                        </th>
                        <th scope="col" className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Price
                        </th>
                        <th scope="col" className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Quantity
                        </th>
                        <th scope="col" className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Total
                        </th>
                        <th scope="col" className="px-6 py-4 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Action
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      <AnimatePresence>
                        {cart.map((item) => {
                          const price = Number(item.price) || 0;
                          const total = (price * item.quantity).toFixed(2);

                          return (
                            <motion.tr
                              key={item.id}
                              variants={itemVariants}
                              initial="hidden"
                              animate="visible"
                              exit="exit"
                              transition={{ duration: 0.3 }}
                              className="hover:bg-gray-50"
                            >
                              <td className="px-6 py-4 whitespace-nowrap">
                                <div className="flex items-center">
                                  <div className="flex-shrink-0 h-16 w-16">
                                    <img
                                      className="h-full w-full rounded-md object-cover"
                                      src={item.img}
                                      alt={item.name}

                                    />
                                  </div>
                                  <div className="ml-4">
                                    <div className="text-sm font-medium text-gray-900">{item.name}</div>
                                    <div className="text-sm text-gray-500">{item.category || 'Food Item'}</div>
                                  </div>
                                </div>
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                ${price.toFixed(2)}
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap">
                                <div className="flex items-center space-x-2">
                                  <button
                                    onClick={() => handleDecreaseQuantity(item.id, item.quantity, item.name)}
                                    disabled={item.quantity === 1}
                                    className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-gray-100 text-gray-600 hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                                  >
                                    −
                                  </button>
                                  <span className="text-sm font-medium w-8 text-center">
                                    {item.quantity}
                                  </span>
                                  <button
                                    onClick={() => handleIncreaseQuantity(item.id, item.quantity, item.name)}
                                    className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-gray-100 text-gray-600 hover:bg-gray-200 transition-colors"
                                  >
                                    +
                                  </button>
                                </div>
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                ${total}
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                <button
                                  onClick={() => handleRemoveItem(item.id, item.name)}
                                  className="text-red-600 hover:text-red-900 transition-colors"
                                >
                                  Remove
                                </button>
                              </td>
                            </motion.tr>
                          );
                        })}
                      </AnimatePresence>
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="mt-6 flex justify-between">
                <button
                  onClick={() => navigate('/menu')}
                  className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-gray-600 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 transition-colors"
                >
                  Continue Ordering
                </button>
                <button
                  onClick={handleClearCart}
                  className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition-colors"
                >
                  Clear Cart
                </button>
              </div>
            </div>

            {/* Order Summary */}
            <div className="lg:w-1/3">
              <div className="bg-white shadow-lg rounded-xl p-6 sticky top-6">
                <h2 className="text-lg font-medium text-gray-900 mb-6">Order Summary</h2>
                
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Subtotal</span>
                    <span className="font-medium">${subtotal.toFixed(2)}</span>
                  </div>
                  
                  <div className="flex justify-between">
                    <span className="text-gray-600">Tax (10%)</span>
                    <span className="font-medium">${tax.toFixed(2)}</span>
                  </div>
                  
                  <div className="flex justify-between">
                    <span className="text-gray-600">Delivery</span>
                    <span className="font-medium">
                      {deliveryFee === 0 ? (
                        <span className="text-green-600">FREE</span>
                      ) : (
                        `$${deliveryFee.toFixed(2)}`
                      )}
                    </span>
                  </div>
                  
                  <div className="border-t border-gray-200 pt-4 mt-4 flex justify-between">
                    <span className="text-lg font-bold">Total</span>
                    <span className="text-lg font-bold text-purple-600">
                      ${(grandTotal + deliveryFee).toFixed(2)}
                    </span>
                  </div>
                </div>

                <div className="mt-8">
                  <button
                    onClick={() => navigate('/checkout')}
                    className="w-full flex justify-center items-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 transition-colors"
                  >
                    Proceed to Checkout
                  </button>
                </div>

                {subtotal < 50 && (
                  <div className="mt-4 text-center text-sm text-gray-500">
                    Spend ${(50 - subtotal).toFixed(2)} more for free delivery!
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartPage;