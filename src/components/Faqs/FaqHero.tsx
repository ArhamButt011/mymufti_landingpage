'use client';

import { useState } from 'react';
import Text from '@/components/UI/Text';
import FaqContent from './FaqContent';

export default function FaqHero() {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className="relative w-full">
      {/* Background image container grows with content */}
      <div className="relative w-full">
        <img
          src="/images/blog/HeroBackground.jpg"
          alt="Hero background"
          className="w-full h-full object-cover absolute inset-0"
        />
        <div className="absolute inset-0 bg-white opacity-70"></div>

        {/* Content centered with padding and responsive min-height */}
        <div className="relative z-10 flex flex-col items-center justify-center px-4 py-6 sm:py-10 md:py-16 min-h-[300px] sm:min-h-[350px] md:min-h-[400px] text-center">
          <Text
            as="h1"
            className="mb-2 font-Raleway font-bold text-[34px] md:text-[48px] leading-tight"
          >
            Islamic <span className="text-teal-700">Questions</span> & Answers
          </Text>

          <Text className="max-w-[800px] mb-6 font-Raleway font-medium text-[14px] sm:text-[16px] md:text-[18px] text-[#78827F]">
            Explore and search quick answers to questions that you may have. Can’t find what you are looking for? Check
            out our Full Conversation
          </Text>

          {/* Enlarged Search Bar */}
          <div className="relative w-full max-w-[900px]">
            <input
              type="text"
              placeholder="Search For Answers..."
              className="w-full h-[50px] px-6 pr-16 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-500 text-lg sm:text-xl"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <div className="absolute top-0 right-0 h-full flex items-center px-4 bg-[#38B89A] rounded-r-lg">
              <img src="/images/blog/Magnifer.svg" alt="Search" className="h-6 w-6 text-white" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
