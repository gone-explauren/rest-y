import App from '../App';

import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';

import {rest} from 'msw';
import {setupServer} from 'msw/node';

const server = setupServer(
  rest.get('*', (req, res, ctx) => {
    console.log('Your hair looks great today.')
    return res(ctx.json({count: 0, results: []}))
  }),
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

xtest('Renders data in outout area on form submission', () => {
  render(
    <App />
  )
  let testUrl = screen.getByTestId('test-url');
  fireEvent.change(testUrl, { target: {value: 'test url'}});
  let testMethod = screen.getByTestId('methods');
  fireEvent.change(testMethod, { target: { value: 'get'}});

  // click go
  fireEvent.click(screen.getByText(/GO/gm));
  
  const results = screen.getByTestId('test-results')
  expect(results).toHaveTextContent(/test url/gm);
  expect(results).toBeVisible();
});