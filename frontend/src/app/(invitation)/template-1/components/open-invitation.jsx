'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Rubik } from 'next/font/google'

const rubik = Rubik({ subsets: ['latin'] });

const OpenInvitation = ({ onOpen }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.button
      className="flex items-center justify-center gap-2 bg-[#1e1e1e] text-[#ffffff] py-3 px-7 rounded-full shadow-lg hover:shadow-xl transition-all"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onOpen}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <span className="font-medium text-[16px] text-[ffffff] ${rubik.variable}">Open Invitation</span>
      <motion.span
        animate={{ y: isHovered ? [-1, 2, -1] : 0 }}
        transition={{ repeat: isHovered ? Infinity : 0, duration: 1 }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect x="2" y="4" width="20" height="16" rx="2" />
          <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
        </svg>
      </motion.span>
    </motion.button>
  );
};

export default OpenInvitation;