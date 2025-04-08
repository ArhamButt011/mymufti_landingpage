import { tw } from 'twind';
import Text from '../UI/Text';

const TrustedSourceSection = () => {
  return (
    <section className={tw(`md:py-16 pt-4 pb-16 bg-white`)}>
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
          <div className={tw(`bg-[#F2F2F2] rounded-3xl p-6 border-[1px] border-[#DADADA]`)}>
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
          <div className={tw(`bg-[#F2F2F2] rounded-3xl p-6 border-[1px] border-[#DADADA]`)}>
            <div className={tw(`w-14 h-14 rounded-full bg-white flex items-center justify-center mb-4`)}>
              <svg width="73" height="74" viewBox="0 0 73 74" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="0.152344" y="0.769119" width="72.7692" height="72.7692" rx="36.3846" fill="white" />
                <path
                  d="M42.4594 29.5382C42.4594 32.8095 39.8076 35.4613 36.5364 35.4613C33.2651 35.4613 30.6133 32.8095 30.6133 29.5382C30.6133 26.267 33.2651 23.6152 36.5364 23.6152C39.8076 23.6152 42.4594 26.267 42.4594 29.5382Z"
                  fill="#38B89A"
                />
                <path
                  d="M46.6905 44.7691C46.6905 48.0403 42.1445 50.6921 36.5367 50.6921C30.9288 50.6921 26.3828 48.0403 26.3828 44.7691C26.3828 41.4978 30.9288 38.846 36.5367 38.846C42.1445 38.846 46.6905 41.4978 46.6905 44.7691Z"
                  fill="#38B89A"
                />
                <path
                  d="M28.2853 25.3075C28.5856 25.3075 28.8788 25.337 29.1619 25.3931C28.4722 26.6181 28.0787 28.0322 28.0787 29.5383C28.0787 31.0076 28.4532 32.3895 29.112 33.5936C28.8444 33.6435 28.568 33.6696 28.2853 33.6696C25.8916 33.6696 23.9512 31.7977 23.9512 29.4886C23.9512 27.1794 25.8916 25.3075 28.2853 25.3075Z"
                  fill="#38B89A"
                />
                <path
                  d="M25.4511 48.9761C24.4901 47.8272 23.848 46.4174 23.848 44.769C23.848 43.1711 24.4514 41.7973 25.3639 40.6681C22.1406 40.9181 19.6172 42.6811 19.6172 44.8188C19.6172 46.9765 22.1849 48.7524 25.4511 48.9761Z"
                  fill="#38B89A"
                />
                <path
                  d="M44.9972 29.5383C44.9972 31.0076 44.6227 32.3895 43.9639 33.5936C44.2315 33.6435 44.508 33.6696 44.7907 33.6696C47.1843 33.6696 49.1247 31.7977 49.1247 29.4886C49.1247 27.1794 47.1843 25.3075 44.7907 25.3075C44.4904 25.3075 44.1972 25.337 43.9141 25.3931C44.6038 26.6181 44.9972 28.0322 44.9972 29.5383Z"
                  fill="#38B89A"
                />
                <path
                  d="M47.6248 48.9761C50.891 48.7524 53.4588 46.9765 53.4588 44.8188C53.4588 42.6811 50.9354 40.9181 47.7121 40.6681C48.6246 41.7973 49.228 43.1711 49.228 44.769C49.228 46.4174 48.5859 47.8272 47.6248 48.9761Z"
                  fill="#38B89A"
                />
              </svg>

              {/* <svg
                xmlns="http://www.w3.org/2000/svg"
                className={tw(`h-6 w-6 text-teal-500`)}
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
              </svg> */}
            </div>
            <div>
              <Text as="h3" className={tw(`text-lg font-bold mb-2`)}>
                Connect with Verified Scholars
              </Text>
              <Text>Receive guidance from knowledgeable, trusted experts.</Text>
            </div>
          </div>

          {/* Card 3: Learn in Privacy and Comfort */}
          <div className={tw(`bg-[#F2F2F2] rounded-3xl p-6 border-[1px] border-[#DADADA]`)}>
            <div className={tw(`w-14 h-14 rounded-full bg-white flex items-center justify-center mb-4`)}>
              {/* <svg
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
              </svg> */}
              <svg width="73" height="74" viewBox="0 0 73 74" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="0.152344" y="0.384491" width="72.7692" height="72.7692" rx="36.3846" fill="white" />
                <path
                  d="M40.2924 22.3839C37.8877 21.2565 35.1927 21.2565 32.7879 22.3839L21.4645 27.6926C19.6436 28.5463 19.1688 30.9535 20.0403 32.6173L20.0403 40.9999C20.0403 41.7008 20.6085 42.2691 21.3095 42.2691C22.0105 42.2691 22.5787 41.7008 22.5787 40.9999V34.5218L32.7881 39.3082C35.1929 40.4356 37.8878 40.4356 40.2926 39.3082L51.616 33.9995C54.0791 32.8447 54.0791 28.8474 51.616 27.6926L40.2924 22.3839Z"
                  fill="#38B89A"
                />
                <path
                  d="M24.6941 38.3171V44.5967C24.6941 46.3026 25.5462 47.8998 27.0385 48.7262C29.5235 50.1024 33.5009 51.9999 36.5403 51.9999C39.5797 51.9999 43.5571 50.1024 46.042 48.7262C47.5343 47.8998 48.3864 46.3026 48.3864 44.5967V38.3172L41.3701 41.6066C38.2826 43.054 34.798 43.054 31.7105 41.6066L24.6941 38.3171Z"
                  fill="#38B89A"
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
