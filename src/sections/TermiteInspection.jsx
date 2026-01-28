import React from 'react';
import SectionWrapper from '../components/SectionWrapper';
import { Search, ClipboardCheck, Camera, FileText, Award, Calendar } from 'lucide-react';
import Button from '../components/Button';

const TermiteInspection = () => {
    const inspectionAreas = [
        {
            icon: <Search className="w-8 h-8" />,
            title: 'Foundation & Basement',
            description: 'Thorough examination of foundation walls, basement areas, and crawl spaces for mud tubes, moisture, and termite activity.'
        },
        {
            icon: <ClipboardCheck className="w-8 h-8" />,
            title: 'Wooden Structures',
            description: 'Inspection of all wooden beams, joists, floor supports, and structural timbers for signs of damage or infestation.'
        },
        {
            icon: <Camera className="w-8 h-8" />,
            title: 'Attic & Roof',
            description: 'Check attic spaces, roof timbers, and eaves for drywood termite activity and moisture conditions that attract termites.'
        },
        {
            icon: <FileText className="w-8 h-8" />,
            title: 'Exterior Perimeter',
            description: 'Examination of exterior walls, door frames, window frames, and any wood-to-soil contact points around the property.'
        },
        {
            icon: <Award className="w-8 h-8" />,
            title: 'Plumbing & Moisture',
            description: 'Identify moisture issues, leaky pipes, and areas with poor ventilation that create favorable conditions for termites.'
        },
        {
            icon: <Calendar className="w-8 h-8" />,
            title: 'Previous Treatment Areas',
            description: 'Review and assess effectiveness of any previous termite treatments and identify areas requiring additional attention.'
        }
    ];

    const process = [
        'Schedule a convenient inspection time',
        'Certified inspector arrives with professional equipment',
        'Comprehensive property examination (60-90 minutes)',
        'Detailed findings documented with photos',
        'Receive written report with recommendations',
        'Free consultation on treatment options'
    ];

    return (
        <SectionWrapper id="termite-inspection" background="light">
            <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                    Professional Termite Inspection
                </h2>
                <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                    Comprehensive termite inspections by certified professionals using advanced detection technology to protect your property investment.
                </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 mb-16">
                <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-6">
                        What We Inspect
                    </h3>
                    <div className="space-y-6">
                        {inspectionAreas.map((area, index) => (
                            <div key={index} className="flex gap-4">
                                <div className="text-primary-600 flex-shrink-0">
                                    {area.icon}
                                </div>
                                <div>
                                    <h4 className="text-lg font-bold text-gray-900 mb-2">
                                        {area.title}
                                    </h4>
                                    <p className="text-gray-700">
                                        {area.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-6">
                        Inspection Process
                    </h3>
                    <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200">
                        <div className="space-y-4">
                            {process.map((step, index) => (
                                <div key={index} className="flex items-start gap-3">
                                    <div className="w-8 h-8 bg-accent-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                                        {index + 1}
                                    </div>
                                    <p className="text-gray-700 pt-1">
                                        {step}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="mt-8 bg-gradient-to-br from-primary-600 to-primary-700 text-white p-6 rounded-xl shadow-lg">
                        <h4 className="text-xl font-bold mb-2">
                            Free Inspection Offer
                        </h4>
                        <p className="mb-4">
                            Get a comprehensive termite inspection at no cost. Our certified inspectors will assess your property and provide a detailed report with recommendations.
                        </p>
                        <p className="text-sm opacity-90">
                            ✓ No obligation • ✓ Same-day scheduling available • ✓ Detailed written report
                        </p>
                    </div>
                </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md border border-gray-200 mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Why Regular Inspections Matter
                </h3>
                <div className="grid md:grid-cols-3 gap-6">
                    <div>
                        <h4 className="font-bold text-primary-600 mb-2">Early Detection</h4>
                        <p className="text-gray-700 text-sm">
                            Catch termite problems before they cause extensive damage, saving thousands in repair costs.
                        </p>
                    </div>
                    <div>
                        <h4 className="font-bold text-primary-600 mb-2">Property Value</h4>
                        <p className="text-gray-700 text-sm">
                            Maintain your property's value with documented proof of regular professional inspections.
                        </p>
                    </div>
                    <div>
                        <h4 className="font-bold text-primary-600 mb-2">Peace of Mind</h4>
                        <p className="text-gray-700 text-sm">
                            Sleep better knowing your home is protected by certified termite control professionals.
                        </p>
                    </div>
                </div>
            </div>

            <div className="text-center">
                <Button variant="primary" size="lg" href="#contact">
                    Schedule Free Inspection
                </Button>
                <p className="text-gray-600 mt-4">
                    Or call us at <a href="tel:09885786396" className="text-primary-600 font-semibold hover:underline">098857 86396</a>
                </p>
            </div>
        </SectionWrapper>
    );
};

export default TermiteInspection;
