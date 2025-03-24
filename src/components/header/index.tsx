import { tw, css } from 'twind/css';
import Button from '@/components/button';
import Text from '../UI/Text';

const headerStyle = css`
  background-color: #38b89a08;
`;

const Header = () => (
  <header className={tw(headerStyle)}>
    <div
      className={tw(`max-w-7xl mx-auto flex flex-col md:flex-row items-center px-4 sm:px-6 lg:px-6 md:mt-0 mt-10`)}
      id="home"
    >
      {/* Left Text Content */}
      <div className={tw(`md:w-1/2 text-left`)}>
        <Text as="h1">
          <span style={{ color: '#38b89a' }}>Solution</span> for All Your{' '}
          <span style={{ color: '#38b89a' }}>Islamic Queries</span>
        </Text>
        <div>
          <Text className={tw(`mt-6 text-[14px] sm:text-[18px] text-[#000000] font-semibold`)}>
            Ask Anything, Anytime, From Anywhere
            <br />
            By Verified Scholars
          </Text>
          <Text className={tw(`mt-4`)}>
            Explore Islamic knowledge via private or public questions, and connect with verified scholars through
            personal appointments. Get guidance on diverse topics, and gain insightful support on your journey of
            learning and understanding.
          </Text>
        </div>
        <div className={tw(`mt-8 flex items-center`)}>
          <Button className="w-[170px] rounded-xl">Explore</Button>
        </div>
      </div>

      {/* Right Image Content */}
      <div className={tw(`w-full h-full md:w-1/2 mt-10 md:mt-0 flex justify-center md:justify-end`)}>
        <img src="/images/phones.svg" alt="MyMufti App Screenshots" className={tw(`w-full h-auto object-cover`)} />
      </div>
    </div>

    <div className={tw(`flex justify-center w-full bg-white`)}>
      <div className={tw(`mt-4 w-full bg-white`)}>
        <Text as="h2" className={tw(`font-sans text-center mt-10 mb-0`)}>
          Why you <span style={{ color: '#38b89a' }}> Choose</span> Us?
        </Text>
        <div
          className={tw(`
  flex
  items-center
  justify-center
  mx-auto
  flex-wrap
  pt-3
  md:pb-6
  md:pl-6
  md:pr-6
  lg:pb-8
  lg:pl-8
  lg:pr-8
  text-center
  bg-white
  
`)}
        >
          <Text className={tw(`text-center text-[16px] sm:text-[18px]`)}>
            Our platform offers direct access to esteemed scholars for private consultations, <br />
            fosters open dialogue through public discussions, keeps you updated on Islamic <br />
            events, and facilitates convenient appointments.
          </Text>
        </div>
      </div>
    </div>
  </header>
);

export default Header;
