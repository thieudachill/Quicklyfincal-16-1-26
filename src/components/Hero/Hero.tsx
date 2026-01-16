import React from 'react';
import Button from '../ui/Button/Button';
import Input from '../ui/Input/Input';
import './Hero.css';

export default function Hero(): React.ReactElement {
    return (
        <section className="hero-section">
            {/* Background layer specified in Section 3 as Frame 793 */}
            <div className="container hero-container">

                {/* Section 2: Hero Left Side - Text */}
                <div className="hero-text-container animate-scale-in delay-200">
                    <h1 className="hero-heading animate-fade-up delay-300">
                        MAKE IT EASIER <br />
                        TO HANDLE YOUR <br />
                        EXPENSES WITH <br />
                        UP TO $5,000
                    </h1>
                </div>

                {/* Section 3: Hero Right Side - Form Card */}
                <div className="hero-form-container animate-fade-up delay-200">
                    <div className="form-fields-container">
                        <div className="form-group">
                            <label className="form-label">Loan Amount ($100 - $5,000)</label>
                            <Input placeholder="" />
                        </div>

                        <div className="form-group">
                            <label className="form-label">Reason for loan</label>
                            <Input placeholder="" />
                        </div>

                        <div className="form-group">
                            <label className="form-label">Your Zip Code</label>
                            <Input placeholder="" />
                        </div>
                    </div>

                    <p className="disclaimer">
                        By clicking 'Request Now', you agree to our Privacy Policy, Terms,
                        Rate & Fees and receive special offers from us and our marketing
                        partners via email communication
                    </p>

                    <Button variant="primary" className="hero-cta-button">
                        GET YOUR LOANS
                    </Button>

                    <div className="security-badges">
                        <img src="/assets/secured_by_Sectigo.png" alt="Sectigo Secured" className="badge-img" />
                        <img src="/assets/ssl_secured.png" alt="SSL Secured" className="badge-img" />
                        <img src="/assets/secured_certificate.png" alt="Secured Certificate" className="badge-img" />
                    </div>
                </div>

            </div>
        </section>
    );
}
