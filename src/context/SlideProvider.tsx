import React from 'react';
import Islide from '../interfaces/ISlide';
import slideProvider from '../interfaces/ISlideProvider';
import IChildren from '../interfaces/IChildrenProvider';

export const SlideContext = React.createContext<slideProvider>({} as slideProvider);

const SlideProvider: React.FC<IChildren> = ({ children }) => {
  const [slide, setSlide] = React.useState<Islide>({
    slide1: true,
    slide2: false
  })
  
  const contextValue = React.useMemo(() => ({
    slide,
    setSlide
  }), [slide]);

  return (
    <SlideContext.Provider value={ contextValue }>
      {children}
    </SlideContext.Provider>
  );
}

export default SlideProvider;