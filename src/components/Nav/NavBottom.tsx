import React from 'react';
import cart from '../../assets/cart-icon.svg'
import Dropdown from '../Dropdown/Dropdown';
import DropdownMob from '../Dropdown/DropdownMob';

const NavBottom: React.FC = () => {
  return (
    <nav className='flex justify-evenly border-b h-16 items-center'>
      <h1 className='w-60 font-bold text-4xl mobile:text-3xl text-center'>SEA DOT</h1>
      <Dropdown />
      <a href="#" className='
      hidden text-background-3 font-semibold rounded
      inline-flex items-center desktop:flex'
      >
          FEATURES
      </a>
      <a href="#" className='
      hidden text-background-3 font-semibold rounded
      inline-flex items-center desktop:flex'
      >
          TECH SPECS
      </a>
      <a href="#" className='
      hidden text-background-3 font-semibold rounded
      inline-flex items-center desktop:flex'
      >
          CONTACT
      </a>
      <button className='
      mobile:hidden desktop:flex bg-primary w-52 h-11 justify-center
      items-center rounded-3xl font-bold text-background-1'
      >
        BUY NOW
      </button>
      <a href="#">
          <img src={ cart } alt="" className='block desktop:hidden w-6' />
      </a>
      <DropdownMob />
    </nav>
  );
}

export default NavBottom;