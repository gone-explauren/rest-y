import { render, screen, fireEvent } from '@testing-library/react';
import App from '../App';

xtest('Renders data in outout area on form submission', () => {
  render(
    <App />
  )
  let testUrl = screen.getByTestId('test-url');
  fireEvent.change(testUrl, { target: {value: 'test url'}});
  let testMethod = screen.getByTestId('methods');
  fireEvent.change(testMethod, { target: { value: 'get'}});
  fireEvent.click(screen.getByText(/GO/gm));
  
  const results = screen.getByTestId('test-results')
  expect(results).toHaveTextContent(/test url/gm);
  expect(results).toBeVisible();

})
});