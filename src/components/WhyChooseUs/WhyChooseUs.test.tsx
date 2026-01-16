import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import WhyChooseUs from './WhyChooseUs';

describe('WhyChooseUs', () => {
    it('renders section title', () => {
        render(<WhyChooseUs />);
        expect(screen.getByText(/WHY CHOOSE US\?/i)).toBeInTheDocument();
    });

    it('renders all feature cards with animation', () => {
        render(<WhyChooseUs />);
        const cards = screen.getAllByText(/Easy to request/i).map(el => el.closest('.feature-card'));
        expect(cards[0]).toHaveClass('animate-fade-up');
    });

    it('applies pulse animation class to icons', () => {
        render(<WhyChooseUs />);
        // Find icon wrappers (they have .icon-wrapper class)

        // Simplest valid test:
        const firstIconWrapper = screen.getByText('Easy to request').closest('.feature-card')?.querySelector('.icon-wrapper');
        expect(firstIconWrapper).toHaveClass('icon-hover-pulse');
    });
});
