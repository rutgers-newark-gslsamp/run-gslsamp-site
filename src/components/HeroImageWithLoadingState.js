import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/legacy/image';

export default function HeroImageWithLoadingState({ src, alt }) {
    const [isLoading, setIsLoading] = useState(true);
    const imgRef = useRef(null);

    const handleImageLoaded = () => {
        setIsLoading(false);
    };

    const handleError = () => {
        setIsLoading(false);
        console.error('Failed to load image');
    };

    useEffect(() => {
        // Use native Image constructor for preloading
        const img = new window.Image();

        // If there's an image element and it's done loading
        if (imgRef.current && imgRef.current.complete) {
            handleImageLoaded();
            return;
        }
        // When successfully loaded, fire function
        img.onload = handleImageLoaded;
        img.onerror = handleError;
        img.src = src;

    }, [src]);

    return (
        <div className='flex justify-center'>
            {isLoading && <p>Loading...</p>}
            {/* Use the Next.js Image component alias */}
            <div className='flex justify-center items-center'>{/*md:border-red-700 md:border-x-8 md:border-b-4*/}
                <Image 
                    ref={imgRef}
                    src={src} 
                    alt={alt}
                    style={{ display: isLoading ? 'none' : 'block' }}
                    onError={handleError}
                />
            </div>
        </div>
    );
}
