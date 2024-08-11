import React, { createContext, useState, useEffect } from 'react';

const ProductsContext = createContext();

export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
   
  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch('https://mock.shop/api?query={products(first:%2020){edges%20{node%20{id%20title%20description%20featuredImage%20{id%20url}%20variants(first:%203){edges%20{node%20{price%20{amount%20currencyCode}}}}}}}}');
      const data = await response.json();
      setProducts(data.data.products.edges);  
    };

    fetchProducts();
  }, []);

  return (
    <ProductsContext.Provider value={{ products}}>
      {children}
    </ProductsContext.Provider>
  );
};

export default ProductsContext;
