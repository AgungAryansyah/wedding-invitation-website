"use client";

import React from "react";
import { useState, useRef } from "react";
import HeroSection from "./components/section-hero";
import CoupleIntroduction from "./components/section-couple-introduction";
import SectionSchedule from "./components/section-schedule";
import SectionLocation from "./components/section-location";
import SectionCountdown from "./components/section-countdown";
import SectionRsvp from "./components/section-rsvp";
import SectionLast from "./components/section-last";

export default function Template1Page() {
  const [isOpen, setIsOpen] = useState(false);
  const coupleIntroRef = useRef(null);

  const handleOpenInvitation = () => {
    if (coupleIntroRef.current) {
      coupleIntroRef.current.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(true);
  };

  return (
    <>
      <HeroSection onOpenInvitation={handleOpenInvitation} />

      {isOpen && (
        <>
          <CoupleIntroduction forwardedRef={coupleIntroRef} />
          <SectionSchedule isEmbedded={true} />
          <SectionLocation isEmbedded={true} />
          <SectionCountdown isEmbedded={true} />
          <SectionRsvp isEmbedded={true} />
          <SectionLast></SectionLast>
        </>
      )}
    </>
  );
}
