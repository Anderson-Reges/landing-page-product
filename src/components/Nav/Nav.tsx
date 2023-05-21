import React from 'react';
import NavBottom from './NavBottom'
import NavTop from './NavTop';

const Nav: React.FC = () => {
  return (
    <div>
      <NavTop />
      <NavBottom />
    </div>
  );
}

export default Nav;