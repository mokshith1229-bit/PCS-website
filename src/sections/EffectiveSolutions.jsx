import React from 'react';
import SectionWrapper from '../components/SectionWrapper';
import Button from '../components/Button';

const EffectiveSolutions = () => {
    const solutions = [
        {
            image: '/home-pest.png',
            title: 'Home Pest Control',
            description: 'Protect your family and home from unwanted pests with our comprehensive residential pest control services. Safe, effective, and guaranteed.',
            link: '#home-pest'
        },
        {
            image: '/commercial-pest.png',
            title: 'Commercial Pest Control',
            description: 'Keep your business pest-free and compliant with health regulations. Customized solutions for offices, restaurants, and retail spaces.',
            link: '#commercial-pest'
        },
        {
            image: '/pest-inspection.png',
            title: 'Industry (Such AS) at Cockroach Service',
            description: 'Specialized industrial pest management for warehouses, factories, and manufacturing facilities. Comprehensive cockroach elimination programs.',
            link: '#industry-pest'
        },
        {
            image: '/termite-pest.png',
            title: 'Termite (Baiting System)',
            description: 'Advanced termite baiting systems that eliminate entire colonies. Long-term protection with eco-friendly solutions and warranties.',
            link: '#termite-baiting'
        }
    ];

    return (
        <SectionWrapper id="effective-solutions" background="light">
            <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                    Effective Pest Solutions For Your Home And Business
                </h2>
                <p className="text-gray-700 max-w-3xl mx-auto">
                    With over 15 years of experience, we provide tailored pest control solutions for every environment.
                    Our certified experts use advanced techniques to ensure your property stays pest-free.
                </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {solutions.map((solution, index) => (
                    <div key={index} className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all group flex flex-col">
                        <div className="h-48 overflow-hidden">
                            <img
                                src={solution.image}
                                alt={solution.title}
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                            />
                        </div>
                        <div className="p-6 flex flex-col flex-grow">
                            <h3 className="text-lg font-bold text-gray-900 mb-3">
                                {solution.title}
                            </h3>
                            <p className="text-gray-700 text-sm mb-4 leading-relaxed flex-grow">
                                {solution.description}
                            </p>
                            <Button variant="primary" size="sm" href={solution.link} className="w-full mt-auto">
                                Book Now
                            </Button>
                        </div>
                    </div>
                ))}
            </div>
        </SectionWrapper>
    );
};

export default EffectiveSolutions;
