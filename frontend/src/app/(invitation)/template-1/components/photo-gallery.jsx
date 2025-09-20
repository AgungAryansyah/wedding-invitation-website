"use client";

import React from "react";
import Image from "next/image";
import { useState } from "react";
import { useEffect } from "react";

const images = [
  "/wedding-photos/template-1/gallery-1.jpg",
  "/wedding-photos/template-1/gallery-2.png",
  "/wedding-photos/template-1/gallery-3.png",
];

const PhotoGallery = () => {
  const [index, setIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

 useEffect(() => {
  const interval = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % images.length);
        setIsTransitioning(false);
      }, 300); // Half of transition duration
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const left = images[(index + 0) % images.length];
  const center = images[(index + 1) % images.length];
  const right = images[(index + 2) % images.length];

  return (
    <div className="w-full overflow-hidden">
      <div className="flex justify-center items-center">
        {/* Left image - smaller */}
        <div className={`relative w-[30%] aspect-[106.8/189.78] -mr-4 z-10 transition-opacity duration-600 ${isTransitioning ? 'opacity-40' : 'opacity-100'}`}>
          <Image
            src={left}
            alt="Bride and Groom picture"
            fill
            className="object-cover grayscale rounded-lg"
          />
        </div>

        {/* Center image - larger */}
        <div className={`relative w-[40%] aspect-[161.89/287.8] z-20 transition-opacity duration-600 ${isTransitioning ? 'opacity-40' : 'opacity-100'}`}>
          <Image
            src={center}
            alt="Bride and Groom picture"
            fill
            className="object-cover grayscale rounded-lg"
          />
        </div>

        {/* Right image - smaller */}
        <div className={`relative w-[30%] aspect-[106.8/189.78] -ml-4 z-10 transition-opacity duration-600  ${isTransitioning ? 'opacity-40' : 'opacity-100'}`}>
          <Image
            src={right}
            alt="Bride and Groom picture"
            fill
            className="object-cover grayscale rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default PhotoGallery;
