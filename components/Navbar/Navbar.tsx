'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import Menu from './Menu';
import Link from 'next/link';
import './nav.css'
import Desktopdrop from './Desktopdrop';



const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      {/* Hamburger Button */}
      <button className="hamburger-btn" onClick={() => setIsMenuOpen(!isMenuOpen)}>
        <Image
          src='/icons/toggle.svg'
          alt='toggle menu'
          width={35}
          height={35}
          />
      </button>

      <div className='social-link-desktop'>
          <Link href='https://www.facebook.com' target='_blank'>
            <Image 
              src='/icons/fb.svg'
              alt='facebook'
              width={25}
              height={25}
            />
          </Link>

          <Link href='https://www.instagram.com/sugarblossomcakess' target='_blank'>
            <Image 
              src='/icons/insta.svg'
              alt='instagram'
              width={25}
              height={25}
            />
          </Link>
      </div>

      {/* Logo */}
      <div className="logo">
        <Image
          src="/logoo.svg" // Path to your logo
          alt="Cake Shop Logo"
          width={120} // Adjust as needed
          height={40} // Adjust as needed
          className='logo-img'
        />
      </div>

      <div className="cart-icon">
          <Image 
                src='/icons/search.svg'
                alt='search'
                height={31}
                width={31}
                className='search'

              />


          <Image
            src="/icons/cart.svg"
            alt="Cart"
            width={32}
            height={32}
            className='cart-img'
            />
            {/* cart counting */}
          {/* <span className="cart-counter">3</span>  */}
          <Image 
            src='/icons/wishlist.svg'
            alt='wishlist'
            height={26}
            width={26}
            className='wishlist'

          />

      
      </div>

      {/* Menu */}
      <Menu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />

      <div className='nav-menu-desktop'>
       <Desktopdrop/>
      </div>  
        
    </nav>
  );
};

export default Navbar;