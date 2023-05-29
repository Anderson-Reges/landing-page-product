import React from 'react';
import Nav from './components/Nav/Nav';
import Slider from './components/Slide/Slider';
import Features from './components/Features/Features';
import SpecificInfo from './components/SpecificInfo';
import TechSpecs from './components/TechSpecs';

const App: React.FC = () => {
  return (
    <div>
      <Nav />
      <Slider />
      <Features />
      <SpecificInfo />
      <TechSpecs />
    </div>
  );
}

export default App;
