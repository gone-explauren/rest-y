import Header from '.';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

describe('Testing the Header component', () => {
  test('Should render a title', () => {
    render(<Header />);

    expect(screen.getByText('REST-y')).toBeVisible();
  });
})