"use client";

import React from "react";
import Image from "next/image";
import { Instrument_Sans } from "next/font/google";
import PhotoGallery from "./photo-gallery";
import OpenInvitation from "./open-invitation";

const instrument = Instrument_Sans({ subsets: ["latin"] });

const HeroSection = ({ onOpenInvitation }) => {
  return (
    <div className="bg-black">
    <div className="relative min-h-screen max-w-md mx-auto bg-white text-white">
      {/* Background overlay */}
      <div className="absolute inset-0 z-10">
        <Image
          src="/wedding-photos/template-1/bg-1.png"
          alt="Wedding background"
          className="opacity-80"
          fill
          priority
          style={{
            objectFit: "cover",
            objectPosition: "center",
          }}
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black opacity-30"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-between min-h-screen max-w-md mx-auto">
        <div className="flex-1 flex items-center w-full px-4">
          <h1
            className={`text-[3rem] ${instrument.className} font-bold leading-tight`}
          >
            Celebrate
            <br />
            Love Together
          </h1>
        </div>

        {/* Photo Gallery */}
        <div className="w-full px-4">
          <PhotoGallery />
        </div>

        {/* Open Invitation Button */}
        <div className="flex-1 flex items-center justify-center w-full px-4">
          <OpenInvitation onOpen={onOpenInvitation} />
        </div>
      </div>
    </div>
    </div>
  );
};

export default HeroSection;
