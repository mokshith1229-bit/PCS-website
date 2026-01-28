import React, { useState } from 'react';
import { MessageCircle, X, Phone } from 'lucide-react';

const WhatsAppWidget = () => {
    const [isOpen, setIsOpen] = useState(false);
    const phoneNumber = '919885786396'; // PCS WhatsApp number

    const quickActions = [
        { text: 'Book an instant Cockroach Service', link: `https://wa.me/${phoneNumber}?text=I want to book cockroach service` },
        { text: 'General Pest Control Inquiry', link: `https://wa.me/${phoneNumber}?text=I need information about pest control services` },
        { text: 'Termite Treatment Quote', link: `https://wa.me/${phoneNumber}?text=I need a quote for termite treatment` },
    ];

    return (
        <>
            {/* Chat Widget Button */}
            <div className="fixed bottom-6 right-6 z-50">
                {isOpen && (
                    <div className="mb-4 bg-white rounded-2xl shadow-2xl w-80 overflow-hidden animate-fadeIn">
                        {/* Header */}
                        <div className="bg-gradient-to-r from-primary-600 to-primary-700 text-white p-4 flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                                    <MessageCircle className="w-6 h-6 text-primary-600" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-sm">PCS Support</h3>
                                    <p className="text-xs opacity-90">Online now</p>
                                </div>
                            </div>
                            <button
                                onClick={() => setIsOpen(false)}
                                className="hover:bg-white/20 rounded-full p-1 transition-colors"
                            >
                                <X className="w-5 h-5" />
                            </button>
                        </div>

                        {/* Chat Content */}
                        <div className="p-4 bg-gray-50 max-h-96 overflow-y-auto">
                            {/* Welcome Message */}
                            <div className="bg-white rounded-lg p-3 shadow-sm mb-4">
                                <p className="text-sm text-gray-800 mb-2">
                                    Welcome to PCS! 👋
                                </p>
                                <p className="text-sm text-gray-700">
                                    I am ready to help you with all your pest control needs.
                                </p>
                            </div>

                            {/* Can I help? */}
                            <div className="text-center mb-4">
                                <p className="text-sm text-gray-600 mb-3">Can I help?</p>
                                <div className="flex gap-2 justify-center">
                                    <a
                                        href={`https://wa.me/${phoneNumber}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="px-4 py-2 bg-accent-600 text-white rounded-full text-sm font-medium hover:bg-accent-700 transition-colors"
                                    >
                                        Yes
                                    </a>
                                    <a
                                        href="tel:+919885786396"
                                        className="px-4 py-2 border-2 border-gray-300 text-gray-700 rounded-full text-sm font-medium hover:border-primary-600 hover:text-primary-600 transition-colors flex items-center gap-1"
                                    >
                                        <Phone className="w-4 h-4" />
                                        Call Us
                                    </a>
                                </div>
                            </div>

                            {/* Quick Actions */}
                            <div className="space-y-2">
                                <p className="text-xs text-gray-500 mb-2">Quick Actions:</p>
                                {quickActions.map((action, index) => (
                                    <a
                                        key={index}
                                        href={action.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="block bg-white border border-gray-200 rounded-lg p-3 text-sm text-gray-700 hover:border-primary-600 hover:bg-primary-50 transition-all"
                                    >
                                        {action.text}
                                    </a>
                                ))}
                            </div>
                        </div>

                        {/* Footer */}
                        <div className="bg-white border-t border-gray-200 p-3">
                            <a
                                href={`https://wa.me/${phoneNumber}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full bg-green-500 hover:bg-green-600 text-white font-medium py-2 px-4 rounded-lg flex items-center justify-center gap-2 transition-colors"
                            >
                                <MessageCircle className="w-5 h-5" />
                                Start WhatsApp Chat
                            </a>
                        </div>
                    </div>
                )}

                {/* Toggle Button */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-2xl transition-all hover:scale-110 flex items-center justify-center"
                    aria-label="WhatsApp Chat"
                >
                    {isOpen ? (
                        <X className="w-6 h-6" />
                    ) : (
                        <MessageCircle className="w-6 h-6" />
                    )}
                </button>
            </div>
        </>
    );
};

export default WhatsAppWidget;
