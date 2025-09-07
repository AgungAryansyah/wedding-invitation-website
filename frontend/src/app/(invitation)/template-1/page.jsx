'use client';

import { useState, useRef } from 'react';
import HeroSection from './components/section-hero';
import CoupleIntroduction from './components/section-couple-introduction';

export default function Template1Page() {
  const [isOpen, setIsOpen] = useState(false);
  const coupleIntroRef = useRef(null);

  const handleOpenInvitation = () => {
    if (coupleIntroRef.current) {
      coupleIntroRef.current.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(true);
  };

  return (
    <>
      <HeroSection onOpenInvitation={handleOpenInvitation} />
      
      {isOpen && (
        <CoupleIntroduction forwardedRef={coupleIntroRef} />
      )}
    </>
  );
}