import React, { createContext, useState, useEffect } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  // Initialisation de l'état du panier à partir du localStorage
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem('cartItems');
    return savedCart ? JSON.parse(savedCart) : [];
  });

  // Fonction pour ajouter des articles au panier
  const addToCart = (node, id) => {
    const newItem = { ...node, amount: 1 };
    const cartItem = cart.find(item => item.id === id);

    if (cartItem) {
      const newCart = cart.map(item => {
        if (item.id === id) {
          return { ...item, amount: item.amount + 1 };
        } else {
          return item;
        }
      });
      setCart(newCart);
    } else {
      setCart([...cart, newItem]);
    }
  };

  // Sauvegarder le panier dans le localStorage à chaque mise à jour
  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cart));
  }, [cart]);

  console.log(cart);

  return (
    <CartContext.Provider value={{ cart, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;
