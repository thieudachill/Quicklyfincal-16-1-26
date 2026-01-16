import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Footer from './Footer';

describe('Footer', () => {
    it('renders disclaimer text', () => {
        // Just identifying via presence of the footer role
        render(<Footer />);
        expect(screen.getByRole('contentinfo')).toBeInTheDocument();
    });

    it('renders contact info', () => {
        render(<Footer />);
        expect(screen.getByText(/contact@quicklyfincal.com/i)).toBeInTheDocument();
        expect(screen.getByText(/\+1 800-275-8776/i)).toBeInTheDocument();
    });

    it('renders links', () => {
        render(<Footer />);
        expect(screen.getByText(/Privacy Policy/i)).toBeInTheDocument();
        expect(screen.getByText(/Terms of Use/i)).toBeInTheDocument();
    });
});
