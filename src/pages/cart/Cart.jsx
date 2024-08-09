import React from 'react'
import trash from '../../assets/trash.svg'
import plus from '../../assets/plus.svg'
import remove from '../../assets/remove.svg'
const Cart = () => {
  return (
    <div className='grid md:grid-cols-3 grid-cols-1 my-10'>
      <div className='md:col-span-2 col-span-1'>
        <div className='flex items-center justify-between'>
          <h2 className='text-2xl font-chillax font-semibold'>Card(3)</h2>
          <button className='bg-gray-100 p-1 rounded-full flex items-center gap-3'>
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
          
          <div className='grid grid-cols-2 py-5 border-b-[1px]'>
            <div className=' flex justify-start gap-2'>
              <div className='bg-red rounded-xl h-20 w-10'>

              </div>
              <div className='flex flex-col gap-1'>
                <span>T-short</span>
                <span className='text-gray-300'>Green-lago</span>
                <span>#98</span>
              </div>
            </div>
            <div className='grid grid-cols-2 items-center'>
              <div className='flex items-center justify-center gap-2'>
                <button className='bg-gray-100 p-3 rounded-full flex items-center gap-4'>
                  <img src={plus} alt="icon plus" />
                  <span className='font-archivo font-medium text-black'>2</span>
                  <img src={remove} alt="icon moins" />
                </button>
                <button className='rounded-full bg-gray-200 p-3'>
                  <img src={trash} alt="icon trash" />
                </button>
              </div>
              <div className='flex justify-end'>
                <span className='font-bold'>$174.00</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='col-span-1 lg:px-10 md:px-5 px-14'>
        <div className='rounded-2xl border-[1px] p-5'>
          <h3 className='mb-2 font-archivo font-semibold text-black'>Order summary</h3>
          <div>
            <div className='flex items-center justify-between text-gray-300'>
              <span>Subtotal</span>
              <span>$624.00</span>
            </div>
            <div className='flex items-center justify-between text-gray-300'>
              <span>Discount</span>
              <span>$00</span>
            </div>
          </div>
          <div className='mt-5 flex flex-col gap-2'>
            <div className='flex items-center justify-between text-black'>
              <span>Order total</span>
              <span>$524.00</span>
            </div>
            <button className="border-0 hover:border-[1px] border-black hover:text-black text-white bg-black hover:bg-white transition-all duration-100 scale-105 px-4 py-2 w-full rounded-full">
              CheckOut
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart
