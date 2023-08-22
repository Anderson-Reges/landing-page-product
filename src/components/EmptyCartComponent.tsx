import React from 'react';
import { useNavigate } from 'react-router-dom';

const EmptyCart: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className='flex flex-col gap-[2em]' data-testid="cart-empty-info-box">
      <div
        className='font-bold bg-background-2 w-full'
        data-testid="cart-empty-info-text"
      >
        Your cart is currently empty.
      </div>
      <button
        className='flex bg-primary w-52 h-11 justify-center
        items-center rounded-3xl font-bold text-background-1'
        onClick={ () => navigate("/") }
      >
        RETURN HOME
      </button>
    </div>
  );
}

export default EmptyCart;