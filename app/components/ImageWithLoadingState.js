import { useState } from "react";
import Image from "next/image"

export default function ImageWithLoadingState({ src, alt }) {
    const [isLoading, setIsLoading] = useState(true);
  
    const handleImageLoaded = () => {
      setIsLoading(false);
    };
  
    return (
      <div>
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          <Image
            className="h-[75rem]"
            src={src}
            alt={alt}
            onLoad={handleImageLoaded}
          />
        )}
      </div>
    );
}