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
            <div className='flex justify-center items-center rounded-lg bg-gradient-to-r from-[#BB002F] to-[#9D1739] shadow-[0_5px_20px_1px_rgba(0,0,0,0.3)] h-[20rem] sm:w-[95rem] sm:h-[50rem]'>
                <NextImage 
                    ref={imgRef}
                    className="h-[15rem] sm:h-[45rem] sm:w-[90rem] rounded-lg border-2 border-white"
                    src={src}
                    alt={alt}
                    style={{ display: isLoading ? 'none' : 'block' }}
                />
            </div>
        </div>
    );
}