import React, { useState } from 'react';
import SectionWrapper from '../components/SectionWrapper';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQSection = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const faqs = [
        {
            question: 'What services does PCS offer?',
            answer: 'PCS offers comprehensive pest control services including termite control, cockroach management, rodent control, mosquito treatment, bed bug elimination, bird control, and general pest management for residential, commercial, and industrial properties.'
        },
        {
            question: 'How can I book a pest control service?',
            answer: 'You can book our services by calling us at 098857 86396 or 9494811234, using our WhatsApp number 9885786396, filling out the contact form on our website, or clicking the "Book Now" button on any service page. Our team will schedule a convenient time for inspection and treatment. We are available 24 hours for your convenience.'
        },
        {
            question: 'Are your pest control treatments safe?',
            answer: 'Yes, absolutely! We use eco-friendly, government-approved chemicals that are safe for your family and pets. Our certified technicians follow strict safety protocols and provide detailed instructions for before and after treatment care.'
        },
        {
            question: 'Does PCS provide services in my city?',
            answer: 'PCS operates in Visakhapatnam, Andhra Pradesh. Our office is located at D.no:1-104-28, opp. Lakshmi Ganapathi Sweets, MVP Sector 7, Sector 5, MVP Colony, Visakhapatnam, Andhra Pradesh 530017. Contact us to confirm service availability in your specific area.'
        },
        {
            question: 'How do you pricing for pest control services determined?',
            answer: 'Pricing depends on factors like property size, type of pest, severity of infestation, and treatment method required. We offer free inspections and provide transparent quotes before starting any work. Contact us for a customized quote for your specific needs.'
        }
    ];

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <SectionWrapper id="faqs" background="white">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        PCS Frequently Asked Questions
                    </h2>
                    <p className="text-gray-700">
                        Find answers to common questions about our pest control services
                    </p>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className="bg-gray-50 rounded-lg border border-gray-200 overflow-hidden hover:border-primary-600 transition-colors"
                        >
                            <button
                                onClick={() => toggleFAQ(index)}
                                className="w-full flex items-center justify-between p-5 text-left hover:bg-gray-100 transition-colors"
                            >
                                <span className="font-semibold text-gray-900 pr-4">
                                    {faq.question}
                                </span>
                                {openIndex === index ? (
                                    <ChevronUp className="w-5 h-5 text-primary-600 flex-shrink-0" />
                                ) : (
                                    <ChevronDown className="w-5 h-5 text-gray-600 flex-shrink-0" />
                                )}
                            </button>
                            {openIndex === index && (
                                <div className="px-5 pb-5 pt-2 text-gray-700 leading-relaxed">
                                    {faq.answer}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </SectionWrapper>
    );
};

export default FAQSection;
