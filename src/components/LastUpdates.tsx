import React from 'react';
import headset2 from '../assets/headset-2.jpeg'

const LastUpdates: React.FC = () => {
  return (
    <div>
      <div
        className='h-[410px] bg-no-repeat flex justify-center items-center gap-[2em]'
        style={{ backgroundImage: `url(${headset2})` }}
      >
        <h1
          className='text-background-1 font-bold text-4xl'
        >
          GET THE LATEST UPDATES FIRST
        </h1>
        <div className='w-2/4 relative'>
          <input
            type="text"
            placeholder='Enter your e-mail address'
            className='h-14 w-3/4 rounded-l-full border-none pl-[2em]'
          />
          <button
            className='bg-primary
            w-32 h-14 rounded-r-full
            font-semibold text-background-1 absolute
            '
          >
            SUBSCRIBE
          </button>
        </div>
      </div>
    </div>
  );
}

export default LastUpdates;