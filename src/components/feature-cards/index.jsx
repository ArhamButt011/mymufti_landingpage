import { tw } from 'twind';
import Button from '@/components/button';
import Text from '../UI/Text';

const FeatureCards = () => {
  return (
    <section className={tw(`py-8 md:pb-16 md:pt-0 bg-white`)}>
      <div className={tw(`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`)}>
        <div className={tw(`grid grid-cols-1 md:grid-cols-2 gap-6`)}>
          {/* Card 1: Book Appointments */}
          <div className={tw(`bg-[#E5F6F2] rounded-3xl p-6 md:p-8 relative overflow-hidden min-h-[250px] md:min-h-0`)}>
            <div className={tw(`relative z-10`)}>
              <Text as="h3" className={tw(`mb-1 max-w-[85%] sm:max-w-md`)}>
                Book <span className={tw(`text-teal-500`)}>Appointments</span> with Life Coach & Scholar
              </Text>
              <Text className={tw(`mb-4 md:mb-6 text-[14px] md:text-[16px]  max-w-[70%] md:max-w-sm`)}>
                Fostering a deeper understanding of Islamic wisdom through this insightful exploration. Join us on a
                journey of enriched spiritual insights.
              </Text>
              {/* <Button primary modifier="px-6 py-2 text-sm">
                Explore
              </Button> */}
            </div>
            {/* Decorative curved shape - positioned to touch bottom and right */}
            <div className={tw(`absolute bottom-0 right-0 w-40 md:w-90`)}>
              <img
                src="/images/bookappointment.svg"
                alt="Image Error"
                className={tw(`w-full h-auto object-contain`)}
                style={{ display: 'block' }}
              />
            </div>
          </div>

          {/* Card 2: Interactive Q&A */}
          <div className={tw(`bg-[#E5F6F2] rounded-3xl p-6 md:p-8 relative overflow-hidden min-h-[250px] md:min-h-0`)}>
            <div className={tw(`relative z-10 flex flex-col justify-between h-full`)}>
              <div>
                <Text as="h3" className={tw(`font-bold mb-1 max-w-[70%] md:max-w-xs`)}>
                  Interactive
                  <br /> <span className={tw(`text-teal-500`)}>Q&A</span> Sessions
                </Text>
                <Text className={tw(`text-gray-600 text-[14px] sm:text-[16px] max-w-[70%] md:max-w-xs mb-4 md:mb-6`)}>
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
            <div className={tw(`absolute bottom-0 right-0 w-40 md:w-50`)}>
              <img
                src="/images/zigzag.svg"
                alt="Interactive Q&A"
                className={tw(`w-full h-auto object-contain`)}
                style={{ display: 'block' }}
              />
            </div>
          </div>

          {/* Card 3: Are you a Scholar? - Restructured for better mobile display */}
          <div className={tw(`grid grid-cols-1 gap-6 md:grid-cols-3 md:col-span-2`)}>
            {/* Left Card: Scholar Info + Round Image */}
            <div
              className={tw(
                `bg-[#E5F6F2] rounded-3xl p-6 md:p-8 flex flex-col justify-between md:col-span-1 relative min-h-[300px] md:min-h-0`,
              )}
            >
              <div className={tw(`relative z-10 max-w-[100%] flex flex-col justify-between h-full`)}>
                <div>
                  <Text as="h3" className={tw(`font-bold mb-1 mb-1 max-w-[90%] md:max-w-xs`)}>
                    Are You a Scholar/LifeCoach? <span className={tw(`text-teal-500`)}>Join Us!</span>
                  </Text>
                  <Text className={tw(`text-gray-600 text-[14px] sm:text-[16px] mb-4 md:mb-6 max-w-[80%] md:max-w-xs`)}>
                    Are you a qualified Islamic scholar? Join Mumuti and help Muslims worldwide by providing authentic
                    andreliable guidance. Simply add your details to become part of our trusted network and assist those
                    seeking knowledge.
                  </Text>
                </div>
                <div className="mt-auto">
                  {/* <Button primary modifier="px-6 py-2 text-sm">
                    Learn More
                  </Button> */}
                </div>
              </div>

              {/* Decorative Round Image - positioned to touch bottom and right */}
              <div className={tw(`absolute bottom-0 right-0 w-[67%] md:w-100`)}>
                <img
                  src="/images/round.svg"
                  alt="Decorative Element"
                  className={tw(`w-full h-auto object-contain`)}
                  style={{ display: 'block' }}
                />
              </div>
            </div>

            {/* Right Card: Scholar Meeting Image (Wider) */}
            <div className={tw(`bg-white rounded-3xl overflow-hidden md:col-span-2 h-[250px] md:h-auto`)}>
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
