import { tw } from 'twind';

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
            <p className={tw(`text-gray-600 mb-6`)}>
              At My Mufti, we believe that every Muslim should have easy access to authentic Islamic knowledge. That's
              why we've created a "free app" that brings verified Islamic scholars right to your fingertips. Whether
              you're seeking answers to personal questions or guidance on complex matters of faith, Mumufti is here to
              support you — all from the privacy of your home.
            </p>

            <p className={tw(`text-gray-800 font-medium mb-6`)}>
              We're on a mission to make Islamic knowledge accessible to every corner of the world. But we can't do it
              alone, help Muslims worldwide — donate now and support our cause!
            </p>

            <p className={tw(`text-gray-600`)}>
              Together, we can break down barriers to knowledge and bring the light of understanding to every heart.
            </p>
          </div>
        </div>

        <br/>
        <br/>

        <div className={tw(`grid grid-cols-1 md:grid-cols-3 gap-6`)}>
          {/* Card 1: Ask Anything, Anytime */}
          <div className={tw(`bg-[#DADADA] rounded-lg p-6`)}>
            <div className={tw(`w-10 h-10 rounded-full bg-white flex items-center justify-center mb-4`)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={tw(`h-5 w-5 text-teal-500`)}
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <h3 className={tw(`text-lg font-bold mb-2`)}>Ask Anything, Anytime</h3>
            <p className={tw(`text-gray-600 text-sm`)}>Get precise, reliable answers to your questions.</p>
          </div>

          {/* Card 2: Connect with Verified Scholars */}
          <div className={tw(`bg-[#DADADA] rounded-lg p-6`)}>
            <div className={tw(`w-10 h-10 rounded-full bg-white flex items-center justify-center mb-4`)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={tw(`h-5 w-5 text-teal-500`)}
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
              </svg>
            </div>
            <h3 className={tw(`text-lg font-bold mb-2`)}>Connect with Verified Scholars</h3>
            <p className={tw(`text-gray-600 text-sm`)}>Receive guidance from knowledgeable, trusted experts.</p>
          </div>

          {/* Card 3: Learn in Privacy and Comfort */}
          <div className={tw(`bg-[#DADADA] rounded-lg p-6`)}>
            <div className={tw(`w-10 h-10 rounded-full bg-white flex items-center justify-center mb-4`)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={tw(`h-5 w-5 text-teal-500`)}
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
            <h3 className={tw(`text-lg font-bold mb-2`)}>Learn in Privacy and Comfort</h3>
            <p className={tw(`text-gray-600 text-sm`)}>Explore your faith without judgment or barriers.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustedSourceSection;
