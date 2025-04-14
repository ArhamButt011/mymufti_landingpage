import React, { useState } from 'react';
import FaqHero from '@/components/Faqs/FaqHero';
import DefaultLayout from '@/components/Layout/DefaultLayout';
import Answers from '@/components/Faqs/Answers';

const FaqsPage = () => {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <DefaultLayout>
      <FaqHero/>
      <Answers/>
    </DefaultLayout>
  );
};

export default FaqsPage;
