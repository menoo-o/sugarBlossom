'use client'

import './nav.css'

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <section className="nav-container">
        <div className="nav-header">
          <button
            className="navbar-toggle"
            onClick={toggleMenu}
            aria-label="Toggle Navigation"
          >
            {isMenuOpen ? (
              <Image
                alt="close menu"
                width={40}
                height={40}
                src="/icons/close.svg"
              />
            ) : (
              <Image
                alt="open menu"
                width={40}
                height={40}
                src="/icons/toggle.svg"
              />
            )}
          </button>

          <div className="logo">
            <Link href="/" className='logo-link'>
              <Image
                alt="logo"
                width={100}
                height={100}
                src="/logov5.png"
                className="logo-img"
              />
            </Link>
          </div>

          <div className="nav-right">
            <Image
              alt="cart"
              width={40}
              height={40}
              src="/icons/cart.svg"
              className="cart-icon"
            />
          </div>
        </div>

        {/* Dropdown Menu */}
        
        {isMenuOpen && (
          <div className="dropdown-menu">
            <ul className="menu-links">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/cakes">Cakes</Link>
              </li>
              <li>
                <Link href="/cupcakes">Cupcakes</Link>
              </li>
              <li>
                <Link href="/bento-cakes">Bento Cakes</Link>
              </li>
              <li>
                <Link href="/wedding-cakes">Wedding Cakes</Link>
              </li>
              <li>
                <Link href="/custom-cakes">Custom Cakes</Link>
              </li>
            </ul>
            <div className="social-icons">
              <Image
                src="/icons/fb.svg"
                alt="Facebook"
                width={24}
                height={24}
              />
              <Image
                src="/icons/insta.svg"
                alt="Instagram"
                width={24}
                height={24}
              />
              <Image
                src="/icons/pinterest.svg"
                alt="Pinterest"
                width={24}
                height={24}
              />
            </div>
          </div>
        )}
      </section>
    </>
  );
}
