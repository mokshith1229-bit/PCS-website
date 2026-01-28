import React from 'react';
import SectionWrapper from '../components/SectionWrapper';
import { Play } from 'lucide-react';

const VideoSection = () => {
    return (
        <SectionWrapper id="video" background="white">
            <div className="max-w-4xl mx-auto">
                <div className="relative bg-gray-900 rounded-xl overflow-hidden shadow-2xl aspect-video">
                    {/* Video Placeholder */}
                    <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-primary-900 to-secondary-900">
                        <button className="w-20 h-20 bg-white rounded-full flex items-center justify-center hover:scale-110 transition-transform shadow-xl">
                            <Play className="w-10 h-10 text-primary-600 ml-1" />
                        </button>
                    </div>

                    {/* Overlay Text */}
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                        <h3 className="text-white text-xl font-bold">
                            Watch How PCS Protects Your Home & Business
                        </h3>
                        <p className="text-gray-300 text-sm mt-2">
                            Learn about our comprehensive pest control solutions
                        </p>
                    </div>
                </div>
            </div>
        </SectionWrapper>
    );
};

export default VideoSection;
