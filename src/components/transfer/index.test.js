import { render, screen } from '@testing-library/react';
import {Transfer} from './index';

test('renders Transfer component', () => {
  render(<Transfer setTransaction={function() {}} transaction={0} />);
  const titleElement = screen.getByText(/Nova Transaçāo/i);
  expect(titleElement).toBeInTheDocument();
});
