import React from 'react';
import SectionWrapper from '../components/SectionWrapper';
import { Star } from 'lucide-react';
import Button from '../components/Button';

const PestServices = () => {
    return (
        <SectionWrapper id="pest-services" background="light">
            <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                    PCS Pest Control Services
                </h2>

                <div className="bg-white rounded-xl shadow-lg p-8 mb-6">
                    <div className="flex items-center justify-center gap-2 mb-4">
                        <span className="text-5xl font-bold text-gray-900">4.8</span>
                        <div className="flex gap-1">
                            {[1, 2, 3, 4, 5].map((star) => (
                                <Star
                                    key={star}
                                    className={`w-6 h-6 ${star <= 4 ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`}
                                />
                            ))}
                        </div>
                    </div>
                    <p className="text-gray-700 mb-2">
                        <span className="font-bold">4.8 rating out of 5.0</span> reviews
                    </p>
                    <p className="text-sm text-gray-600">
                        Based on 5000+ satisfied customers across India
                    </p>
                </div>

                <Button variant="primary" size="lg" href="#services">
                    Know More
                </Button>
            </div>
        </SectionWrapper>
    );
};

export default PestServices;
