// //context/cart
// import { useState, createContext, useContext, useEffect } from "react";

// const CartContext = createContext();

// // Anything in the provider function is what we want to ship out
// const CartProvider = ({ children }) => {
//   const [cart, setCart] = useState(() => {
//     const existingCart = localStorage.getItem("cart");
//     return existingCart ? JSON.parse(existingCart) : [];
//   });

//   // Add product to cart
//   const addToCart = (product) => {
//     // Check if the product is already in the cart
//     const existingProduct = cart.find((item) => item._id === product._id);
//     if (existingProduct) {
//       return;
//     }

//     // If product is not in cart, add it
//     setCart([...cart, product]);
//   };

//   // Remove product from cart
//   const removeFromCart = (productId) => {
//     const updatedCart = cart.filter((item) => item._id !== productId);
//     setCart(updatedCart);
//   };

//   useEffect(() => {
//     localStorage.setItem("cart", JSON.stringify(cart));
//   }, [cart]);

//   return (
//     <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
//       {children}
//     </CartContext.Provider>
//   );
// };

// const useCart = () => useContext(CartContext);

// //CartProvider will wrap App in main.jsx
// export { useCart, CartProvider };

import React, { useState, useEffect, useReducer, createContext, useContext } from "react";

const CartContext = createContext();

const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return [...state, action.payload];
    case "REMOVE_FROM_CART":
      return state.filter(item => item._id !== action.payload);
    default:
      return state;
  }
};

const CartProvider = ({ children }) => {
  const [cart, dispatch] = useReducer(cartReducer, [], () => {
    const existingCart = localStorage.getItem("cart");
    return existingCart ? JSON.parse(existingCart) : [];
  });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product) => {
    const existingProduct = cart.find((item) => item._id === product._id);
    if (existingProduct) {
      return;
    }
    dispatch({ type: "ADD_TO_CART", payload: product });
  };

  const removeFromCart = (productId) => {
    dispatch({ type: "REMOVE_FROM_CART", payload: productId });
  };

  const cartSubTotal = () => {
    const subtotal = cart.reduce((total, item) => total + item.price, 0);
    return subtotal;
  };
  

  // console.log("CART", cartSubTotal());
  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, cartSubTotal }}>
      {children}
    </CartContext.Provider>
  );
};

const useCart = () => useContext(CartContext);

export { useCart, CartProvider };
