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
        <header className={`header ${isMenuOpen ? 'mobile-expanded' : ''}`}>
            <div className="container header-content">
                <div className="header-top-bar">
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

                    {/* Mobile Menu Button - Toggles Expansion */}
                    <button className="mobile-menu-btn" onClick={toggleMenu} aria-label={isMenuOpen ? "Close menu" : "Open menu"}>
                        {isMenuOpen ? <X size={24} color="#072631" /> : <Menu size={24} color="#072631" />}
                    </button>
                </div>

                {/* Mobile Dropdown Menu (Internal Expansion) */}
                <div className={`mobile-menu-dropdown ${isMenuOpen ? 'open' : ''}`}>
                    <nav className="mobile-dropdown-links">
                        <a href="#how-it-works" className="mobile-dropdown-link" onClick={toggleMenu}>How it works</a>
                        <div className="mobile-link-divider"></div>

                        <a href="#rates-fees" className="mobile-dropdown-link" onClick={toggleMenu}>Rates & Fees</a>
                        <div className="mobile-link-divider"></div>

                        <a href="#faqs" className="mobile-dropdown-link" onClick={toggleMenu}>FAQs</a>
                    </nav>
                </div>
            </div>
            {/* Optional Backdrop for clicking outside, if desired. Not strictly requested but useful. */}
            {isMenuOpen && <div className="mobile-menu-backdrop" onClick={toggleMenu}></div>}
        </header>
    );
}
