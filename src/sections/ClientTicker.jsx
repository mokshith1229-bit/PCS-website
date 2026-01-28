import React from 'react';

const ClientTicker = () => {
    const clients = [
        "Bigbasket",
        "Vasudha Pharma",
        "Novotel",
        "GITAM University",
        "Asian Paints",
        "Vasista Pharma",
        "ANITS College",
        "Dolphin Hotel",
        "Best Western Ramachandra",
        "Sanvira Biotech",
        "Vijayanagar Biotech"
    ];

    // Triple the list to ensure smooth infinite scrolling without gaps
    const duplicatedClients = [...clients, ...clients, ...clients];

    return (
        <div className="w-full bg-[#004e64] border-t border-b border-[#005f73] relative z-20 overflow-hidden shadow-lg">
            <div className="max-w-[1400px] mx-auto flex h-14 md:h-16 items-center">

                {/* Scrolling Ticker Area */}
                <div className="flex-1 overflow-hidden relative h-full flex items-center mask-image-gradient">
                    <div className="flex animate-scroll-reverse items-center hover:pause-animation whitespace-nowrap">
                        {duplicatedClients.map((client, index) => (
                            <div key={index} className="flex items-center">
                                <span className="text-white text-sm md:text-base font-medium mx-4 md:mx-6 hover:text-[#a5f3fc] transition-colors cursor-default tracking-wide">
                                    {client}
                                </span>
                                <span className="text-[#a5f3fc] text-[8px] opacity-80">•</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ClientTicker;
