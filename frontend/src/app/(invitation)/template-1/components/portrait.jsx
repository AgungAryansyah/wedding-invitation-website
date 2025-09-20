"use client";

import React from "react";
import Image from "next/image";
import { useState } from "react";
import { useEffect } from "react";

const Portrait = ({ imageSrc, alt }) => {
  const [index, setIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % imageSrc.length);
        setIsTransitioning(false);
      }, 300); // Half of transition duration
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const image = imageSrc[(index + 0) % imageSrc.length];

  return (
    <div className="w-full">
      {/* Bottom card - lightest gray (#d9d9d9) */}
      <div className="relative">
        <div className="absolute rounded-xl bg-[#d9d9d9] w-full h-full top-2 left-2"></div>

        {/* Middle card - darker gray (#8b8b8b) */}
        <div className="absolute rounded-xl bg-[#8b8b8b] w-full h-full top-1 left-1"></div>

        {/* Image container on top */}
        <div
          className={`relative rounded-xl overflow-hidden aspect-[162/235] z-10 transition-opacity duration-600 ${isTransitioning ? "opacity-40" : "opacity-100"}`}
        >
          <Image
            src={image}
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
