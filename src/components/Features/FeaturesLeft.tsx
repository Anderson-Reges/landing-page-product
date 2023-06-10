import React from 'react';
import IFeature from '../../interfaces/IFeature';

const FeaturesLeft: React.FC<IFeature> = ({ image, title, text }) => {
  return (
    <div className='flex gap-x-[2em] items-center'>
      <div
        className='w-[119px] h-[119px] desktop:hidden'
        style={{ backgroundImage: `url(${image})` }}
      ></div>
      <div className='w-36 desktop:text-right mobile:text-left'>
        <h4
          className='text-xl text-background-3 font-semibold w-[145px]'
        >
          {title}
        </h4>
        <p>{text}</p>
      </div>
      <div
        className='w-[119px] h-[119px] desktop:block mobile:hidden'
        style={{ backgroundImage: `url(${image})` }}
      ></div>
    </div>
  );
}

export default FeaturesLeft;