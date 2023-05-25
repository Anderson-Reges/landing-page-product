import React from 'react';
import Slide1 from './Slide1';
import Slide2 from './Slide2';
import { SlideContext } from '../../context/SlideProvider';

const Slider: React.FC = () => {
  const { slide } = React.useContext(SlideContext)
  console.log(slide)
  return (
    <div className=''>
      <div className='relative h-[6.6em]'>
        <Slide1 
          onSlide={ slide.slide1 }
        />
        <Slide2
          onSlide={ slide.slide2 }
        />
      </div>
      
    </div>
  );
};

export default Slider;
