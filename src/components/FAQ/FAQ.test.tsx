import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import FAQ from './FAQ';

describe('FAQ', () => {
    it('renders section title with animation', () => {
        render(<FAQ />);
        const title = screen.getByText(/Have a Question\?/i);
        expect(title).toBeInTheDocument();
        expect(title).toHaveClass('animate-fade-up');
    });

    it('renders accordion items', () => {
        render(<FAQ />);
        expect(screen.getByText(/Annual Percentage Rate \(APR\)/i)).toBeInTheDocument();
    });

    it('toggles accordion content', () => {
        render(<FAQ />);
        const question = screen.getByText(/Annual Percentage Rate \(APR\)/i);
        // Initial state check - strict check might require aria-expanded

        fireEvent.click(question);

        // Check if content appears and has animation class
        expect(screen.getByText(/The Annual Percentage Rate is the cost of your credit/i)).toBeInTheDocument();

        const content = screen.getByText(/The Annual Percentage Rate is the cost of your credit/i).closest('.accordion-content');
        expect(content).toHaveClass('animate-fade-up');
    });
});
