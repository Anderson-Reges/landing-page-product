import React from 'react';
import slide1 from '../../assets/slide-1.jpg'
import IClassNameSlide from '../../interfaces/IClassnameSlide';

const Slide1: React.FC<IClassNameSlide> = ({ containerClassName }) => {
  return (
    <div
      className={
        `relative top-[6.7em] ${containerClassName}`
      }
      data-testid="slide-container"
    >
      <div
        className="bg-cover bg-no-repeat bg-center h-[496px]"
        style={{ backgroundImage: `url(${slide1})` }}
      ></div>
      <h1
        className='
        absolute desktop:text-6xl mobile:text-4xl
        desktop:top-[1.6em] mobile:top-1/4
        desktop:ml-16 mobile:px-[0.4em] desktop:w-[650px]
        mobile:w-screen font-bold text-background-3
        tablet:ml-16 tablet:w-[500px] tablet:text-5xl tablet:px-0'
      >
        HIGH PERFORMANCE AND PREMIUM DESIGN
      </h1>
    </div>
  );
}

export default Slide1;