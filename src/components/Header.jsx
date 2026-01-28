import React, { useState } from 'react';
import { Menu, X, Phone, Mail, MessageCircle } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Header = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();

    const navLinks = [
        { name: 'Services', href: '#cutting-edge' },
        { name: 'About PCS', href: '#about' },
        { name: 'Contact PCS', href: '#contact' },
        { name: 'PCS Gallery', href: '/pcs-gallery', isRoute: true },
    ];

    const handleNavClick = (e, link) => {
        setIsMobileMenuOpen(false);

        if (link.isRoute) {
            // Let Link component handle routing
            return;
        }

        e.preventDefault();

        if (location.pathname !== '/') {
            // If not on home page, navigate to home then scroll
            navigate('/');
            setTimeout(() => {
                const element = document.querySelector(link.href);
                element?.scrollIntoView({ behavior: 'smooth' });
            }, 100);
        } else {
            // If already on home page, just scroll
            const element = document.querySelector(link.href);
            element?.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">


            {/* Main Navigation */}
            <div className="bg-white">
                <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
                    <div className="flex items-center justify-between py-1">
                        {/* Logo */}
                        <Link to="/" className="flex items-center">
                            <img src="/logo.png" alt="PCS Pest Control Services" className="h-16 w-auto" />
                        </Link>

                        {/* Desktop Navigation */}
                        <nav className="hidden md:flex items-center gap-8">
                            {navLinks.map((link) => (
                                link.isRoute ? (
                                    <Link
                                        key={link.name}
                                        to={link.href}
                                        className="text-gray-700 hover:text-primary-600 font-medium transition-colors"
                                    >
                                        {link.name}
                                    </Link>
                                ) : (
                                    <a
                                        key={link.name}
                                        href={link.href}
                                        onClick={(e) => handleNavClick(e, link)}
                                        className="text-gray-700 hover:text-primary-600 font-medium transition-colors cursor-pointer"
                                    >
                                        {link.name}
                                    </a>
                                )
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
                            link.isRoute ? (
                                <Link
                                    key={link.name}
                                    to={link.href}
                                    className="text-gray-700 hover:text-primary-600 font-medium transition-colors py-2"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    {link.name}
                                </Link>
                            ) : (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    onClick={(e) => handleNavClick(e, link)}
                                    className="text-gray-700 hover:text-primary-600 font-medium transition-colors py-2 cursor-pointer"
                                >
                                    {link.name}
                                </a>
                            )
                        ))}
                    </nav>
                </div>
            )}
        </header>
    );
};

export default Header;
