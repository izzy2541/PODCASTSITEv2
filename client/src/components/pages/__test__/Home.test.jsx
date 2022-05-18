import { render, screen } from '@testing-library/react';
import Home from '../Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


const MockHome = () => {
    return (
        <BrowserRouter>
            <Routes><Route path="/" element={<Home />} /></Routes>
        </BrowserRouter>
    )
}

test('Checks the header renders', () => {
    render(<MockHome />);
    const header = screen.getByText("POD SEARCH");
    expect(header).toBeInTheDocument();
});