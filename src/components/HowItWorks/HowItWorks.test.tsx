import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import HowItWorks from './HowItWorks';

describe('HowItWorks', () => {
    it('renders section title with animation', () => {
        render(<HowItWorks />);
        const title = screen.getByText(/HOW IT WORKS/i);
        expect(title).toBeInTheDocument();
        expect(title).toHaveClass('animate-fade-up');
    });

    it('renders step cards with correct content', () => {
        render(<HowItWorks />);
        expect(screen.getByText('SUBMIT YOUR INFORMATION')).toBeInTheDocument();
        expect(screen.getByText('FAST LOAN DECISION')).toBeInTheDocument();
        expect(screen.getByText('CHECK YOUR ACCOUNT')).toBeInTheDocument();
    });

    it('applies staggered animation and hover effects', () => {
        render(<HowItWorks />);
        const cards = screen.getAllByText(/Complete our simple/i).map(el => el.closest('.step-card'));

        expect(cards).toHaveLength(3);

        // Check first card
        expect(cards[0]).toHaveClass('animate-scale-in');
        expect(cards[0]).toHaveClass('delay-200');
        expect(cards[0]).toHaveClass('hover-lift');

        // Check second card
        expect(cards[1]).toHaveClass('delay-400');

        // Check third card
        expect(cards[2]).toHaveClass('delay-600');
    });
});
