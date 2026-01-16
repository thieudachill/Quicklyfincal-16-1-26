import React from 'react';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import HowItWorks from './components/HowItWorks/HowItWorks';
import WhyChooseUs from './components/WhyChooseUs/WhyChooseUs';
import CTASection from './components/CTASection/CTASection';
import FAQ from './components/FAQ/FAQ';
import LoanExamples from './components/LoanExamples/LoanExamples';
import Footer from './components/Footer/Footer';

function App(): React.ReactElement {
  return (
    <div className="app-container">
      <Header />
      <main>
        <Hero />
        <HowItWorks />
        <WhyChooseUs />
        <CTASection />
        <FAQ />
        <LoanExamples />
      </main>
      <Footer />
    </div>
  )
}

export default App
