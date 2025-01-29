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
  const thingsToKnowRef = useRef<HTMLDivElement>(null);

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

                <MenuItem onClick={() => setActiveMenu( activeMenu === 'cupcakes' ? 'main' : 'cupcakes')}>Cupcakes</MenuItem>
                <MenuItem onClick={() => setActiveMenu(activeMenu === 'bento-cakes' ? 'main' : 'bento-cakes')}>Bento Cakes</MenuItem>
                <MenuItem>Custom Cakes</MenuItem>
                <MenuItem>Gift & Flowers</MenuItem>
                <MenuItem onClick={() => setActiveMenu( activeMenu ==='things-to-know' ? 'main' : 'things-to-know')}>Things to Know</MenuItem>
            </div>
        
      </CSSTransition>
       
        </div>

           {/* Cakes Menu */}
      <CSSTransition
        in={activeMenu === 'cakes'}
        timeout={300}
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
                  priority
              loading="eager" // Forces it to load early
                />
                <h4>All Cakes</h4>
              </div>

              <div className='gifts-candles'>
                <Image  
                  src='/occasion/cande.jpg'
                  alt='all-cakes'
                  width={180}
                  height={180}
                  priority
              loading="eager" // Forces it to load early
                />
                <h4>Candles & Accessories</h4>
              </div>
             

              
            </div>
          
        </div>
      </CSSTransition>

      {/* Cupcakes */}
      <CSSTransition
        in={activeMenu === 'cupcakes'}
        timeout={400}
        classNames="menu-secondary"
        unmountOnExit
        nodeRef={cupcakesMenuRef}
      >
        <div className="menu-primary-desktop-dropped-cupcakes" ref={cupcakesMenuRef}>
          
        <div className='cakes-occassion-desktop cupcakes'>
          <h4>Cupcakes Box</h4>
          <ul>
            <p>Box of Four</p>
            <p>Box of Six</p>
            <p>Box of Twelve</p>
          </ul>
        </div>  

        <div className='cakes-flavor-desktop cupcakes'>
          <h4>Cupcakes by Flavor</h4>
       
          <ul>
            <p>Berry Vanilla Delight</p>
            <p>Lotus Vanilla Dream</p>
            <p>Chocolate Ganache Dream</p>
            <p>Chocolate Lotus Sensation</p>
            <p>Red Velvet</p>
            <p>Salted Caramel Swirl</p>
          </ul>
        </div>

        <div className='cakes-candles-gifts'>
          <div className='all-cakes'>
            <Image  
              src='/occasion/hbd.jpg'
              alt='all-cakes'
              width={180}
              height={180}
              priority />
            <h4>All Cupcakes</h4>
           
          </div>

          <div className='gifts-candles'>
            <Image  
             src='/occasion/cande.jpg'
              alt='candles and accessories'
              width={180}
              height={180}
              priority
            />
            <h4>Candles & Accessories</h4>
            
  
          </div>

    
        </div>

             

              
        
          
        </div>
      </CSSTransition>

      {/* Bento Cakes */}
      <CSSTransition
        in={activeMenu === 'bento-cakes'}
        timeout={300}
        classNames="menu-secondary"
        unmountOnExit
        nodeRef={bentoCakesMenuRef}
      >
        <div className="menu-primary-desktop-dropped" ref={bentoCakesMenuRef}>
          
        <div className='cakes-occassion-desktop bento'>
          <h4>Bento Cakes by Occassion</h4>
          <ul>
            <p>Congratulations</p>
            <p>Birthday</p>
            <p>Thank You</p>
            <p>Get Well Soon</p>
            <p>I Miss You</p>
          </ul>
        </div>  

        <div className='cakes-flavor-desktop bento'>
          <h4>Bento Cakes by Flavor</h4>
       
          <ul>
            <p>Berry Vanilla Delight</p>
            <p>Lotus Vanilla Dream</p>
            <p>Chocolate Ganache Dream</p>
            <p>Chocolate Lotus Sensation</p>
            <p>Red Velvet</p>
            <p>Salted Caramel Swirl</p>
          </ul>
        </div>

        <div className='cakes-candles-gifts'>
          <div className='all-cakes'>
            <Image  
              src='/occasion/hbd.jpg'
              alt='all-cakes'
              width={180}
              height={180}
              priority
              loading="eager" // Forces it to load early
            />
            <h4>All Bento Cakes</h4>
           
          </div>

          <div className='gifts-candles'>
            <Image  
              src='/occasion/cande.jpg'
              alt='candles and accessories'
              width={180}
              height={180}
              priority
              loading="eager" // Forces it to load early
            />
            <h4>Candles & Accessories</h4>
            
  
          </div>

    
        </div>

             

              
        
          
        </div>
      </CSSTransition>

      {/* things to know */}
    <CSSTransition
        in={activeMenu === 'things-to-know'}
        timeout={300}
        classNames="menu-secondary"
        unmountOnExit
       nodeRef={thingsToKnowRef}
       
      >
        <div className="menu-primary-desktop-dropped" ref={thingsToKnowRef}>
             
        <div className='things-to-know-faq img-container'>
            <h4>FAQs</h4>
            <Image  
              src='/faq.webp'
              alt='candles and accessories'
            width={310}
            height={160}          
              className='things-to-know-img'
              priority
              loading="eager" // Forces it to load early
              
            />
          </div>  


          

            <div className='things-to-know-size-desktop img-container' >
                <h4>Size & Cake Guide</h4>
                <Image  
                  src='/size.webp'
                  alt='candles and accessories'
                  width={310}
                  height={160}
                  className='things-to-know-img'
                  priority
                  loading="eager" // Forces it to load early
                
            />
                   
            </div>

            <div className='cakes-flavor-desktop img-container'>
                <h4>Cake Flavors</h4>
                <Image  
                  src='/flavors.webp'
                  alt='candles and accessories'
                  width={310}
                  height={160}
                  className='things-to-know-img'
                  priority
                  loading="eager" // Forces it to load early
                
            />
                    
            </div>



      

         

    
        
             

              
        
          
        </div>
      </CSSTransition>

    </>
  )}

  export default Desktopdrop