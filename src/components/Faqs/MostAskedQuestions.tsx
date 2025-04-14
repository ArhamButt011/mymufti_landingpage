'use client';

import { useState } from 'react';
import { ArrowRight, HelpCircle } from 'lucide-react';
import Pagination from '@/components/blogs/Pagination';

interface Question {
  id: number;
  text: string;
}

interface Props {
  searchTerm: string;
}

export default function MostAskedQuestions({ searchTerm }: Props) {
  const [questions] = useState<Question[]>([
    { id: 1, text: "Is memorizing the holy quran a means of increases one's intelligence" },
    { id: 2, text: 'Is Music Haram' },
    { id: 3, text: 'How To Get ghussal for major impurity and what are the required things?' },
    { id: 4, text: 'Is fasting in the month of rajab recommended?' },
    { id: 5, text: 'Is masterbation haram in islam??' },
    { id: 6, text: 'Rights of husbands and rights of wife in islam?' },
    { id: 7, text: 'What is the time of the prayer for rain(salat al-istisqa)' },
    { id: 8, text: 'Is masterbation haram in islam?' },
    { id: 9, text: 'Is masterbation haram in islam?' },
  ]);

  const [isLoading] = useState(false);
  const [error] = useState<string | null>(null);
  const cardsPerPage = 8;
  const [currentPage, setCurrentPage] = useState(1);

  const filteredQuestions = searchTerm
    ? questions.filter((q) =>
        q.text?.toLowerCase().includes(searchTerm?.toLowerCase())
      )
    : questions;

  const totalPages = Math.ceil(filteredQuestions.length / cardsPerPage);
  const indexOfLastQuestion = currentPage * cardsPerPage;
  const indexOfFirstQuestion = indexOfLastQuestion - cardsPerPage;
  const currentQuestions = filteredQuestions.slice(indexOfFirstQuestion, indexOfLastQuestion);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const handleQuestionClick = (id: number) => {
    console.log(`Question ${id} clicked`);
  };

  if (error) {
    return (
      <div className="bg-gray-100 p-6 rounded-lg font-raleway">
        <h2 className="text-[38px] font-bold mb-4">Most Asked Questions</h2>
        <div className="p-4 bg-red-50 text-red-500 rounded-md">Error loading questions: {error}</div>
      </div>
    );
  }

  return (
    <div className="bg-gray-100 p-6 rounded-lg font-raleway">
      <h2 className="text-[21px] md:text-[38px] font-bold mb-4">Most Asked Questions</h2>
      <div className="space-y-3">
        {isLoading ? (
          Array(5)
            .fill(0)
            .map((_, index) => (
              <div key={`skeleton-${index}`} className="bg-white p-4 rounded-lg shadow-sm h-[110px] flex items-center">
                <div className="flex items-center gap-3 w-full">
                  <div className="h-10 w-10 rounded-full bg-gray-200 animate-pulse"></div>
                  <div className="h-5 w-full bg-gray-200 rounded animate-pulse"></div>
                </div>
              </div>
            ))
        ) : currentQuestions.length > 0 ? (
          currentQuestions.map((question) => (
            <div
              key={question.id}
              className="bg-white px-4 py-3 rounded-lg shadow-sm flex items-center justify-between cursor-pointer hover:shadow-md transition-shadow min-h-[67px] h-[81px]"
              onClick={() => handleQuestionClick(question.id)}
            >
              <div className="flex items-center gap-3">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-white flex items-center justify-center">
                  <HelpCircle className="w-6 h-6 text-gray-500" />
                </div>
                <p className="text-[14px] md:text-[28px] font-medium leading-[15px] md:leading-[33px]">{question.text}</p>
              </div>
              <ArrowRight className="w-5 h-5 text-emerald-500 flex-shrink-0 stroke-[1.5] rotate-[315deg]" />
            </div>
          ))
        ) : (
          <div className="p-4 text-center text-gray-500 bg-white rounded-lg">No questions found for your search.</div>
        )}
      </div>

      {/* Pagination */}
      {filteredQuestions.length > cardsPerPage && (
        <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
      )}
    </div>
  );
}
