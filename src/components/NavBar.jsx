import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.svg';
import user from '../assets/user.svg';
import search from '../assets/search.svg';
import menu from '../assets/hambuger-menu.svg';
import cross from '../assets/cross.svg';
import bag from '../assets/bag.svg'
const NavBar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    return (
        <div className='font-archivo fixed w-full z-50'>
            <div className='bg-black text-white py-2 text-center'>
                Sign up and get 20% off for all new arrivals collections
            </div>
            <div className='bg-white py-5 flex justify-between items-center  lg:mx-20 md:mx-14 sm:mx-10 mx-5 relative'>
                {/* Menu Toggle Button */}
                <button className='lg:hidden' onClick={toggleMenu}>
                    <img src={isMenuOpen ? cross : menu} alt="menu toggle" width={24} />
                </button>

                {/* Logo */}

                {/* Navigation for larger screens */}
                    <nav className='hidden lg:flex gap-4'>
                        <Link to="/">Men</Link>
                        <Link to="/">Women</Link>
                        <Link to="/">Kids</Link>
                        <Link to="/">Collections</Link>
                    </nav>
                    <img src={logo} alt="Logo" width={150} />
                    <nav className='hidden lg:flex items-center gap-4'>
                        <Link to="/">Shop</Link>
                        <Link to="/">About us</Link>
                        <div className='flex items-center gap-2'>
                            <img src={user} alt="User" />
                            <span>Account</span>
                        </div>
                        <Link to="/">Cart(0)</Link>
                        <img src={search} alt="Search" />
                    </nav>
                <div className='lg:hidden flex gap-2'>
                    <img src={search} alt="Search" />
                    <img src={bag} alt="" />
                </div>

                {/* Mobile Menu */}
                {isMenuOpen && (
                    <div className='fixed top-0 left-0 w-full h-screen bg-white text-black lg:hidden z-50'>
                        <div className='bg-black text-white py-2 text-center'>
                Sign up and get 20% off for all new arrivals collections
            </div>
                        <div className='flex justify-between px-5 py-6 items-center'>
                            <img src={cross} alt="close menu" width={24} onClick={toggleMenu} />
                            <div className='flex gap-2'>
                                <img src={search} alt="Search" />
                                <img src={bag} alt="" />
                            </div>
                        </div>
                        <hr className='h-1 lg:mx-20 md:mx-14 sm:mx-10 mx-5' />
                        <nav className='flex flex-col items-center py-4'>
                            <Link to="/" className='py-2' onClick={toggleMenu}>Men</Link>
                            <Link to="/" className='py-2' onClick={toggleMenu}>Women</Link>
                            <Link to="/" className='py-2' onClick={toggleMenu}>Kids</Link>
                            <Link to="/" className='py-2' onClick={toggleMenu}>Collections</Link>
                            <Link to="/" className='py-2' onClick={toggleMenu}>Shop</Link>
                            <Link to="/" className='py-2' onClick={toggleMenu}>About us</Link>
                            <div className='flex items-center py-2'>
                                <img src={user} alt="User" />
                                <span>Account</span>
                            </div>
                            <Link to="/" className='pt-3 pb-2' onClick={toggleMenu}>FAQ</Link>
                            <Link to="/" className='py-2' onClick={toggleMenu}>Contact Us</Link>
                        </nav>
                    </div>
                )}
            </div>
            <hr className='h-1 lg:mx-20 md:mx-14 sm:mx-10 mx-5' />
        </div>
    );
};

export default NavBar;
