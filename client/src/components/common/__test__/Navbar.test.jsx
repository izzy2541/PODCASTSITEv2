import { render, screen } from '@testing-library/react';
import Navbar from '../Navbar';

test('Checks for buttons', () => {
    render(<Navbar />);
    const linkElement = screen.getByRole("test");
    expect(linkElement).toBeInTheDocument();
});

test('Checks for buttons', () => {
    render(<Navbar />);
    const buttonElement = screen.getByRole("button");
    expect(buttonElement).toBeInTheDocument();
});

test('Checks for Links', () => {
    render(<Navbar />);
    const linkElement = screen.getByRole("Link");
    expect(linkElement).toBeInTheDocument();
});