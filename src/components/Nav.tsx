import React from 'react'
import face from '../asserts/face-icon.svg'
import insta from '../asserts/insta-icon.svg'
import linke from '../asserts/linke-icon.svg'
import twitter from '../asserts/twitter-icon.svg'
import phone from '../asserts/phone-icon.svg'
import mail from '../asserts/mail-icon.svg'
import search from '../asserts/search-icon.svg'
import cart from '../asserts/cart-icon.svg'

function Nav() {
    return (
      <div>
        <div className='flex justify-between border-b h-11'>
          <ul className='flex border-r w-1/2 h-11 items-center container gap-2 justify-evenly'>
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
          <ul className='flex w-1/3 border-l h-11 items-center justify-evenly'>
            <li className='md:hidden '>
              <img src={ phone } alt="" className='w-5' />
            </li>
            <li className='hidden md:flex'>
              <img src={ phone } alt="" />
              (88) 4002-8922
            </li>
            <li className='md:hidden'>
              <img src={ mail } alt="" className='w-6' />
            </li>
            <li className='hidden md:flex'>
              <img src={ mail } alt="" />
              contact@seadot.com
            </li>
            <li className='hidden md:flex'>
              <img src={ search } alt="" />
            </li>
            <li className='hidden md:flex'>
              <img src={ cart } alt="" />
            </li>
          </ul>
        </div>
        <div className='flex justify-evenly border-b h-16'>
          <h1>SEA DOT</h1>
          <img src={ cart } alt="" className='w-6' />
          <button className='hidden md:flex'>BUY NOW</button>
        </div>
      </div>
    )
}

export default Nav