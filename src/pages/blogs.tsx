import React, { useState } from 'react';
import DefaultLayout from '@/components/Layout/DefaultLayout';
import Hero from '@/components/blogs/Hero';
import BlogCards from '@/components/blogs/blogcards';

const Blogs = () => {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <DefaultLayout>
      <Hero searchTerm={searchTerm} setSearchTerm={setSearchTerm} /> 
      <BlogCards searchTerm={searchTerm} />
    </DefaultLayout>
  );
};

export default Blogs;
