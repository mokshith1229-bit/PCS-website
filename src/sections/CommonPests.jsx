import React from 'react';
import SectionWrapper from '../components/SectionWrapper';
import Button from '../components/Button';

const CommonPests = () => {
    const pests = [
        {
            image: '/termite-pest.png',
            title: 'Termites',
            description: 'Silent destroyers that can cause extensive structural damage to your property. Our termite control solutions include baiting systems, liquid treatments, and comprehensive inspections to protect your investment.',
            link: '#termites'
        },
        {
            image: '/cockroach-pest.png',
            title: 'Cockroaches',
            description: 'Get rid of cockroaches with targeted gel treatments and comprehensive pest management. Our eco-friendly solutions eliminate infestations while keeping your family safe from health hazards.',
            link: '#cockroaches'
        },
        {
            image: '/bedbug-pest.png',
            title: 'Bed Bugs',
            description: 'Detect bed bugs and eliminate them with our advanced heat treatment and chemical solutions. We provide thorough inspections and guaranteed results for complete peace of mind.',
            link: '#bedbugs'
        }
    ];

    return (
        <SectionWrapper id="common-pests" background="white">
            <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                    Common Pests In India
                </h2>
                <p className="text-gray-700 max-w-3xl mx-auto">
                    Discover the most common pests in India and how to protect your home. Here are the top three household pests that require professional pest control services.
                </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
                {pests.map((pest, index) => (
                    <div key={index} className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow flex flex-col">
                        <div className="h-56 overflow-hidden">
                            <img
                                src={pest.image}
                                alt={pest.title}
                                className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                            />
                        </div>
                        <div className="p-6 flex flex-col flex-grow">
                            <h3 className="text-2xl font-bold text-gray-900 mb-3">
                                {pest.title}
                            </h3>
                            <p className="text-gray-700 mb-4 leading-relaxed flex-grow">
                                {pest.description}
                            </p>
                            <Button variant="primary" size="sm" href={pest.link} className="mt-auto">
                                Read More
                            </Button>
                        </div>
                    </div>
                ))}
            </div>
        </SectionWrapper>
    );
};

export default CommonPests;
