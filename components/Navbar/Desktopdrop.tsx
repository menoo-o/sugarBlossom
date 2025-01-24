'use client'

import React, { useState, useRef } from 'react';
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
  


  return (
    <>
        <div className='dropdown-desktop'>
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
                    <p>Birthday</p>
                    <p>Wedding</p>
                </ul>

          </div>  
            

            <div className='cakes-flavor-desktop'>
                <h4>Cakes by flavor</h4>
                    <ul>
                        <p>Vanilla</p>
                        <p>Chocolate</p>
                    </ul>
            </div>

            <div className='cakes-wedding-desktop'>
                <h4>Wedding Cakes`</h4>
                    <ul>
                        <p>1-Tier</p>
                        <p>2 Tier</p>
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