import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";
import EmptyCart from "./EmptyCart";

const CartPage = () => {
  const { cart, updateQuantity, removeFromCart } = useCart();
  const navigate = useNavigate();

  const handleDecreaseQuantity = (id, quantity) => {
    if (quantity > 1) {
      updateQuantity(id, quantity - 1);
      toast.info(`Quantity decreased`, {
        position: "top-right",
        autoClose: 2000,
      });
    }
  };
  
  const handleIncreaseQuantity = (id, quantity) => {
    updateQuantity(id, quantity + 1);
    toast.info(`Quantity increased`, {
      position: "top-right",
      autoClose: 2000,
    });
  };

  return (
    <div className="w-full mt-10 p-5">
      {cart.length === 0 ? (
        <EmptyCart />
      ) : (
        <div className="overflow-x-auto mt-6 p-5">
          <table className="min-w-full bg-white shadow-lg rounded-lg">
            <thead>
              <tr className="bg-purple-500 text-white">
                <th className="p-3 text-left">Image</th>
                <th className="p-3 text-left">Price</th>
                <th className="p-3 text-left">Quantity</th>
                <th className="p-3 text-left">Total</th>
                <th className="p-3 text-left">Actions</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item) => {
                const price = Number(item.price) || 0;
                const total = (price * item.quantity).toFixed(2);

                return (
                  <tr key={item.id} className="border-b">
                    <td className="p-3">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-16 h-16 rounded-lg object-cover"
                      />
                    </td>
                    <td className="p-3 text-gray-700">${price.toFixed(2)}</td>
                    <td className="p-3 flex items-center gap-2">
                      <button
                        className="bg-gray-200 px-3 py-1 rounded-md hover:bg-gray-300"
                        onClick={() => handleDecreaseQuantity(item.id, item.quantity)}
                        disabled={item.quantity === 1}
                      >
                        -
                      </button>
                      <span className="px-3 font-semibold">{item.quantity}</span>
                      <button
                        className="bg-gray-200 px-3 py-1 rounded-md hover:bg-gray-300"
                        onClick={() => handleIncreaseQuantity(item.id, item.quantity)}
                      >
                        +
                      </button>
                    </td>
                    <td className="p-3 font-semibold">${total}</td>
                    <td className="p-3">
                      <button
                        className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-700"
                        onClick={() => removeFromCart(item.id)}
                      >
                        Remove
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>

          {/* Checkout Button */}
          <div className="mt-6 flex justify-center">
          <button
  className="bg-purple-600 text-white px-5 py-2 rounded-lg transition-transform transform hover:-translate-y-1 hover:bg-purple-800 hover:shadow-lg duration-300 ease-in-out"
  onClick={() => navigate("/checkout")}
>
  Proceed to Checkout
</button>

          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;
