import React from 'react';
import IFeature from '../../interfaces/IFeature';

const FeaturesRight: React.FC<IFeature> = ({ image, title, text }) => {
  return (
    <div className='flex gap-x-[2em] items-center'>
      <div
        className='w-[119px] h-[119px]'
        style={{ backgroundImage: `url(${image})` }}
      ></div>
      <div className='w-36'>
        <h4
          className='text-xl text-background-3 font-semibold w-36'
        >
          {title}
        </h4>
        <p>{text}</p>
      </div>
    </div>
  );
}

export default FeaturesRight;