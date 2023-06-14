import React from 'react';
import headset from '../../assets/headset.png';
import signal from '../../assets/signal.svg';
import mic from '../../assets/mic.svg';
import charge from '../../assets/chager.svg';
import noise from '../../assets/noise.svg';
import FeaturesLeft from './FeaturesLeft';
import FeaturesRight from './FeaturesRight';

const Features: React.FC = () => {
  return (
    <div
      className='
      flex justify-center items-center
      px-[3em] pt-[3em] desktop:pb-0 mobile:pb-[3em]'
    >
      <div
        className='
        flex desktop:flex-row desktop:gap-0
        items-center justify-evenly w-screen
        mobile:flex-col mobile:gap-[2em]'
      >
        <div className='flex flex-col desktop:gap-[4em] mobile:gap-[2em]'>
          <FeaturesLeft
            title='Signal'
            text='Wireless connection up to 10 meters'
            image={signal}
          />
          <FeaturesLeft
            title='Mic monitoring'
            text='High quality capacitor microphone'
            image={mic}
          />
        </div>
        <div
          className="
          desktop:flex bg-center bg-cover
          h-[496px] w-[380px] mobile:hidden"
          style={{ backgroundImage: `url(${headset})` }}
        ></div>
        <div className='flex flex-col desktop:gap-[4em] mobile:gap-[2em]'>
          <FeaturesRight
            title='Rapid charge'
            text='Equipped with turbo charge'
            image={charge}
          />
          <FeaturesRight
            title='Noise Isolation'
            text='Noise isolating headphones'
            image={noise}
          />
        </div>
      </div>
    </div>
  );
}

export default Features;