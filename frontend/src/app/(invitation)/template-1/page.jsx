'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Instrument_Sans } from 'next/font/google'
import OpenInvitation from './components/open-invitation';
import PhotoGallery from './components/photo-gallery';

const instrument = Instrument_Sans({ subsets: ['latin'] });

export default function Template1Page() {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenInvitation = () => {
    setIsOpen(true);
  };

  return (
    <div className="relative min-h-screen bg-black text-white">
      {/* Background overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/wedding-photos/template-1/bg-1.png" 
          alt="Wedding background"
          className="opacity-80"
          fill
          priority
        />
        {/* Add 20% white overlay */}
        <div className="absolute inset-0 bg-white opacity-20"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-between min-h-screen px-4 py-10 max-w-md mx-auto">
        {/* Title */}
        <div className="text-top pt-16 pb-6 w-full">
            <h1 className={`text-[50px] ${instrument.className} font-bold leading-[1.2]`}>
                Celebrate<br/>Love Together
            </h1>
        </div>
        
        {/* Photo Gallery */}
        <div className="w-full">
          <PhotoGallery />
        </div>
        
        {/* Open Invitation Button */}
        <div className="pt-8 pb-16">
          <OpenInvitation onOpen={handleOpenInvitation} />
        </div>
      </div>
      
      {/* Main Wedding Content - shown after opening invitation */}
      {isOpen && (
        <div className="fixed inset-0 bg-black z-20 overflow-y-auto">
          {/* Here you would include additional wedding details components */}
          <p className="text-center p-8">Wedding details will appear here...</p>
        </div>
      )}
    </div>
  );
}