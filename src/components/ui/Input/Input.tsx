import React from 'react';
import './Input.css';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> { }

export default function Input({ className = '', ...props }: InputProps): React.ReactElement {
    return (
        <input
            className={`input-field ${className}`}
            {...props}
        />
    );
}
