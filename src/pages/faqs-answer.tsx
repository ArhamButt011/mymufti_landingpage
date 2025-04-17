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
          body: JSON.stringify({ page: 1 }),
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
      <FaqHero />

      <div className="max-w-6xl mx-auto p-6">
        {loading ? (
          <Text className="text-xl text-gray-500">Loading...</Text>
        ) : errorMessage ? (
          <Text className="text-xl text-red-500">Error: {errorMessage}</Text>
        ) : (
          <>
            {/* Question */}
            <div className="bg-emerald-100 border-l-4 border-emerald-500 p-6 mb-6 rounded-lg shadow">
              <Text as="h2" className="text-2xl md:text-4xl font-semibold text-emerald-700 mb-2">
                Question
              </Text>
              <Text as="p" className="text-lg md:text-2xl text-gray-800 mb-1">
                {questionData?.question}
              </Text>
              <Text className="text-sm text-gray-500">Published On: {questionData?.date}</Text>
            </div>

            {/* Answer */}
            <div className="bg-white border border-gray-200 p-6 rounded-lg shadow">
              <Text as="h2" className="text-2xl md:text-4xl font-semibold text-emerald-700 mb-4">
                Answer
              </Text>
              <ReactMarkdown
                components={{
                  p: ({ node, ...props }) => <p className="prose-p:mb-4 text-gray-800" {...props} />,
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
