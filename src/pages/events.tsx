import React, { useState } from 'react';
import DefaultLayout from '@/components/Layout/DefaultLayout';
import Hero from '@/components/blogs/Hero';
import BlogCards from '@/components/blogs/blogcards';
import { AskQuestion } from '@/components/MuftiEvents/AskQuestion';

const Events = () => {
  

  return (
    
    <AskQuestion 
      isOpen={true} 
      onClose={() => console.log('Closed')} 
      onSubmit={(data) => console.log('Submitted', data)} 
    />
  );
};

export default Events;
