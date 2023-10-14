import React, { useState, useEffect, useRef } from 'react';
import NextImage from 'next/image';  // Import with alias

export default function ImageWithLoadingState({ src, alt }) {
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

        //if theres and image element and its done loading
        if (imgRef.current && imgRef.current.complete) {
            handleImageLoaded();
            return;
        }
        //when successfully loaded fire function
        img.onload = handleImageLoaded;
        img.onerror = handleError;
        img.src = src;

    }, [src]);

    return (
        <div>
            {isLoading && <p>Loading...</p>}
            {/* Use the Next.js Image component alias */}
            <NextImage 
                ref={imgRef}
                className="h-[15rem] sm:h-[55rem]"
                src={src}
                alt={alt}
                style={{ display: isLoading ? 'none' : 'block' }}
            />
        </div>
    );
}