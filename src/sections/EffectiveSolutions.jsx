import React from 'react';
import SectionWrapper from '../components/SectionWrapper';
import Button from '../components/Button';

const EffectiveSolutions = () => {
    const solutions = [
        {
            image: '/effective-bedbug-treatment.jpg',
            title: 'Bed Bug Treatment',
            features: [
                'Detailed infestation inspection',
                'Heat + chemical treatment combo',
                'Mattress & furniture coverage',
                'Egg and nymph elimination',
                'Safe for families & pets',
                'Follow-up visits included'
            ],
            link: '#contact'
        },
        {
            image: '/effective-cockroach-treatment.png',
            title: 'Cockroach Control Treatment',
            features: [
                'Gel + spray based control',
                'Kitchen & drain targeting',
                'Hidden nest elimination',
                'Long-lasting protection',
                'Food-safe chemicals',
                'Odorless treatment'
            ],
            link: '#contact'
        },
        {
            image: '/effective-mosquito-fogging.jpg',
            title: 'Mosquito Fogging',
            features: [
                'Outdoor & indoor fogging',
                'Instant mosquito reduction',
                'Ideal for societies & events',
                'Covers gardens & open areas',
                'Reduces dengue & malaria risk',
                'Quick-dry solution'
            ],
            link: '#contact'
        },
        {
            image: '/effective-anti-larval.jpg',
            title: 'Anti-Larval Treatment',
            features: [
                'Water tank & stagnant water treatment',
                'Stops mosquito breeding',
                'Eco-friendly chemicals',
                'Safe for drinking water tanks',
                'Long-term control',
                'Preventive solution'
            ],
            link: '#contact'
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
                            <ul className="space-y-1.5 mb-6 flex-grow">
                                {solution.features.map((feature, idx) => (
                                    <li key={idx} className="flex items-start gap-2 text-sm text-gray-700">
                                        <span className="text-primary-600 font-bold mt-0.5">•</span>
                                        <span>{feature}</span>
                                    </li>
                                ))}
                            </ul>
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
