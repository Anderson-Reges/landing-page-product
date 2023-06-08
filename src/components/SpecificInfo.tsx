import React from 'react';
import woman from '../assets/woman.jpeg'

const SpecificInfo: React.FC = () => {
  return (
    <div className='relative h-[678px]'>
      <div
        className='bg-center bg-cover w-full h-full'
        style={{ backgroundImage: `url(${woman})` }}
      >
        <div className='absolute flex flex-col w-1/2 h-1/3 right-10 top-36 gap-[2em]'>
          <h1
            className='text-5xl text-background-3 font-bold'
          >
            DISCOVER THE TECHNOLOGY AND EXPERIENCE THAT GOES INTO OUR PRODUCTS
          </h1>
          <div className='flex gap-[9em]'>
            <div>
              <h2 className='flex text-8xl'>
                40<p className='text-primary'>h</p>
              </h2>
              <h4 className='text-2xl font-semibold'>Battery Life</h4>
              <p className='w-40'>Battery with longevity and duration of 40 hours</p>
            </div>
            <div>
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