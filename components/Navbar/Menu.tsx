
import './nav.css'

import React, { useRef } from 'react';
import { CSSTransition } from 'react-transition-group';
import DropdownMenu from './DropdownMenu';
import './nav.css'

interface MenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const Menu: React.FC<MenuProps> = ({ isOpen, onClose }) => {
  const menuRef = useRef<HTMLDivElement>(null);

  return (
    <CSSTransition
      in={isOpen}
      timeout={400}
      classNames="menu"
      unmountOnExit
      nodeRef={menuRef} // Pass the ref here
    >
      <div className="menu-overlay" ref={menuRef}>
        <div className="menu-content">
         <DropdownMenu onClose={onClose} />
        </div>
      </div>
    </CSSTransition>
  );
};

export default Menu;