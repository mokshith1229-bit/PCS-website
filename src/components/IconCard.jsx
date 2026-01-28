import React from 'react';

const IconCard = ({ icon, title, description }) => {
    return (
        <div className="flex flex-col items-center text-center p-6">
            <div className="text-danger-600 mb-4">
                {icon}
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">
                {title}
            </h3>
            <p className="text-gray-700 text-sm leading-relaxed">
                {description}
            </p>
        </div>
    );
};

export default IconCard;
