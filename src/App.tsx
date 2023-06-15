import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Checkout from './pages/Checkout';
import Cart from './pages/Cart';

const App: React.FC = () => {
  return (
    <Routes>
      <Route path='/' element={ <Home /> } />
      <Route path='/checkout' element={ <Checkout /> } />
      <Route path='/cart' element={ <Cart /> } />
    </Routes>
  );
}

export default App;
