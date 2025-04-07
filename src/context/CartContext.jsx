
import { createContext, useContext, useState } from "react";


const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [favorites, setFavorites] = useState([]);
  

  const addToCart = (dish) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === dish.id);
      if (existingItem) {
        return prevCart.map((item) =>
          item.id === dish.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...prevCart, { ...dish, quantity: 1 }];
      }
    });
  };

  const addToFavorites = (dish) => {
    setFavorites((prevFavorites) => {
      const existingItem = prevFavorites.find((item) => item.id === dish.id);
      if (!existingItem) {
        return [...prevFavorites, dish];
      } else {
        return prevFavorites;
      }
    });
  };

  const removeFromCart = (itemId) => {
    setCart((prevCart) => {
      const item = prevCart.find((item) => item.id === itemId);
      if (item && item.quantity > 1) {
        return prevCart.map((cartItem) =>
          cartItem.id === itemId ? { ...cartItem, quantity: cartItem.quantity - 1 } : cartItem
        );
      } else {
        return prevCart.filter((cartItem) => cartItem.id !== itemId);
      }
    });
  };

  const removeFromFavorites = (itemId) => {
    setFavorites((prevFavorites) => prevFavorites.filter((item) => item.id !== itemId));
  };

  const getTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const clearCart = () => {
    setCart([]);
  };

  const increaseQuantity = (itemId) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === itemId ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decreaseQuantity = (itemId) => {
    setCart((prevCart) => {
      const item = prevCart.find((item) => item.id === itemId);
      if (item && item.quantity > 1) {
        return prevCart.map((cartItem) =>
          cartItem.id === itemId ? { ...cartItem, quantity: cartItem.quantity - 1 } : cartItem
        );
      } else {
        return prevCart.filter((cartItem) => cartItem.id !== itemId);
      }
    });
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        favorites,
        addToCart,
        addToFavorites,
        removeFromCart,
        removeFromFavorites,
        getTotal,
        clearCart,
        increaseQuantity,
        decreaseQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);


// import { createContext, useContext, useState } from "react";

// const CartContext = createContext();

// export const CartProvider = ({ children }) => {
//   const [cart, setCart] = useState([]);
//   const [favorites, setFavorites] = useState([]);

//   const addToCart = (dish) => {
//     setCart((prevCart) => {
//       const existingItem = prevCart.find((item) => item.id === dish.id);
//       if (existingItem) {
//         return prevCart.map((item) =>
//           item.id === dish.id ? { ...item, quantity: item.quantity + 1 } : item
//         );
//       } else {
//         return [...prevCart, { ...dish, quantity: 1 }];
//       }
//     });
//   };

//   const addToFavorites = (dish) => {
//     setFavorites((prevFavorites) => {
//         const existingItem = prevFavorites.find((item) => item.id === dish.id);
//         if (!existingItem) {
//             return [...prevFavorites, dish];
//         } else {
//             return prevFavorites;
//         }
//     });

//   };

//   const removeFromCart = (itemId) => {
//     setCart((prevCart) => {
//       const item = prevCart.find((item) => item.id === itemId);
//       if (item && item.quantity > 1) {
//         return prevCart.map((cartItem) =>
//           cartItem.id === itemId ? { ...cartItem, quantity: cartItem.quantity - 1 } : cartItem
//         );
//       } else {
//         return prevCart.filter((cartItem) => cartItem.id !== itemId);
//       }
//     });
//   };

//   const removeFromFavorites = (itemId) => {
//         setFavorites((prevFavorites) => prevFavorites.filter((item) => item.id !== itemId));
//   };

//   const getTotal = () => {
//     return cart.reduce((total, item) => total + item.price * item.quantity, 0);
//   };

//   return (
//     <CartContext.Provider
//       value={{
//         cart,
//         favorites,
//         addToCart,
//         addToFavorites,
//         removeFromCart,
//         removeFromFavorites,
//         getTotal,
//       }}
//     >
//       {children}
//     </CartContext.Provider>
//   );
// };

// export const useCart = () => useContext(CartContext);


