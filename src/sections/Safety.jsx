import React from 'react';
import SectionWrapper from '../components/SectionWrapper';
import { ShieldCheck, Users, Award, Clock } from 'lucide-react';

const Safety = () => {
    const promises = [
        {
            icon: <ShieldCheck className="w-12 h-12" />,
            title: 'Long-lasting Relief',
            description: 'Our treatments provide extended protection, keeping your property pest-free for months'
        },
        {
            icon: <Users className="w-12 h-12" />,
            title: 'No Harm to Humans',
            description: 'Safe, eco-friendly solutions that protect your family and pets'
        },
        {
            icon: <Award className="w-12 h-12" />,
            title: 'Highly Trained Staff',
            description: 'Certified technicians with extensive pest management expertise'
        },
        {
            icon: <Clock className="w-12 h-12" />,
            title: 'Expert Inspection',
            description: 'Professional assessment and customized treatment plans'
        },
    ];

    return (
        <SectionWrapper background="primary" id="safety">
            <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                    Safety & Quality Promise
                </h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                    Your safety and satisfaction are our top priorities
                </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {promises.map((promise, index) => (
                    <div key={index} className="text-center">
                        <div className="inline-flex items-center justify-center w-20 h-20 bg-white rounded-full shadow-lg mb-4 text-primary-900">
                            {promise.icon}
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">
                            {promise.title}
                        </h3>
                        <p className="text-gray-600">
                            {promise.description}
                        </p>
                    </div>
                ))}
            </div>
        </SectionWrapper>
    );
};

export default Safety;
