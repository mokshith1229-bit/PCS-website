import React from 'react';
import SectionWrapper from '../components/SectionWrapper';
import Button from '../components/Button';
import { Bug, Droplets, Bird, Rat, Home, Utensils, Building, Warehouse } from 'lucide-react';

const TrustedSolutions = () => {
    const pests = [
        { icon: <Bug className="w-8 h-8" />, name: 'Ants' },
        { icon: <Bug className="w-8 h-8" />, name: 'Cockroach' },
        { icon: <Droplets className="w-8 h-8" />, name: 'Mosquito' },
        { icon: <Bird className="w-8 h-8" />, name: 'Birds' },
        { icon: <Rat className="w-8 h-8" />, name: 'Rodents' },
        { icon: <Bug className="w-8 h-8" />, name: 'Termites' },
        { icon: <Bug className="w-8 h-8" />, name: 'Bed Bugs' },
        { icon: <Bug className="w-8 h-8" />, name: 'Flies' }
    ];

    const services = [
        { icon: <Home className="w-8 h-8" />, name: 'Home' },
        { icon: <Utensils className="w-8 h-8" />, name: 'Restaurant' },
        { icon: <Building className="w-8 h-8" />, name: 'Commercial' },
        { icon: <Warehouse className="w-8 h-8" />, name: 'Warehouse' }
    ];

    return (
        <SectionWrapper id="trusted-solutions" background="white">
            <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                    Trusted Pest Control Solutions Since 1968
                </h2>
                <p className="text-gray-700 max-w-3xl mx-auto">
                    Over 5 decades of excellence in pest management. We protect homes and businesses from all types of pests.
                </p>
            </div>

            {/* Pest Icons Grid */}
            <div className="grid grid-cols-4 md:grid-cols-8 gap-4 mb-8 max-w-5xl mx-auto">
                {pests.map((pest, index) => (
                    <div key={index} className="flex flex-col items-center p-4 bg-white rounded-lg border-2 border-gray-200 hover:border-primary-600 hover:shadow-lg transition-all cursor-pointer group">
                        <div className="text-danger-600 group-hover:text-primary-600 transition-colors mb-2">
                            {pest.icon}
                        </div>
                        <span className="text-xs font-semibold text-gray-700 text-center">
                            {pest.name}
                        </span>
                    </div>
                ))}
            </div>

            {/* Service Icons */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8 max-w-3xl mx-auto">
                {services.map((service, index) => (
                    <div key={index} className="flex flex-col items-center p-6 bg-primary-50 rounded-lg hover:bg-primary-100 transition-colors cursor-pointer">
                        <div className="text-primary-600 mb-2">
                            {service.icon}
                        </div>
                        <span className="text-sm font-semibold text-gray-900">
                            {service.name}
                        </span>
                    </div>
                ))}
            </div>

            <div className="text-center">
                <Button variant="primary" size="lg" href="#services">
                    Know All Pest Control Services
                </Button>
            </div>
        </SectionWrapper>
    );
};

export default TrustedSolutions;
