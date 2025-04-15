import React, { useState } from 'react';
import FaqHero from '@/components/Faqs/FaqHero';
import FaqContent from '@/components/Faqs/FaqContent';
import DefaultLayout from '@/components/Layout/DefaultLayout';

const FaqsPage = () => {
  return (
    <DefaultLayout>
      <FaqHero />
      <FaqContent />
      <FaqHero />
      <FaqContent />
    </DefaultLayout>
  );
};

export default FaqsPage;
