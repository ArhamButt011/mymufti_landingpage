import { tw } from 'twind';
import Text from '../UI/Text';
import Link from 'next/link';
import Image from 'next/image';

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
  <footer className={tw(`bg-[#F9FDFC] pt-14 pb-4`)}>
    <div className={tw(`mx-auto text-gray-400 px-8 lg:px-0`)}>
      <div className={tw(`w-full mb-5`)}>
        <ul className={tw(`flex flex-col md:flex-row justify-between mx-auto max-w-7xl`)}>
          <li className={tw(`mb-5`)}>
            <div>
              <div className={tw(`mb-5 w-full`)}>
                <img className={tw(`h-20 w-20`)} src="./images/footerIcon.svg" alt="logo" height={40} width={40} />
              </div>
              <Text className="max-w-xs">
                Explore our app for personalized guidance from scholars, engaging discussions, and convenient
                appointment scheduling.
              </Text>
              <Text className="max-w-xs font-medium text-[#000000] mt-4">
                Join us on your journey of spiritual growth today.
              </Text>
              <div className="flex gap-2 mt-3">
                <div>
                  <a href="https://play.google.com/store/apps/details?id=com.mlbranch.mymufti&hl=en">
                    <Image width={120} height={120} src={'/images/playstore.svg'} alt="playstore" />
                  </a>
                </div>
                <div>
                  <a href="https://apps.apple.com/pk/app/my-mufti/id6446103667">
                    <Image width={120} height={120} src={'/images/appstore.svg'} alt="appstore" />
                  </a>
                </div>
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
                  {/* <p className={tw(`m-0 p-0 max-w-xs`)}>+0 (11) 222 333</p> */}
                  <a href="tel:+011222333" className={tw(`m-0 p-0 max-w-xs`)}>
                    +0 (11) 222 333
                  </a>
                </li>
                <li className={tw(`flex items-center space-x-2 text-[#78827F] text-base font-medium leading-6 mb-3`)}>
                  <img src={'/images/message.svg'} alt="img" className={tw(`w-4 h-4`)} />
                  <a href="mailto:info@mymufti.com" className={tw(`m-0 p-0 max-w-xs`)}>
                    info@mymufti.com
                  </a>
                </li>
                <li className={tw(`flex text-[#78827F] space-x-2 text-base font-medium leading-6 mb-3`)}>
                  <img src={'/images/location.svg'} alt="img" className={tw(`w-4 h-4 mt-1`)} />
                  <p className={tw(`m-0 p-0 max-w-xs`)}>House no 424, J3 block phase 2 johar town Lahore</p>
                </li>
                {/* ))} */}
              </ul>
            </div>
          </li>
        </ul>
      </div>
      <hr />
      <div className={tw(`mx-auto max-w-7xl mt-4`)}>
        <div className="flex justify-between">
          <div>Copyright @ Mymuftisupport.com</div>
          <div className="flex items-center gap-3">
            <Link href="#">
              <Image width={22} height={22} src={'/images/facebook.svg'} alt="fb" />
            </Link>
            <Link href="#">
              <Image width={22} height={22} src={'/images/twitter.svg'} alt="twitter" />
            </Link>
            <Link href="#">
              <Image width={22} height={22} src={'/images/google.svg'} alt="google" />
            </Link>
            <Link href="#">
              <Image width={22} height={22} src={'/images/instagram.svg'} alt="insta" />
            </Link>
          </div>
        </div>
      </div>
    </div>

    {/* <div className={tw(`mt-10 border-t`)}>© {new Date().getFullYear()} My Mufti. All rights reserved.</div> */}
  </footer>
);

export default Footer;
