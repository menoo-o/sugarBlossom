'use client'

import React, { ReactNode } from 'react';
import './nav.css'

interface MenuItemProps {
  children: ReactNode;
  onClick?: () => void;
}

const MenuItem: React.FC<MenuItemProps> = ({ children, onClick }) => {
  return (
    <div className="menu-item" onClick={onClick}>
      {children}
    </div>
  );
};

export default MenuItem;