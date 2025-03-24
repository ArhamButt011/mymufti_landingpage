import { tw } from 'twind';
import Text from '../UI/Text';
import Link from 'next/link';

const aboutLinks = [
  {
    link: '+0 (11) 222 333',
    icon: '/images/call.svg',
  },
  {
    link: 'info@mymufti.com',
    icon: '/images/message.svg',
  },
  {
    link: 'House no 424, J3 block phase 2 johar town Lahore',
    icon: '/images/location.svg',
  },
];
const resourceLinks = [`About US`, `Contact US`, `Privacy Policy`, `Terms and Conditions`];

const Footer = () => (
  <footer className={tw(`bg-[#F9FDFC] pt-14 pb-16`)}>
    <div className={tw(`mx-auto text-gray-400 px-8 lg:px-0`)}>
      <div className={tw(`w-full`)}>
        <ul className={tw(`flex flex-col sm:flex-row justify-between mx-auto max-w-7xl`)}>
          <li className={tw(`mb-5`)}>
            <div>
              <div className={tw(`mb-5 flex items-center w-full`)}>
                <img className={tw(`h-20 w-20 mr-4`)} src="./images/footerIcon.svg" alt="logo" height={40} width={40} />
              </div>
              <Text className="max-w-md">
                Explore our app for personalized guidance from scholars, engaging discussions, and convenient
                appointment scheduling. Join us on your journey of spiritual growth today.
              </Text>
              <div className="flex items-center gap-2 mt-5">
                <Link href="#">
                  <img src={'/images/facebook.svg'} />
                </Link>
                <Link href="#">
                  <img src={'/images/twitter.svg'} />
                </Link>
                <Link href="#">
                  <img src={'/images/google.svg'} />
                </Link>
                <Link href="#">
                  <img src={'/images/instagram.svg'} />
                </Link>
              </div>
            </div>
          </li>
          <li>
            <div>
              <h4 className={tw(`text-[23px] font-medium mb-8 text-[#000000]`)}>Quick Links</h4>
              <ul>
                {/* {resourceLinks.map((link) => ( */}
                <li className={tw(`text-[#78827F] text-base font-medium mb-3`)}>
                  <Link href="#">About Us</Link>
                </li>
                <li className={tw(`text-[#78827F] text-base font-medium mb-3`)}>
                  <Link href="/contactus">Contact Us</Link>
                </li>
                <li className={tw(`text-[#78827F] text-base font-medium mb-3`)}>
                  <Link href="#">Privacy Policy</Link>
                </li>
                <li className={tw(`text-[#78827F] text-base font-medium mb-3`)}>
                  <Link href="#">Terms and Conditions</Link>
                </li>
                {/* ))} */}
              </ul>
            </div>
          </li>
          <li>
            <div>
              <h4 className={tw(`text-[23px] font-medium mb-8 text-[#000000]`)}>Need Help?</h4>
              <ul>
                {/* {aboutLinks.map((linkItem, index) => ( */}
                <li className={tw(`flex items-center space-x-2 text-[#78827F] text-base font-medium leading-6 mb-3`)}>
                  <img src={'/images/call.svg'} alt="img" className={tw(`w-4 h-4`)} />
                  <p className={tw(`m-0 p-0 max-w-xs`)}>+0 (11) 222 333</p>
                </li>
                <li className={tw(`flex items-center space-x-2 text-[#78827F] text-base font-medium leading-6 mb-3`)}>
                  <img src={'/images/message.svg'} alt="img" className={tw(`w-4 h-4`)} />
                  <p className={tw(`m-0 p-0 max-w-xs`)}>info@mymufti.com</p>
                </li>
                <li className={tw(`flex space-x-2 text-[#78827F] text-base font-medium leading-6 mb-3`)}>
                  <img src={'/images/location.svg'} alt="img" className={tw(`w-4 h-4 mt-1`)} />
                  <p className={tw(`m-0 p-0 max-w-xs`)}>House no 424, J3 block phase 2 johar town Lahore</p>
                </li>
                {/* ))} */}
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <div className={tw(`mt-10 border-t`)}>{/* © {new Date().getFullYear()} My Mufti. All rights reserved. */}</div>
  </footer>
);

export default Footer;
