import { tw } from 'twind';
import Button from '@/components/button';
import Text from '../UI/Text';

const PublicReviewSection = () => {
  const publicReviewData = {
    title: 'Get Public review on your query',
    description:
      'Join live Q&A sessions, ask your questions, post your question by selecting your Fiqa and question category and get feedback from everyone.',
    image: '/images/review-screen.png',
  };

  return (
    <section className={tw(`py-20 bg-[#F9FDFC] mt-8`)}>
      <div className={tw(`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`)}>
        <div className={tw(`grid grid-cols-1 md:grid-cols-2 gap-12 items-center`)}>
          {/* Left Column - Image */}
          <div className={tw(`flex justify-center`)}>
            <img
              src={'/images/iPhone15.svg'}
              alt="Public Review"
              className={tw(`w-full max-w-[300px] h-auto object-contain drop-shadow-xl transform -rotate-6`)}
            />
          </div>

          {/* Right Column - Text and Button */}
          <div className={tw(`flex flex-col items-end`)}>
            <Text as="h2" className={tw(`mb-4 text-right`)}>
              Get <span className={tw(`text-teal-500`)}>Public review</span> on <br />
              your query
            </Text>
            <Text className={tw(`mb-6 text-right`)}>{publicReviewData.description}</Text>
            <div className={tw(`flex justify-end`)}>
              <Button className="flex items-center">
                Post A Question Now
                <svg
                  className={tw(`ml-2 w-4 h-4`)}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PublicReviewSection;
