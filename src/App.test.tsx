import { render, screen } from '@testing-library/react';
import App from './App';
import Footer from './components/Footer';
import Card from './components/Card';
import TagBar from './components/TagBar';

// App component
test('renders App component correctly', () => {
  render(<App />);
  const company = screen.getByText(/Photosnap/i);
  expect(company).toBeInTheDocument();
});

// Footer component
test('renders Header component correctly', () => {
  render(<Footer />);
  screen.debug();

  const websiteLink = screen.getByText(/Claire Karsenti/i);
  expect(websiteLink).toBeInTheDocument();
  expect(websiteLink).toHaveAttribute(
    'href',
    'https://www.linkedin.com/in/claire-karsenti/'
  );
  expect(websiteLink).toHaveStyle('color: var(--very-dark-grayish-cyan)');
});

// Card component
test('renders Card component correctly', () => {
  render(<Card jobs={[]} handleFilters={undefined} />);
  screen.debug();
});

// TagBar component
test('renders TagBar component correctly', () => {
  render(
    <TagBar
      filters={[]}
      removeFilter={undefined}
      clearAllFilters={undefined}
    />
  );
  screen.debug();
});
