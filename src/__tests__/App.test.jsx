import { render, screen } from '@testing-library/react';
import App from '../App';

xtest('Renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});