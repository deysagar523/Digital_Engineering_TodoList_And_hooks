import React from 'react';
import { MenuContext } from './menuContext';
import ShowMenu from './ShowMenu';

const Q6=()=> {
  const menuItems = [
    { id: 1, title: 'Home', link: '/' },
    { id: 2, title: 'About Us', link: '/about' },
    { id: 3, title: 'Contact Us', link: '/contact' },
  ];

  return (
    <MenuContext.Provider value={menuItems}>
      <ShowMenu/>
    </MenuContext.Provider>
  );
}

export default Q6;