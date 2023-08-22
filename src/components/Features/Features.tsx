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
      id="features"
      className='
      flex justify-center items-center
      px-[3em] pt-[3em] desktop:pb-0 mobile:pb-[3em]'
      data-testid="features"
    >
      <div
        className='
        flex desktop:flex-row desktop:gap-0
        items-center justify-evenly w-screen
        mobile:flex-col mobile:gap-[2em] tablet:flex-row'
      >
        <div
          className='flex flex-col desktop:gap-[4em] mobile:gap-[2em]'
          data-testid="features-left"
        >
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
          h-[496px] w-[380px] mobile:hidden tablet:hidden"
          style={{ backgroundImage: `url(${headset})` }}
          data-testid="features-phone-img"
        ></div>
        <div
          className='flex flex-col desktop:gap-[4em] mobile:gap-[2em]'
          data-testid="features-right"
        >
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