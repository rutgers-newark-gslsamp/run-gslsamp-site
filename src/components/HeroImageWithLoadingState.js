import React, { useState } from 'react'; 
import Image from 'next/image'; //next/legacy/image deprecated after next 13+ versions

export default function HeroImageWithLoadingState({ src, alt, width =1056, height =576}) {
    const [isLoading, setIsLoading] = useState(true);
    //const imgRef = useRef(null); //next/image does not suppport ref

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
            <div className='flex justify-center items-center'>
                <Image
                    src={src} 
                    alt={alt}
                    width={width}
                    height={height}
                    onLoad={handleImageLoaded}
                    placeholder='blur'
                    onError={handleError}
                />
            </div>
        </div>
    );
}
