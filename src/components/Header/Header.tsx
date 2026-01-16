import React from 'react';
import './Header.css';

export default function Header(): React.ReactElement {
    return (
        <header className="header">
            <div className="container header-content">
                <div className="logo">
                    <img src="/assets/logo.png" alt="QuicklyFincal Logo" className="logo-image" />
                </div>
                <nav className="nav-links">
                    <a href="#blog" className="nav-link">Blog</a>
                    <a href="#how-it-works" className="nav-link">How it works</a>
                    <a href="#rates-fees" className="nav-link">Rates & Fees</a>
                    <a href="#faqs" className="nav-link">FAQs</a>
                </nav>
            </div>
        </header>
    );
}
