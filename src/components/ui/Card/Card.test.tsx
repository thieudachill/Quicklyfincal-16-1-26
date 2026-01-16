import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Card from './Card';

describe('Card', () => {
    it('renders children correctly', () => {
        render(<Card><div>Test Content</div></Card>);
        expect(screen.getByText('Test Content')).toBeInTheDocument();
    });

    it('applies custom className', () => {
        render(<Card className="custom-class">Content</Card>);
        const card = screen.getByText('Content').closest('.card');
        expect(card).toHaveClass('card');
        expect(card).toHaveClass('custom-class');
    });
});
