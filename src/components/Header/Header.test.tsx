import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Header from './Header';

describe('Header', () => {
    it('renders logo', () => {
        render(<Header />);
        expect(screen.getByAltText(/QuicklyFincal Logo/i)).toBeInTheDocument();
    });

    it('renders navigation links', () => {
        render(<Header />);
        ['Blog', 'How it works', 'Rates & Fees', 'FAQs'].forEach(text => {
            expect(screen.getByText(text)).toBeInTheDocument();
        });
    });

    it('renders as a header element', () => {
        render(<Header />);
        expect(screen.getByRole('banner')).toBeInTheDocument();
    });
});
