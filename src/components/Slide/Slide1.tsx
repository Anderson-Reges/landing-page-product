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
        absolute desktop:text-6xl mobile:text-4xl top-1/4
        desktop:ml-16 mobile:ml-8 desktop:w-[600px] mobile:w-[375px] font-bold
        text-background-3'
      >
        HIGH PERFORMANCE AND PREMIUM DESIGN
      </h1>
    </div>
  );
}

export default Slide1;