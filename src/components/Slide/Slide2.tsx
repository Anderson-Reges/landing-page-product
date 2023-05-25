import React from 'react';
import slide2 from '../../assets/slide-2.jpg'
import IOnSlide from '../../interfaces/IOnSlide';

const Slide2: React.FC<IOnSlide> = ({ onSlide }) => {
  return (
    <div className='relative bottom-[388px]'>
      <div
        className="bg-cover bg-no-repeat bg-center h-[496px]"
        style={{ backgroundImage: `url(${slide2})` }}
      ></div>
      <h1 className='absolute text-6xl top-[1.2em] ml-16 w-[620px] font-bold text-background-1'>
      THE BEST AUDIO QUALITY AND LOADED WITH THE LATEST TECH
      </h1>
    </div>
  );
}

export default Slide2;