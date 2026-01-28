import React from 'react';
import SectionWrapper from '../components/SectionWrapper';
import { Target, Shield, Clock, CheckCircle, TrendingUp, Leaf } from 'lucide-react';
import Button from '../components/Button';

const TermiteBaiting = () => {
    const features = [
        {
            icon: <Target className="w-8 h-8" />,
            title: 'Targeted Elimination',
            description: 'Baiting systems target the entire termite colony, not just individual termites. The bait is carried back to the nest, eliminating the queen and colony.'
        },
        {
            icon: <Leaf className="w-8 h-8" />,
            title: 'Environmentally Friendly',
            description: 'Uses minimal chemicals compared to liquid treatments. Bait stations are strategically placed only where needed, reducing environmental impact.'
        },
        {
            icon: <Shield className="w-8 h-8" />,
            title: 'Non-Invasive Installation',
            description: 'No drilling or trenching required around your property. Bait stations are discreetly installed in the ground with minimal disruption.'
        },
        {
            icon: <Clock className="w-8 h-8" />,
            title: 'Long-Term Protection',
            description: 'Provides ongoing monitoring and protection. Stations are checked regularly and replenished as needed to ensure continuous defense.'
        },
        {
            icon: <TrendingUp className="w-8 h-8" />,
            title: 'Proven Effectiveness',
            description: 'Scientifically proven to eliminate entire termite colonies. Results typically visible within 3-6 months of installation.'
        },
        {
            icon: <CheckCircle className="w-8 h-8" />,
            title: 'Safe for Family & Pets',
            description: 'Bait stations are tamper-resistant and safe around children and pets. Active ingredient only affects termites, not mammals.'
        }
    ];

    const process = [
        {
            step: '1',
            title: 'Inspection & Assessment',
            description: 'Our experts conduct a thorough inspection to identify termite activity and determine optimal bait station locations.'
        },
        {
            step: '2',
            title: 'Strategic Installation',
            description: 'Bait stations are installed around the perimeter of your property at 10-15 feet intervals, creating a protective barrier.'
        },
        {
            step: '3',
            title: 'Regular Monitoring',
            description: 'Stations are inspected every 3 months to check for termite activity and replenish bait as needed.'
        },
        {
            step: '4',
            title: 'Colony Elimination',
            description: 'Once termites consume the bait, they carry it back to the colony, eliminating the entire population including the queen.'
        }
    ];

    return (
        <SectionWrapper id="termite-baiting" background="white">
            <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                    Termite Baiting Systems
                </h2>
                <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                    Advanced termite baiting technology that eliminates entire colonies while being safe for your family and the environment.
                </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                {features.map((feature, index) => (
                    <div
                        key={index}
                        className="bg-gradient-to-br from-primary-50 to-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-primary-100"
                    >
                        <div className="text-primary-600 mb-4">
                            {feature.icon}
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-3">
                            {feature.title}
                        </h3>
                        <p className="text-gray-700 leading-relaxed">
                            {feature.description}
                        </p>
                    </div>
                ))}
            </div>

            <div className="mb-16">
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">
                    How It Works
                </h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {process.map((item, index) => (
                        <div key={index} className="relative">
                            <div className="bg-white p-6 rounded-xl shadow-md border-2 border-accent-500 hover:border-accent-600 transition-colors">
                                <div className="w-12 h-12 bg-accent-600 text-white rounded-full flex items-center justify-center text-xl font-bold mb-4">
                                    {item.step}
                                </div>
                                <h4 className="text-lg font-bold text-gray-900 mb-2">
                                    {item.title}
                                </h4>
                                <p className="text-gray-700 text-sm leading-relaxed">
                                    {item.description}
                                </p>
                            </div>
                            {index < process.length - 1 && (
                                <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-accent-500"></div>
                            )}
                        </div>
                    ))}
                </div>
            </div>

            <div className="bg-primary-50 border-l-4 border-primary-600 p-6 rounded-r-lg mb-8">
                <h3 className="text-xl font-bold text-primary-900 mb-2">
                    Why Choose PCS Baiting Systems?
                </h3>
                <p className="text-gray-800 mb-4">
                    PCS uses industry-leading baiting technology with proven results. Our systems are backed by 15+ years of experience and come with comprehensive monitoring and maintenance plans.
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                    <li>Premium bait stations with tamper-resistant design</li>
                    <li>Quarterly monitoring and maintenance included</li>
                    <li>Detailed activity reports after each inspection</li>
                    <li>5-year warranty on colony elimination</li>
                </ul>
            </div>

            <div className="text-center">
                <Button variant="primary" size="lg" href="#contact">
                    Get Baiting System Quote
                </Button>
            </div>
        </SectionWrapper>
    );
};

export default TermiteBaiting;
