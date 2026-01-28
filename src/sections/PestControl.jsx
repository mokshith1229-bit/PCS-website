import React from 'react';
import SectionWrapper from '../components/SectionWrapper';
import Card from '../components/Card';
import { Bug, Rat, Droplet, Fish } from 'lucide-react';

const PestControl = () => {
    const pests = [
        {
            icon: <Bug className="w-10 h-10" />,
            title: 'Ants, Bugs, Spiders',
            description: 'Complete elimination of crawling insects that invade your space'
        },
        {
            icon: <Rat className="w-10 h-10" />,
            title: 'Rodents',
            description: 'Safe and effective rodent control and prevention solutions'
        },
        {
            icon: <Droplet className="w-10 h-10" />,
            title: 'Mosquitoes & Flies',
            description: 'Protection against disease-carrying flying insects'
        },
        {
            icon: <Fish className="w-10 h-10" />,
            title: 'Silverfish',
            description: 'Targeted treatment for silverfish infestations'
        },
        {
            icon: <Bug className="w-10 h-10" />,
            title: 'Honey Bees',
            description: 'Safe removal and relocation of bee colonies'
        },
    ];

    return (
        <SectionWrapper background="white" id="pest-control">
            <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                    General Pest Control Services
                </h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                    Comprehensive protection against all common household and commercial pests
                </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                {pests.map((pest, index) => (
                    <Card
                        key={index}
                        icon={pest.icon}
                        title={pest.title}
                        description={pest.description}
                    />
                ))}
            </div>

            <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-lg mb-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Health Risks from Pests</h3>
                <p className="text-gray-700 mb-2">
                    Mosquitoes and flies spread malaria, TB, cholera, dysentery, and other diseases.
                </p>
                <p className="text-gray-700">
                    Pests cause contamination and serious health risks to you and your family.
                </p>
            </div>

            <div className="bg-primary-50 border-l-4 border-primary-900 p-6 rounded-r-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Our Treatment Benefits</h3>
                <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start gap-2">
                        <span className="text-primary-900 mt-1">✓</span>
                        <span>Effective and long-lasting results</span>
                    </li>
                    <li className="flex items-start gap-2">
                        <span className="text-primary-900 mt-1">✓</span>
                        <span>Safe for humans and pets</span>
                    </li>
                    <li className="flex items-start gap-2">
                        <span className="text-primary-900 mt-1">✓</span>
                        <span>Environmentally responsible methods</span>
                    </li>
                </ul>
            </div>
        </SectionWrapper>
    );
};

export default PestControl;
