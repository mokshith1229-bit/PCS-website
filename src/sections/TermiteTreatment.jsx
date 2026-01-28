import React from 'react';
import SectionWrapper from '../components/SectionWrapper';
import { Building, Home, Droplets, Shield, FileCheck, Clock } from 'lucide-react';
import Button from '../components/Button';

const TermiteTreatment = () => {
    const preConstruction = [
        {
            icon: <Building className="w-8 h-8" />,
            title: 'Soil Treatment',
            description: 'Apply termiticide to soil before foundation is laid, creating a chemical barrier that prevents termite entry from the ground.'
        },
        {
            icon: <Shield className="w-8 h-8" />,
            title: 'Foundation Protection',
            description: 'Treat foundation trenches, plinth areas, and all soil-to-structure contact points with long-lasting termiticide.'
        },
        {
            icon: <FileCheck className="w-8 h-8" />,
            title: 'Compliance Certification',
            description: 'Provide documentation and certification for building compliance and warranty requirements.'
        }
    ];

    const postConstruction = [
        {
            icon: <Droplets className="w-8 h-8" />,
            title: 'Liquid Barrier Treatment',
            description: 'Drill and inject termiticide around the perimeter and under the foundation to create a protective chemical barrier.'
        },
        {
            icon: <Home className="w-8 h-8" />,
            title: 'Localized Wood Treatment',
            description: 'Direct treatment of infested wood and structural timbers with specialized termiticides and wood preservatives.'
        },
        {
            icon: <Clock className="w-8 h-8" />,
            title: 'Baiting Systems',
            description: 'Install monitoring and baiting stations around the property for ongoing protection and colony elimination.'
        }
    ];

    const treatmentTypes = [
        {
            title: 'Chemical Barrier Treatment',
            description: 'Long-lasting liquid termiticide creates an invisible barrier around your property. Effective for 5-7 years.',
            features: ['Immediate protection', 'Proven effectiveness', 'Long-term results', '5-year warranty']
        },
        {
            title: 'Termite Baiting Systems',
            description: 'Eco-friendly stations eliminate entire colonies. Ideal for ongoing monitoring and prevention.',
            features: ['Environmentally safe', 'Colony elimination', 'Quarterly monitoring', 'Non-invasive']
        },
        {
            title: 'Wood Treatment',
            description: 'Direct application to wooden structures and furniture. Protects against drywood and dampwood termites.',
            features: ['Targeted protection', 'Safe for interiors', 'Prevents re-infestation', 'Quick application']
        }
    ];

    return (
        <SectionWrapper id="termite-treatment" background="white">
            <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                    Termite Treatment Solutions
                </h2>
                <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                    Comprehensive termite treatment for pre-construction and post-construction properties, backed by 15+ years of expertise and industry-leading warranties.
                </p>
            </div>

            {/* Pre-Construction Treatment */}
            <div className="mb-16">
                <div className="text-center mb-8">
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
                        Pre-Construction Treatment
                    </h3>
                    <p className="text-gray-700 max-w-2xl mx-auto">
                        Protect your new construction from day one with comprehensive soil and foundation treatment.
                    </p>
                </div>
                <div className="grid md:grid-cols-3 gap-8">
                    {preConstruction.map((item, index) => (
                        <div
                            key={index}
                            className="bg-gradient-to-br from-primary-50 to-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow border border-primary-100"
                        >
                            <div className="text-primary-600 mb-4">
                                {item.icon}
                            </div>
                            <h4 className="text-xl font-bold text-gray-900 mb-3">
                                {item.title}
                            </h4>
                            <p className="text-gray-700 leading-relaxed">
                                {item.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Post-Construction Treatment */}
            <div className="mb-16">
                <div className="text-center mb-8">
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
                        Post-Construction Treatment
                    </h3>
                    <p className="text-gray-700 max-w-2xl mx-auto">
                        Eliminate existing infestations and protect your property with proven treatment methods.
                    </p>
                </div>
                <div className="grid md:grid-cols-3 gap-8">
                    {postConstruction.map((item, index) => (
                        <div
                            key={index}
                            className="bg-gradient-to-br from-accent-50 to-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow border border-accent-100"
                        >
                            <div className="text-accent-600 mb-4">
                                {item.icon}
                            </div>
                            <h4 className="text-xl font-bold text-gray-900 mb-3">
                                {item.title}
                            </h4>
                            <p className="text-gray-700 leading-relaxed">
                                {item.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Treatment Types */}
            <div className="mb-12">
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">
                    Our Treatment Methods
                </h3>
                <div className="grid md:grid-cols-3 gap-6">
                    {treatmentTypes.map((type, index) => (
                        <div
                            key={index}
                            className="bg-white p-6 rounded-xl shadow-lg border-2 border-gray-200 hover:border-primary-600 transition-colors"
                        >
                            <h4 className="text-xl font-bold text-gray-900 mb-3">
                                {type.title}
                            </h4>
                            <p className="text-gray-700 mb-4">
                                {type.description}
                            </p>
                            <ul className="space-y-2">
                                {type.features.map((feature, idx) => (
                                    <li key={idx} className="flex items-center gap-2 text-sm text-gray-700">
                                        <div className="w-1.5 h-1.5 bg-accent-600 rounded-full"></div>
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>

            {/* Warranty & Guarantee */}
            <div className="bg-primary-50 border-l-4 border-primary-600 p-8 rounded-r-lg mb-8">
                <h3 className="text-2xl font-bold text-primary-900 mb-4">
                    PCS Treatment Guarantee
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                    <div>
                        <h4 className="font-bold text-gray-900 mb-2">5-Year Warranty</h4>
                        <p className="text-gray-700 mb-4">
                            All our termite treatments come with a comprehensive 5-year warranty. If termites return during the warranty period, we'll re-treat at no additional cost.
                        </p>
                    </div>
                    <div>
                        <h4 className="font-bold text-gray-900 mb-2">What's Included</h4>
                        <ul className="list-disc list-inside text-gray-700 space-y-1 text-sm">
                            <li>Free annual inspections</li>
                            <li>Unlimited re-treatments if needed</li>
                            <li>Detailed service documentation</li>
                            <li>24/7 emergency support</li>
                            <li>Transferable warranty (with property sale)</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="bg-gradient-to-r from-secondary-800 to-secondary-700 text-white p-8 rounded-xl shadow-xl mb-8">
                <div className="text-center">
                    <h3 className="text-2xl font-bold mb-3">
                        Why Choose PCS for Termite Treatment?
                    </h3>
                    <div className="grid md:grid-cols-4 gap-6 mt-6">
                        <div>
                            <div className="text-3xl font-bold text-accent-500 mb-2">15+</div>
                            <div className="text-sm">Years Experience</div>
                        </div>
                        <div>
                            <div className="text-3xl font-bold text-accent-500 mb-2">5000+</div>
                            <div className="text-sm">Properties Protected</div>
                        </div>
                        <div>
                            <div className="text-3xl font-bold text-accent-500 mb-2">100%</div>
                            <div className="text-sm">Satisfaction Rate</div>
                        </div>
                        <div>
                            <div className="text-3xl font-bold text-accent-500 mb-2">24/7</div>
                            <div className="text-sm">Support Available</div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="text-center">
                <Button variant="primary" size="lg" href="#contact">
                    Get Treatment Quote
                </Button>
                <p className="text-gray-600 mt-4">
                    Free consultation • Same-day service available • Flexible payment plans
                </p>
            </div>
        </SectionWrapper>
    );
};

export default TermiteTreatment;
