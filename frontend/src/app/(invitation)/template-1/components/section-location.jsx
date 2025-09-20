"use client";

import React from "react";
import { Instrument_Sans } from "next/font/google";

const instrument = Instrument_Sans({ subsets: ["latin"] });

const SectionLocation = ({ isEmbedded = false }) => {
  const containerClasses = isEmbedded
    ? "bg-black text-black"
    : "min-h-black bg-white text-black";

  const handleSeeDetail = () => {
    // Open Google Maps link for the location
    const mapsUrl =
      "https://maps.google.com/?q=Universitas+Brawijaya+Malang+Jawa+Timur";
    window.open(mapsUrl, "_blank");
  };

  return (
    <div className={containerClasses}>
      {/* Content container */}
      <div
        className={`${isEmbedded ? "" : "relative z-10"} max-w-md bg-white mx-auto px-6 py-10 flex flex-col justify-center`}
      >
        {/* Section Title */}
        <h2
          className={`${instrument.className} text-2xl font-bold text-center mb-6 text-[434343]`}
        >
          Location
        </h2>

        {/* Location Card */}
        <div className="flex items-center flex-row justify-center">
          {/* Left side - Gedung info */}
          <div className="flex-1 text-center px-2">
            <p className={`${instrument.className} text-[#434343] text-xs`}>
              Gedung
            </p>
            <p className={`${instrument.className} text-[#434343] text-xs`}>
              Samantha
            </p>
            <p className={`${instrument.className} text-[#434343] text-xs`}>
              Krida
            </p>
          </div>

          {/* Map Placeholder */}
          <div className="bg-gray-300 rounded-xl w-1/2 aspect-square mb-8 px-8 flex items-center justify-center mx-auto">
            <div className="text-gray-500 text-lg">Map View</div>
          </div>

          {/* Right side - University info */}
          <div className="flex-1 text-center px-2">
            <p className={`text-[#434343] text-xs`}>Universitas</p>
            <p className={`text-[#434343] text-xs`}>Brawijaya</p>
            <p className={`text-[#434343] text-xs`}>Malang, Jawa</p>
            <p className={`text-[#434343] text-xs`}>Timur</p>
          </div>
        </div>

        {/* See Detail Button */}
        <div className="text-center">
          <button
            onClick={handleSeeDetail}
            className="bg-[#434343] text-white px-4 py-1 rounded-sm text-xs"
          >
            See Detail
          </button>
        </div>
      </div>
    </div>
  );
};

export default SectionLocation;
