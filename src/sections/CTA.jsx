import React from 'react';
import SectionWrapper from '../components/SectionWrapper';
import Button from '../components/Button';
import { Phone, MessageCircle, ClipboardCheck } from 'lucide-react';

const CTA = () => {
    return (
        <SectionWrapper background="gradient" className="text-white" id="contact">
            <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                    Ready to Protect Your Property?
                </h2>
                <p className="text-lg md:text-xl text-white/90 mb-10 max-w-2xl mx-auto">
                    Get in touch with us today for a free inspection and customized pest control solution
                </p>

                <div className="grid sm:grid-cols-3 gap-4 mb-8">
                    <Button
                        variant="white"
                        size="lg"
                        href="tel:+919876543210"
                        className="w-full"
                    >
                        <Phone className="w-5 h-5 mr-2" />
                        Call Now
                    </Button>
                    <Button
                        variant="white"
                        size="lg"
                        href="https://wa.me/919876543210"
                        className="w-full"
                    >
                        <MessageCircle className="w-5 h-5 mr-2" />
                        WhatsApp Us
                    </Button>
                    <Button
                        variant="outline"
                        size="lg"
                        href="#contact"
                        className="w-full border-white text-white hover:bg-white hover:text-primary-900"
                    >
                        <ClipboardCheck className="w-5 h-5 mr-2" />
                        Free Inspection
                    </Button>
                </div>

                <p className="text-white/80 text-sm">
                    Available 7 days a week • Same-day service available
                </p>
            </div>
        </SectionWrapper>
    );
};

export default CTA;
