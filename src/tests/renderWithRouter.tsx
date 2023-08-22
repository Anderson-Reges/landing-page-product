import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ReactElement } from 'react';
import { BrowserRouter } from 'react-router-dom';
import ItemProvider from '../context/ItemProvider';
import SlideProvider from '../context/SlideProvider';

export const renderWithRouter = (ui: ReactElement, { route = '/' } = {}) => {
  window.history.pushState({}, 'Test page', route)

  return {
    user: userEvent.setup(),
    ...render(
      <ItemProvider>
        <SlideProvider>
          {ui}
        </SlideProvider>
      </ItemProvider>
      , { wrapper: BrowserRouter }
    ),
  }
}