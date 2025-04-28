import { tw, css } from 'twind/css';
import Button from '@/components/button';
import Text from '../UI/Text';
import { useState } from 'react';
import Modal from '../UI/Modal';
import Image from 'next/image';

const headerStyle = css`
  background-color: #38b89a08;
`;

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const onClose = () => {
    setIsOpen(false);
  };

  return (
    <header className={tw(headerStyle)}>
      <div
        className={tw(
          `max-w-7xl mx-auto flex flex-col md:flex-row items-center px-4 sm:px-6 lg:px-6 md:mt-0 md:mt-10 mt-0`,
        )}
        id="home"
      >
        {/* Left Text Content */}
        <div className={tw(`md:w-1/2 w-1280 text-left mt-10 `)}>
          <Text as="h1">
            <span style={{ color: '#38b89a' }}>Solution</span> for All Your{' '}
            <span style={{ color: '#38b89a' }}>Islamic </span>Queries
          </Text>
          <div>
            <Text className={tw(`mt-6 text-[18px] sm:text-[22px] text-[#000000] font-semibold`)}>
              Ask Anything, Anytime, From Anywhere
              <br />
              By Verified Scholars
            </Text>
            <Text as="p1" className={tw(`mt-4`)}>
              Explore Islamic knowledge via private or public questions, and connect with verified scholars through
              personal appointments. Get guidance on diverse topics, and gain insightful support on your journey of
              learning and understanding.
            </Text>
          </div>
          <div className={tw(`mt-8 flex items-center`)}>
            <Button className="w-[170px] rounded-xl z-10" onClick={() => setIsOpen(true)}>
              Explore
            </Button>
          </div>
        </div>

        {/* Right Image Content */}
        <div className={tw(`w-full h-full md:w-4/5 flex md:justify-end z-10 overflow-hidden`)}>
          <img
            src="/images/phones.svg"
            alt="MyMufti App Screenshots"
            className={tw(`w-full h-auto hidden md:block max-h-[700px] object-cover object-top md:mt-[-100px]`)}
          />
        </div>
        <div className="max-h-[570px]">
          <img
            src="/images/phonesmall.svg"
            alt="MyMufti App Screenshots"
            className={tw(`w-full h-auto block md:hidden object-contain mt-[-50px]`)}
          />
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
            <Text as="p1" className={tw(`px-4  text-center w-full mx-auto max-w-3xl`)}>
              Our platform offers direct access to esteemed scholars for private consultations, fosters open dialogue
              through public discussions, keeps you updated on Islamic events, and facilitates convenient appointments.
            </Text>
          </div>
        </div>
      </div>
      <Modal isOpen={isOpen} onClose={onClose} buttonContent="">
        <div className="mt-4 flex justify-between items-start">
          <img className={tw(`h-20 w-20`)} src="muftiLogo.svg" alt="logo" width={48} height={48} />
          <Image
            className="cursor-pointer"
            src={'/images/blackCross.svg'}
            height={30}
            width={30}
            alt="cross"
            onClick={() => onClose()}
          />
        </div>
        <div className="flex gap-2 md:flex-row flex-col md:gap-0 gap-8">
          <div className="w-full max-w-sm">
            <div>
              <Text as="h3" className="font-semibold mt-6">
                Download
              </Text>
              <Text as="h2" className="text-[#38b89a]">
                My Mufti App
              </Text>
              <Text as="h3" className="font-semibold">
                Now!!
              </Text>
              <Text as="h4" className="mt-3">
                Download the App to Explore All Features!{' '}
              </Text>
              <div className="max-w-xs mt-3">
                <Text>
                  Experience appointment booking, expert guidance, and event management—right at your fingertips.
                </Text>
              </div>
            </div>
            <div className="flex gap-1 md:gap-2 mt-2">
              <div>
                <a href="https://play.google.com/store/apps/details?id=com.mlbranch.mymufti&hl=en">
                  {/* <Image width={120} height={120} src={'/images/playstore.svg'} alt="playstore" /> */}
                  <svg
                    className=" md:w-[130px]
                    md:h-[42px] w-[120px]
                    h-[34px]"
                    viewBox="0 0 253 77"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                  >
                    <rect y="0.709473" width="253" height="75.625" rx="15" fill="url(#pattern0_4948_2707)" />
                    <defs>
                      <pattern id="pattern0_4948_2707" patternContentUnits="objectBoundingBox" width="1" height="1">
                        <use
                          xlinkHref="#image0_4948_2707"
                          transform="matrix(0.00132123 0 0 0.00438262 -0.00735294 -0.150819)"
                        />
                      </pattern>
                      <image
                        id="image0_4948_2707"
                        width="768"
                        height="297"
                        preserveAspectRatio="none"
                      />
                    </defs>
                  </svg>
                </a>
              </div>
              <div>
                <a href="https://apps.apple.com/pk/app/my-mufti/id6446103667">
                  {/* <Image width={120} height={120} src={'/images/appstore.svg'} alt="appstore" /> */}
                  <svg
                    className=" md:w-[130px]
                    md:h-[42px] w-[120px]
                    h-[34px]"
                    viewBox="0 0 254 77"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                  >
                    <rect
                      x="0.878906"
                      y="0.709473"
                      width="253"
                      height="75.625"
                      rx="15"
                      fill="url(#pattern0_4948_2708)"
                    />
                    <defs>
                      <pattern id="pattern0_4948_2708" patternContentUnits="objectBoundingBox" width="1" height="1">
                        <use
                          xlinkHref="#image0_4948_2708"
                          transform="matrix(0.000246425 0 0 0.000824402 -0.00467759 0)"
                        />
                      </pattern>
                      <image
                        id="image0_4948_2708"
                        width="4096"
                        height="1213"
                        preserveAspectRatio="none"
                      />
                    </defs>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="mx-auto md:mx-0">
            <Image
              width={600}
              height={500}
              className="w-[400px] h-[330px] md:w-[600px] md:h-[500px]"
              src={'/images/question-screen.svg'}
              alt="appImage"
            />
          </div>
        </div>
      </Modal>
    </header>
  );
};

export default Header;
