'use client';

import { useEffect, useState } from 'react';
import { ArrowRight, HelpCircle } from 'lucide-react';
import Pagination from '@/components/blogs/Pagination';
import { useRouter } from 'next/router';
interface Question {
  id: number;
  text: string;
}

interface Props {
  searchTerm: string;
}

export default function MostAskedQuestions({ searchTerm }: Props) {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        setIsLoading(true);
        const response = await fetch(
          'https://dashboard.mymuftiapp.com/public/api/testing/faqs', 
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              page: currentPage, // Include the current page in the body for pagination
            }),
          }
        );
  
        if (!response.ok) throw new Error('Failed to fetch questions');
  
        const data = await response.json();
  
        // Map API response to local structure
        const formattedQuestions = (data?.data || []).map(
          (q: { question: string }, index: number) => ({
            id: index + 1 + (currentPage - 1) * 10,
            text: q.question,
          })
        );
  
        setQuestions(formattedQuestions);
        setTotalPages(data?.total_pages || 1);
      } catch (err: any) {
        setError(err.message || 'Something went wrong');
      } finally {
        setIsLoading(false);
      }
    };
  
    fetchQuestions();
  }, [currentPage]);
  
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

const router = useRouter();
  const handleQuestionClick = (id: number) => {
   
router.push(`/faqs-answer/${id}`); // Navigate to the question details page
    console.log('Clicked question ID:', id);

  };

  const filteredQuestions = searchTerm
    ? questions.filter((q) =>
        q.text.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : questions;

  if (error) {
    return (
      <div className="bg-gray-100 p-6 rounded-lg font-raleway">
        <h2 className="text-[38px] font-bold mb-4">Most Asked Questions</h2>
        <div className="p-4 bg-red-50 text-red-500 rounded-md">
          Error loading questions: {error}
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-100 p-6 rounded-lg font-raleway">
      <h2 className="text-[21px] md:text-[38px] font-bold mb-4">
        Most Asked Questions
      </h2>
      <div className="space-y-3">
        {isLoading ? (
          Array(5)
            .fill(0)
            .map((_, index) => (
              <div
                key={`skeleton-${index}`}
                className="bg-white p-4 rounded-lg shadow-sm h-[110px] flex items-center"
              >
                <div className="flex items-center gap-3 w-full">
                  <div className="h-10 w-10 rounded-full bg-gray-200 animate-pulse"></div>
                  <div className="h-5 w-full bg-gray-200 rounded animate-pulse"></div>
                </div>
              </div>
            ))
        ) : filteredQuestions.length > 0 ? (
          filteredQuestions.map((question) => (
            <div
              key={question.id}
              className="bg-white px-4 py-3 rounded-lg shadow-sm flex items-center justify-between cursor-pointer hover:shadow-md transition-shadow min-h-[67px] h-[81px]"
              onClick={() => handleQuestionClick(question.id)}
            >
              <div className="flex items-center gap-3">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-white flex items-center justify-center">
                  <HelpCircle className="w-6 h-6 text-gray-500" />
                </div>
                <p className="text-[14px] md:text-[28px] font-medium leading-[15px] md:leading-[33px]">
                  {question.text}
                </p>
              </div>
              <ArrowRight className="w-5 h-5 text-emerald-500 flex-shrink-0 stroke-[1.5] rotate-[315deg]" />
            </div>
          ))
        ) : (
          <div className="p-4 text-center text-gray-500 bg-white rounded-lg">
            No questions found for your search.
          </div>
        )}
      </div>

      {totalPages > 1 && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      )}
    </div>
  );
}
