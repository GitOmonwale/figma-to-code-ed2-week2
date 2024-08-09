import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
  const { node } = product;

  const productId = node.id.split('/').pop();

  return (
    <Link to={`/product/${productId}`}>
      <div key={productId} className='flex flex-col gap-1'>
        <img src={node.featuredImage.url} alt={node.title} className='rounded-xl' />
        <h3 className='uppercase font-bold text-xl'>{node.title}</h3>
        <div className='text-xl text-gray-200'>
          <p className="text-md font-semibold">
          {node.variants.edges[0].node.price.currencyCode} ${node.variants.edges[0].node.price.amount}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
