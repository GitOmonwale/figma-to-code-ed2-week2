import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import cart from '../assets/cart.svg'
import CartContext from '../contexts/CartContext';

const ProductCard = ({ product }) => {

const {addToCart} = useContext(CartContext)

  const { node } = product;

  const productId = node.id.split('/').pop();

  return (
      <div key={productId} className='flex flex-col gap-1'>
        <div className="relative group sm:h-80 h-96">
          <img
            src={node.featuredImage.url}
            alt={node.title}
            className="rounded-3xl w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out rounded-3xl text-white text-center p-4">
            <button className="absolute top-4 left-4 bg-white text-black rounded-full py-2 px-4 hover:bg-gray-200 transition-colors duration-300">
              GET OFF 20 %
            </button>
            <div className='absolute bottom-4 flex flex-row gap-1'>
            
              <button onClick={()=>addToCart(node, node.id)} className="flex gap-2 items-center bg-white text-black rounded-full py-2 px-4 hover:bg-gray-200 transition-colors duration-300">
                <img src={cart} alt="" />
                <span>Add to card</span>
              </button>
              
              <Link to='/'>
              <button className="border border-white text-white rounded-full py-2 px-4 hover:bg-gray-200 transition-colors duration-300">
                Buy now
              </button>
              </Link>
            </div>

          </div>
        </div>


        <Link to={`/product/${productId}`}>
         <h3 className='uppercase font-bold text-xl'>{node.title}</h3>
         </Link>
        <div className='text-xl text-gray-300'>
          <p className="text-lg font-semibold">
            {node.variants.edges[0].node.price.currencyCode} ${node.variants.edges[0].node.price.amount}
          </p>
        </div>
      </div>
  
  );
};

export default ProductCard;
