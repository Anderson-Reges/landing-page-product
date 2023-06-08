import React from 'react';
import IFeature from '../../interfaces/IFeature';

const FeaturesLeft: React.FC<IFeature> = ({ image, title, text }) => {
  return (
    <div className='flex gap-x-[2em] items-center'>
      <div className='w-36 text-right'>
        <h4
          className='text-xl text-background-3 font-semibold w-[145px]'
        >
          {title}
        </h4>
        <p>{text}</p>
      </div>
      <div
        className='w-[119px] h-[119px]'
        style={{ backgroundImage: `url(${image})` }}
      ></div>
    </div>
  );
}

export default FeaturesLeft;