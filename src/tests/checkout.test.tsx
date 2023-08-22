import App from '../App';
import { renderWithRouter } from './renderWithRouter';
import { screen, within } from '@testing-library/react';

import 'jest-localstorage-mock';

describe("Testing the checkout page", (): void => {
  const setup = () => renderWithRouter(<App />, { route: '/checkout' });

  it("Testing page component renderings", (): void => {
    setup();

    const inputs = screen.getAllByTestId('inputs-checkout')

    expect(inputs.length).toBe(10);
  });

});