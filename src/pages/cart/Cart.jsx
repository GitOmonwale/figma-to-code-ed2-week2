import React, { useContext } from 'react';
import trash from '../../assets/trash.svg';
import plus from '../../assets/plus.svg';
import remove from '../../assets/remove.svg';
import CartContext from '../../contexts/CartContext';
import { Link } from 'react-router-dom';
const Cart = () => {
  const { cart, removeFromCart, clearCart, increaseAmount, decreaseAmount } = useContext(CartContext);

  return (
    <div className='grid md:grid-cols-3 grid-cols-1 mb-10 mt-40 md:gap-0 gap-5'>
      <div className='md:col-span-2 col-span-1'>
        <div className='flex items-center justify-between'>
          <h2 className='text-2xl font-chillax font-semibold'>Cart ({cart.length})</h2>
          <button className='bg-gray-100 py-1 px-2 rounded-full flex items-center gap-3' onClick={() => clearCart()}>
            <span className='font-archivo font-medium text-gray-300'>Clear Cart</span>
            <img src={trash} alt="icon trash" />
          </button>
        </div>
        <div>
          <div className='grid grid-cols-2 py-5 text-gray-300 border-b-[1px]'>
            <div className=' flex justify-start'>
              <span>Product</span>
            </div>
            <div className='grid grid-cols-2 text-center'>
              <span>Quantity</span>
              <span>Price</span>
            </div>
          </div>

          <div>
            {
              cart.map((item) => (
                <div key={item.id} className='grid grid-cols-2 py-5 border-b-[1px]'>
                  <div className='flex justify-start gap-2'>
                    <img src={item.featuredImage.url} className='rounded-lg' alt={item.title} width={70} height={70} />
                    <div className='flex flex-col gap-1'>
                      <span>{item.title}</span>
                      {item.variants.edges[0].node.title.includes('/') ? (
                        <div className='flex gap-1 text-gray-300'>
                          <p>{item.variants.edges[0].node.title.split('/')[1].trim()}</p>
                          <span>-</span>
                          <p>{item.variants.edges[0].node.title.split('/')[0].trim()}</p>
                        </div>
                      ) : (
                        <p className=' text-gray-300'>{item.variants.edges[0].node.title}</p>
                      )}
                      <div className='flex gap-1 font-bold'>
                        <span>{item.variants.edges[0].node.price.currencyCode}</span>
                        <span className='flex items-center justify-center'>
                          <span className='text-xs'>$</span>
                          <span>{item.variants.edges[0].node.price.amount}</span>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className='grid grid-cols-3 items-center'>
                    <div className='flex items-center justify-center gap-2 col-span-2'>
                      <button className='bg-gray-100 lg:p-3 p-1 rounded-full flex items-center lg:gap-4 md:gap-2 gap-1'>
                        <img src={plus} alt="icon plus" onClick={()=>increaseAmount(item.id)} />
                        <span className='font-archivo font-medium text-black'>{item.amount}</span>
                        <img src={remove} alt="icon moins" onClick={()=>decreaseAmount(item.id)}/>
                      </button>
                      <button className='rounded-full bg-gray-200 lg:p-3 p-1' onClick={() => removeFromCart(item.id)}>
                        <img src={trash} alt="icon trash" />
                      </button>
                    </div>
                    <div className='flex justify-end col-span-1'>
                      <span className='font-bold'>{item.variants.edges[0].node.price.currencyCode} ${item.variants.edges[0].node.price.amount * item.amount}</span>
                    </div>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
      </div>
      <div className='col-span-1 lg:px-10 md:px-5 px-14'>
        <div className='rounded-2xl border-[1px] p-5'>
          <h3 className='mb-2 font-archivo font-semibold text-black'>Order summary</h3>
          <div>
            <div className='flex items-center justify-between text-gray-300'>
              <span>Subtotal</span>
              <span className='flex items-center justify-center'>
                <span className='text-xs'>$</span>
                <span>{
                  cart.reduce((total, item) => total + (item.variants.edges[0].node.price.amount * item.amount), 0).toFixed(2)
                }</span>
              </span>
            </div>
            <div className='flex items-center justify-between text-gray-300'>
              <span>Discount</span>
              <span>$00</span>
            </div>
          </div>
          <div className='mt-5 flex flex-col gap-2'>
            <div className='flex items-center justify-between text-black'>
              <span>Order total</span>
              <span>${
                cart.reduce((total, item) => total + (item.variants.edges[0].node.price.amount * item.amount), 0).toFixed(2)
              }</span>
            </div>
            <Link to='/checkout'>
              <button className="border-0 hover:border-[1px] border-black hover:text-black text-white bg-black hover:bg-white transition-all duration-100 scale-105 px-4 py-2 w-full rounded-full">
                CheckOut
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
