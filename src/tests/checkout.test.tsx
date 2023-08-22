import App from '../App';
import { renderWithRouter } from './renderWithRouter';
import { screen } from '@testing-library/react';

import 'jest-localstorage-mock';

describe("Testing the checkout page", (): void => {

  const setup = () => renderWithRouter(<App />, { route: '/checkout' });

  beforeEach(() => {
    localStorage.setItem('cart', JSON.stringify(
      {
        name: "Sea Dot Arcdov",
        price: 250,
        quantity: 1,
        subtotal: 250,
      }
    ));
  });

  afterEach(() => {
    localStorage.clear();
  });

  it("Testing page component renderings", (): void => {
    setup();

    const inputs = screen.getAllByTestId('inputs-checkout');
    const nameAndQuantityCell = screen.getByTestId('name-quantity-cell');
    const subtotalCell = screen.getByTestId('subtotal-cell');
    const totalCell = screen.getByTestId('total-cell');

    expect(inputs.length).toBe(10);
    expect(nameAndQuantityCell).toBeInTheDocument();
    expect(subtotalCell).toBeInTheDocument();
    expect(totalCell).toBeInTheDocument();

    expect(nameAndQuantityCell.innerHTML).toBe("Sea Dot Arcdov x 1");
    expect(subtotalCell.innerHTML).toBe("$250");
    expect(totalCell.innerHTML).toBe("$250");
  });

  it("Testing userEvent on inputs", (): void => {
    const { user } = setup();

    const inputs = screen.getAllByTestId('inputs-checkout');
    const btn = screen.getByRole('button', {
      name: /place order/i
    });
    expect(btn).toBeInTheDocument();
    expect(btn).toHaveAttribute('Disabled');

    inputs.forEach(async (input, index) => {
      switch (index) {
        case 0:
          await user.type(input, 'Antonio');
          break;
        case 1:
          await user.type(input, 'Test');
          break
        case 2:
          await user.type(input, 'Brazil');
          break
        case 3:
          await user.type(input, 'Address Test, 205');
          break
        case 4:
          await user.type(input, 'Apartament 2');
          break
        case 5:
          await user.type(input, 'Test City');
          break
        case 6:
          await user.type(input, '60030-010');
          break
        case 7:
          await user.type(input, '7891476558');
          break
        case 8:
          await user.type(input, 'test@test.com');
          break
        case 9:
          await user.type(input, 'I want the product well packaged');
          break
        default:
          break;
      }

      expect(btn).not.toHaveAttribute('Disabled');

      await user.click(btn);

      const text = screen.getByText(/❌ invalid payment method/i);

      expect(text).toBeInTheDocument();
    });
  });

});