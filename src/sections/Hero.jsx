import React from 'react';
import Button from '../components/Button';
import { MessageCircle } from 'lucide-react';

const Hero = () => {
    return (
        <div className="relative bg-secondary-800 text-white pt-48 pb-20 md:pt-56 md:pb-32 overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <img
                    src="/termite-hero.png"
                    alt="Pest Control Services"
                    className="w-full h-full object-cover opacity-100"
                />
            </div>

            {/* Background overlay */}
            {/* Subtle gradient overlay for text readability */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/30 to-transparent z-0"></div>

            <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl relative z-10">
                <div className="max-w-3xl mx-auto text-center">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                        Your Trusted Pest Control Experts – PCS
                    </h1>
                    <p className="text-lg md:text-xl mb-8 text-gray-200 leading-relaxed">
                        PCS offers effective, reliable, and innovative pest control services for homes and businesses in Visakhapatnam, Andhra Pradesh.
                    </p>

                    {/* CTAs */}
                    <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
                        <a
                            href="tel:09885786396"
                            className="text-2xl md:text-3xl font-bold text-white hover:text-accent-500 transition-colors"
                        >
                            098857 86396
                        </a>
                        <a
                            href="https://wa.me/919885786396"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-primary-700 hover:bg-primary-800 text-white font-semibold px-8 py-3 rounded-lg flex items-center gap-2 transition-all hover:shadow-lg"
                        >
                            <MessageCircle className="w-5 h-5" />
                            WhatsApp Us
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
