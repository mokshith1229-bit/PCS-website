import React from 'react';
import SectionWrapper from '../components/SectionWrapper';

const PromoBanner = () => {
    return (
        <SectionWrapper id="promo" background="light">
            <div className="text-center mb-6">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                    Go Pest Free With Upto <span className="text-danger-600">30% Off*</span>
                </h2>
                <p className="text-gray-700">
                    Celebrate your special occasions with a pest-free environment. Limited time offer on all services!
                </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
                {/* Left Side - Food Promo Image */}
                <div className="relative rounded-xl overflow-hidden shadow-lg">
                    <img
                        src="/food-promo.png"
                        alt="Pest Control Promo - 30% Off"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute bottom-4 left-4 bg-danger-600 text-white px-6 py-3 rounded-lg">
                        <div className="text-4xl font-bold">30%</div>
                        <div className="text-sm">OFF</div>
                    </div>
                </div>

                {/* Right Side - PCS Services */}
                <div className="bg-gradient-to-br from-primary-600 to-primary-700 rounded-xl p-8 flex flex-col justify-between">
                    <div>
                        <h3 className="text-2xl font-bold text-white mb-6">PCS</h3>
                        <div className="space-y-4">
                            <div className="flex items-center gap-3 bg-white rounded-lg p-3">
                                <div className="w-10 h-10 bg-white border-2 border-primary-600 rounded-full flex items-center justify-center text-primary-600 font-bold">
                                    ✓
                                </div>
                                <span className="font-semibold text-gray-900">CERTIFIED EXPERTS</span>
                            </div>
                            <div className="flex items-center gap-3 bg-white rounded-lg p-3">
                                <div className="w-10 h-10 bg-white border-2 border-primary-600 rounded-full flex items-center justify-center text-primary-600 font-bold">
                                    ✓
                                </div>
                                <span className="font-semibold text-gray-900">QUALITY SERVICES</span>
                            </div>
                            <div className="flex items-center gap-3 bg-white rounded-lg p-3">
                                <div className="w-10 h-10 bg-primary-600 rounded-full flex items-center justify-center text-white font-bold">
                                    ✓
                                </div>
                                <span className="font-semibold text-gray-900">MOSQUITO SERVICES</span>
                            </div>
                            <div className="flex items-center gap-3 bg-white rounded-lg p-3">
                                <div className="w-10 h-10 bg-danger-600 rounded-full flex items-center justify-center text-white font-bold">
                                    ✓
                                </div>
                                <span className="font-semibold text-gray-900">BIRD PEST</span>
                            </div>
                        </div>
                    </div>

                    <div className="mt-6 space-y-2 text-white">
                        <div className="flex items-center gap-2">
                            <span className="font-semibold">📞 CALL:</span>
                            <a href="tel:09885786396" className="hover:underline">098857 86396</a>
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="font-semibold">📧 EMAIL:</span>
                            <a href="mailto:info@pcspest.com" className="hover:underline">info@pcspest.com</a>
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="font-semibold">💬 WHATSAPP:</span>
                            <a href="https://wa.me/919885786396" className="hover:underline">9885786396</a>
                        </div>
                    </div>
                </div>
            </div>
        </SectionWrapper>
    );
};

export default PromoBanner;
