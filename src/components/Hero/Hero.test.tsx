import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Hero from './Hero';

describe('Hero', () => {
    it('renders main heading', () => {
        render(<Hero />);
        expect(screen.getByText(/MAKE IT EASIER TO HANDLE YOUR EXPENSES/i)).toBeInTheDocument();
    });

    it('renders loan form inputs', () => {
        render(<Hero />);
        expect(screen.getByText(/Loan Amount/i)).toBeInTheDocument();
        expect(screen.getByText(/Reason for loan/i)).toBeInTheDocument();
        expect(screen.getByText(/Your Zip Code/i)).toBeInTheDocument();
    });

    it('renders CTA button', () => {
        render(<Hero />);
        expect(screen.getByRole('button', { name: /GET YOUR LOANS/i })).toBeInTheDocument();
    });

    it('has correct entrance animation classes', () => {
        render(<Hero />);
        // Heading should fade up
        const heading = screen.getByText(/MAKE IT EASIER/i).closest('h1');
        expect(heading).toHaveClass('animate-fade-up');

        // Form container should scale in or fade up (Decision: Fade up for form per plan "slide-up")
        // Finding form container by looking for a label inside it
        const formLabel = screen.getByText(/Loan Amount/i);
        const formContainer = formLabel.closest('.hero-form-container');
        expect(formContainer).toHaveClass('animate-fade-up');
    });
});
