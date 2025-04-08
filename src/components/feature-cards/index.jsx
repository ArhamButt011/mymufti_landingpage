import { tw } from 'twind';

import Text from '../UI/Text';

const FeatureCards = () => {
  return (
    <section className={tw(`py-8 md:pb-16 md:pt-0 bg-white`)}>
      <div className={tw(`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`)}>
        <div className={tw(`grid grid-cols-1 lg:grid-cols-2 gap-6`)}>
          {/* Card 1: Book Appointments */}
          <div
            className={tw(
              `bg-[#E5F6F2] rounded-3xl p-6 md:p-8 relative overflow-hidden min-h-[250px] md:min-h-[378px]`,
            )}
          >
            <div className={tw(`relative z-10`)}>
              <Text as="h3" className={tw(`mb-1 max-w-[85%] sm:max-w-md md:leading-10`)}>
                Book <span className={tw(`text-teal-500`)}>Appointments</span> with Life Coach & Scholar
              </Text>
              <Text className={tw(`mb-4 md:mb-6 mt-3 text-[14px] md:text-[16px] max-w-[70%] md:max-w-sm`)}>
                Fostering a deeper understanding of Islamic wisdom through this insightful exploration. Join us on a
                journey of enriched spiritual insights.
              </Text>
              {/* <Button primary modifier="px-6 py-2 text-sm">
                Explore
              </Button> */}
            </div>
            {/* Decorative curved shape - positioned to touch bottom and right */}
            <div className={tw(`absolute bottom-0 right-0 w-40 md:w-1/2`)}>
              <img
                src="/images/bookappointment.svg"
                alt="Image Error"
                className={tw(`w-full h-auto object-contain`)}
                style={{ display: 'block' }}
              />
            </div>
          </div>

          {/* Card 2: Interactive Q&A */}
          <div
            className={tw(
              `bg-[#E5F6F2] rounded-3xl p-6 md:p-8 relative overflow-hidden min-h-[250px] md:min-h-[378px]`,
            )}
          >
            <div className={tw(`relative z-10 flex flex-col justify-between h-full`)}>
              <div>
                <Text as="h3" className={tw(`font-bold mb-1 max-w-[70%] md:max-w-xs md:leading-10`)}>
                  Interactive
                  <br /> <span className={tw(`text-teal-500`)}>Q&A</span> Sessions
                </Text>
                <Text className={tw(` max-w-[70%] md:max-w-xs mb-4 md:mb-6 mt-3`)}>
                  Engage in live question-and-answer sessions for personalized guidance and advice.
                </Text>
              </div>
              {/* <div className="mt-auto">
                <Button primary modifier="px-6 py-2 text-sm">
                  Ask Questions
                </Button>
              </div> */}
            </div>

            {/* Decorative pattern - positioned to touch bottom and right */}
            <div className={tw(`absolute bottom-0 right-0 w-40 md:w-1/2`)}>
              <img
                src="/images/zigzag.svg"
                alt="Interactive Q&A"
                className={tw(`w-full h-auto object-contain`)}
                style={{ display: 'block' }}
              />
            </div>
          </div>

          {/* Card 3: Are you a Scholar? - Restructured for better mobile display */}
          <div className={tw(`grid grid-cols-1 gap-6 lg:grid-cols-3 lg:col-span-2`)}>
            {/* Left Card: Scholar Info + Round Image */}
            <div
              className={tw(
                `bg-[#E5F6F2] rounded-3xl p-6 md:p-8 flex flex-col justify-between md:col-span-1 relative min-h-[250px] md:min-h-[378px]`,
              )}
            >
              <div className={tw(`relative z-10 max-w-full flex flex-col justify-between h-full`)}>
                <div>
                  <Text as="h3" className={tw(`font-bold mb-1 md:mb-4 md:max-w-xl md:leading-10`)}>
                    Are You a Scholar/ LifeCoach? <span className={tw(`text-teal-500`)}>Join Us!</span>
                  </Text>
                  <Text className={tw(`mb-4 md:mb-6 max-w-full max-w-[200px] xl:max-w-xs mt-3`)}>
                    Are you a qualified Islamic scholar? Join My Mufti and help Muslims worldwide by providing authentic
                    and reliable guidance. Simply add your details to become part of our trusted network and assist
                    those seeking knowledge.
                  </Text>
                </div>
                <div className="mt-auto">
                  {/* <Button primary modifier="px-6 py-2 text-sm">
          Learn More
        </Button> */}
                </div>
              </div>

              {/* Decorative Round Image - positioned to touch bottom and right */}
              <div className={tw(`absolute bottom-0 right-0 w-[50%] md:w-4/6`)}>
                <img
                  src="/images/round.svg"
                  alt="Decorative Element"
                  className={tw(`w-full h-auto object-contain rounded-br-3xl`)}
                  style={{ display: 'block' }}
                />
              </div>
            </div>

            {/* Right Card: Scholar Meeting Image (Wider) */}
            <div className={tw(`bg-white rounded-3xl overflow-hidden md:col-span-2 min-h-[250px] md:min-h-[378px]`)}>
              <img
                src="/images/scholars-meeting.svg"
                alt="Scholars Meeting"
                className={tw(`w-full h-full object-cover rounded-lg`)}
                style={{ display: 'block' }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureCards;
