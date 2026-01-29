import React from 'react';
import SectionWrapper from '../components/SectionWrapper';
import Button from '../components/Button';

const BookService = () => {
    return (
        <SectionWrapper id="book-service" background="light">
            <div className="grid md:grid-cols-2 gap-8 items-center max-w-6xl mx-auto">
                {/* Left Side - Image */}
                <div className="order-2 md:order-1">
                    <div className="rounded-xl overflow-hidden shadow-xl">
                        <img
                            src="/ChatGPT Image Jan 29, 2026, 11_35_44 AM.png"
                            alt="Book Your Service Today"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>

                {/* Right Side - Content */}
                <div className="order-1 md:order-2">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        Book Your Service Today!
                    </h2>
                    <p className="text-gray-700 mb-6 leading-relaxed">
                        Don't let pests take over your home or business. Our expert technicians are ready to provide
                        fast, effective, and safe pest control solutions. Get a free inspection and customized treatment
                        plan tailored to your specific needs.
                    </p>
                    <ul className="space-y-3 mb-8">
                        <li className="flex items-start gap-2 text-gray-700">
                            <span className="text-accent-600 font-bold mt-1">✓</span>
                            <span>Same-day service available</span>
                        </li>
                        <li className="flex items-start gap-2 text-gray-700">
                            <span className="text-accent-600 font-bold mt-1">✓</span>
                            <span>Free inspection and quote</span>
                        </li>
                        <li className="flex items-start gap-2 text-gray-700">
                            <span className="text-accent-600 font-bold mt-1">✓</span>
                            <span>Certified and experienced technicians</span>
                        </li>
                        <li className="flex items-start gap-2 text-gray-700">
                            <span className="text-accent-600 font-bold mt-1">✓</span>
                            <span>5-year warranty on treatments</span>
                        </li>
                    </ul>
                    <Button variant="primary" size="lg" href="#contact">
                        Book Now
                    </Button>
                </div>
            </div>
        </SectionWrapper>
    );
};

export default BookService;
