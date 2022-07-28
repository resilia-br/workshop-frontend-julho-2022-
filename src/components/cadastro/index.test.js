import { render, screen } from '@testing-library/react';
import {Singnup} from './index';

test('renders Singnup component', () => {
  render(<Singnup setAccount={function() {}} />);
  const titleElement = screen.getByText(/Nova conta/i);
  expect(titleElement).toBeInTheDocument();
});
