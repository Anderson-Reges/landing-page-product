import React from 'react';
import itemProvider from '../interfaces/IItemCartProvider';
import IChildren from '../interfaces/IChildrenProvider';
import IItemCart from '../interfaces/IItemCart';

export const ItemContext = React.createContext<itemProvider>({} as itemProvider);

const ItemProvider: React.FC<IChildren> = ({ children }) => {
  const [itemCart, setItemCart] = React.useState<IItemCart>({
    name: "Sea Dot Arcdov",
    price: 250,
    quantity: 1,
    subtotal: 250,
  })
  
  const contextValue = React.useMemo(() => ({
    itemCart,
    setItemCart
  }), [itemCart]);

  return (
    <ItemContext.Provider value={ contextValue }>
      {children}
    </ItemContext.Provider>
  );
}

export default ItemProvider;