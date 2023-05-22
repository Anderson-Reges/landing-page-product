import React from 'react';
import Slide1 from './Slide1';

const Slider: React.FC = () => {
  return (
    <div className='z-0'>
      <Slide1 />
      <a href="#">
        <button className='absolute top-[28em] ml-16 bg-background-1 w-52 h-11 justify-center items-center rounded-3xl font-semibold text-primary transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110'>
          PURCHASE SEADOT
        </button>
        <label>
          <input type="radio" className='absolute form-radio top-[34em] ml-16 form-radio bg-orange-500' name='slide'
          />
        </label>
        <label>
          <input type="radio" className='absolute top-[34em] ml-[5.2em]'
            name='slide'
          />
        </label>
      </a>
    </div>
  );
};

export default Slider;
