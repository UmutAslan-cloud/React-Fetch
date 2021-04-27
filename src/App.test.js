import { render, screen } from '@testing-library/react';
import App from './App';

test('list is existing', () => {
  const {queryByTestId} = render(<App />);

  expect(queryByTestId("form-area")).toBeNull();
});