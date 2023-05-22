import React from 'react';
import './App.css';
import Nav from './components/Nav/Nav';
import Slider from './components/Slide/Slider';

const App: React.FC = () => {
  return (
    <div className='relative'>
      <Nav />
      <Slider />
    </div>
  );
}

export default App;
