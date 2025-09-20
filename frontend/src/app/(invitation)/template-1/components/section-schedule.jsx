"use client";

import React from "react";
import { Instrument_Sans } from "next/font/google";
import Image from "next/image";

const instrument = Instrument_Sans({ subsets: ["latin"] });

const SectionSchedule = ({ isEmbedded = false }) => {
  return (
    <div className="max-h-screen bg-black">
    <div
      className={`${isEmbedded ? "py-8" : ""} max-h-screen max-w-md bg-black text-white mx-auto relative`}
    >
      {/* Dark overlay with texture */}
      {isEmbedded && (
        <div className="absolute max-w-md mx-auto inset-0 z-0">
          <Image
            src="/wedding-photos/template-1/bg-schedule.png"
            alt="Wedding background"
            className="opacity-40"
            fill
            priority
            style={{
              objectFit: "cover",
              objectPosition: "center",
            }}
            sizes="100vw"
          />
        </div>
      )}

      {/* Content container */}
      <div
        className={`${isEmbedded ? "relative z-10" : "relative z-10"} w-full mx-auto flex flex-col px-6 ${isEmbedded ? "py-4" : "py-8"}`}
      >
        {/* Section Title */}
        <h2
          className={`${instrument.className} ${isEmbedded ? "text-2xl" : "text-4xl"} font-bold text-center ${isEmbedded ? "mb-6" : "mb-8"}`}
        >
          Our Special Day's Schedule
        </h2>

        {/* Schedule Items Container */}
        <div className="flex flex-col w-full gap-4">
          {/* Schedule Item */}
          <div className="flex flex-row items-center justify-center">
            {/* Date */}
            <div className="text-center md:text-center mb-2 md:mb-0">
              <h3
                className={`${instrument.className} ${isEmbedded ? "text-2xl" : "text-3xl"} font-bold`}
              >
                12 Aug '25
              </h3>
              <p
                className={`${instrument.className} text-xs text-center text-[ffffff] mt-1`}
              >
                Date
              </p>
            </div>

            {/* Divider */}
            <div className="h-12 w-px bg-white mx-4"></div>

            {/* Time */}
            <div className="text-center md:text-center">
              <h3
                className={`${instrument.className} ${isEmbedded ? "text-2xl" : "text-3xl"} font-bold`}
              >
                08:00 PM
              </h3>
              <p
                className={`${instrument.className} text-xs text-center text-[ffffff] mt-1`}
              >
                Time
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default SectionSchedule;
