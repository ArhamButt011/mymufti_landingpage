'use client';

import { useEffect, useState } from 'react';
import Text from '@/components/UI/Text';

interface AnswerProps {
  params: {
    id: string;
  };
}

export default function AnswerPage({ params }: AnswerProps) {
  const id = params.id;

  const [questionData, setQuestionData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  useEffect(() => {
    const fetchQuestion = async () => {
      try {
        const res = await fetch('https://dashboard.mymuftiapp.com/public/api/testing/faqs', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });

        if (!res.ok) {
          throw new Error('Failed to fetch FAQ data');
        }

        const data = await res.json();

        // Find the item with exact ID match
        const question = data.find((item: any) => item.id === parseInt(id));

        if (!question) {
          throw new Error('Question not found');
        }

        setQuestionData(question);
      } catch (error: any) {
        setErrorMessage(error.message || 'Something went wrong');
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchQuestion();
    }
  }, [id]);

  if (loading) {
    return (
      <div className="max-w-6xl mx-auto my-8">
        <div className="border-l-4 border-r-4 border-l-emerald-500 border-r-emerald-500 bg-emerald-50/50 p-6">
          <p className="text-[30px] text-gray-500 mb-4">Loading...</p>
        </div>
      </div>
    );
  }

  if (errorMessage) {
    return (
      <div className="max-w-6xl mx-auto my-8">
        <div className="border-l-4 border-r-4 border-l-red-500 border-r-red-500 bg-red-50/50 p-6">
          <p className="text-[30px] text-gray-500 mb-4">Error: {errorMessage}</p>
        </div>
      </div>
    );
  }


  return (
    <div className="max-w-6xl mx-auto ml-3 mr-3 mt-[32px] mb-[32px]">
      {/* Question */}
      <div className="border-l-4 border-r-4 border-l-emerald-500 border-r-emerald-500 bg-emerald-50/50 p-6">
        <Text as="h2" className="text-[26px] md:text-[40px] font-medium text-emerald-600 mb-2">
          Question
        </Text>
        <Text as="p" className="text-[16px] md:text-[30px] text-gray-700 mb-4">
          {questionData?.question || 'No question available'}
        </Text>
        <Text as="p" className="text-sm text-gray-500">
          Published On: {questionData?.publishedOn || 'Not available'}
        </Text>
      </div>

      {/* Answer */}
      <div className="p-6" style={{ backgroundColor: '#78827F0F', marginTop: '16px' }}>
        <Text as="h2" className="text-[26px] md:text-[40px] font-medium text-emerald-600 mb-4">
          Answer
        </Text>
        <Text as="p" className="space-y-4 text-[16px] md:text-[27px] text-gray-700">
          {questionData?.answer || 'No answer provided'}
        </Text>
      </div>
    </div>
  );
}
