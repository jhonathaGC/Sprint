// Layout.js
import React, { useState } from 'react';
import Sidebar from './Sidebar';
import Hamburguer from '../../Assets/menu-hamburguer.png'


const Layout = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="layout">
    
      <span className='hamburger' onClick={toggleSidebar}>
        <img src={Hamburguer} alt='sou eu' />
      </span>
      <Sidebar isOpen={isOpen} toggle={toggleSidebar} />
     
    </div>
  );
};

export default Layout;
