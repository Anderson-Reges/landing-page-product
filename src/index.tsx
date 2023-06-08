import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import SlideProvider from './context/SlideProvider';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
    <SlideProvider>
      <App />
    </SlideProvider>
);