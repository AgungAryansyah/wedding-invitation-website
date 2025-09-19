"use client";

import React from "react";
import { useState, useEffect } from "react";
import { Instrument_Sans } from "next/font/google";
import Image from "next/image";

const instrument = Instrument_Sans({ subsets: ["latin"] });

const TARGET_DATE = new Date("2025-10-12T20:00:00");

const SectionCountdown = ({ isEmbedded = false }) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date();
      const difference = TARGET_DATE.getTime() - now.getTime();

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
        );
        const minutes = Math.floor(
          (difference % (1000 * 60 * 60)) / (1000 * 60),
        );
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    calculateTimeLeft();

    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, []);

  const containerClasses = isEmbedded
    ? "bg-black text-white"
    : "min-h-screen bg-black text-white";

  return (
    <div className={containerClasses}>
      {/* Content container */}
      <div
        className={`${isEmbedded ? "relative" : "relative z-0"} flex items-center justify-center mx-auto px-6 py-16`}
      >
        {/* Background image overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/wedding-photos/template-1/bg-countdown.png"
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

        <div className="flex flex-col max-w-md justify-center items-center relative z-10">
          {/* Section Title */}
          <h2
            className={`${instrument.className} text-2xl font-bold text-center mb-8 text-white`}
          >
            Let The Countdown Begin
          </h2>

          {/* Countdown Display */}
          <div className="flex flex-row justify-center items-center space-x-8 md:space-x-12">
            {/* Days */}
            <div className="text-center w-1/4">
              <div
                className={`${instrument.className}-mono text-3xl px-4 font-bold text-white`}
              >
                {timeLeft.days.toString().padStart(2, "0")}
              </div>
              <div className="text-sm md:text-base text-gray-300">Days</div>
            </div>

            {/* Hours */}
            <div className="text-center w-1/4">
              <div
                className={`${instrument.className}-mono text-3xl px-4 font-bold text-white`}
              >
                {timeLeft.hours.toString().padStart(2, "0")}
              </div>
              <div className="text-sm md:text-base text-gray-300">Hours</div>
            </div>

            {/* Minutes */}
            <div className="text-center w-1/4">
              <div
                className={`${instrument.className}-mono text-3xl px-4 font-bold text-white`}
              >
                {timeLeft.minutes.toString().padStart(2, "0")}
              </div>
              <div className="text-sm md:text-base text-gray-300">Minutes</div>
            </div>

            {/* Seconds */}
            <div className="text-center w-1/4">
              <div
                className={`${instrument.className}-mono text-3xl px-4 font-bold text-white`}
              >
                {timeLeft.seconds.toString().padStart(2, "0")}
              </div>
              <div className="text-sm md:text-base text-gray-300">Seconds</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionCountdown;
