import { render, screen } from '@testing-library/react';
import {Balance} from './index';

test('renders Balance component', () => {
  render(<Balance transaction={0} balance={"0,00"} />);
  const titleElement = screen.getByText(/Meu saldo/i);
  expect(titleElement).toBeInTheDocument();
});
