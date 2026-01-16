import React from 'react';
import Button from '../ui/Button/Button';
import './CTASection.css';
import useScrollAnimation from '../../hooks/useScrollAnimation';

export default function CTASection(): React.ReactElement {
    const { ref, isVisible } = useScrollAnimation();

    return (
        <section className="cta-section" ref={ref}>
            <div className="cta-container">
                <h2 className={`cta-title ${isVisible ? 'animate-fade-up' : 'opacity-0'}`}>READY TO REQUEST THE FUNDS YOU NEED?</h2>
                <p className={`cta-description delay-200 ${isVisible ? 'animate-fade-up' : 'opacity-0'}`}>
                    No matter what you need the loan for, money will be in your
                    account if the request is approved.
                </p>
                <div className={`delay-300 ${isVisible ? 'animate-fade-up' : 'opacity-0'}`}>
                    <Button variant="primary" className="cta-button">
                        GET STARTED
                    </Button>
                </div>
            </div>
        </section>
    );
}
