// pages/faqs-answer.tsx

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import FaqHero from '@/components/Faqs/FaqHero';
import DefaultLayout from '@/components/Layout/DefaultLayout';
import Text from '@/components/UI/Text';
import ReactMarkdown from 'react-markdown';

const FaqsAnswerPage = () => {
  const router = useRouter();
  const { id } = router.query;

  const [questionData, setQuestionData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  useEffect(() => {
    if (!id) return;

    const fetchFaqs = async () => {
      try {
        const res = await fetch('https://dashboard.mymuftiapp.com/public/api/testing/faqs', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({  }),
        });

        if (!res.ok) throw new Error('Failed to fetch FAQs');

        const result = await res.json();

        console.log(id)

        const match = result.data.find((item: any) => item.id === parseInt(id as string));

        if (!match) throw new Error('Question not found');
        setQuestionData(match);
      } catch (error: any) {
        setErrorMessage(error.message || 'Something went wrong');
      } finally {
        setLoading(false);
      }
    };

    fetchFaqs();
  }, [id]);

  return (
    <DefaultLayout>
      <FaqHero 
        searchTerm="" 
        onSearchChange={(value: string) => console.log('Search term changed:', value)} 
      />

      <div className="max-w-6xl mx-auto p-6">
        {loading ? (
          <div className="max-w-6xl mx-auto my-8">
          <div className="border-l-4 border-r-4 border-l-emerald-500 border-r-emerald-500 bg-emerald-50/50 p-6">
            <p className="text-[30px] text-gray-500 mb-4">Loading...</p>
          </div>
        </div>
        ) : errorMessage ? (
          <div className="max-w-6xl mx-auto my-8">
        <div className="border-l-4 border-r-4 border-l-red-500 border-r-red-500 bg-red-50/50 p-6">
          <p className="text-[30px] text-gray-500 mb-4">Error: {errorMessage}</p>
        </div>
      </div>
        ) : (
          <>
            {/* Question */}
            <div className="border-l-4 border-r-4 border-l-emerald-500 border-r-emerald-500 bg-emerald-50/50 p-6">
              <Text as="h2" className="text-[26px] md:text-[40px] font-medium text-emerald-600 mb-2">
                Question
              </Text>
              <Text as="p" className="text-lg md:text-2xl text-gray-800 mb-1text-[16px] md:text-[30px] text-gray-700 mb-4">
                {questionData?.question}
              </Text>
              <Text className="text-sm text-gray-500">Published On: {questionData?.date}</Text>
            </div>

            {/* Answer */}
            <div className="p-6" style={{ backgroundColor: '#78827F0F', marginTop: '16px' }}>
              <Text as="h2" className="text-[26px] md:text-[40px] font-medium text-emerald-600 mb-4">
                Answer
              </Text>
              <ReactMarkdown
                components={{
                  p: ({ node, ...props }) => <p className="prose-p:space-y-4 text-[16px] text-gray-700" {...props} />,
                  div: ({ node, ...props }) => <div className="prose max-w-none" {...props} />,
                }}
              >
                {questionData?.answer || 'No answer provided'}
              </ReactMarkdown>
            </div>
          </>
        )}
      </div>
    </DefaultLayout>
  );
};

export default FaqsAnswerPage;
