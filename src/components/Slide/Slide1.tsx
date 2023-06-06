import React from 'react';
import slide1 from '../../assets/slide-1.jpg'
import IClassNameSlide from '../../interfaces/IClassnameSlide';

const Slide1: React.FC<IClassNameSlide> = ({ containerClassName }) => {
  return (
    <div
      className={
        `relative top-[6.7em] ${containerClassName}`
      }
    >
      <div
        className="bg-cover bg-no-repeat bg-center h-[496px]"
        style={{ backgroundImage: `url(${slide1})` }}
      ></div>
      <h1
        className='
        absolute text-6xl top-1/4
        ml-16 w-[600px] font-bold
        text-background-3'
      >
        HIGH PERFORMANCE AND PREMIUM DESIGN
      </h1>
    </div>
  );
}

export default Slide1;