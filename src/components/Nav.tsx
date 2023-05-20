import React from 'react'
import face from '../asserts/face-icon.svg'
import insta from '../asserts/insta-icon.svg'
import linke from '../asserts/linke-icon.svg'
import twitter from '../asserts/twitter-icon.svg'
import phone from '../asserts/phone-icon.svg'
import mail from '../asserts/mail-icon.svg'
import search from '../asserts/search-icon.svg'
import cart from '../asserts/cart-icon.svg'
import NavBottom from './NavBottom'

const Nav: React.FC = () => {
    return (
      <div>
        <div className='flex justify-around border-b desktop:h-11 mobile:h-14'>
          <ul className='flex border-r border-l desktop:w-1/5 mobile:w-1/2 desktop:h-11 mobile:h-14 items-center container gap-2 justify-evenly'>
            <li>
              <img src={ face } alt='' className='w-2.5'/>
            </li>
            <li>
              <img src={ insta } alt='' className='w-5' />
            </li>
            <li>
              <img src={ linke } alt='' className='w-5' />
            </li>
            <li>
              <img src={ twitter } alt='' className='w-5' /> 
            </li>
          </ul>
          <ul className='flex w-1/3 border-l border-r desktop:h-11 mobile:h-14 items-center justify-evenly'>
            <li className='desktop:hidden'>
              <img src={ phone } alt="" className='w-5' />
            </li>
            <li className='hidden desktop:flex gap-1'>
              <img src={ phone } alt="" />
              (88) 4002-8922
            </li>
            <li className='desktop:hidden'>
              <img src={ mail } alt="" className='w-6' />
            </li>
            <li className='hidden desktop:flex gap-1'>
              <img src={ mail } alt="" />
              contact@seadot.com
            </li>
            <li className='hidden desktop:flex'>
              <img src={ search } alt="" />
            </li>
            <li className='hidden desktop:flex'>
              <img src={ cart } alt="" />
            </li>
          </ul>
        </div>
        <NavBottom />
      </div>
    )
}

export default Nav