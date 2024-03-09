import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/legacy/image';

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
        <div className='flex justify-center'>
            {isLoading && <p>Loading...</p>}
            {/* Use the Next.js Image component alias */}
            <div className='md:w-4/6 py-[1rem] md:rounded-lg flex justify-center items-center bg-gradient-to-r from-[#BB002F] to-[#9D1739] shadow-[0_5px_20px_1px_rgba(0,0,0,0.3)] '>
                <Image 
                    ref={imgRef}
                    src={src} 
                    alt={alt}
                    style={{ display: isLoading ? 'none' : 'block'}}
                    onError={handleError}
                    
                />
            </div>
        </div>
    );
}