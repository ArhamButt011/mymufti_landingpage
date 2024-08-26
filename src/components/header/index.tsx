import { tw, css } from 'twind/css';
import Button from '@/components/button';

const headerStyle = css`
  background-color: #ffffff;
  min-height: calc(100vh - 6rem);
`;

const Header = () => (
  <header className={tw(headerStyle)}>
    <div className={tw(`max-w-4xl mx-auto py-16 px-14 sm:px-6 lg:px-8`)} id="home">
      <h1 className={tw(`font-sans font-bold text-4xl md:text-5xl lg:text-8xl text-center leading-snug text-gray-800`)}>
        <span style={{ color: '#38b89a' }}>Solution</span> Of All Islamic{' '}
        <span style={{ color: '#38b89a' }}>Queries</span>
      </h1>
      <div className={tw(`max-w-xl mx-auto`)}>
        <p className={tw(`mt-10 text-gray-500 text-center text-xl lg:text-3xl`)}>
          Explore and ask questions, and connect with scholars with personal appointments for insightful guidance on
          your journey of learning and understanding.
        </p>
      </div>
      <div className={tw(`mt-10 flex justify-center items-center w-full mx-auto`)}>
        <Button primary>Get started</Button>
        <span className={tw(`mx-2`)}>or</span>
        <Button>Contact us</Button>
      </div>
    </div>
    <div className={tw(`flex justify-center w-full`)}>
      <div className={tw(`mt-4 w-full bg-gray-100`)}>
        <p
          className={tw(
            `font-sans font-bold text-4xl md:text-4xl lg:text-5xl text-center leading-snug text-gray-800 mt-5 mb-0`,
          )}
        >
          Meet Our<span style={{ color: '#38b89a', fontFamily: 'cursive' }}> Scholars</span>
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
  bg-gray-100
  sm:text-base 
  md:text-lg 
  lg:text-xl
`)}
        >
          <p>
            Meet our scholars: Your trusted guides on the path of knowledge. Expertise, wisdom, and accessibility
            combined to serve your spiritual growth.
          </p>
        </div>
      </div>
    </div>
  </header>
);

export default Header;
