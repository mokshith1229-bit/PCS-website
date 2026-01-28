import React, { useEffect, useRef, useState } from 'react';

const SectionWrapper = ({
    children,
    className = '',
    background = 'white',
    id = '',
    animate = true
}) => {
    const sectionRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        if (!animate) {
            setIsVisible(true);
            return;
        }

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            {
                threshold: 0.1,
                rootMargin: '50px',
            }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, [animate]);

    const backgrounds = {
        white: 'bg-white',
        gray: 'bg-gray-50',
        primary: 'bg-primary-50',
        gradient: 'gradient-primary',
    };

    return (
        <section
            ref={sectionRef}
            id={id}
            className={`py-16 md:py-20 ${backgrounds[background]} ${className} ${animate ? 'animate-on-scroll' : ''
                } ${isVisible ? 'visible' : ''}`}
        >
            <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
                {children}
            </div>
        </section>
    );
};

export default SectionWrapper;
