import { render, screen } from '@testing-library/react';
import Footer from '../Footer';

test('Checks the footer renders', () => {
    render(<Footer />);
    const header = screen.getByText(/PodSearch/i);
    expect(header).toBeInTheDocument();
});