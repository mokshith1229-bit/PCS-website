import React from 'react';

const Card = ({
    icon,
    title,
    description,
    className = '',
    children
}) => {
    return (
        <div className={`bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100 ${className}`}>
            {icon && (
                <div className="mb-4 text-primary-900">
                    {icon}
                </div>
            )}
            {title && (
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {title}
                </h3>
            )}
            {description && (
                <p className="text-gray-600 leading-relaxed">
                    {description}
                </p>
            )}
            {children}
        </div>
    );
};

export default Card;
