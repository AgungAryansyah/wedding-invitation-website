"use client";

import React from "react";
import { Instrument_Sans } from "next/font/google";
import Portrait from "./portrait";

const instrument = Instrument_Sans({ subsets: ["latin"] });

const CoupleIntroduction = ({ forwardedRef }) => {
  return (
    <div ref={forwardedRef} className="relative bg-white text-black flex-col">
      {/* Couple Introduction - Pure White Background */}
      <div className="relative min-h-2screen/3 flex-1 max-w-md mx-auto px-4 py-12 flex flex-col justify-center">
        {/* Bride Section - Top Left */}
        <div className="w-full flex mb-6">
          <div className="w-1/2 pr-3">
            <Portrait
              imageSrc="/wedding-photos/template-1/portrait-bride.png"
              alt="Natalia in elegant dress"
            />
          </div>
          <div className="w-1/2 flex flex-col justify-top pl-3">
            <h2
              className={`${instrument.className} text-4xl font-bold text-[#333333] mb-2`}
            >
              Natalia
            </h2>
            <p className="text-neutral-500 italic text-base leading-relaxed">
              daughter of Mr. Xxx Xyy
              <br />
              and Mrs. Xxx Xyy
            </p>
          </div>
        </div>

        {/* Groom Section - Bottom Right */}
        <div className="flex justify-end">
          <div className="w-1/2 flex flex-col justify-top items-end pr-3 text-right">
            <h2
              className={`${instrument.className} text-4xl font-bold text-[#333333] mb-2`}
            >
              Reynaldo
            </h2>
            <p className="text-neutral-500 italic leading-relaxed">
              son of Mr. Xxx Xyy
              <br />
              and Mrs. Xxx Xyy
            </p>
          </div>
          <div className="w-1/2 pl-3">
            <Portrait
              imageSrc="/wedding-photos/template-1/portrait-groom.png"
              alt="Reynaldo in formal suit"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoupleIntroduction;
