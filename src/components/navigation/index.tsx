import { tw } from 'twind';
import { useState } from 'react';
import Button from '@/components/button';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

interface IMenuButton {
  toggleMenu: React.MouseEventHandler<HTMLButtonElement>;
  showMenu: boolean;
}

type Link = {
  label: string;
  href: string;
};

const links = [
  {
    label: `Home`,
    href: `/`,
  },
  // {
  //   label: `Scholars`,
  //   href: `#scholars`,
  // },

  {
    label: `Blogs`,
    href: `/blogs`,
  },
  {
    label: `FAQ's`,
    href: `/faqs`,
  },
];

const MenuButton = ({ toggleMenu, showMenu }: IMenuButton) => (
  <button
    type="button"
    aria-controls="mobile-menu"
    aria-expanded={showMenu}
    onClick={toggleMenu}
    className={tw(`p-2 text-gray-400 focus:outline-none`)}
  >
    <span className={tw(`sr-only`)}>Open menu</span>
    {showMenu ? (
      <svg
        className={tw(`h-6 w-6`)}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        aria-hidden="true"
        width={24}
        height={24}
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
      </svg>
    ) : (
      <svg
        className={tw(`h-6 w-6`)}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        aria-hidden="true"
        width={24}
        height={24}
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
      </svg>
    )}
  </button>
);

const MobileMenu = () => {
  const router = useRouter();
  return (
    <div className={tw(`md:hidden`)}>
      <div className={tw(`px-2 pt-2 pb-3 space-y-1 sm:px-3`)}>
        {links.map((link) => (
          <Link
            href={link.href}
            className={tw(`text-gray-500 block px-3 py-2 text-base font-medium 
          hover:text-white hover:bg-teal-500 rounded`)}
            key={link.label}
          >
            {link.label}
          </Link>
        ))}
        <div className={tw(`md:hidden`)}>
          <div className={tw(`ml-2 flex items-center md:ml-6`)}>
            {/* <Button primary modifier="rounded-full px-6 py-2" onClick={() => window.location.href = '/contactus'}>Contact US</Button> */}
            <Button className="rounded-full" onClick={() => router.push('/contactus')}>
              Contact Us
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

const Navigation = () => {
  const [showMenu, setShowMenu] = useState(false);
  const toggleMenu = () => setShowMenu(!showMenu);
  const router = useRouter();

  return (
    <nav className={tw(`bg-[#38B89A08]`)}>
      <div className={tw(`max-w-7xl mx-auto px-4 sm:px-2`)}>
        <div className={tw(`flex items-center justify-between`)}>
          <div className={tw(`flex items-start justify-between w-full mt-10`)}>
            <div className={tw(`flex-shrink-0`)}>
              <img className={tw(`h-20 w-20`)} src="/muftiLogo.svg" alt="logo" width={48} height={48} />
            </div>
            <div className="flex">
              <div className={tw(`hidden md:block`)}>
                <div className={tw(`ml-10 flex items-baseline space-x-4`)}>
                  {links.map((link: Link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      className={tw(`text-[#14201B] px-3 py-2 rounded-md font-normal hover:text-secondary`)}
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              </div>
              <div className={tw(`hidden md:block`)}>
                <div className={tw(`ml-4 flex items-center md:ml-6`)}>
                  {/* <Button primary modifier="rounded-full px-6 py-2" onClick={() => window.location.href = '/contactus'}>Contact US</Button> */}
                  <Button className="rounded-full" onClick={() => router.push('/contactus')}>
                    Contact Us
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <div className={tw(`-mr-2 flex md:hidden`)}>
            <MenuButton showMenu={showMenu} toggleMenu={toggleMenu} />
          </div>
        </div>
      </div>
      {showMenu ? <MobileMenu /> : null}
    </nav>
  );
};

export default Navigation;
