import React from 'react';
import './LoanExamples.css';
import useScrollAnimation from '../../hooks/useScrollAnimation';

const examples = [
    { amount: '$500', term: '12 months', monthly: '$43.00', total: '$516.00' },
    { amount: '$1,000', term: '24 months', monthly: '$43.80', total: '$1,051.21' },
    { amount: '$1,500', term: '36 months', monthly: '$45.00', total: '$1,620.00' },
    { amount: '$2,000', term: '48 months', monthly: '$68.87', total: '$2,208.64' },
    { amount: '$2,500', term: '60 months', monthly: '$74.15', total: '$2,946.00' },
    { amount: '$3,000', term: '60 months', monthly: '$88.98', total: '$3,312.96' },
    { amount: '$3,500', term: '72 months', monthly: '$80.00', total: '$3,865.12' },
    { amount: '$4,000', term: '72 months', monthly: '$92.03', total: '$4,417.28' },
    { amount: '$4,500', term: '72 months', monthly: '$103.53', total: '$4,969.44' },
    { amount: '$5,000', term: '72 months', monthly: '$115.03', total: '$5,521.60' },
];

export default function LoanExamples(): React.ReactElement {
    const { ref, isVisible } = useScrollAnimation();

    return (
        <section className="loan-examples-section" id="rates-fees" ref={ref}>
            <div className="container">
                <h2 className={`section-title ${isVisible ? 'animate-fade-up' : 'opacity-0'}`}>Loan Repayment Examples</h2>

                <div className={`table-container delay-200 ${isVisible ? 'animate-fade-up' : 'opacity-0'}`}>
                    <table className="loan-table">
                        <thead>
                            <tr>
                                <th>Loan Amount</th>
                                <th>Term (Months)</th>
                                <th>Monthly Payment</th>
                                <th>Total Repayment</th>
                            </tr>
                        </thead>
                        <tbody>
                            {examples.map((ex, index) => (
                                <tr key={index}>
                                    <td>{ex.amount}</td>
                                    <td>{ex.term}</td>
                                    <td>{ex.monthly}</td>
                                    <td>{ex.total}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <p className={`loan-note delay-300 ${isVisible ? 'animate-fade-up' : 'opacity-0'}`}>
                    Notes: APR may vary depending on credit profile. Estimated amounts.
                </p>
            </div>
        </section>
    );
}
