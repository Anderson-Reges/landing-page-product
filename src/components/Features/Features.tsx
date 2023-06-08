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
      px-[3em] pt-[3em]'
    >
      <div className='flex items-center justify-evenly w-screen'>
        <div className='flex flex-col gap-[4em]'>
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
          flex bg-center bg-cover
          h-[496px] w-[380px]"
          style={{ backgroundImage: `url(${headset})` }}
        ></div>
        <div className='flex flex-col gap-[4em]'>
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