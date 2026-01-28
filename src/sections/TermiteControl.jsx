import React from 'react';
import SectionWrapper from '../components/SectionWrapper';
import Card from '../components/Card';
import { Home, Building2, Shield } from 'lucide-react';

const TermiteControl = () => {
    const services = [
        {
            icon: <Building2 className="w-12 h-12" />,
            title: 'Pre-Construction Anti-Termite Treatment',
            description: 'Comprehensive soil treatment before construction begins. Protect your property from the foundation up with our proven pre-construction termite barrier system.',
        },
        {
            icon: <Home className="w-12 h-12" />,
            title: 'Post-Construction Anti-Termite Treatment',
            description: 'Advanced treatment methods for existing structures. Our specialized techniques eliminate termite colonies and prevent future infestations in completed buildings.',
        },
        {
            icon: <Shield className="w-12 h-12" />,
            title: 'Unique Methodologies',
            description: 'Integrated Termite Elimination methods combining chemical barriers, baiting systems, and regular monitoring for long-term protection and peace of mind.',
        },
    ];

    return (
        <SectionWrapper background="gray" id="termite-control">
            <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                    Termite Control Specialization
                </h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                    Comprehensive termite protection solutions for every stage of construction
                </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
                {services.map((service, index) => (
                    <Card
                        key={index}
                        icon={service.icon}
                        title={service.title}
                        description={service.description}
                        className="h-full"
                    />
                ))}
            </div>

            <div className="mt-12 bg-primary-900 text-white rounded-2xl p-8 text-center">
                <h3 className="text-2xl font-bold mb-3">Long-Term Protection Guaranteed</h3>
                <p className="text-white/90 max-w-3xl mx-auto">
                    Our termite control treatments are designed to provide lasting protection for your property.
                    We use industry-leading techniques and materials to ensure your investment is safe for years to come.
                </p>
            </div>
        </SectionWrapper>
    );
};

export default TermiteControl;
