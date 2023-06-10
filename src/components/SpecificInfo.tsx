import React from 'react';
import woman from '../assets/woman.jpeg'

const SpecificInfo: React.FC = () => {
  return (
    <div className='relative desktop:h-[678px] mobile:h-[53em]'>
      <div
        className='mobile:bg-left desktop:bg-center bg-cover w-full h-full'
        style={{ backgroundImage: `url(${woman})` }}
      >
        <div
          className='
          absolute flex flex-col desktop:w-1/2 mobile:w-screen h-1/3
          desktop:right-10 desktop:top-36 gap-[2em] mobile:px-[3em]
          mobile:pt-[3em] desktop:px-0 desktop:pt-0'
        >
          <h1
            className='
            desktop:text-5xl mobile:text-4xl text-background-3
            font-bold'
          >
            DISCOVER THE TECHNOLOGY AND EXPERIENCE THAT GOES INTO OUR PRODUCTS
          </h1>
          <div
            className='
            flex desktop:flex-row desktop:gap-[9em]
            mobile:gap-[2em] mobile:flex-col'
          >
            <div
              className='
              desktop:bg-transparent mobile:bg-background-1 mobile:rounded-2xl
              mobile:pl-[2em] mobile:py-[1em]'
            >
              <h2 className='flex text-8xl'>
                40<p className='text-primary'>h</p>
              </h2>
              <h4 className='text-2xl font-semibold'>Battery Life</h4>
              <p className='w-40'>Battery with longevity and duration of 40 hours</p>
            </div>
            <div
              className='
              desktop:bg-transparent mobile:bg-background-1 mobile:rounded-2xl mobile:pl-[2em]
              mobile:py-[1em]'
            >
              <h2 className='flex text-8xl'>
                30<p className='text-primary'>min</p>
              </h2>
              <h4 className='text-2xl font-semibold'>Rapid Charge</h4>
              <p
                className='w-40'
              >
                With a simple 30-minute charge, the headphones are ready to use.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SpecificInfo;