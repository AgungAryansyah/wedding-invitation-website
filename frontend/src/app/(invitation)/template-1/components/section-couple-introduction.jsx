'use client';

import { Instrument_Sans } from 'next/font/google';
import Portrait from './portrait';

const instrument = Instrument_Sans({ subsets: ['latin'] });

const CoupleIntroduction = ({ forwardedRef }) => {
  return (
    <div 
      ref={forwardedRef}
      className="min-h-screen bg-white text-black"
    >
      {/* Couple Introduction - Pure White Background */}
      <div className="max-w-3xl mx-auto px-6 py-16">
        {/* Bride Section - Top Left */}
        <div className="flex mb-20">
          <div className="w-1/2 pr-4">
            <Portrait 
              imageSrc="/wedding-photos/template-1/portrait-bride.png"
              alt="Natalia in elegant dress"
            />
          </div>
          <div className="w-1/2 flex flex-col justify-top pl-6">
            <h2 className={`${instrument.className} text-4xl font-bold text-[#333333]`}>
              Natalia
            </h2>
            <p className="text-neutral-500 italic mt-3 text-base">
              daughter of Mr. Xxx Xyy<br />
              and Mrs. Xxx Xyy
            </p>
          </div>
        </div>

        {/* Groom Section - Bottom Right */}
        <div className="flex justify-end">
          <div className="w-1/2 flex flex-col justify-top items-bold pr-6 text-right ">
            <h2 className={`${instrument.className} text-4xl font-bold text-[#333333]`}>
              Reynaldo
            </h2>
            <p className="text-neutral-500 italic mt-3 text-base">
              son of Mr. Xxx Xyy<br />
              and Mrs. Xxx Xyy
            </p>
          </div>
          <div className="w-1/2 pr-4">
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
