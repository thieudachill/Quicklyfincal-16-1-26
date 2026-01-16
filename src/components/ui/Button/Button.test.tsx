import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import Button from './Button';

describe('Button', () => {
    it('renders correctly with children', () => {
        render(<Button>Click Me</Button>);
        expect(screen.getByRole('button', { name: /click me/i })).toBeInTheDocument();
    });

    it('handles onClick events', () => {
        const handleClick = vi.fn();
        render(<Button onClick={handleClick}>Click Me</Button>);
        fireEvent.click(screen.getByRole('button'));
        expect(handleClick).toHaveBeenCalledTimes(1);
    });

    it('applies primary class by default', () => {
        render(<Button>Primary</Button>);
        const button = screen.getByRole('button');
        expect(button.className).toContain('btn-primary');
    });
});
