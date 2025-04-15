import Text from '@/components/UI/Text';
import type React from 'react';

interface HeroProps {
  searchTerm: string;
  setSearchTerm: (value: string) => void;
}

export default function Hero({ searchTerm, setSearchTerm }: HeroProps) {
  return (
    <>
      <div className="relative w-full">
        {/* Background image container grows with content */}
        <div className="relative w-full">
          <img
            src="/images/blog/HeroBackground.jpg"
            alt="Hero background"
            className="w-full h-full object-cover absolute inset-0"
          />
          <div className="absolute inset-0 bg-white opacity-70"></div>

          {/* Content centered and responsive */}
          <div className="relative z-10 flex flex-col items-center justify-center px-4 py-6 sm:py-10 md:py-16 min-h-[300px] sm:min-h-[350px] md:min-h-[400px] text-center">
            <Text
              as="h1"
              className="mb-2 font-Raleway font-bold text-[20px] sm:text-[32px] md:text-[40px] leading-tight"
            >
              Search Our <span className="text-teal-700">Blogs</span> for Valuable Insights
            </Text>

            <Text className="max-w-lg mb-6 font-Raleway font-medium text-[14px] sm:text-[16px] md:text-[18px] text-[#78827F]">
              Start your search here for quick answers to your questions. Keep exploring our blog for more helpful content.
            </Text>

            <div className="relative w-full max-w-md">
              <input
                type="text"
                placeholder="Search For Blogs..."
                className="w-full px-4 py-2 pr-14 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-500 text-sm sm:text-base"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <div className="absolute top-0 right-0 h-full flex items-center px-3 bg-[#38B89A] rounded-r-lg">
                <img src="/images/blog/Magnifer.svg" alt="Search" className="h-5 w-5 text-white" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
