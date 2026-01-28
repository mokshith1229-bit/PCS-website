import React from 'react';
import SectionWrapper from '../components/SectionWrapper';
import { Zap, UserCheck, Heart, Clock, MapPin } from 'lucide-react';

const WhyChoose = () => {
    const reasons = [
        {
            icon: <Zap className="w-8 h-8" />,
            title: 'Fast and Reliable Service',
            description: 'Quick response times and efficient pest elimination'
        },
        {
            icon: <UserCheck className="w-8 h-8" />,
            title: 'Experienced Technicians',
            description: 'Skilled professionals with years of pest control expertise'
        },
        {
            icon: <Heart className="w-8 h-8" />,
            title: 'Customer-First Approach',
            description: 'Your satisfaction and peace of mind are our goals'
        },
        {
            icon: <Clock className="w-8 h-8" />,
            title: 'On-Time Service Delivery',
            description: 'We respect your time with punctual appointments'
        },
        {
            icon: <MapPin className="w-8 h-8" />,
            title: 'Local Trusted Provider',
            description: 'Serving Vizag with dedication and integrity'
        },
    ];

    return (
        <SectionWrapper background="white" id="why-choose">
            <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                    Why Choose PCS
                </h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                    Experience the difference with our professional pest control services
                </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
                {reasons.map((reason, index) => (
                    <div
                        key={index}
                        className="flex items-start gap-4 p-6 bg-gray-50 rounded-xl hover:bg-primary-50 transition-colors duration-300"
                    >
                        <div className="flex-shrink-0 text-primary-900">
                            {reason.icon}
                        </div>
                        <div>
                            <h3 className="text-lg font-bold text-gray-900 mb-2">
                                {reason.title}
                            </h3>
                            <p className="text-gray-600">
                                {reason.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </SectionWrapper>
    );
};

export default WhyChoose;
