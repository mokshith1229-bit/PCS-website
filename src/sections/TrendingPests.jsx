import React from 'react';
import SectionWrapper from '../components/SectionWrapper';
import Button from '../components/Button';

const TrendingPests = () => {
    const pests = [
        {
            image: '/rat-pest.png',
            title: 'Rat',
            description: 'Rats are not only destructive but also carry diseases. Our rodent control services include baiting, trapping, and exclusion methods to keep your property rat-free year-round.',
            link: '#rats'
        },
        {
            image: '/mosquito-pest.png',
            title: 'Mosquito',
            description: 'Mosquitoes are seasonal pests that spread dangerous diseases like dengue and malaria. Our mosquito management includes fogging, larviciding, and breeding site elimination for complete protection.',
            link: '#mosquito'
        },
        {
            image: '/bird-pest.png',
            title: 'Birds',
            description: 'Bird infestations can damage property and create health hazards. Our humane bird control solutions include netting, spikes, and deterrents to protect your building without harming the birds.',
            link: '#birds'
        }
    ];

    return (
        <SectionWrapper id="trending-pests" background="light">
            <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                    Trending Seasonal Pests in Visakhapatnam
                </h2>
                <p className="text-gray-700 max-w-3xl mx-auto">
                    Stay ahead of seasonal pest problems. These pests are particularly active during certain times of the year and require specialized control measures.
                </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
                {pests.map((pest, index) => (
                    <div key={index} className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow flex flex-col">
                        <div className="h-56 overflow-hidden">
                            <img
                                src={pest.image}
                                alt={pest.title}
                                className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                            />
                        </div>
                        <div className="p-6 flex flex-col flex-grow">
                            <h3 className="text-2xl font-bold text-gray-900 mb-3">
                                {pest.title}
                            </h3>
                            <p className="text-gray-700 mb-4 leading-relaxed flex-grow">
                                {pest.description}
                            </p>
                            <Button variant="primary" size="sm" href="#contact" className="mt-auto">
                                Know More
                            </Button>
                        </div>
                    </div>
                ))}
            </div>
        </SectionWrapper>
    );
};

export default TrendingPests;
