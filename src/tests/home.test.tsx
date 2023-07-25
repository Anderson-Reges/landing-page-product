import { screen, within } from '@testing-library/react';
import { renderWithRouter } from './renderWithRouter';
import Home from '../pages/Home';
import SlideProvider from '../context/SlideProvider';

describe("Test Home component",(): void => {

  const setup = () => renderWithRouter(
    <SlideProvider>
      <Home />
    </SlideProvider>
  );

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

})