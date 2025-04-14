'use client';

import { useState, useEffect } from 'react';

export default function IslamicQA() {
  // State for holding the question and answer data
  const [qaData, setQaData] = useState<any>(null);

  // Simulate fetching data from an API
  useEffect(() => {
    const fetchData = async () => {
      // Simulating API response with a JSON object
      const response = {
        question: {
          title: "If someone memorizes the Quran, does this make him more intelligent, and if the answer is no, then how can I become more smart by means of the teachings of Islam as presented in the Quran?",
          publishedOn: "Apr 10, 2024"
        },
        answer: {
          introduction: "Praise be to Allah.",
          content: [
            "Increasing a person’s intelligence is a scientific specialty that is connected to psychological research, which universities, institutes and research centres deal with nowadays. It is a common interest for many researchers, and there is a great deal of effort and many studies aimed at achieving this goal, based on specialized studies and research.",
            "To prove that there is a connection between memorizing the Quran and an increase in the intelligence of the hafiz (the one who memorizes the Quran), that needs to be based on proper scientific studies and research, where they test a certain number of students of Quran memorization centres and evaluate their level of intelligence before they begin to memorize the Quran and after they do so, through the most accurate international measures of intelligence, and then compare that with students who do not memorize Quran, taking into account differences in age and level of education.",
            "The outcome after all of that is to be regarded as the answer, so that we can tell people in their own language, and the claim will be based on clear, empirical evidence, and no one will accuse us of making claims on the basis of emotion. We have heard of a specialized study that was carried out in al-Azhar ash-Sharif on this topic, but we have not had the opportunity to acquire details of that study until now.",
            "It is sufficient for us to say here that memorizing and reciting the Quran is one of the greatest means of purifying the heart, and one of the greatest means of attaining blessings."
          ]
        }
      };

      // Simulating a delay and then setting data to state
      setTimeout(() => {
        setQaData(response);
      }, 1000);
    };

    fetchData();
  }, []);

  if (!qaData) {
    return (
      <div className="max-w-6xl mx-auto my-8">
        <div className="border-l-4 border-r-4 border-l-emerald-500 border-r-emerald-500 bg-emerald-50/50 p-6">
          <p className="text-[30px] text-gray-500 mb-4">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto ml-3 mr-3 mt-[32px] mb-[32px]">
    {/* Question Section */}
    <div className="border-l-4 border-r-4 border-l-emerald-500 border-r-emerald-500 bg-emerald-50/50 p-6">
      <h2 className="text-[26px] md:text-[40px] font-medium text-emerald-600 mb-2">Question</h2>
      <p className="text-[16px] md:text-[30px] text-gray-700 mb-4">{qaData.question.title}</p>
      <p className="text-sm text-gray-500">Published On : {qaData.question.publishedOn}</p>
    </div>
  
    {/* Answer Section */}
    <div className="p-6" style={{ backgroundColor: "#78827F0F", marginTop: "16px" }}>
      <h2 className="text-[26px] md:text-[40px] font-medium text-emerald-600 mb-4">Answer</h2>
      <p className="text-[16px] md:text-gray-700 mb-6">{qaData.answer.introduction}</p>
  
      <div className="space-y-4 text-[16px] md:text-[27px] text-gray-700">
        {qaData.answer.content.map((paragraph: string, index: number) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>
    </div>
  </div>
  
  );
}
