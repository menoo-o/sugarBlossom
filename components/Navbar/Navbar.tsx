'use client'
import React, { useState } from 'react';
import Menu from './Menu';
import './nav.css'

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <button className="hamburger-btn" onClick={() => setIsMenuOpen(!isMenuOpen)}>
        ☰
      </button>
      <Menu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </nav>
  );
};

export default Navbar;