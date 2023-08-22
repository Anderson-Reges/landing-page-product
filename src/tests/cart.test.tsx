import App from '../App';
import { renderWithRouter } from './renderWithRouter';
import { screen, within } from '@testing-library/react';

import 'jest-localstorage-mock';

describe("Testing cart page without item in cart", (): void => {

  const setup = () => renderWithRouter(<App />, { route: '/cart' })

  it("Testing page component renderings", (): void => {
    setup();

    const nav = screen.getByRole('navigation');
    const headerContainer = screen.getByRole('banner');
    const sectionContainer = screen.getByTestId('cart-container');
    const formContainer = screen.getByTestId('cart-form-container');
    const formBox = screen.getByTestId('cart-form-box');
    const emptyInfoBox = screen.getByTestId('cart-empty-info-box');
    const emptyInfoText = screen.getByTestId('cart-empty-info-text');
    const emptyInfoBtn = screen.getByRole('button', {
      name: /return home/i
    });
    const footerContainer = screen.getByTestId("footer-container");
    const footerBoxTop = screen.getByTestId("footer-box-top");
    const footerBoxBottom = screen.getByTestId("footer-box-bottom");
    const footerBoxTopInfos = screen.getByTestId('footer-box-top-info');
    const footerBoxTopLinks = screen.getByTestId("footer-box-top-links");
    const footerBoxTopForm = screen.getByTestId("footer-box-top-form");
    const footerBoxBottomText = screen.getByText(/made by/i);
    const footerBoxBottomLink = screen.getByRole('link', {
      name: /@anderson-reges/i
    });

    expect(nav).toBeInTheDocument();
    expect(headerContainer).toBeInTheDocument();
    expect(sectionContainer).toBeInTheDocument();
    expect(formContainer).toBeInTheDocument();
    expect(formBox).toBeInTheDocument();
    expect(emptyInfoBox).toBeInTheDocument();
    expect(emptyInfoText.innerHTML).toBe('Your cart is currently empty.');
    expect(emptyInfoBtn).toBeInTheDocument();
    expect(footerContainer).toBeInTheDocument();
    expect(footerBoxTop).toBeInTheDocument();
    expect(footerBoxBottom).toBeInTheDocument();
    expect(footerBoxTopInfos).toBeInTheDocument();
    expect(footerBoxTopLinks).toBeInTheDocument();
    expect(footerBoxTopForm).toBeInTheDocument();
    expect(footerBoxBottomText).toBeInTheDocument();
    expect(footerBoxBottomLink).toBeInTheDocument();
  });

  it("Testing the user event on clicking the return to home button", async (): Promise<void> => {
    const { user } = setup();

    const emptyInfoBtn = screen.getByRole('button', {
      name: /return home/i
    });
    expect(emptyInfoBtn).toBeInTheDocument();

    await user.click(emptyInfoBtn)

    expect(window.location.pathname).toBe('/')
  });

  it("Testing user event on clicking home text in header", async (): Promise<void> => {
    const { user } = setup();

    const banner = screen.getByRole('banner');

    const link = within(banner).getByText(/home/i);
    expect(link).toBeInTheDocument();

    await user.click(link);

    expect(window.location.pathname).toBe("/")
  });

});

