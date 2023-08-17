import 'jest-localstorage-mock';
import App from '../App';
import { renderWithRouter } from './renderWithRouter';
import { screen, within } from '@testing-library/react';

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