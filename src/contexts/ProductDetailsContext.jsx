import React, { createContext, useState } from 'react';

const ProductDetailContext = createContext();

export const ProductDetailProvider = ({ children }) => {
  const [product, setProduct] = useState(null);

  const fetchProduct = async (id) => {
    const request = await fetch(`https://mock.shop/api?query={product(id:%20%22gid://shopify/Product/${id}%22){id%20title%20description%20featuredImage%20{id%20url}%20variants(first:%203){edges%20{cursor%20node%20{id%20title%20image%20{url}%20price%20{amount%20currencyCode}}}}}}`);
    const response = await request.json();
    setProduct(response.data.product);
  };

  return (
    <ProductDetailContext.Provider value={{ product, fetchProduct }}>
      {children}
    </ProductDetailContext.Provider>
  );
};

export default ProductDetailContext
