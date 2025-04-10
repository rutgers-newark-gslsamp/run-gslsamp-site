import React, { useState } from 'react';
import Image from 'next/image';

export default function ImageWithLoadingState({ src, alt, width =1056, height =576}) {
    const [isLoading, setIsLoading] = useState(true);

    const handleImageLoaded = () => {
        setIsLoading(false);
    };

    const handleError = () => {
        setIsLoading(false);
        console.error('Failed to load image');
    };

    return (
        <div className='flex justify-center'>
            {/* Use the Next.js Image component alias */}
            <div className='mt-2 py-[1rem] md:rounded-lg flex justify-center items-center bg-gradient-to-r from-[#BB002F] to-[#9D1739] shadow-[0_5px_20px_1px_rgba(0,0,0,0.3)] '>
                <Image 
                    src={src} 
                    alt={alt}
                    width={width}
                    height={height}
                    onLoad={handleImageLoaded}
                    onError={handleError}
                />
            </div>
        </div>
    );
}