import { render, screen } from '@testing-library/react';
import App from './App';

test('renders conexao title', () => {
  render(<App />);
  const element = screen.getByRole('heading', { level: 1, text: /conexao/i } );
  expect(element).toBeInTheDocument();
});
