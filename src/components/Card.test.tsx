import { render, screen } from '@testing-library/react';
import Card from './Card';

test('renders Card component correctly', () => {
  render(<Card job={[]} />);
  screen.debug();

});
