import React from 'react';
import './Button.css';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary';
}

export default function Button({
    children,
    className = '',
    variant = 'primary',
    ...props
}: ButtonProps): React.ReactElement {
    return (
        <button
            className={`btn btn-${variant} ${className}`}
            {...props}
        >
            {children}
        </button>
    );
}
