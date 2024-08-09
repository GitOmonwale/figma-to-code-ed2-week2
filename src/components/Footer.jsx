import React from 'react'
import logo2 from '../assets/logo2.svg'
import { Link } from 'react-router-dom'
const Footer = () => {
  return (
    <footer className='bg-black font-archivo text-gray-200 lg:px-20 md:px-14 sm:px-10 py-10 px-5 m-auto'>
      <div className='flex justify-between flex-wrap gap-10'>
        <div className='flex flex-col gap-4 max-w-lg'>
          <img src={logo2} alt="" width={150} />
          <p>
            Subscribe to our newsletter for upcoming products and best discount for all items
          </p>
          <div className='flex items-center gap-2'>
            <input type="text" placeholder='Your Name' className='rounded-3xl bg-transparent border-2 py-2 px-4' />
            <input type="submit" value="Suscribe" className='rounded-3xl py-2 px-4 bg-white text-black' />
          </div>
        </div>
        <div className='flex gap-10 items-start justify-between'>
          <div className='flex flex-col gap-3'>
            <h3 className='font-bold'>Products</h3>
            <div className='flex flex-col gap-1'>
              <Link to="/">Jacket</Link>
              <Link to="/">T-shirt</Link>
              <Link to="/">Jacket</Link>
              <Link to="/">Shoes</Link>
              <Link to="/">Sunglasses</Link>
            </div>
          </div>
          <div className='flex flex-col gap-3'>
            <h3 className='font-bold'>Categories</h3>
            <div className='flex flex-col gap-1'>
              <Link to="/">Men</Link>
              <Link to="/">Woman</Link>
              <Link to="/">Kids</Link>
              <Link to="/">Gifts</Link>
              <Link to="/">New arrivals</Link>
            </div>
          </div>
          <div className='flex flex-col gap-3'>
            <h3 className='font-bold'>Our social media</h3>
            <div className='flex flex-col gap-1'>
              <Link to="/">Instagram</Link>
              <Link to="/">Facebook</Link>
              <Link to="/">Youtube</Link>
              <Link to="/">X</Link>
            </div>
          </div>
        </div>
      </div>
      <div className='text-center mt-5'>
        <Link to='/'>© BALLAMAS 2024 by waris</Link>
      </div>
    </footer>
  )
}

export default Footer
