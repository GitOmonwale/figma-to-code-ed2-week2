import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.svg'
import user from '../assets/user.svg'
import search from '../assets/search.svg'
const NavBar = () => {
    return (
        <div className='font-archivo'>
            <div className='bg-black text-white py-2 text-center'>
                Sign up and  <Link to="/"></Link>get 20% off for all new arrivals collections
            </div>
            <div className='py-5 flex justify-between items-center border-b-[1px] lg:mx-20 md:mx-14 sm:mx-10 mx-5'>
                <nav className='flex gap-4'>
                    <Link to="/">Men</Link>
                    <Link to="/">Women</Link>
                    <Link to="/">Kids</Link>
                    <Link to="/">Collections</Link>
                </nav>
                <img src={logo} alt="" width={150} />
                <nav className='flex gap-4'>
                    <Link to="/">Shop</Link>
                    <Link to="/">About us</Link>
                    <div className='flex items-center gap-2'>
                         <img src={user} alt="" />
                        <span>Account</span>
                    </div>
                    <Link to="/">Cart(0)</Link>
                    <img src={search} alt="" />
                </nav>
            </div>
        </div>
    )
}
export default NavBar
