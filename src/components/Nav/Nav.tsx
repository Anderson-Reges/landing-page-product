import React from 'react';
import NavBottom from './NavBottom'
import NavTop from './NavTop';

const Nav: React.FC = () => {
  return (
    <div className='fixed z-50 bg-background-1 w-screen'>
      <NavTop />
      <NavBottom />
    </div>
  );
}

export default Nav;