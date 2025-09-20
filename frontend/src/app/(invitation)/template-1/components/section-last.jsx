import React from "react";
import { Instrument_Sans } from "next/font/google";

const instrument = Instrument_Sans({
  subsets: ["latin"],
  style: ["normal", "italic"],
});

const SectionLast = () => {
  return (
    <div className="flex bg-black mx-auto justify-center">
      <div className="max-w-md w-full bg-[#333333] text-center py-6 px-6 text-sm">
        <p className={`${instrument.className} italic`}>
          "Our wedding day is just the beginning of a long journey filled with
          dreams, hopes, and love. We humbly ask for your prayers and blessings,
          because with your good wishes by our side, we believe every step ahead
          will be more meaningful."
        </p>
      </div>
    </div>
  );
};

export default SectionLast;
