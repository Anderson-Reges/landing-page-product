import React from 'react';
import Slide1 from './Slide1';
import Slide2 from './Slide2';
import { SlideContext } from '../../context/SlideProvider';

const Slider: React.FC = () => {
  const { slide, setSlide } = React.useContext(SlideContext);

  const handleSlider = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    if (target.id === "slide1") {
      setSlide({ slide1: true, slide2: false })
    } else {
      setSlide({ slide1: false, slide2: true })
    }
  };

  React.useEffect(() => {
    const timer = setInterval(() => {
      setSlide((prevState) => ({
        slide1: !prevState.slide1,
        slide2: !prevState.slide2
      }));
    }, 10000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
      <div className='h-[604px]'>
        {slide.slide1 && (
          <Slide1
            containerClassName={
              `absolute transition-opacity ${
              slide.slide1 ? 'animate-fadeIn' : 'animate-fadeOut'
            }`}
          />
        )}
        {slide.slide2 && (
          <Slide2
            containerClassName={
              `absolute transition-opacity ${
              slide.slide2 ? 'animate-fadeIn' : 'animate-fadeOut'
            }`}
          />
        )}
        <a href="#">
          <button
            className='
            absolute top-[27em] ml-16 bg-background-1 
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
            className='absolute form-radio
            ml-16 checked:bg-background-3 text-background-3
            focus:ring-transparent focus:ring-offset-0 border-none
            cursor-pointer'
            name='slide'
            checked={ slide.slide1 }
            id='slide1'
            onChange={ handleSlider }
          />
        </label>
        <label>
          <input
            type="radio"
            className='absolute ml-[5.2em]
            checked:bg-background-3 text-background-3 focus:ring-0
            border-none focus:ring-offset-0 cursor-pointer'
            name='slide'
            checked={ slide.slide2 }
            id='slide2'
            onChange={ handleSlider }
          />
        </label>
      </div>
  );
};

export default Slider;