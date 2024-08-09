import React from 'react';

const Checkout = () => {
  return (
    <div className='font-archivo'>
      <h1 className='align-left'>Checkout</h1>
      <div className='grid md:grid-cols-2 grid-cols-1'>
        <div className='col-span-1'>
          <h3>

          </h3>
          <div className='font-medium text-gray-300'>
            By placing your order, you agree to Ballamas <span className='underline text-black'>Privacy</span> and <span className='underline text-black'> Policy</span>.
          </div>
          <div className='grid grid-cols-2 py-5'>
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

              <div className='flex justify-end'>
                <span className='font-bold'>$174.00</span>
              </div>
            </div>
          </div>
          <div>
            <h4>Discount code</h4>
            <div className='grid grid-cols-3 gap-2'>
              <input type="text" placeholder='Add discount count' className='bg-transparent text-black rounded-full w-full p-4 border-2 border-black col-span-2' />
              <button className='bg-black text-white w-full p-4 font-semibold rounded-full col-span-1'>Apply</button>
            </div>
            
          </div>
          <div>

          </div>
        </div>
        <div className='col-span-1'>

        </div>
      </div>
    </div>
  );
};

export default Checkout;
