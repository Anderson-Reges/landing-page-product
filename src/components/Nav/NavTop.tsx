import React from 'react'
import face from '../../assets/face-icon.svg'
import insta from '../../assets/insta-icon.svg'
import linke from '../../assets/linke-icon.svg'
import twitter from '../../assets/twitter-icon.svg'
import phone from '../../assets/phone-icon.svg'
import mail from '../../assets/mail-icon.svg'
import cart from '../../assets/cart-icon.svg'

const NavTop: React.FC = () => {
    return (
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
              <img src={ cart } alt="" />
            </li>
          </ul>
        </div>
    )
}

export default NavTop