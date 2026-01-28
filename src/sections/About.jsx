import React from 'react';
import SectionWrapper from '../components/SectionWrapper';
import IconCard from '../components/IconCard';
import { Shield, Stethoscope, FileText } from 'lucide-react';

const About = () => {
    const iconCards = [
        {
            icon: <Shield className="w-16 h-16" />,
            title: 'Pest Prevention',
            description: 'Our experts thoroughly analyze your property, pest-proofing every corner to prevent future infestations.'
        },
        {
            icon: <Stethoscope className="w-16 h-16" />,
            title: 'Pest Treatment',
            description: 'We use advanced and highly safe pest control methods to eliminate pests effectively and permanently.'
        },
        {
            icon: <FileText className="w-16 h-16" />,
            title: 'Pest Prevention',
            description: 'Ongoing pest advice on all the ways you can keep your home and business pest-free.'
        }
    ];

    return (
        <SectionWrapper id="about" background="white">
            <div className="max-w-4xl mx-auto mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">
                    About PCS
                </h2>
                <div className="text-gray-700 leading-relaxed space-y-4">
                    <p>
                        <strong>Pest Control Services (PCS)</strong> are experts in dealing with Pest Control with more than <strong>fifteen years of experience</strong>.
                        We operate in <a href="#locations" className="text-primary-600 hover:underline font-semibold">Visakhapatnam, Andhra Pradesh</a>,
                        combining innovation, safety, and efficiency to deliver <a href="#services" className="text-primary-600 hover:underline font-semibold">pest control services</a> you can rely on.
                    </p>
                    <p>
                        PCS is a pioneer in <strong>anti-termite treatment for Pre Constructions & Post Constructions</strong> with its unique methodologies.
                        We stand for Integrated Termite elimination methods and are one of the fastest growing Pest Control Companies.
                        We have a reputation for providing fast, reliable, on-time service for all our valued customers.
                    </p>
                    <p>
                        <strong>PCS Firm Registered By Government of India (No: 248)</strong>. We are a Quality conscious Pest Control Services Company
                        promoted by professionals formally educated in the field of Pest Management. Our success can be contributed to our dedicated employees
                        who have been committed to giving our customers the service when they want it.
                    </p>
                    <p>
                        We have highly trained technical staff to render professional services. Do call us to assist you and give you professional advice
                        on how you can get rid of your pest outbreak. <strong>Available 24 hours</strong> for your convenience.
                    </p>
                </div>
            </div>

            {/* Icon Cards */}
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                {iconCards.map((card, index) => (
                    <IconCard
                        key={index}
                        icon={card.icon}
                        title={card.title}
                        description={card.description}
                    />
                ))}
            </div>
        </SectionWrapper>
    );
};

export default About;
