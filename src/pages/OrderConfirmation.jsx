import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const OrderConfirmationPage = () => {
  const navigate = useNavigate();
  const [order, setOrder] = useState(null);

  useEffect(() => {
    const storedOrder = JSON.parse(localStorage.getItem("orderDetails"));
    if (!storedOrder) {
      navigate("/"); // Redirect to home if no order found
    } else {
      setOrder(storedOrder);
    }
  }, [navigate , 1000]);

  return (
    <div className="w-full mt-10 p-5 text-center">
      <h2 className="text-3xl font-bold text-green-700">Order Confirmed!</h2>
      {order && (
        <div className="mt-6 bg-white p-6 rounded-lg shadow-lg max-w-lg mx-auto">
          <h3 className="text-xl font-semibold mb-4">Thank You, {order.customer.name}!</h3>
          <p className="text-gray-700">Your order has been placed successfully.</p>
          <p className="text-gray-500 mt-2">Order Date: {order.date}</p>

          <h4 className="mt-4 text-lg font-semibold">Order Summary:</h4>
          {order.items.map((item) => (
            <div key={item.id} className="flex justify-between mb-2">
              <p>{item.name} (x{item.quantity})</p>
              <p>${(item.price * item.quantity).toFixed(2)}</p>
            </div>
          ))}
          <hr className="my-2" />
          <div className="flex justify-between font-bold">
            <p>Total:</p>
            <p>${order.total}</p>
          </div>
        </div>
      )}
<button
  className="mt-6 bg-gradient-to-r from-blue-600 to-blue-800 text-white px-6 py-3 rounded-lg 
             font-semibold shadow-lg transform transition-all duration-300 ease-in-out 
             hover:scale-105 hover:shadow-xl hover:from-blue-700 hover:to-blue-900 
             active:scale-95 active:shadow-md"
  onClick={() => navigate("/")}
>
  Return to Homepage
</button>

    </div>
  );
};

export default OrderConfirmationPage;
