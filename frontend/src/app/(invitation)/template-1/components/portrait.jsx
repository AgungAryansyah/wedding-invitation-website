'use client';

import Image from 'next/image';

const Portrait = ({ imageSrc, alt }) => {
  return (
    <div className="w-full max-w-md mx-auto">
      {/* Bottom card - lightest gray (#d9d9d9) */}
      <div className="relative">
        <div className="absolute rounded-xl bg-[#d9d9d9] w-full h-full top-2 left-2"></div>
        
        {/* Middle card - darker gray (#8b8b8b) */}
        <div className="absolute rounded-xl bg-[#8b8b8b] w-full h-full top-1 left-1"></div>
        
        {/* Image container on top */}
        <div className="relative rounded-xl overflow-hidden aspect-[162/235] z-10">
          <Image
            src={imageSrc}
            alt={alt}
            fill
            className="object-cover grayscale"
            sizes="(max-width: 768px) 90vw, 500px"
            priority
          />
        </div>
      </div>
    </div>
  );
};

export default Portrait;
