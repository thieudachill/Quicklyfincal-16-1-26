import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import CTASection from './CTASection';

describe('CTASection', () => {
    it('renders heading with animation', () => {
        render(<CTASection />);
        const heading = screen.getByText(/READY TO REQUEST THE FUNDS YOU NEED\?/i);
        expect(heading).toBeInTheDocument();
        expect(heading).toHaveClass('animate-fade-up');
    });

    it('renders CTA button', () => {
        render(<CTASection />);
        expect(screen.getByRole('button', { name: /GET STARTED/i })).toBeInTheDocument();
    });
});
