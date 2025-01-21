'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import Menu from './Menu';
import './nav.css'

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
            src="/icons/cart.svg"
            alt="Cart"
            width={32}
            height={32}
            />
          <span className="cart-counter">3</span> {/* Replace with dynamic value */}
      </div>

      {/* Menu */}
      <Menu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </nav>
  );
};

export default Navbar;