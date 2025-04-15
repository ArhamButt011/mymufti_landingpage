'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

export default function Answers() {
  const router = useRouter();
  const { id } = router.query;

  const [questionList, setQuestionList] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      // try {
      //   const response = await fetch(
      //     'https://dashboard.mymuftiapp.com/public/api/testing/faqs',
      //     {
      //       method: 'POST',
      //       headers: {
      //         'Content-Type': 'application/json',
      //       },
      //       body: JSON.stringify({}),
      //     }
      //   );

      //   if (!response.ok) {
      //     throw new Error('Failed to fetch question and answer');
      //   }

      //   const data = await response.json();

        // // Find the question with matching index
        // const index = parseInt(Array.isArray(id) ? id[0] : id || '0');
        // const selected = data?.data?.[index - 1]; // Assuming ID starts from 1

      //   if (!selected) {
      //     throw new Error('Question not found');
      //   }

      //   setQuestionList(selected);
      // } catch (err: any) {
      //   setErrorMessage(err.message || 'Something went wrong');
      // } finally {
      //   setLoading(false);
      // }
    // };

    // if (id) fetchData();
      };
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

  if (!questionList) {
    return (
      <div className="max-w-6xl mx-auto my-8">
        <div className="border-l-4 border-r-4 border-l-yellow-500 border-r-yellow-500 bg-yellow-50/50 p-6">
          <p className="text-[30px] text-gray-500 mb-4">No data available</p>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto ml-3 mr-3 mt-[32px] mb-[32px]">
      {/* Question Section */}
      <div className="border-l-4 border-r-4 border-l-emerald-500 border-r-emerald-500 bg-emerald-50/50 p-6">
        <h2 className="text-[26px] md:text-[40px] font-medium text-emerald-600 mb-2">
          Question
        </h2>
        <p className="text-[16px] md:text-[30px] text-gray-700 mb-4">
          {questionList?.question?.title || 'Title not available'}
        </p>
        <p className="text-sm text-gray-500">
          Published On: {questionList?.question?.publishedOn || 'Not available'}
        </p>
      </div>

      {/* Answer Section */}
      <div className="p-6" style={{ backgroundColor: '#78827F0F', marginTop: '16px' }}>
        <h2 className="text-[26px] md:text-[40px] font-medium text-emerald-600 mb-4">
          Answer
        </h2>
        <p className="text-[16px] md:text-gray-700 mb-6">
          {questionList?.answer?.introduction || 'Introduction not available'}
        </p>

        <div className="space-y-4 text-[16px] md:text-[27px] text-gray-700">
          {questionList?.answer?.content?.map((paragraph: string, index: number) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      </div>
    </div>
  );
}
