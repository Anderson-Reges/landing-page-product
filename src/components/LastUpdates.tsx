import React from 'react';
import headset2 from '../assets/headset-2.jpeg'

const LastUpdates: React.FC = () => {
  return (
    <div>
      <div
        className='
        h-[410px] bg-no-repeat bg-cover
        flex desktop:flex-row justify-center items-center gap-[2em]
        mobile:flex-col'
        style={{ backgroundImage: `url(${headset2})` }}
        data-testid="last-updates-container"
      >
        <h1
          className='text-background-1 font-bold text-4xl mobile:text-center'
        >
          GET THE LATEST UPDATES FIRST
        </h1>
        <div
          className='
          flex desktop:w-2/4 mobile:w-[90%] desktop:relative
          mobile:flex-col desktop:block mobile:items-center mobile:gap-[0.7em]'
        >
          <input
            type="text"
            placeholder='Enter your e-mail address'
            className='
            h-14 desktop:w-3/4 desktop:rounded-l-full
            mobile:rounded-[20em] border-none desktop:pl-[2em]
            mobile:px-[2em] desktop:px-0 tablet:w-[75%]'
          />
          <button
            className='
            bg-primary desktop:w-32 mobile:w-[90%] h-14 desktop:rounded-r-full
            mobile:rounded-[20em] font-semibold text-background-1
            desktop:absolute mobile:gap-[2em] desktop:gap-0 mobile:tracking-widest
            tablet:w-[75%]'
          >
            SUBSCRIBE
          </button>
        </div>
      </div>
    </div>
  );
}

export default LastUpdates;