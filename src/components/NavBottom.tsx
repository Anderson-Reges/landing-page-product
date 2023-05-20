import React from 'react';
import cart from '../asserts/cart-icon.svg'

const NavBottom: React.FC = () => {
  return (
    <div className='flex justify-evenly border-b h-16 items-center'>
      <h1>SEA DOT</h1>
      <a href="#">
          <img src={ cart } alt="" className='block mobile:hidden w-6' />
      </a>
      <button className='hidden mobile:flex'>
        BUY NOW
      </button>
    </div>
  );
}

export default NavBottom;