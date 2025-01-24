import React, { useRef } from 'react';
import { CSSTransition } from 'react-transition-group';
import DropdownMenu from './DropdownMenu';
import './nav.css'
import Image from 'next/image';

interface MenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const Menu: React.FC<MenuProps> = ({ isOpen, onClose }) => {
  const menuRef = useRef<HTMLDivElement>(null);

  return (
    <CSSTransition
      in={isOpen}
      timeout={300}
      classNames="menu"
      unmountOnExit
      nodeRef={menuRef} // Pass the ref here
    >
      <div className="menu-overlay" ref={menuRef}>

        <div className="menu-content">

          {/* close btn */}
          <button className="close-btn" onClick={onClose}>

            <Image 
              src='/icons/close.svg'
              alt='close button'
              width={25}
              height={25}
            />
          </button>

          <DropdownMenu />

        </div>
      </div>
    </CSSTransition>
  );
};

export default Menu;