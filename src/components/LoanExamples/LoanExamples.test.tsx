import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import LoanExamples from './LoanExamples';

describe('LoanExamples', () => {
    it('renders section title with animation', () => {
        render(<LoanExamples />);
        const title = screen.getByText(/Loan Repayment Examples/i);
        expect(title).toBeInTheDocument();
        expect(title).toHaveClass('animate-fade-up');
    });

    it('renders table headers', () => {
        render(<LoanExamples />);
        expect(screen.getByText(/Loan Amount/i)).toBeInTheDocument();
        expect(screen.getByText(/Term \(Months\)/i)).toBeInTheDocument();
    });

    it('renders table rows', () => {
        render(<LoanExamples />);
        expect(screen.getByText('$500')).toBeInTheDocument();
        expect(screen.getByText('$43.00')).toBeInTheDocument();
    });
});
