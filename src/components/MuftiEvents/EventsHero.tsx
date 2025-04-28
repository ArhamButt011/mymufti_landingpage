'use client';

import React from 'react';
import Text from '@/components/UI/Text';

const EventsHero = () => {
  return (
    <div className="relative w-full h-96">  
      {/* Background Image */}
      <img
        src="/images/quran.svg"
        alt="Event Background"
        className="w-screen h-full object-cover absolute inset-0"
      />
    </div>
  );
};

export default EventsHero;
