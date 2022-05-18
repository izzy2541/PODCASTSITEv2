import { render, screen } from '@testing-library/react';
import App from './App';

test('renders decription text', () => {
   render(<App />);
   const linkElement = screen.getByRole("Link");
 expect(linkElement).toBeInTheDocument();
 });
