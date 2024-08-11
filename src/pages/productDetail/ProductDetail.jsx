// ProductPage.js
import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ProductDetailContext from '../../contexts/ProductDetailsContext';
import Button from '../../components/Button';

const colorMap = {
  Green: 'bg-green',
  Olive: 'bg-brown',
  Ocean: 'bg-turquoise',
  Purple: 'bg-puple'
};
const add = 'Add to cart';
const buy = 'Buy now'
const ProductDetail = () => {
  const { id } = useParams();
  const { product, fetchProduct } = useContext(ProductDetailContext);
  useEffect(() => {
    fetchProduct(id);
  }, [id, fetchProduct]);

  if (!product) {
    return <div>Loading...</div>;
  }

  const variants = product.variants.edges;
  const uniqueColors = new Set(variants.map((variant) => variant.node.title.split(' / ')[1]));

  return (
    <div className='mt-40'>
      <div className='grid md:grid-cols-2 grid-cols-1 mt-10 gap-10'>
        <div className='rounded-3xl'>
          <img src={product.featuredImage.url} alt={product.title} className='rounded-3xl' />
        </div>
        <div className='flex flex-col gap-2'>
          <h2 className='font-chillax font-semibold'>{product.title}</h2>
          <p className='font-archivo font-semibold'>CAD {variants[0]?.node.price.amount}</p>

          <div className='flex gap-1'>
            {[...uniqueColors].map((color) => (
              <span
                key={color}
                className={`rounded-full h-6 w-6 ${colorMap[color]}`}
              ></span>
            ))}
          </div>
          <div className='flex gap-2 flex-col'>
            <span className='font-medium font-archivo'>Size:</span>
            <div className='flex gap-2'>
              {variants.map((variant) => (
                <Button key={variant.node.id} buttonNames={variant.node.title} />
              ))}
            </div>
          </div>
          <div className='grid grid-cols-2 gap-5'>
            <Button buttonNames={add} />
            <Button buttonNames={buy} />
          </div>
          <div className='flex gap-2 flex-col'>
            <h3 className='font-chillax font-medium text-black'>Description</h3>
            <p className='text-gray-300 font-archivo'>{product.description}</p>
          </div>
        </div>
      </div>

      <div className='my-14'>
        <h2 className='font-chillax font-semibold text-2xl'>You may also like</h2>
        <div className='sm:flex grid sm:grid-cols-2 grid-cols-1 w-full sm:overflow-x-auto overflow-hidden sm:flex-nowrap flex-wrap items-center gap-2 scrollbar-hidden'>
          {variants.map((variant) => (
            <div key={variant.node.id} className='flex gap-2 flex-col sm:w-96 w-full flex-shrink-0'>
              <img src={variant.node.image.url} alt={variant.node.title} className='rounded-xl' />
              <h3 className='font-chillax font-medium text-black'>{variant.node.title}</h3>
              <p className='text-gray-300 font-archivo'>CAD {variant.node.price.amount}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
