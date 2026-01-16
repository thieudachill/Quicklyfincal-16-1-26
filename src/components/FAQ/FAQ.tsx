import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import './FAQ.css';

const faqs = [
    {
        question: 'Annual Percentage Rate (APR)',
        answer: 'The Annual Percentage Rate is the cost of your credit as a yearly rate. It reflects the cost of your loan.'
    },
    {
        question: 'Loan Term (Repayment Period)',
        answer: 'The repayment period varies by lender and loan amount. Terms typically range from 12 to 72 months.'
    },
    {
        question: 'Representative Example of APR',
        answer: 'For a $1,000 loan over 24 months at 10% APR, monthly payments would be approx $46.'
    },
    {
        question: 'Financial Implications (Interest & Finance Charges)',
        answer: 'Late payments may result in additional charges and interest accumulation.'
    },
    {
        question: 'Implications of Non-Payment',
        answer: 'Non-payment can negatively impact your credit score and legal action may be taken.'
    },
    {
        question: 'Potential Impact on Credit Score',
        answer: 'Lenders may report payment history to credit bureaus.'
    },
    {
        question: 'Collection Practices',
        answer: 'Lenders must follow fair debt collection practices.'
    },
    {
        question: 'Loan Renewal Policies',
        answer: 'Renewal policies vary by state and lender. Check your agreement.'
    }
];

import useScrollAnimation from '../../hooks/useScrollAnimation';

export default function FAQ(): React.ReactElement {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);
    const { ref, isVisible } = useScrollAnimation();

    const toggle = (index: number) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <section className="faq-section" id="faqs" ref={ref}>
            <div className="container">
                <h2 className={`faq-title ${isVisible ? 'animate-fade-up' : 'opacity-0'}`}>Have a Question?</h2>
                <p className={`faq-subtitle delay-200 ${isVisible ? 'animate-fade-up' : 'opacity-0'}`}>
                    All terms, fees, interest rates and other details are specified
                    in your loan agreement. We highly recommend you read this carefully.
                </p>

                <div className={`accordion delay-300 ${isVisible ? 'animate-fade-up' : 'opacity-0'}`}>
                    {faqs.map((faq, index) => (
                        <div className="accordion-item" key={index}>
                            <button
                                className="accordion-header"
                                onClick={() => toggle(index)}
                                aria-expanded={activeIndex === index}
                            >
                                <span>{faq.question}</span>
                                <ChevronDown className={`accordion-icon ${activeIndex === index ? 'open' : ''}`} />
                            </button>
                            <div className={`accordion-content ${activeIndex === index ? 'open animate-fade-up' : ''}`}>
                                <p>{faq.answer}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
