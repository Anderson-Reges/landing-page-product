import { screen } from '@testing-library/react';
import { renderWithRouter } from './renderWithRouter';
import Home from '../pages/Home';
import SlideProvider from '../context/SlideProvider';

describe("Test Home component",() => {

  it("Testing navbar rendering", () => {
    renderWithRouter(
      <SlideProvider>
        <Home />
      </SlideProvider>
    )

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

})