import React from 'react';
import { SlideContext } from '../../context/SlideProvider';

const ButtonSlide: React.FC = () => {
  const { setSlide } = React.useContext(SlideContext)

  const handleSlider = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
     if (target.id === "slide1") {
        setSlide({ slide1: true, slide2: false })
     } else {
        setSlide({ slide1: false, slide2: true })
     }
  }

  return (
    <>
      <a href="#">
        <button
          className='
          absolute top-[28em] ml-16 bg-background-1 
          w-52 h-11 justify-center items-center rounded-3xl 
          font-semibold text-primary transition ease-in-out 
          delay-150 hover:-translate-y-1 hover:scale-110'
        >
          PURCHASE SEADOT
        </button>
      </a>
        <label>
          <input
            type="radio" 
            className='absolute form-radio top-[34em] 
            ml-16 form-radio bg-orange-500'
            name='slide'
            id='slide1'
            onChange={ handleSlider }
          />
        </label>
        <label>
          <input
            type="radio"
            className='absolute top-[34em] ml-[5.2em]'
            name='slide'
            id='slide2'
            onChange={ handleSlider }
          />
        </label>
    </>
  );
}

export default ButtonSlide;