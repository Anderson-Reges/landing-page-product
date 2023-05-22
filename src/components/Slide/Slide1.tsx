import React from 'react';
import slide1 from '../../asserts/slide-1.jpg'

const Slide1: React.FC = () => {
  return (
    <div className='relative'>
      <div
        className="bg-cover bg-no-repeat bg-center h-[657px]"
        style={{ backgroundImage: `url(${slide1})` }}
      ></div>
      <h1 className='absolute text-6xl top-1/3 ml-16 w-[600px] font-bold'>
        HIGH PERFORMANCE AND PREMIUM DESIGN
      </h1>
    </div>
  );
}

export default Slide1;