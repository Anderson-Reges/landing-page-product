import React from 'react';
import loadingGif from '../assets/wired-outline-334-loader-5.gif'

const Loading: React.FC = () => {
  return (
    <img src={ loadingGif } alt='loading' width="100px" />
  );
}

export default Loading;