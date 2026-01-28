import React from 'react';
import SectionWrapper from '../components/SectionWrapper';
import { AlertTriangle, Eye, Bug, Home, Droplets, Wind } from 'lucide-react';
import Button from '../components/Button';

const TermiteSigns = () => {
    const signs = [
        {
            icon: <Home className="w-8 h-8" />,
            title: 'Mud Tubes',
            description: 'Pencil-sized tunnels on walls, foundations, or wooden beams. Termites build these protective tubes to travel between their colony and food sources.'
        },
        {
            icon: <AlertTriangle className="w-8 h-8" />,
            title: 'Hollow-Sounding Wood',
            description: 'Tap on wooden structures - if they sound hollow, termites may have eaten away the interior. Wood may also appear damaged or blistered.'
        },
        {
            icon: <Wind className="w-8 h-8" />,
            title: 'Discarded Wings',
            description: 'Piles of wings near windows, doors, or other entry points. Swarming termites shed their wings after finding a new location to establish a colony.'
        },
        {
            icon: <Droplets className="w-8 h-8" />,
            title: 'Frass (Termite Droppings)',
            description: 'Small, wood-colored pellets near wooden structures. Drywood termites push their droppings out of small holes in the wood.'
        },
        {
            icon: <Bug className="w-8 h-8" />,
            title: 'Swarmers',
            description: 'Flying termites (swarmers) often appear in spring. They look similar to flying ants but have straight antennae and equal-length wings.'
        },
        {
            icon: <Eye className="w-8 h-8" />,
            title: 'Tight-Fitting Doors & Windows',
            description: 'Difficulty opening doors or windows may indicate termite damage. Termites produce moisture when eating wood, causing warping.'
        }
    ];

    return (
        <SectionWrapper id="termite-signs" background="light">
            <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                    Signs of Termite Infestation
                </h2>
                <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                    Early detection is crucial for preventing extensive termite damage. Learn to recognize these warning signs and protect your property.
                </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                {signs.map((sign, index) => (
                    <div
                        key={index}
                        className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 border border-gray-100"
                    >
                        <div className="text-primary-600 mb-4">
                            {sign.icon}
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-3">
                            {sign.title}
                        </h3>
                        <p className="text-gray-700 leading-relaxed">
                            {sign.description}
                        </p>
                    </div>
                ))}
            </div>

            <div className="bg-danger-50 border-l-4 border-danger-600 p-6 rounded-r-lg mb-8">
                <h3 className="text-xl font-bold text-danger-900 mb-2">
                    When to Call Professionals
                </h3>
                <p className="text-gray-800 mb-4">
                    If you notice any of these signs, contact PCS immediately. Termites cause billions in property damage annually, and early intervention is essential to minimize costs and protect your investment.
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                    <li>Visible mud tubes or termite swarmers</li>
                    <li>Hollow-sounding wood or structural damage</li>
                    <li>Unexplained piles of wings or frass</li>
                    <li>Annual inspections for prevention</li>
                </ul>
            </div>

            <div className="text-center">
                <Button variant="primary" size="lg" href="#contact">
                    Schedule Free Inspection
                </Button>
            </div>
        </SectionWrapper>
    );
};

export default TermiteSigns;