describe("Testing cart page with item in cart", (): void => {

  const setup = () => renderWithRouter(<App />, { route: '/cart' });

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

  it("Testing page component renderings", () => {
    setup();

    const nav = screen.getByRole('navigation');
    const headerContainer = screen.getByRole('banner');
    const sectionContainer = screen.getByTestId('cart-container');
    const formContainer = screen.getByTestId('cart-form-container');
    const formBox = screen.getByTestId('cart-form-box');
    const productColumn = screen.getByRole('columnheader', {
      name: /product/i
    });
    const priceColumn = screen.getByRole('columnheader', {
      name: /price/i
    });
    const quantityColumn = screen.getByRole('columnheader', {
      name: /quantity/i
    });
    const totalColumn = screen.getByRole('columnheader', {
      name: /total/i
    });
    const btnCell = screen.getByRole('cell', {
      name: /x/i
    });
    const productCell = screen.getByRole('cell', {
      name: /sea dot arcdov/i
    });
    const row = screen.getByRole('row');
    const img = within(row).getByRole('img');
    const priceCell = screen.getByTestId('price-cell');
    const subtotalCell = screen.getByTestId('subtotal-cell')
    const input = screen.getByRole('spinbutton');
    const btnFormContainer = screen.getByTestId('form-btn-container');
    const btnUpdate = screen.getByRole('button', {
      name: /update cart/i
    });
    const btnCheckout = screen.getByRole('button', {
      name: /proceed to checkout/i
    });
    const footerContainer = screen.getByTestId("footer-container");
    const footerBoxTop = screen.getByTestId("footer-box-top");
    const footerBoxBottom = screen.getByTestId("footer-box-bottom");
    const footerBoxTopInfos = screen.getByTestId('footer-box-top-info');
    const footerBoxTopLinks = screen.getByTestId("footer-box-top-links");
    const footerBoxTopForm = screen.getByTestId("footer-box-top-form");
    const footerBoxBottomText = screen.getByText(/made by/i);
    const footerBoxBottomLink = screen.getByRole('link', {
      name: /@anderson-reges/i
    });

    expect(nav).toBeInTheDocument();
    expect(headerContainer).toBeInTheDocument();
    expect(sectionContainer).toBeInTheDocument();
    expect(formContainer).toBeInTheDocument();
    expect(formBox).toBeInTheDocument();
    expect(productColumn).toBeInTheDocument();
    expect(priceColumn).toBeInTheDocument();
    expect(quantityColumn).toBeInTheDocument();
    expect(totalColumn).toBeInTheDocument();
    expect(btnCell).toBeInTheDocument();
    expect(productCell).toBeInTheDocument();
    expect(input).toBeInTheDocument();
    expect(img).toBeInTheDocument();
    expect(priceCell).toBeInTheDocument();
    expect(subtotalCell).toBeInTheDocument();
    expect(btnFormContainer).toBeInTheDocument();
    expect(btnUpdate).toBeInTheDocument();
    expect(btnCheckout).toBeInTheDocument();
    expect(footerContainer).toBeInTheDocument();
    expect(footerBoxTop).toBeInTheDocument();
    expect(footerBoxBottom).toBeInTheDocument();
    expect(footerBoxTopInfos).toBeInTheDocument();
    expect(footerBoxTopLinks).toBeInTheDocument();
    expect(footerBoxTopForm).toBeInTheDocument();
    expect(footerBoxBottomText).toBeInTheDocument();
    expect(footerBoxBottomLink).toBeInTheDocument();
  });

  it("Testing userEvent on form buttons", async (): Promise<void> => {
    const { user } = setup();

    const KEY = 'cart',
      VALUE = {
        name: "Sea Dot Arcdov",
        price: 250,
        quantity: "2",
        subtotal: 500,
      };

    const input = screen.getByRole('spinbutton');
    const btnUpdate = screen.getByRole('button', {
      name: /update cart/i
    });
    const btnCheckout = screen.getByRole('button', {
      name: /proceed to checkout/i
    });
    expect(input).toBeInTheDocument();
    expect(btnUpdate).toBeInTheDocument();
    expect(btnCheckout).toBeInTheDocument();
    expect(btnUpdate).toHaveAttribute("disabled");

    await user.clear(input);
    await user.type(input, "2");

    expect(btnUpdate).not.toHaveAttribute("disabled");
    expect(input).toHaveValue(2);

    await user.click(btnUpdate);

    expect(localStorage.setItem).toHaveBeenCalledWith(KEY, JSON.stringify(VALUE));

    await user.click(btnCheckout);

    expect(window.location.pathname).toBe('/checkout');
  })

});