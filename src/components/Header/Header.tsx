import React from 'react';
import './Header.css';

import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import './Header.css';

export default function Header(): React.ReactElement {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className="header">
            <div className="container header-content">
                <div className="logo">
                    <img src="/assets/logo.png" alt="QuicklyFincal Logo" className="logo-image" />
                </div>

                {/* Desktop Nav */}
                <nav className="nav-links">
                    <a href="#blog" className="nav-link">Blog</a>
                    <a href="#how-it-works" className="nav-link">How it works</a>
                    <a href="#rates-fees" className="nav-link">Rates & Fees</a>
                    <a href="#faqs" className="nav-link">FAQs</a>
                </nav>

                {/* Mobile Menu Button */}
                <button className="mobile-menu-btn" onClick={toggleMenu} aria-label="Toggle menu">
                    {isMenuOpen ? <X size={24} color="#072631" /> : <Menu size={24} color="#072631" />}
                </button>

                {/* Mobile Nav Overlay */}
                <div className={`mobile-nav-overlay ${isMenuOpen ? 'active' : ''}`}>
                    <nav className="mobile-nav-links">
                        <a href="#blog" className="mobile-nav-link" onClick={toggleMenu}>Blog</a>
                        <a href="#how-it-works" className="mobile-nav-link" onClick={toggleMenu}>How it works</a>
                        <a href="#rates-fees" className="mobile-nav-link" onClick={toggleMenu}>Rates & Fees</a>
                        <a href="#faqs" className="mobile-nav-link" onClick={toggleMenu}>FAQs</a>
                    </nav>
                </div>
            </div>
        </header>
    );
}
