import { tw } from 'twind';

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
  <footer className={tw(`bg-white border-t border-gray-400 pt-14 pb-16`)}>
    <div className={tw(`max-w-7xl mx-auto text-gray-400 px-8 lg:px-0 flex flex-wrap`)}>
      <div className={tw(`w-full lg:w-1/1`)}>
        <ul className={tw(`text-lg font-light flex flex-wrap w-full`)}>
          <li className={tw(`w-1/2 md:w-1/3 lg:w-3/6 mb-5`)}>
            <div>
              <div className={tw(`mb-5 flex items-center w-full`)}>
                <img className={tw(`h-20 w-20 mr-4`)} src="./images/footerIcon.svg" alt="logo" height={40} width={40} />
              </div>
              <p>
                Explore our app for personalized guidance from scholars, engaging discussions, and convenient
                appointment scheduling. Join us on your journey of spiritual growth today.
              </p>
            </div>
          </li>
          <li className={tw(`w-1/2 md:w-1/3 lg:w-1/6`)}>
            <div>
              <h4 className={tw(`text-gray-900 text-lg font-bold mb-3`)}>Quick Links</h4>
              <ul>
                {resourceLinks.map((link) => (
                  <li
                    className={tw(`text-gray-800 text-base font-medium leading-6 mb-2 hover:text-teal-500`)}
                    key={link}
                  >
                    <a href="#">{link}</a>
                  </li>
                ))}
              </ul>
            </div>
          </li>
          <li className={tw(`w-1/2 md:w-1/3 lg:w-1/6`)}>
            <div>
              <h4 className={tw(`text-gray-900 text-lg font-bold mb-3`)}>Need Help?</h4>
              <ul>
                {aboutLinks.map((linkItem, index) => (
                  <li
                    className={tw(`flex items-center space-x-2 text-gray-800 text-base font-medium leading-6 mb-2`)}
                    key={index}
                  >
                    <img src={linkItem.icon} alt="img" className={tw(`w-4 h-4`)} />
                    <p className={tw(`m-0 p-0`)}>{linkItem.link}</p>
                  </li>
                ))}
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </footer>
);

export default Footer;
