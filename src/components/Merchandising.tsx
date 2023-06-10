import React from 'react';

const Merchandising: React.FC = () => {
  return (
    <div className='flex h-60 flex-col justify-center items-center gap-[1em]'>
      <h1
        className='font-bold text-3xl desktop:w-[19em] mobile:w-[10em] text-center'
      >
        FREE SHIPPING WITH EVERY PURCHASE.
        TAKE ADVANTAGE OF OUR OFFERS.
      </h1>
      <a href="#">
          <button
            className='bg-primary
            w-52 h-11 rounded-3xl 
            font-semibold text-background-1 transition ease-in-out 
            delay-150 hover:-translate-y-1 hover:scale-110'
          >
            PURCHASE SEADOT
          </button>
      </a>
    </div>
  );
}

export default Merchandising;