import React, { useState } from 'react';
import { Menu, X, MapPin, Search, Phone, Mail, MessageCircle } from 'lucide-react';

const Header = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const navLinks = [
        { name: 'Services', href: '#services' },
        { name: 'About PCS', href: '#about' },
        { name: 'Contact us', href: '#contact' },
        { name: 'Blog', href: '#blog' },
    ];

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
            {/* Top Utility Bar */}
            <div className="bg-gray-100 border-b border-gray-200">
                <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
                    <div className="flex items-center justify-between py-2 text-xs md:text-sm">
                        <div className="flex items-center gap-2 md:gap-4">
                            <a href="#locations" className="flex items-center gap-1 text-gray-700 hover:text-primary-600 transition-colors">
                                <MapPin className="w-3 h-3 md:w-4 md:h-4" />
                                <span>Locations</span>
                            </a>
                            <a href="#search" className="flex items-center gap-1 text-gray-700 hover:text-primary-600 transition-colors">
                                <Search className="w-3 h-3 md:w-4 md:h-4" />
                                <span>Search</span>
                            </a>
                        </div>
                        <div className="flex items-center gap-2 md:gap-4">
                            <a href="#contact" className="text-gray-700 hover:text-primary-600 transition-colors">Contact</a>
                            <a href="#login" className="text-gray-700 hover:text-primary-600 transition-colors">Login</a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Navigation */}
            <div className="bg-white">
                <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
                    <div className="flex items-center justify-between py-1">
                        {/* Logo */}
                        <div className="flex items-center">
                            <img src="/logo.png" alt="PCS Pest Control Services" className="h-16 w-auto" />
                        </div>

                        {/* Desktop Navigation */}
                        <nav className="hidden md:flex items-center gap-8">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    className="text-gray-700 hover:text-primary-600 font-medium transition-colors"
                                >
                                    {link.name}
                                </a>
                            ))}
                        </nav>

                        {/* Mobile Menu Button */}
                        <button
                            className="md:hidden text-gray-700"
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        >
                            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Contact Bar */}
            <div className="bg-primary-700 text-white">
                <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
                    <div className="flex items-center justify-center md:justify-start gap-6 md:gap-12 py-3 text-sm">
                        <a href="tel:09885786396" className="flex items-center gap-2 hover:text-accent-500 transition-colors">
                            <Phone className="w-4 h-4" />
                            <div className="hidden sm:block">
                                <div className="text-xs opacity-80">Call us</div>
                                <div className="font-semibold">098857 86396</div>
                            </div>
                            <span className="sm:hidden font-semibold">098857 86396</span>
                        </a>
                        <a href="https://wa.me/919885786396" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-accent-500 transition-colors">
                            <MessageCircle className="w-4 h-4" />
                            <div className="hidden sm:block">
                                <div className="text-xs opacity-80">Chat with us</div>
                                <div className="font-semibold">WhatsApp us</div>
                            </div>
                            <span className="sm:hidden font-semibold">WhatsApp</span>
                        </a>
                        <a href="mailto:info@pcspest.com" className="flex items-center gap-2 hover:text-accent-500 transition-colors">
                            <Mail className="w-4 h-4" />
                            <div className="hidden sm:block">
                                <div className="text-xs opacity-80">Email us</div>
                                <div className="font-semibold">for inquiries</div>
                            </div>
                            <span className="sm:hidden font-semibold">Email</span>
                        </a>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="md:hidden bg-white border-t border-gray-200">
                    <nav className="container mx-auto px-4 py-4 flex flex-col gap-4">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="text-gray-700 hover:text-primary-600 font-medium transition-colors py-2"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                {link.name}
                            </a>
                        ))}
                    </nav>
                </div>
            )}
        </header>
    );
};

export default Header;
