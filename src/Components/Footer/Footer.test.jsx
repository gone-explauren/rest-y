import Footer from '.';

import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

describe('Testing the Header component', () => {
  test('Shoulder render an h1', () => {
    render(<Footer />);

    const copyright = screen.getByText(/©/i);
  
    expect(copyright).toBeInTheDocument();
  })
})