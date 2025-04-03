import { tw } from 'twind';
import Text from '../UI/Text';

const TrustedSourceSection = () => {
  return (
    <section className={tw(`py-16 bg-white`)}>
      <div className={tw(`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`)}>
        <div className={tw(`max-w-7xl mx-auto flex flex-col md:flex-row items-start gap-8`)}>
          {/* Left Section - Title */}
          <div className={tw(`md:w-1/3`)}>
            <h2 className={tw(`text-3xl md:text-4xl font-bold`)}>
              Your <span className={tw(`text-teal-500`)}>Trusted Source</span> for Islamic Guidance
            </h2>
          </div>

          {/* Right Section - Paragraphs */}
          <div className={tw(`md:w-2/3`)}>
            <Text className={tw(`text-gray-600 mb-6`)}>
              At My Mufti, we believe that every Muslim should have easy access to authentic Islamic knowledge. That's
              why we've created a "free app" that brings verified Islamic scholars right to your fingertips. Whether
              you're seeking answers to personal questions or guidance on complex matters of faith, My mufti is here to
              support you — all from the privacy of your home.
            </Text>

            <Text as="p1" className={tw(`font-medium mb-6 text-[16px] sm:text-[18px] text-[#000000]`)}>
              We're on a mission to make Islamic knowledge accessible to every corner of the world. But we can't do it
              alone, help Muslims worldwide — donate now and support our cause!
            </Text>

            <Text>
              Together, we can break down barriers to knowledge and bring the light of understanding to every heart.
            </Text>
          </div>
        </div>

        <br />
        <br />

        <div className={tw(`grid grid-cols-1 md:grid-cols-3 gap-6`)}>
          {/* Card 1: Ask Anything, Anytime */}
          <div className={tw(`bg-[#F2F2F2]  rounded-3xl p-6 flex flex-col justify-between h-[220px]`)}>
            <div className={tw(`w-14 h-14 rounded-full bg-white flex items-center justify-center mb-4`)}>
              <svg
                className="md:w-[92px] md:h-[92px]"
                viewBox="0 0 92 92"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect x="0.445312" y="0.946167" width="90.9752" height="90.9752" rx="45.4876" fill="white" />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M45.9344 67.5907C57.6191 67.5907 67.0914 58.1184 67.0914 46.4336C67.0914 34.7489 57.6191 25.2766 45.9344 25.2766C34.2497 25.2766 24.7773 34.7489 24.7773 46.4336C24.7773 49.8181 25.572 53.0169 26.985 55.8538C27.3605 56.6076 27.4855 57.4693 27.2678 58.2829L26.0076 62.9925C25.4606 65.037 27.331 66.9074 29.3755 66.3604L34.0851 65.1002C34.8987 64.8826 35.7604 65.0075 36.5143 65.383C39.3511 66.796 42.5499 67.5907 45.9344 67.5907ZM37.4716 49.0783C36.5952 49.0783 35.8848 49.7887 35.8848 50.665C35.8848 51.5414 36.5952 52.2518 37.4716 52.2518H49.1079C49.9843 52.2518 50.6947 51.5414 50.6947 50.665C50.6947 49.7887 49.9843 49.0783 49.1079 49.0783H37.4716ZM35.8848 43.2601C35.8848 42.3837 36.5952 41.6733 37.4716 41.6733H54.3972C55.2735 41.6733 55.984 42.3837 55.984 43.2601C55.984 44.1364 55.2735 44.8469 54.3972 44.8469H37.4716C36.5952 44.8469 35.8848 44.1364 35.8848 43.2601Z"
                  fill="#38B89A"
                />
              </svg>
            </div>
            <div>
              <Text as="h3" className={tw(`mb-2 text-lg font-bold`)}>
                Ask Anything, Anytime
              </Text>
              <Text>Get precise, reliable answers to your questions.</Text>
            </div>
          </div>

          {/* Card 2: Connect with Verified Scholars */}
          <div className={tw(`bg-[#F2F2F2] rounded-3xl p-6 flex flex-col justify-between`)}>
            <div className={tw(`w-14 h-14 rounded-full bg-white flex items-center justify-center mb-4`)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={tw(`h-6 w-6 text-teal-500`)}
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
              </svg>
            </div>
            <div>
              <Text as="h3" className={tw(`text-lg font-bold mb-2`)}>
                Connect with Verified Scholars
              </Text>
              <Text>Receive guidance from knowledgeable, trusted experts.</Text>
            </div>
          </div>

          {/* Card 3: Learn in Privacy and Comfort */}
          <div className={tw(`bg-[#F2F2F2] rounded-3xl p-6 flex flex-col justify-between`)}>
            <div className={tw(`w-14 h-14 rounded-full bg-white flex items-center justify-center mb-4`)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={tw(`h-6 w-6 text-teal-500`)}
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div>
              <Text as="h3" className={tw(`mb-2 text-lg font-bold`)}>
                Learn in Privacy and Comfort
              </Text>
              <Text>Explore your faith without judgment or barriers.</Text>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustedSourceSection;
