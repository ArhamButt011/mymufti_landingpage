// FaqContent.tsx
import React from 'react';
import MostAskedQuestions from './MostAskedQuestions';
import RecentBlogs from './RecentBlogs';

interface FaqContentProps {
  searchTerm: string;
}

const FaqContent: React.FC<FaqContentProps> = ({ searchTerm }) => {
  return (
    <div className="container mx-auto px-4 py-8 md:py-12">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <MostAskedQuestions searchTerm={searchTerm} />
        </div>
        <div className="lg:col-span-1">
          <RecentBlogs />
        </div>
      </div>
    </div>
  );
};

export default FaqContent;
