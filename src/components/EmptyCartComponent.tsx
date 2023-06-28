import React from 'react';

const EmptyCart: React.FC = () => {
  return (
    <div className='flex flex-col gap-[2em]'>
      <div
        className='font-bold bg-background-2 w-full'
      >
        Your cart is currently empty.
      </div>
      <button
        className='flex bg-primary w-52 h-11 justify-center
        items-center rounded-3xl font-bold text-background-1'
      >
        RETURN HOME
      </button>
    </div>
  );
}

export default EmptyCart;