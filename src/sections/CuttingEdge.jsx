import React from 'react';
import SectionWrapper from '../components/SectionWrapper';
import Button from '../components/Button';

const CuttingEdge = () => {
    const services = [
        {
            image: '/cutting-edge-termite-2.png',
            title: 'Anti-Termite Treatment',
            description: 'Pre-Construction',
            features: [
                'Soil treatment before foundation',
                'Chemical barrier creation',
                'Long-term termite prevention',
                'ISI-approved chemicals',
                'Cost-effective & durable protection',
                'Warranty support'
            ]
        },
        {
            image: '/cutting-edge-post-construction.jpg',
            title: 'Post-Construction',
            description: 'Eliminates existing termites and protects your property with advanced drill & inject treatment.',
            features: [
                'Odorless & safe chemicals',
                'Drill & inject treatments',
                'Targeted colony elimination',
                'Minimal disturbance',
                'Health hazard elimination',
                'Warranty available'
            ]
        },
        {
            image: '/fly-management.png',
            title: 'Integrated Facility',
            description: 'Complete facility management solutions for commercial and industrial properties.',
            features: [
                'Comprehensive facility audits',
                'Integrated pest management',
                'Hygiene and sanitation services',
                'Compliance documentation',
                'Regular monitoring schedules',
                'Customized service packages'
            ]
        }
    ];

    return (
        <SectionWrapper id="cutting-edge" background="light">
            <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                    Cutting-Edge Pest Management
                </h2>
                <p className="text-gray-700 max-w-3xl mx-auto">
                    Comprehensive pest control solutions tailored to your specific needs with cutting-edge technology and expert service.
                </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
                {services.map((service, index) => (
                    <div key={index} className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow flex flex-col">
                        <div className="h-48 overflow-hidden">
                            <img
                                src={service.image}
                                alt={service.title}
                                className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                            />
                        </div>
                        <div className="p-6 flex flex-col flex-grow">
                            <h3 className="text-xl font-bold text-gray-900 mb-3">
                                {service.title}
                            </h3>
                            <p className="text-gray-700 mb-4 text-sm">
                                {service.description}
                            </p>
                            <ul className="space-y-2 mb-6 flex-grow">
                                {service.features.map((feature, idx) => (
                                    <li key={idx} className="flex items-start gap-2 text-sm text-gray-700">
                                        <span className="text-accent-600 mt-1">✓</span>
                                        <span>{feature}</span>
                                    </li>
                                ))}
                            </ul>
                            <Button variant="outline" size="sm" href="#contact" className="w-full mt-auto">
                                Book Now
                            </Button>
                        </div>
                    </div>
                ))}
            </div>
        </SectionWrapper>
    );
};

export default CuttingEdge;
