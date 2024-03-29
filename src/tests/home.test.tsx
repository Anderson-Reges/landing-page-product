import 'jest-localstorage-mock';
import { screen, within, cleanup } from '@testing-library/react';
import App from '../App';
import { renderWithRouter } from './renderWithRouter';


describe("Testing the rendering of the Home component", (): void => {

  const setup = () => renderWithRouter(<App />)

  it("Testing navbar rendering", (): void => {
    setup();

    const home = screen.getByText(/home/i);
    const features = screen.getByRole('link', {
      name: /features/i
    });
    const TechSpecs = screen.getByRole('link', {
      name: /tech specs/i
    });
    const contact = screen.getByRole('link', {
      name: /contact/i
    });
    const buttonNav = screen.getByRole('button', {
      name: /buy now/i
    })

    expect(home).toBeInTheDocument();
    expect(features).toBeInTheDocument();
    expect(TechSpecs).toBeInTheDocument();
    expect(contact).toBeInTheDocument();
    expect(buttonNav).toBeInTheDocument();
  });

  it("Testing slide rendering", (): void => {
    setup();

    const slideContainer = screen.getByTestId("slide-container");

    expect(slideContainer).toBeInTheDocument();
  });

  it("Testing features rendering", (): void => {
    setup();

    const features = screen.getByTestId("features");
    const featuresLeft = screen.getByTestId("features-left");
    const featuresRight = screen.getByTestId("features-right");
    const featuresPhoneImg = screen.getByTestId("features-phone-img");

    expect(features).toBeInTheDocument();
    expect(featuresLeft).toBeInTheDocument();
    expect(featuresRight).toBeInTheDocument();
    expect(featuresPhoneImg).toBeInTheDocument();
  });

  it("Testing specific-info rendering", (): void => {
    setup();

    const specificInfoContainer = screen.getByTestId("specific-info-container");
    const specificInfoBox = screen.getByTestId("specific-info-info-box");
    const specificInfoBoxTitle = screen.getByTestId("specific-info-title-box");
    const specificInfoInfos = screen.getByTestId("specific-info-infos");

    expect(specificInfoContainer).toBeInTheDocument();
    expect(specificInfoBox).toBeInTheDocument();
    expect(specificInfoBoxTitle).toBeInTheDocument();
    expect(specificInfoInfos).toBeInTheDocument();
  });

  it("Testing tech-specs rendering", (): void => {
    setup();

    const techSpecsContainer = screen.getByTestId("tech-specs-container");
    const techSpecsBoxTitle = screen.getByTestId("tech-specs-box-title");
    const techSpecsBoxInfos = screen.getByTestId("tech-specs-box-infos");

    expect(techSpecsContainer).toBeInTheDocument();
    expect(techSpecsBoxTitle).toBeInTheDocument();
    expect(techSpecsBoxInfos).toBeInTheDocument();
  });

  it("Testing merchandising rendering", (): void => {
    setup();

    const merchandisingContainer = screen.getByTestId('merchandising-container');
    const merchandisingHeading = screen.getByTestId('merchandising-heading');
    const btn = within(merchandisingContainer).getByRole('button', {
      name: /purchase seadot/i
    });

    expect(merchandisingContainer).toBeInTheDocument();
    expect(merchandisingHeading).toBeInTheDocument();
    expect(btn).toBeInTheDocument();
  });

  it("Testing last-updates rendering", (): void => {
    setup();

    const lastUpdatesContainer = screen.getByTestId("last-updates-container");
    const textBox = within(lastUpdatesContainer).getByRole('textbox');
    const btn = screen.getByRole('button', {
      name: /subscribe/i
    });

    expect(lastUpdatesContainer).toBeInTheDocument();
    expect(textBox).toBeInTheDocument();
    expect(btn).toBeInTheDocument();
  });

  it("Testing footer rendering", (): void => {
    setup();

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

    expect(footerContainer).toBeInTheDocument();
    expect(footerBoxTop).toBeInTheDocument();
    expect(footerBoxBottom).toBeInTheDocument();
    expect(footerBoxTopInfos).toBeInTheDocument();
    expect(footerBoxTopLinks).toBeInTheDocument();
    expect(footerBoxTopForm).toBeInTheDocument();
    expect(footerBoxBottomText).toBeInTheDocument();
    expect(footerBoxBottomLink).toBeInTheDocument();
  });
});

describe("Testing userEvent in component Home", (): void => {

  const setup = () => renderWithRouter(<App />)

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

  it("Testing the click on the buy button in the navbar", async (): Promise<void> => {
    const { user } = setup();

    const btn = screen.getByRole('button', {
      name: /buy now/i
    });
    expect(btn).toBeInTheDocument();

    await user.click(btn);

    expect(window.location.pathname).toBe('/cart');
  });

  it("Testing the click on the button in the Slide", async (): Promise<void> => {
    const { user } = setup();

    const btn = screen.getByTestId('slide-button-purchase');

    expect(btn).toBeInTheDocument();

    await user.click(btn);

    expect(window.location.pathname).toBe('/cart');
  });

  it("Testing the click on the button in the Merchandising", async (): Promise<void> => {
    const { user } = setup();

    const btn = screen.getByTestId('merchandising-btn');

    expect(btn).toBeInTheDocument();

    await user.click(btn);

    expect(window.location.pathname).toBe('/cart');
  });

  it("Tests if it is possible to type in the text box in last updates", async (): Promise<void> => {
    const { user } = setup();

    const view = screen.getByTestId('last-updates-container');
    const textBox = within(view).getByRole('textbox');

    expect(textBox).toBeInTheDocument();

    await user.type(textBox,"test@test.com");

    expect(textBox).toHaveValue("test@test.com");
  });

  it("Tests if it is possible to type in the text box in footer form", async (): Promise<void> => {
    const { user } = setup();

    const textBox1 = screen.getByTestId('footer-box-top-form-input-1');
    const textBox2 = screen.getByTestId('footer-box-top-form-input-2');

    expect(textBox1).toBeInTheDocument();
    expect(textBox2).toBeInTheDocument();

    await user.type(textBox1,"test@test.com");
    await user.type(textBox2,"test@test.com");

    expect(textBox1).toHaveValue("test@test.com");
    expect(textBox1).toHaveValue("test@test.com");
  });

  afterEach(() => {
    localStorage.clear();
    cleanup();
  });

});