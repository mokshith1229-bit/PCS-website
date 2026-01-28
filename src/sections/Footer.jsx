import React from 'react';
import { Facebook, Twitter, Instagram, Mail } from 'lucide-react';

const Footer = () => {
    const services = [
        'Termite Control',
        'Cockroach Control',
        'Rodent Control',
        'Mosquito Control',
        'Bed Bug Control',
        'Anti Larval Treatment',
        'General Pest Control'
    ];

    const company = [
        'About PCS',
        'Our Services',
        'Careers',
        'Contact Us',
        'Privacy Policy',
        'Terms of Service',
        'Sitemap'
    ];

    return (
        <footer className="bg-secondary-900 text-white">
            <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl py-12">
                <div className="grid md:grid-cols-4 gap-8 mb-8">
                    {/* Company Info */}
                    <div>
                        <div className="bg-white p-2 rounded-lg inline-block mb-4">
                            <img src="/logo.png" alt="PCS" className="h-10 w-auto" />
                        </div>
                        <p className="text-gray-400 text-sm leading-relaxed mb-4">
                            Professional pest control services in Visakhapatnam, Andhra Pradesh. Protecting homes and businesses for over 15 years.
                        </p>
                        <div className="flex gap-3">
                            <a
                                href="https://www.instagram.com/pcs_enterprises/"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Instagram"
                                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary-600 transition-colors"
                            >
                                <Instagram className="w-5 h-5" />
                            </a>
                            <a
                                href="https://www.facebook.com/vizag.pest/"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Facebook"
                                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary-600 transition-colors"
                            >
                                <Facebook className="w-5 h-5" />
                            </a>
                            <a
                                href="https://www.threads.com/@pcs_enterprises"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Threads"
                                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary-600 transition-colors"
                            >
                                <Twitter className="w-5 h-5" />
                            </a>
                            <a
                                href="mailto:k.pavankumarraju1985@gmail.com"
                                aria-label="Email"
                                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary-600 transition-colors"
                            >
                                <Mail className="w-5 h-5" />
                            </a>
                        </div>
                    </div>

                    {/* Services */}
                    <div>
                        <h3 className="text-lg font-bold mb-4">Services</h3>
                        <ul className="space-y-2">
                            {services.map((service, index) => (
                                <li key={index}>
                                    <a href={`#${service.toLowerCase().replace(/ /g, '-')}`} className="text-gray-400 hover:text-white transition-colors text-sm">
                                        {service}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Company */}
                    <div>
                        <h3 className="text-lg font-bold mb-4">Company</h3>
                        <ul className="space-y-2">
                            {company.map((item, index) => (
                                <li key={index}>
                                    <a href={`#${item.toLowerCase().replace(/ /g, '-')}`} className="text-gray-400 hover:text-white transition-colors text-sm">
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="text-lg font-bold mb-4">Contact Us</h3>
                        <ul className="space-y-3 text-sm text-gray-400">
                            <li>
                                <span className="font-semibold text-white">Phone:</span><br />
                                <a href="tel:09885786396" className="hover:text-white transition-colors">098857 86396</a>
                            </li>
                            <li>
                                <span className="font-semibold text-white">Email:</span><br />
                                <a href="mailto:info@pcspest.com" className="hover:text-white transition-colors">k.pavankumarraju1985@gmail.com</a>
                            </li>
                            <li>
                                <span className="font-semibold text-white">WhatsApp:</span><br />
                                <a href="https://wa.me/919885786396" className="hover:text-white transition-colors">+91 9885786396</a>
                            </li>
                            <li>
                                <span className="font-semibold text-white">Address:</span><br />
                                D.no:1-104-28, opp. Lakshmi Ganapathi Sweets,<br />
                                MVP Sector 7, Sector 5, MVP Colony,<br />
                                Visakhapatnam, Andhra Pradesh 530017
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-gray-800 pt-8 mt-8">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
                        <p>
                            © 2024 PCS Pest Control Services. All rights reserved.
                        </p>
                        <p>
                            Designed with ❤️ for a pest-free India
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
