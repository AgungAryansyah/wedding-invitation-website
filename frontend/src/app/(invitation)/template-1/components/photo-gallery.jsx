"use client";

import React from "react";
import Image from "next/image";

const PhotoGallery = () => {
  return (
    <div className="w-full overflow-hidden">
      <div className="flex justify-center items-center">
        {/* Left image - smaller */}
        <div className="relative w-[30%] aspect-[106.8/189.78] -mr-4 z-10">
          <Image
            src="/wedding-photos/template-1/1.jpg"
            alt="Bride and groom in doorway"
            fill
            className="object-cover grayscale rounded-lg"
          />
        </div>

        {/* Center image - larger */}
        <div className="relative w-[40%] aspect-[161.89/287.8] z-20">
          <Image
            src="/wedding-photos/template-1/2.png"
            alt="Bride and groom portrait"
            fill
            className="object-cover grayscale rounded-lg"
          />
        </div>

        {/* Right image - smaller */}
        <div className="relative w-[30%] aspect-[106.8/189.78] -ml-4 z-10">
          <Image
            src="/wedding-photos/template-1/3.png"
            alt="Bride and groom in hallway"
            fill
            className="object-cover grayscale rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default PhotoGallery;
