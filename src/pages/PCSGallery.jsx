import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SectionWrapper from '../components/SectionWrapper';
import { X, ZoomIn, Filter, ArrowLeft } from 'lucide-react';

const PCSGallery = () => {
    const navigate = useNavigate();
    const [selectedImage, setSelectedImage] = useState(null);
    const [activeCategory, setActiveCategory] = useState('All');

    // Gallery images
    const galleryImages = [
        { id: 1, src: '/gallery-real-1.jpg', title: 'Professional Service', category: 'Team' },
        { id: 2, src: '/gallery-real-2.jpg', title: 'Site Inspection', category: 'Team' },
        { id: 3, src: '/gallery-real-3.jpg', title: 'Safety Equipment', category: 'Team' },
        { id: 4, src: '/gallery-real-4.jpg', title: 'Equipment Setup', category: 'Team' },
        { id: 5, src: '/gallery-real-5.jpg', title: 'Outdoor Treatment', category: 'Residential' },
        { id: 6, src: '/gallery-real-6.jpg', title: 'Industrial Application', category: 'Team' },
        { id: 7, src: '/gallery-real-7.jpg', title: 'Commercial Kitchen', category: 'Team' },
        { id: 8, src: '/gallery-real-8.jpg', title: 'Equipment Preparation', category: 'Team' },
        { id: 9, src: '/gallery-real-9.jpg', title: 'Drainage Treatment', category: 'Team' },
        { id: 10, src: '/gallery-real-10.jpg', title: 'Waste Area Management', category: 'Team' },
        { id: 11, src: '/gallery-real-11.jpg', title: 'Restroom Hygiene', category: 'Commercial' },
        { id: 12, src: '/gallery-real-12.jpg', title: 'Common Area Treatment', category: 'Commercial' },
        { id: 13, src: '/gallery-real-13.jpg', title: 'Furniture Protection', category: 'Commercial' },
        { id: 14, src: '/gallery-real-14.jpg', title: 'Classroom Safety', category: 'Commercial' },
        { id: 15, src: '/gallery-real-15.jpg', title: 'Ward Inspection', category: 'Commercial' },
        { id: 16, src: '/gallery-real-16.jpg', title: 'Dining Hall Safety', category: 'Commercial' },
        { id: 17, src: '/gallery-real-17.jpg', title: 'Parking Lot Fogging', category: 'Commercial' },
        { id: 18, src: '/gallery-real-18.jpg', title: 'Corridor Disinfection', category: 'Commercial' },
        { id: 19, src: '/gallery-real-19.jpg', title: 'Restroom Sanitization', category: 'Commercial' },
        { id: 20, src: '/gallery-real-20.jpg', title: 'Washroom Treatment', category: 'Commercial' },
        { id: 21, src: '/gallery-real-21.jpg', title: 'External Cleanliness', category: 'Commercial' },
        { id: 22, src: '/gallery-real-22.jpg', title: 'Campus Fogging', category: 'Commercial' },
        { id: 23, src: '/gallery-real-23.jpg', title: 'Garden Spraying', category: 'Commercial' },
        { id: 24, src: '/gallery-real-24.jpg', title: 'Compound Wall Treatment', category: 'Commercial' },
        { id: 25, src: '/gallery-real-25.jpg', title: 'Drainage Maintenance', category: 'Commercial' },
        { id: 26, src: '/gallery-real-26.jpg', title: 'Comprehensive Fogging', category: 'Commercial' },
        { id: 27, src: '/gallery-real-27.jpg', title: 'Waste Bin Treatment', category: 'Commercial' },
    ];

    // Get unique categories
    const categories = ['All', ...new Set(galleryImages.map(img => img.category))];

    // Filter images based on active category
    const filteredImages = activeCategory === 'All'
        ? galleryImages
        : galleryImages.filter(img => img.category === activeCategory);

    return (
        <div className="pt-20 min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100">



            <SectionWrapper id="gallery" background="light">
                {/* Category Filter */}
                <div className="mb-12 relative flex flex-col md:flex-row items-center justify-center">
                    {/* Back to Home Button */}
                    <div className="w-full md:absolute md:left-0 md:top-1/2 md:-translate-y-1/2 mb-4 md:mb-0 flex justify-start md:justify-start">
                        <button
                            onClick={() => navigate('/')}
                            className="flex items-center gap-2 px-4 py-2 bg-[#1f3d2b] text-white rounded-full hover:bg-[#2a5438] hover:-translate-y-0.5 transition-all duration-300 shadow-md font-medium text-sm group"
                        >
                            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                            Back to Home
                        </button>
                    </div>

                    <div className="flex items-center justify-center gap-3 flex-wrap">
                        <div className="flex items-center gap-2 text-gray-600 mr-2">
                            <Filter className="w-5 h-5" />
                            <span className="font-medium">Filter:</span>
                        </div>
                        {categories.map((category) => (
                            <button
                                key={category}
                                onClick={() => setActiveCategory(category)}
                                className={`px-6 py-2.5 rounded-full font-medium transition-all duration-300 transform hover:scale-105 ${activeCategory === category
                                    ? 'bg-gradient-to-r from-[#1f3d2b] to-[#2a5438] text-white shadow-lg shadow-[#1f3d2b]/30'
                                    : 'bg-white text-gray-700 hover:bg-gray-50 shadow-md hover:shadow-lg border border-gray-200'
                                    }`}
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Gallery Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredImages.map((image, index) => (
                        <div
                            key={image.id}
                            className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl cursor-pointer aspect-[4/3] transform transition-all duration-500 hover:-translate-y-2"
                            onClick={() => setSelectedImage(image)}
                            style={{
                                animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`
                            }}
                        >
                            {/* Image */}
                            <div className="relative w-full h-full overflow-hidden">
                                <img
                                    src={image.src}
                                    alt={image.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    loading="lazy"
                                />

                                {/* Gradient Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-300"></div>
                            </div>

                            {/* Content Overlay */}
                            <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-6 transform transition-all duration-300">
                                {/* Zoom Icon */}
                                <div className="mb-4 transform scale-0 group-hover:scale-100 transition-transform duration-300">
                                    <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center border-2 border-white/40">
                                        <ZoomIn className="w-8 h-8" />
                                    </div>
                                </div>

                                {/* Title and Category */}
                                <div className="text-center transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                    <h3 className="text-2xl font-bold mb-2 drop-shadow-lg">{image.title}</h3>
                                    <span className="inline-block px-4 py-1.5 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium border border-white/30">
                                        {image.category}
                                    </span>
                                </div>
                            </div>

                            {/* Corner Accent */}
                            <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-white/20 to-transparent transform translate-x-10 -translate-y-10 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-500 rounded-bl-3xl"></div>
                        </div>
                    ))}
                </div>

                {/* Empty State */}
                {filteredImages.length === 0 && (
                    <div className="text-center py-20">
                        <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-gray-100 flex items-center justify-center">
                            <Filter className="w-12 h-12 text-gray-400" />
                        </div>
                        <h3 className="text-2xl font-bold text-gray-700 mb-2">No images found</h3>
                        <p className="text-gray-500">Try selecting a different category</p>
                    </div>
                )}
            </SectionWrapper>

            {/* Enhanced Lightbox Modal */}
            {selectedImage && (
                <div
                    className="fixed inset-0 z-[60] bg-black/95 backdrop-blur-sm flex items-center justify-center p-4 animate-fadeIn"
                    onClick={() => setSelectedImage(null)}
                >
                    {/* Close Button */}
                    <button
                        className="absolute top-6 right-6 text-white hover:text-gray-300 transition-all duration-300 transform hover:scale-110 hover:rotate-90 z-10"
                        onClick={() => setSelectedImage(null)}
                    >
                        <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center border border-white/20 hover:bg-white/20">
                            <X className="w-6 h-6" />
                        </div>
                    </button>

                    {/* Image Container */}
                    <div
                        className="relative max-w-6xl w-full flex flex-col items-center animate-scaleIn"
                        onClick={e => e.stopPropagation()}
                    >
                        {/* Image */}
                        <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                            <img
                                src={selectedImage.src}
                                alt={selectedImage.title}
                                className="max-w-full max-h-[80vh] object-contain"
                            />
                        </div>

                        {/* Info Card */}
                        <div className="mt-8 bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 max-w-2xl w-full">
                            <div className="text-center">
                                <span className="inline-block px-4 py-1.5 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium text-white border border-white/30 mb-3">
                                    {selectedImage.category}
                                </span>
                                <h3 className="text-white text-3xl font-bold mb-2">{selectedImage.title}</h3>
                                <p className="text-gray-300">Professional pest control services in action</p>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Custom Animations */}
            <style jsx>{`
                @keyframes fadeInUp {
                    from {
                        opacity: 0;
                        transform: translateY(30px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }

                @keyframes fadeIn {
                    from {
                        opacity: 0;
                    }
                    to {
                        opacity: 1;
                    }
                }

                @keyframes scaleIn {
                    from {
                        opacity: 0;
                        transform: scale(0.9);
                    }
                    to {
                        opacity: 1;
                        transform: scale(1);
                    }
                }

                .animate-fadeIn {
                    animation: fadeIn 0.3s ease-out;
                }

                .animate-scaleIn {
                    animation: scaleIn 0.4s ease-out;
                }
            `}</style>
        </div>
    );
};

export default PCSGallery;
