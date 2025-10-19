import { render, screen } from '@testing-library/react';
import App from './App';

test('renders GitHub Wrapped heading', () => {
  render(<App />);
  const headingElement = screen.getByText(/GitHub Wrapped 2025/i);
  expect(headingElement).toBeInTheDocument();
});
