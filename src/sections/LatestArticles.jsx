import React from 'react';
import SectionWrapper from '../components/SectionWrapper';
import Button from '../components/Button';

const LatestArticles = () => {
    const articles = [
        {
            image: '/article-termite.png',
            title: 'The Benefits Of Pre-Construction Termite Control',
            excerpt: 'Learn why pre-construction termite treatment is essential for protecting your new building from costly termite damage.',
            link: '#article-termite'
        },
        {
            image: '/article-sustainability.png',
            title: 'Embracing Sustainability: 3 Eco-Friendly Pest Solutions For Your Home',
            excerpt: 'Discover eco-friendly pest control methods that protect your family and the environment while effectively eliminating pests.',
            link: '#article-sustainability'
        },
        {
            image: '/article-food.png',
            title: 'Ensure a great food business with effective pest control',
            excerpt: 'Maintain food safety standards and protect your restaurant or food business with professional pest management solutions.',
            link: '#article-food'
        }
    ];

    return (
        <SectionWrapper id="latest-articles" background="white">
            <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                    The Latest Articles For You
                </h2>
                <p className="text-gray-700 max-w-3xl mx-auto">
                    Stay informed with expert tips, industry insights, and the latest pest control news
                </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
                {articles.map((article, index) => (
                    <div key={index} className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow group flex flex-col">
                        <div className="h-56 overflow-hidden">
                            <img
                                src={article.image}
                                alt={article.title}
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                            />
                        </div>
                        <div className="p-6 flex flex-col flex-grow">
                            <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight">
                                {article.title}
                            </h3>
                            <p className="text-gray-700 mb-4 text-sm leading-relaxed flex-grow">
                                {article.excerpt}
                            </p>
                            <Button variant="outline" size="sm" href={article.link} className="mt-auto">
                                Read the article
                            </Button>
                        </div>
                    </div>
                ))}
            </div>

            <div className="text-center mt-12">
                <Button variant="primary" size="lg" href="#blog">
                    View All Pest Control Articles
                </Button>
            </div>
        </SectionWrapper>
    );
};

export default LatestArticles;
