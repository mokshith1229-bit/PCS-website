import React from 'react';
import SectionWrapper from '../components/SectionWrapper';
import Button from '../components/Button';

const LocalBranches = () => {
    return (
        <SectionWrapper id="local-branches" background="light">
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                {/* Local Branches */}
                <div className="bg-primary-50 rounded-xl p-8 border-2 border-primary-200 hover:border-primary-600 transition-colors">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                        Local branches
                    </h3>
                    <p className="text-gray-700 mb-6 leading-relaxed">
                        Find your nearest PCS branch for personalized pest control services.
                        We have locations across India to serve you better.
                    </p>
                    <Button variant="primary" size="lg" href="#locations" className="w-full">
                        Find your local branch
                    </Button>
                </div>

                {/* PCS Story */}
                <div className="bg-secondary-800 text-white rounded-xl p-8 hover:bg-secondary-900 transition-colors">
                    <h3 className="text-2xl font-bold mb-4">
                        PCS story
                    </h3>
                    <p className="text-gray-200 mb-6 leading-relaxed">
                        Discover our journey of over 15 years in providing exceptional pest control
                        services across India. Learn about our commitment to excellence and innovation.
                    </p>
                    <Button variant="white" size="lg" href="#about" className="w-full">
                        Find out more
                    </Button>
                </div>
            </div>
        </SectionWrapper>
    );
};

export default LocalBranches;
