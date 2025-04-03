import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const OrderConfirmationPage = () => {
  const [order, setOrder] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const savedOrder = JSON.parse(localStorage.getItem("orderDetails"));
    if (!savedOrder) {
      navigate("/"); // Redirect to home if no order found
    }
    setOrder(savedOrder);
  }, [navigate]);

  return (
    <div className="w-full mt-10 p-5 text-center">
      <h2 className="text-3xl font-bold text-green-700">Order Confirmation</h2>
      {order ? (
        <div className="mt-6 bg-white p-6 rounded-lg shadow-lg max-w-lg mx-auto">
          <h3 className="text-xl font-semibold mb-4">Thank you, {order.customer.name}!</h3>
          <p>Your order has been placed successfully.</p>
          <p className="mt-2 font-semibold">Order Details:</p>
          <ul className="mt-2 text-left">
            {order.items.map((item) => (
              <li key={item.id}>
                {item.name} (x{item.quantity}) - ${item.price * item.quantity}
              </li>
            ))}
          </ul>
          <p className="mt-2 font-bold">Total: ${order.total}</p>
          <p className="text-sm text-gray-500 mt-1">Date: {order.date}</p>
        </div>
      ) : (
        <p className="mt-4 text-red-500">No order found.</p>
      )}
    </div>
  );
};

export default OrderConfirmationPage;
