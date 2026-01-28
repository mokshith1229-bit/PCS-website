import React from 'react';
import Hero from '../sections/Hero';
import About from '../sections/About';
import ClientTicker from '../sections/ClientTicker';
import VideoSection from '../sections/VideoSection';
import CuttingEdge from '../sections/CuttingEdge';
import ContactForm from '../sections/ContactForm';
import EffectiveSolutions from '../sections/EffectiveSolutions';
import TrustedSolutions from '../sections/TrustedSolutions';
import PestServices from '../sections/PestServices';
import CommonPests from '../sections/CommonPests';
import TrendingPests from '../sections/TrendingPests';
import FAQSection from '../sections/FAQSection';
import BookService from '../sections/BookService';

import LocalBranches from '../sections/LocalBranches';

const Home = () => {
    return (
        <main>
            <Hero />
            <ClientTicker />
            <About />
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

            <LocalBranches />
        </main>
    );
};

export default Home;
