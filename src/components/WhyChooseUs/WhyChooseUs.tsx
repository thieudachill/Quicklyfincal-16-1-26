import React from 'react';
import { MousePointerClick, Zap, ShieldCheck } from 'lucide-react';
import './WhyChooseUs.css';
import useScrollAnimation from '../../hooks/useScrollAnimation';

const features = [
    {
        icon: <MousePointerClick size={32} />,
        title: 'Easy to request',
        description: 'Online request is an ideal option for your to request everywhere.'
    },
    {
        icon: <Zap size={32} />,
        title: 'All Credit Types Welcome',
        description: 'Your credit histories might not be good but you still have chances based on lenders\' reviews.'
    },
    {
        icon: <ShieldCheck size={32} />,
        title: 'Secure for you',
        description: 'We prioritize the data security by applying the latest technology to protect your information.'
    }
];

export default function WhyChooseUs(): React.ReactElement {
    const { ref, isVisible } = useScrollAnimation();

    return (
        <section className="why-choose-us-section" id="why-choose-us" ref={ref}>
            <div className="container">
                <h2 className="section-title" style={{ color: '#fff' }}>WHY CHOOSE US?</h2>
                <p className="subtitle">
                    Quicklyfincal.com is a partner who seeks to earn your trust in finding a suitable loan from a reliable lender.
                </p>

                <div className="features-grid">
                    {features.map((feature, index) => (
                        <div
                            className={`feature-card ${isVisible ? 'animate-fade-up' : 'opacity-0'}`}
                            key={index}
                            style={{ animationDelay: `${index * 0.2 + 0.2}s` }}
                        >
                            <div className="icon-wrapper icon-hover-pulse">
                                {feature.icon}
                            </div>
                            <h3 className="feature-title">{feature.title}</h3>
                            <p className="feature-description">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
