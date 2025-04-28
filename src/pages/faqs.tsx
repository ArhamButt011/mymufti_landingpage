// faq.tsx
import React, { useState } from 'react';
import FaqHero from '@/components/Faqs/FaqHero';
import FaqContent from '@/components/Faqs/FaqContent';
import DefaultLayout from '@/components/Layout/DefaultLayout';

const FaqsPage = () => {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <DefaultLayout>
      <FaqHero searchTerm={searchTerm} onSearchChange={setSearchTerm} />
      <FaqContent searchTerm={searchTerm} />
    </DefaultLayout>
  );
};

export default FaqsPage;
