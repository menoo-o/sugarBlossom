'use client'

import React, { useState, useRef } from 'react';
import { CSSTransition } from 'react-transition-group';
import MenuItem from './MenuItem';
import './nav.css'

const DropdownMenu: React.FC = () => {
  const [activeMenu, setActiveMenu] = useState<
    'main' | 'cakes' | 'cupcakes' | 'bento-cakes' | 'cakes-occasion' | 'cakes-flavor' | 'cupcakes-flavor' | 'cupcakes-occasion'  | 'things-to-know' > ('main');

  const mainMenuRef = useRef<HTMLDivElement>(null);
  const cakesMenuRef = useRef<HTMLDivElement>(null);
  const cupcakesMenuRef = useRef<HTMLDivElement>(null);
  const bentoCakesMenuRef = useRef<HTMLDivElement>(null);
  const cakesOccasionMenuRef = useRef<HTMLDivElement>(null);
  const cakesFlavorMenuRef = useRef<HTMLDivElement>(null);
  
  const cupcakesFlavorMenuRef = useRef<HTMLDivElement>(null);
  const cupcakesOccasionMenuRef = useRef<HTMLDivElement>(null);


  return (
    <div className="dropdown-menu">

      {/* Main Menu */}
      <CSSTransition
        in={activeMenu === 'main'}
        timeout={400}
        classNames="menu-primary"
        unmountOnExit
        nodeRef={mainMenuRef}
      >
        <div className="menu" ref={mainMenuRef}>
          <h2 className='account'>Account</h2>

          <ul>
            <MenuItem onClick={() => setActiveMenu('cakes')}>Cakes</MenuItem>
            <MenuItem onClick={() => setActiveMenu('cupcakes')}>Cupcakes</MenuItem>
            <MenuItem onClick={() => setActiveMenu('bento-cakes')}>Bento Cakes</MenuItem>
            <MenuItem>Custom Cakes</MenuItem>
            <MenuItem>Gift & Flowers</MenuItem>
            <MenuItem onClick={() => setActiveMenu('things-to-know')}>Things to Know</MenuItem>
          </ul>
        </div>
        
      </CSSTransition>

      {/* Cakes Menu */}
      <CSSTransition
        in={activeMenu === 'cakes'}
        timeout={400}
        classNames="menu-secondary"
        unmountOnExit
        nodeRef={cakesMenuRef}
      >
        <div className="menu" ref={cakesMenuRef}>
          <MenuItem onClick={() => setActiveMenu('main')}>← All</MenuItem>
          <h2>Cakes</h2>
          <ul>
            <MenuItem onClick={() => setActiveMenu('cakes-occasion')}>Cakes by Occasion</MenuItem>
            <MenuItem onClick={() => setActiveMenu('cakes-flavor')}>Cakes by Flavor</MenuItem>
          </ul>
        </div>
      </CSSTransition>

      {/* Cakes by Occasion Menu */}
      <CSSTransition
        in={activeMenu === 'cakes-occasion'}
        timeout={400}
        classNames="menu-secondary"
        unmountOnExit
        nodeRef={cakesOccasionMenuRef}
      >
        <div className="menu" ref={cakesOccasionMenuRef}>
          <MenuItem onClick={() => setActiveMenu('cakes')}>← Cakes</MenuItem>
          <h2>Cakes by Occasion</h2>
          <ul>
            <MenuItem>Birthday</MenuItem>
            <MenuItem>Wedding</MenuItem>
          </ul>
        </div>
      </CSSTransition>

      {/* Cakes by Flavor Menu */}
      <CSSTransition
        in={activeMenu === 'cakes-flavor'}
        timeout={400}
        classNames="menu-secondary"
        unmountOnExit
        nodeRef={cakesFlavorMenuRef}
      >
        <div className="menu" ref={cakesFlavorMenuRef}>
          <MenuItem onClick={() => setActiveMenu('cakes')}>← Cakes</MenuItem>
          <h2>Cakes by Flavor</h2>
          <ul>
            <MenuItem>Chocolate</MenuItem>
            <MenuItem>Vanilla</MenuItem>
          </ul>
        </div>
      </CSSTransition>

       {/* Cupcakes Menu */}
       <CSSTransition
        in={activeMenu === 'cupcakes'}
        timeout={400}
        classNames="menu-secondary"
        unmountOnExit
        nodeRef={cupcakesMenuRef}
      >
        <div className="menu" ref={cupcakesMenuRef}>
          <MenuItem onClick={() => setActiveMenu('main')}>← All</MenuItem>
          <h2>CupCakes</h2>
          <ul>
            <MenuItem onClick={() => setActiveMenu('cupcakes-occasion')}>CupCakes by Occasion</MenuItem>
            <MenuItem onClick={() => setActiveMenu('cupcakes-flavor')}>Cupakes by Flavor</MenuItem>
          </ul>
        </div>
      </CSSTransition>

      {/* CupCakes by Occasion Menu */}
      <CSSTransition
        in={activeMenu === 'cupcakes-occasion'}
        timeout={400}
        classNames="menu-secondary"
        unmountOnExit
        nodeRef={cupcakesOccasionMenuRef}
      >
        <div className="menu" ref={cupcakesOccasionMenuRef}>
          <MenuItem onClick={() => setActiveMenu('cupcakes')}>← CupCakes</MenuItem>
          <h2>CupCakes by Occasion</h2>
          <ul>
            <MenuItem>Birthday</MenuItem>
            <MenuItem>Wedding</MenuItem>
          </ul>
        </div>
      </CSSTransition>

      {/* CupCakes by Flavor Menu */}
      <CSSTransition
        in={activeMenu === 'cupcakes-flavor'}
        timeout={400}
        classNames="menu-secondary"
        unmountOnExit
        nodeRef={cupcakesFlavorMenuRef}
      >
        <div className="menu" ref={cupcakesFlavorMenuRef}>
          <MenuItem onClick={() => setActiveMenu('cupcakes')}>← CupCakes</MenuItem>
          <h2>CupCakes by Flavor</h2>
          <ul>
            <MenuItem>Chocolate</MenuItem>
            <MenuItem>Vanilla</MenuItem>
          </ul>
        </div>
      </CSSTransition>

      
      

    </div>
  );
};

export default DropdownMenu;