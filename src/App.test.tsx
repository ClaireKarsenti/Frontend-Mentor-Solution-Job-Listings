import { render, screen } from '@testing-library/react';
import App from './App';

test('renders App component correctly', () => {
  render(<App />);
  const company = screen.getByText(/Photosnap/i);
  expect(company).toBeInTheDocument();
});
