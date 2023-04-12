import React, { useContext } from 'react';
import { MenuContext } from './menuContext';

const ShowMenu=() =>{
  const menuItems = useContext(MenuContext);

  return (
    <nav>
      <ul>
        {menuItems.map(item => (
          <li key={item.id}>
            <a href={item.link}>{item.title}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default ShowMenu;
