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

  //Function pour supprimer un produit du panier
  const removeFromCart = (id) => {
    const newCart = cart.filter((item) => {
      return item.id !== id
    });
    setCart(newCart);
  };

  //Function pour vider le panier
  const clearCart = () => {
    setCart([])
  };

  //Function pour augmenter la quantité d'un produit
  const increaseAmount = (id) => {
    const cartItem = cart.find((item) => item.id === id);
    addToCart(cartItem, id)
  }

  //Function pour diminier la qunatité
  const decreaseAmount = (id) => {
    const cartItem = cart.find((item) => item.id === id);
    if (cartItem) {
      if (cartItem.amount > 1) { 
        const newCart = cart.map(item => 
          item.id === id ? { ...item, amount: cartItem.amount - 1 } : item
        );
        setCart(newCart);
      } else {
        removeFromCart(id);
      }
    }
  };
  

  // Sauvegarder le panier dans le localStorage à chaque mise à jour
  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cart));
  }, [cart]);

  console.log(cart);

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        clearCart,
        increaseAmount,
        decreaseAmount
      }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;
