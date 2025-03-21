import { tw, css } from 'twind/css';
import Button from '@/components/button';

const headerStyle = css`
  background-color: #ffffff;
  min-height: calc(100vh - 6rem);
`;

const Header = () => (
  <header className={tw(headerStyle)}>
    <div className={tw(`max-w-6xl mx-auto py-16 px-14 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center`)} id="home">
      {/* Left Text Content */}
      <div className={tw(`md:w-1/2 text-left`)}>
        <h1 className={tw(`font-sans font-bold text-4xl md:text-5xl lg:text-6xl leading-snug text-gray-800`)}>
          <span style={{ color: '#38b89a' }}>Solution</span> for All Your{' '}
          <span style={{ color: '#38b89a' }}>Islamic Queries</span>
        </h1>
        <div>
          <p className={tw(`mt-6 text-gray-500 text-lg lg:text-xl`)}>
            Ask Anything, Anytime, From Anywhere
            <br />By Verified Scholars
          </p>
          <p className={tw(`mt-4 text-gray-500 text-lg lg:text-xl`)}>
            Explore Islamic knowledge via private or public questions, and connect with verified scholars through personal appointments. Get guidance on diverse topics, and gain insightful support on your journey of learning and understanding.
          </p>
        </div>
        <div className={tw(`mt-8 flex items-center`)}>
          <Button primary> Explore</Button>
        </div>
      </div>
      
      {/* Right Image Content */}
      <div className={tw(`w-full h-full md:w-1/2 mt-10 md:mt-0 flex justify-center md:justify-end`)}>
        <img 
          src="/images/phones.svg"
          alt="MyMufti App Screenshots" 
          className={tw(`w-full h-auto object-cover`)}
        />
      </div>


    </div>
    
    <div className={tw(`flex justify-center w-full bg-white`)}>
      <div className={tw(`mt-4 w-full bg-white`)}>
        <p
          className={tw(
            `font-sans font-bold text-4xl md:text-4xl lg:text-5xl text-center leading-snug text-gray-800 mt-6 mb-0`,
          )}
        >
          
          Why you <span style={{ color: '#38b89a' }}> Choose</span> Us?
        </p>
        <div
          className={tw(`
  flex 
  items-center 
  justify-center 
  mx-auto 
  flex-wrap 
  p-4 
  md:p-6 
  lg:p-8 
  text-center 
  bg-white
  sm:text-base 
  md:text-lg 
  lg:text-xl
`)}
        >
          <p className={tw(`mt-1 text-gray-500 text-center text-xl lg:text-xl`)}>
            Our platform offers direct access to esteemed scholars for private consultations, <br />
            fosters open dialogue through public discussions, keeps you updated on Islamic <br />
             events, and facilitates convenient appointments.
          </p>
        </div>
      </div>
    </div>
  </header>
);

export default Header;