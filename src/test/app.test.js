import React from 'react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { render, screen, act } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import App from '../App';
import { success } from './response';


const url =
  'http://app-homevision-staging.herokuapp.com/api_project/houses?page=1&per_page=6';

const server = setupServer(
  rest.get(url, (req, res, ctx) => {
    return res(ctx.json(success));
  })
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

test('Successfully renders the page', async () => {
  act(() => {
    /* fire events that update state */
    render(<App />);
  });
  const headerText = 'There was an error loading the page';

  expect(screen.getByRole('heading')).toHaveTextContent(headerText);
  expect(screen.getByRole('button')).toHaveTextContent('Refresh');
});
