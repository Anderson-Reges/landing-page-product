import React from 'react';
import Nav from './components/Nav/Nav';
import Slider from './components/Slide/Slider';
import Features from './components/Features/Features';

const App: React.FC = () => {
  return (
    <div>
      <Nav />
      <Slider />
      <Features />
    </div>
  );
}

export default App;
