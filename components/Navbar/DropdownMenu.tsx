import React, { useState, useRef } from 'react';
import { CSSTransition } from 'react-transition-group';
import MenuItem from './MenuItem';

interface DropdownMenuProps {
  onClose: () => void;
}

const DropdownMenu: React.FC<DropdownMenuProps> = ({ onClose }) => {
  const [activeMenu, setActiveMenu] = useState<
    'main' | 'cakes' | 'cupcakes' | 'bento-cakes'
  >('main');
  const [activeSubMenu, setActiveSubMenu] = useState<
    'occasion' | 'flavor'
  >('occasion');

  const mainMenuRef = useRef<HTMLDivElement>(null);
  const cakesMenuRef = useRef<HTMLDivElement>(null);
  const cupcakesMenuRef = useRef<HTMLDivElement>(null);
  const bentoCakesMenuRef = useRef<HTMLDivElement>(null);

  return (
    <div className="dropdown-menu">
      {/* Main Menu */}
      <CSSTransition
        in={activeMenu === 'main'}
        timeout={300}
        classNames="menu-primary"
        unmountOnExit
        nodeRef={mainMenuRef}
      >
        <div className="menu" ref={mainMenuRef}>
          <MenuItem onClick={onClose}>Home</MenuItem>
          <MenuItem onClick={() => setActiveMenu('cakes')}>Cakes</MenuItem>
          <MenuItem onClick={() => setActiveMenu('cupcakes')}>Cupcakes</MenuItem>
          <MenuItem onClick={() => setActiveMenu('bento-cakes')}>Bento Cakes</MenuItem>
          <MenuItem>Custom Cakes</MenuItem>
          <MenuItem>Gift & Flowers</MenuItem>
          <MenuItem>Things to Know</MenuItem>
        </div>
      </CSSTransition>

      {/* Cakes Submenu */}
      <CSSTransition
        in={activeMenu === 'cakes'}
        timeout={300}
        classNames="menu-secondary"
        unmountOnExit
        nodeRef={cakesMenuRef}
      >
        <div className="menu" ref={cakesMenuRef}>
          <MenuItem onClick={() => setActiveMenu('main')}>Back</MenuItem>
          <MenuItem onClick={() => setActiveSubMenu('occasion')}>Cakes by Occasion</MenuItem>
          <MenuItem onClick={() => setActiveSubMenu('flavor')}>Cakes by Flavor</MenuItem>

          {/* Cakes by Occasion Submenu */}
          {activeSubMenu === 'occasion' && (
            <>
              <MenuItem>Birthday</MenuItem>
              <MenuItem>Wedding</MenuItem>
            </>
          )}

          {/* Cakes by Flavor Submenu */}
          {activeSubMenu === 'flavor' && (
            <>
              <MenuItem>Chocolate</MenuItem>
              <MenuItem>Vanilla</MenuItem>
            </>
          )}
        </div>
      </CSSTransition>

      {/* Cupcakes Submenu */}
      <CSSTransition
        in={activeMenu === 'cupcakes'}
        timeout={300}
        classNames="menu-secondary"
        unmountOnExit
        nodeRef={cupcakesMenuRef}
      >
        <div className="menu" ref={cupcakesMenuRef}>
          <MenuItem onClick={() => setActiveMenu('main')}>Back</MenuItem>
          <MenuItem onClick={() => setActiveSubMenu('occasion')}>Cupcakes by Occasion</MenuItem>
          <MenuItem onClick={() => setActiveSubMenu('flavor')}>Cupcakes by Flavor</MenuItem>

          {/* Cupcakes by Occasion Submenu */}
          {activeSubMenu === 'occasion' && (
            <>
              <MenuItem>Birthday</MenuItem>
              <MenuItem>Wedding</MenuItem>
            </>
          )}

          {/* Cupcakes by Flavor Submenu */}
          {activeSubMenu === 'flavor' && (
            <>
              <MenuItem>Chocolate</MenuItem>
              <MenuItem>Vanilla</MenuItem>
            </>
          )}
        </div>
      </CSSTransition>

      {/* Bento Cakes Submenu */}
      <CSSTransition
        in={activeMenu === 'bento-cakes'}
        timeout={300}
        classNames="menu-secondary"
        unmountOnExit
        nodeRef={bentoCakesMenuRef}
      >
        <div className="menu" ref={bentoCakesMenuRef}>
          <MenuItem onClick={() => setActiveMenu('main')}>Back</MenuItem>
          <MenuItem onClick={() => setActiveSubMenu('occasion')}>Bento Cakes by Occasion</MenuItem>
          <MenuItem onClick={() => setActiveSubMenu('flavor')}>Bento Cakes by Flavor</MenuItem>

          {/* Bento Cakes by Occasion Submenu */}
          {activeSubMenu === 'occasion' && (
            <>
              <MenuItem>Birthday</MenuItem>
              <MenuItem>Wedding</MenuItem>
            </>
          )}

          {/* Bento Cakes by Flavor Submenu */}
          {activeSubMenu === 'flavor' && (
            <>
              <MenuItem>Chocolate</MenuItem>
              <MenuItem>Vanilla</MenuItem>
            </>
          )}
        </div>
      </CSSTransition>
    </div>
  );
};

export default DropdownMenu;