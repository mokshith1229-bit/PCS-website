import React from 'react';
import Header from './components/Header';
import Hero from './sections/Hero';
import About from './sections/About';
import PromoBanner from './sections/PromoBanner';
import VideoSection from './sections/VideoSection';
import CuttingEdge from './sections/CuttingEdge';
import ContactForm from './sections/ContactForm';
import EffectiveSolutions from './sections/EffectiveSolutions';
import TrustedSolutions from './sections/TrustedSolutions';
import PestServices from './sections/PestServices';
import CommonPests from './sections/CommonPests';
import TrendingPests from './sections/TrendingPests';
import FAQSection from './sections/FAQSection';
import BookService from './sections/BookService';
import LatestArticles from './sections/LatestArticles';
import LocalBranches from './sections/LocalBranches';
import Footer from './sections/Footer';
import WhatsAppWidget from './components/WhatsAppWidget';
import './index.css';

function App() {
    return (
        <div className="min-h-screen">
            <Header />
            <Hero />
            <About />
            <PromoBanner />
            <VideoSection />
            <CuttingEdge />
            <ContactForm />
            <EffectiveSolutions />
            <TrustedSolutions />
            <PestServices />
            <CommonPests />
            <TrendingPests />
            <FAQSection />
            <BookService />
            <LatestArticles />
            <LocalBranches />
            <Footer />
            <WhatsAppWidget />
        </div>
    );
}

export default App;
