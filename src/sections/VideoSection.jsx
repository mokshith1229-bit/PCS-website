import React from 'react';
import SectionWrapper from '../components/SectionWrapper';
import { Play } from 'lucide-react';

const VideoSection = () => {
    const [isPlaying, setIsPlaying] = React.useState(false);
    const videoId = "EO4XaAzlOW4"; // Updated YouTube Video ID

    return (
        <SectionWrapper id="video" background="white">
            <div className="max-w-4xl mx-auto">
                <div className="bg-gray-900 rounded-xl overflow-hidden shadow-2xl">
                    <div className="relative aspect-video">
                        {!isPlaying ? (
                            <>
                                {/* Video Placeholder */}
                                <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-primary-900 to-secondary-900">
                                    <button
                                        onClick={() => setIsPlaying(true)}
                                        className="w-20 h-20 bg-white rounded-full flex items-center justify-center hover:scale-110 transition-transform shadow-xl z-20"
                                        aria-label="Play Video"
                                    >
                                        <Play className="w-10 h-10 text-primary-600 ml-1" />
                                    </button>
                                </div>
                            </>
                        ) : (
                            <video
                                className="w-full h-full object-contain bg-black"
                                src="/videos/pcs-video.mp4"
                                title="PCS Pest Control Video"
                                controls
                                autoPlay
                                playsInline
                            >
                                Your browser does not support the video tag.
                            </video>
                        )}

                        {/* Overlay Text for Desktop Only - Only visible when NOT playing or if you want it always visible on desktop? usually hidden when playing */}
                        {!isPlaying && (
                            <div className="hidden md:block absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 z-10">
                                <h3 className="text-white text-xl font-bold">
                                    Watch How PCS Protects Your Home & Business
                                </h3>
                                <p className="text-gray-300 text-sm mt-2">
                                    Learn about our comprehensive pest control solutions
                                </p>
                            </div>
                        )}
                    </div>

                    {/* Mobile Text Section - Below video */}
                    {!isPlaying && (
                        <div className="md:hidden bg-gray-900 p-6 text-center">
                            <h3 className="text-white text-xl font-bold">
                                Watch How PCS Protects Your Home & Business
                            </h3>
                            <p className="text-gray-300 text-sm mt-2">
                                Learn about our comprehensive pest control solutions
                            </p>
                        </div>
                    )}
                </div>
            </div>
        </SectionWrapper>
    );
};

export default VideoSection;
