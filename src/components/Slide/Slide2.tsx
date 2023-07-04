import React from 'react';
import slide2 from '../../assets/slide-2.jpg'
import IClassNameSlide from '../../interfaces/IClassnameSlide';

const Slide2: React.FC<IClassNameSlide> = ({ containerClassName }) => {
  return (
    <div className={
      `relative top-[6.7em] ${containerClassName}`
      }
    >
      <div
        className="bg-cover bg-no-repeat bg-center h-[496px]"
        style={{ backgroundImage: `url(${slide2})` }}
      ></div>
      <h1
        className='
        absolute desktop:text-6xl mobile:text-4xl
        desktop:top-[1.2em] mobile:top-[3.0em]
        desktop:ml-16 mobile:px-[0.4em] desktop:w-[620px]
        mobile:w-[300px] font-bold text-background-1
        tablet:ml-16 tablet:px-0 tablet:w-[410px] tablet:text-5xl
        tablet:top-[2em]'
      >
        THE BEST AUDIO QUALITY AND LOADED WITH THE LATEST TECH
      </h1>
    </div>
  );
}

export default Slide2;