import React from 'react'
import check from '../../assets/check.svg'
const Payment = () => {
  return (
    <div className='flex items-center justify-center mt-40 pt-40 pb-52'>
      <div className='flex flex-col items-center gap-4'>
      <img src={check} alt="" />
      <p className='text-2xl black font-bold'>Thanks for your order !</p>
      <p className='font-medium text-xl text-gray-300'>The order confirmation has been sent to johndoe@gmail.com</p>
      </div>
    </div>
  )
}

export default Payment
