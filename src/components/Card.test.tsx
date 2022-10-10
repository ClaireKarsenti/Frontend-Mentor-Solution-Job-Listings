import { render, screen } from '@testing-library/react';
import Card from './Card';

test('renders Card component correctly', () => {
  render(<Card jobs={[]} handleFilters={undefined} />);
  screen.debug();
});
