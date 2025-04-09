import Text from '@/components/UI/Text';
import type React from 'react';

interface HeroProps {
  searchTerm: string;
  setSearchTerm: (value: string) => void;
}

export default function Hero({ searchTerm, setSearchTerm }: HeroProps) {
  return (
    <div className="relative w-full h-[300px] overflow-hidden mt-[24px]">
      {/* Background image container */}
      <div className="relative w-full h-[500px]">
        <img
          src="/images/blog/HeroBackground.jpg"
          alt="Hero background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-white opacity-70"></div>
      </div>

      {/* Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center px-4">
        <Text as="h1" className="text-center mb-2 font-Raleway font-weight-700 text[44px]">
          Search Our <span className="text-teal-700">Blogs</span> for Valuable Insights
        </Text>

        <Text className="text-center max-w-lg mb-6 text-Raleway font-weight-500 text-[24px] text-[#78827F]">
          Start your search here for quick answers to your questions. Keep exploring our blog for more helpful content.
        </Text>

        <div className="relative w-full max-w-md">
          <input
            type="text"
            placeholder="Search For Blogs..."
            className="w-full px-4 py-2 pr-14 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-500"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <div className="absolute top-0 right-0 h-full flex items-center px-3 bg-teal-500 rounded-r-lg">
            <img src="/images/blog/Magnifer.svg" alt="Search" className="h-5 w-5 text-white" />
          </div>
        </div>
      </div>
    </div>
  );
}
