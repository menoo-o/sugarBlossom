'use client'

import React, { useState, useRef, useEffect } from 'react';
import { CSSTransition } from 'react-transition-group';
import MenuItem from './MenuItem';
import './nav.css'
import Image from 'next/image';

const Desktopdrop: React.FC = () => {
  const [activeMenu, setActiveMenu] = useState< 'main' | 'cakes' | 'cupcakes' | 'bento-cakes' | 'things-to-know' > ('main');

  const mainMenuRef = useRef<HTMLDivElement>(null);
  const cakesMenuRef = useRef<HTMLDivElement>(null);
  const cupcakesMenuRef = useRef<HTMLDivElement>(null);
  const bentoCakesMenuRef = useRef<HTMLDivElement>(null);

  const dropdownRef = useRef<HTMLDivElement>(null);

    // Click outside handler
    useEffect(() => {
      const handleClickOutside = (event: MouseEvent) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
          setActiveMenu('main'); // Return to the main menu when clicking outside
        }
      };
  
      document.addEventListener('mousedown', handleClickOutside);
  
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }, []);


  return (
    <>
        <div className='dropdown-desktop'  ref={dropdownRef}>
        <CSSTransition
        in={activeMenu === 'main'}
        timeout={10}
        classNames="menu-primary"
        unmountOnExit={false} // Prevent unmounting
        nodeRef={mainMenuRef}
      >
        <div className='menu-primary-desktop' ref={mainMenuRef}>
        <MenuItem onClick={() => setActiveMenu(activeMenu === 'cakes' ? 'main' : 'cakes')}> Cakes</MenuItem>

                <MenuItem onClick={() => setActiveMenu('cupcakes')}>Cupcakes</MenuItem>
                <MenuItem onClick={() => setActiveMenu('bento-cakes')}>Bento Cakes</MenuItem>
                <MenuItem>Custom Cakes</MenuItem>
                <MenuItem>Gift & Flowers</MenuItem>
                <MenuItem onClick={() => setActiveMenu('things-to-know')}>Things to Know</MenuItem>
            </div>
        
      </CSSTransition>
       
        </div>

           {/* Cakes Menu */}
      <CSSTransition
        in={activeMenu === 'cakes'}
        timeout={400}
        classNames="menu-secondary"
        unmountOnExit
        nodeRef={cakesMenuRef}
      >
        <div className="menu-primary-desktop-dropped" ref={cakesMenuRef}>
          
      
          
          
          <div className='cakes-occassion-desktop'>
            <h4>Cakes by Occassion</h4>
                <ul>
                    <p>Birthday Cakes</p>
                    <p>Wedding Cakes</p>
                    <p>Anniversary Cakes</p>
                    <p>Nikkah Cakes</p>
                    <p>Engagement Cakes</p>
                    <p>Valentine Day</p>
                </ul>

          </div>  
            

            <div className='cakes-flavor-desktop'>
                <h4>Cakes by flavor</h4>
                    <ul>
                        <p>Berry Vanilla Delight</p>
                        <p>Lotus Vanilla Dream</p>
                        <p>Chocolate Ganache Dream</p>
                        <p>Chocolate Lotus Sensation</p>
                    </ul>
            </div>

            <div className='cakes-wedding-desktop'>
                <h4>Wedding Cakes</h4>
                    <ul>
                        <p>One Tier</p>
                        <p>Two Tier</p>
                        <p>Three Tier</p>
                        <p>Four Tier</p>
                        <p>About Our Wedding Cakes</p>
                    </ul>
            </div>

            <div className='cakes-candles-gifts'>
              <div className='all-cakes'>
                <Image  
                  src='/occasion/hbd.jpg'
                  alt='all-cakes'
                  width={180}
                  height={180}
                />
                <h4>All Cakes</h4>
              </div>

              <div className='gifts-candles'>
                <Image  
                  src='/occasion/hbd.jpg'
                  alt='all-cakes'
                  width={180}
                  height={180}
                />
                <h4>Candles & Accessories</h4>
              </div>
             

              
            </div>
          
        </div>
      </CSSTransition>


    </>
  )}

  export default Desktopdrop