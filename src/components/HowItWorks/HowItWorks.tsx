import React from 'react';
import Card from '../ui/Card/Card';
import './HowItWorks.css';
import useScrollAnimation from '../../hooks/useScrollAnimation';

const steps = [
    {
        title: 'SUBMIT YOUR INFORMATION',
        description: 'Complete our simple, secure and fast online form in as quick as a few minutes.',
        image: '/assets/how_it_works_cardimg_1.jpg'
    },
    {
        title: 'FAST LOAN DECISION',
        description: 'Complete our simple, secure and fast online form in as quick as a few minutes.',
        image: '/assets/how_it_works_cardimg_2.jpg'
    },
    {
        title: 'CHECK YOUR ACCOUNT',
        description: 'Complete our simple, secure and fast online form in as quick as a few minutes.',
        image: '/assets/how_it_works_cardimg_3.jpg'
    }
];

export default function HowItWorks(): React.ReactElement {
    const { ref, isVisible } = useScrollAnimation();

    return (
        <section className="how-it-works-section" id="how-it-works" ref={ref}>
            <div className="how-it-works-container">
                <h2 className={`how-it-works-heading ${isVisible ? 'animate-fade-up' : 'opacity-0'}`}>HOW IT WORKS</h2>
                <div className="how-it-works-cards">
                    {steps.map((step, index) => (
                        <Card key={index} className={`step-card hover-lift delay-${(index + 1) * 200} ${isVisible ? 'animate-scale-in' : 'opacity-0'}`}>
                            <div className="step-image-container">
                                <img src={step.image} alt={step.title} className="step-image" />
                            </div>
                            <div className="step-content">
                                <h3 className="step-title">{step.title}</h3>
                                <p className="step-description">{step.description}</p>
                            </div>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}
