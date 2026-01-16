import React from 'react';
import { Facebook, Linkedin, Twitter, Instagram, Youtube } from 'lucide-react';
import './Footer.css';

export default function Footer(): React.ReactElement {
    return (
        <footer className="footer">
            <div className="container footer-content">
                <div className="footer-top">
                    <div className="disclaimer-text">
                        <p>
                            The operator of this website is not a lender, or a representative, broker, agent of any lenders and we do not make any loan or credit decisions. This website does not constitute an offer or solicitation to lend. The role of this website is to submit the information you provide to a lender who has the whole rights of reviewing and approving for a loan. By submitting your information, you agree to allow participating lenders to verify your information and check your credit. Not all lenders can provide the maximum amount advertised. The time of cash transfer may vary between lenders and may depend on your individual financial institution. In some circumstances faxing may be required. Not all lenders from our system operate in all US states, and the states serviced by this website may change from time to time and without notice. If you have any questions about your loan, please contact your lender directly. Short term cash loans are meant to address immediate cash needs and are not a long-term solution for financial problems. Residents of some states may not be eligible for a short term cash loan based upon lender requirements.
                        </p>
                    </div>

                    <div className="footer-brand">
                        <div className="footer-logo-section">
                            <div className="footer-logo">
                                <img src="/assets/logo.png" alt="QuicklyFincal" style={{ height: '50px' }} />
                            </div>
                        </div>

                        <div className="footer-right-section">
                            <div className="social-icons-container">
                                <a href="#" className="social-icon"><Facebook size={30} /></a>
                                <a href="#" className="social-icon"><Linkedin size={30} /></a>
                                <a href="#" className="social-icon"><Twitter size={30} /></a>
                                <a href="#" className="social-icon"><Instagram size={30} /></a>
                                <a href="#" className="social-icon"><Youtube size={30} /></a>
                            </div>

                            <div className="contact-info">
                                <p><strong>Email:</strong> contact@quicklyfincal.com</p>
                                <p><strong>Phone:</strong> +1 800-275-8776</p>
                                <p><strong>Address:</strong> 2803 Philadelphia Pike, Suite B #1020, Claymont, DE 19703, United States</p>
                            </div>
                        </div>
                    </div>
                </div>

                <hr className="footer-divider" />

                <div className="footer-links">
                    <div className="link-column">
                        <a href="#home">Home Page</a>
                        <a href="#contact">Contact us</a>
                        <a href="#privacy">Privacy Policy</a>
                    </div>
                    <div className="link-column">
                        <a href="#disclaimer">Disclaimer</a>
                        <a href="#blog">Blog</a>
                        <a href="#terms">Terms of Use</a>
                    </div>
                    <div className="link-column">
                        <a href="#do-not-sell">Do not sell my information</a>
                        <a href="#rates">Credit authorization agreement</a>
                        <a href="#unsubscribe">Unsubscribe</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
