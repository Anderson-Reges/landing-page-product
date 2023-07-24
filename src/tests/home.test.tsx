import { screen } from '@testing-library/react';
import { renderWithRouter } from './renderWithRouter';
import Home from '../pages/Home';
import SlideProvider from '../context/SlideProvider';

describe("Test Home component",() => {

  const setup = () => renderWithRouter(
    <SlideProvider>
      <Home />
    </SlideProvider>
  );

  it("Testing navbar rendering", () => {
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

  it("Testing slide rendering", () => {
    setup();

    const slideContainer = screen.getByTestId("slide-container");

    expect(slideContainer).toBeInTheDocument();
  });

  it("Testing features rendering", () => {
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
})