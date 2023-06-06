import React from 'react';
import Nav from './components/Nav/Nav';
import Slider from './components/Slide/Slider';
import Features from './components/Features/Features';
import SpecificInfo from './components/SpecificInfo';
import TechSpecs from './components/TechSpecs';
import Merchandising from './components/Merchandising';
import LastUpdates from './components/LastUpdates';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <>
      <Nav />
      <header>
        <Slider />
      </header>
      <main>
        <Features />
        <SpecificInfo />
        <TechSpecs />
      </main>
      <aside>
        <Merchandising />
        <LastUpdates />
      </aside>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;
