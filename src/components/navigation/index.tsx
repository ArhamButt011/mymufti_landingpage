import { tw } from 'twind';
import { useState } from 'react';
import Button from '@/components/button';
import { useRouter, usePathname } from 'next/navigation';
import Link from 'next/link';

interface IMenuButton {
  toggleMenu: React.MouseEventHandler<HTMLButtonElement>;
  showMenu: boolean;
}

type LinkType = {
  label: string;
  href: string;
};

const links: LinkType[] = [
  {
    label: `Home`,
    href: `/`,
  },
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
  const pathname = usePathname();

  return (
    <div className={tw(`md:hidden`)}>
      <div className={tw(`px-2 pt-2 pb-3 space-y-1 sm:px-3`)}>
        {links.map((link) => {
          const isActive = pathname === link.href;
          return (
            <Link
              href={link.href}
              key={link.label}
              className={tw(
                `block px-3 py-2 text-base font-medium rounded`,
                isActive ? `text-[#38B89A] bg-gray-100` : `text-gray-500 hover:text-white hover:bg-teal-500`,
              )}
            >
              {link.label}
            </Link>
          );
        })}
        <div className={tw(`md:hidden`)}>
          <div className={tw(`ml-2 flex items-center md:ml-6`)}>
            <Button
              className="rounded-full border-2 border-transparent focus:outline-none focus:border-none active:border-transparent"
              onClick={() => router.push('/contactus')}
            >
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
  const pathname = usePathname();

  return (
    <nav className={tw(`bg-[#38B89A08]`)}>
      <div className={tw(`max-w-7xl mx-auto px-4 sm:px-2`)}>
        <div className={tw(`flex items-center justify-between`)}>
          <div className={tw(`flex items-start justify-between w-full mt-6 mb-4`)}>
            <div className={tw(`flex-shrink-0`)}>
              <Link href="/">
                <img
                  className={tw(`h-20 w-20 cursor-pointer`)}
                  src="/muftiLogo.svg"
                  alt="logo"
                  width={48}
                  height={48}
                />
              </Link>
            </div>
            <div className="flex">
              <div className={tw(`hidden md:block`)}>
                <div className={tw(`ml-10 flex items-baseline space-x-4`)}>
                  {links.map((link: LinkType) => {
                    const isActive = pathname === link.href;
                    return (
                      <a
                        key={link.label}
                        href={link.href}
                        className={tw(
                          `px-3 py-2 rounded-md font-normal hover:text-secondary`,
                          isActive ? `text-[#38B89A]` : `text-[#14201B]`,
                        )}
                      >
                        {link.label}
                      </a>
                    );
                  })}
                </div>
              </div>
              <div className={tw(`hidden md:block`)}>
                <div className={tw(`ml-4 flex items-center md:ml-6`)}>
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
