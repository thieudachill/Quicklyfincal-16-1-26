import React from 'react';
import './Card.css';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
}

export default function Card({ children, className = '', ...props }: CardProps): React.ReactElement {
    return (
        <div className={`card ${className}`} {...props}>
            {children}
        </div>
    );
}
