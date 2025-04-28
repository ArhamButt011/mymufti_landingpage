import { tw } from 'twind';
import Text from '../UI/Text';

const FeatureCards = () => {
  return (
    <section className={tw(`py-8 lg:pb-16 lg:pt-0 bg-white`)}>
      <div className={tw(`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`)}>
        {/* Use lg:grid-cols-2 instead of md:grid-cols-2 */}
        <div className={tw(`grid grid-cols-1 lg:grid-cols-2 gap-6`)}>
          {/* Card 1: Book Appointments */}
          <div
            className={tw(
              `bg-[#E5F6F2] rounded-3xl p-6 lg:p-8 relative overflow-hidden min-h-[250px] lg:min-h-[378px]`,
            )}
          >
            <div className={tw(`relative z-10`)}>
              <Text as="h3" className={tw(`mb-1 max-w-[85%] sm:max-w-md lg:leading-10`)}>
                Book <span className={tw(`text-teal-500`)}>Appointments</span> with Life Coach & Scholar
              </Text>
              <Text className={tw(`mb-4 lg:mb-6 mt-3 text-[14px] lg:text-[16px] max-w-[70%] lg:max-w-sm`)}>
                Fostering a deeper understanding of Islamic wisdom through this insightful exploration. Join us on a
                journey of enriched spiritual insights.
              </Text>
            </div>
            <div className={tw(`absolute bottom-0 right-0 w-40 lg:w-1/2`)}>
              <img
                src="/images/bookappointment.svg"
                alt="Book Appointments"
                className={tw(`w-full h-auto object-contain`)}
              />
            </div>
          </div>

          {/* Card 2: Interactive Q&A */}
          <div
            className={tw(
              `bg-[#E5F6F2] rounded-3xl p-6 lg:p-8 relative overflow-hidden min-h-[250px] lg:min-h-[378px]`,
            )}
          >
            <div className={tw(`relative z-10 flex flex-col justify-between h-full`)}>
              <div>
                <Text as="h3" className={tw(`font-bold mb-1 max-w-[70%] lg:max-w-xs lg:leading-10`)}>
                  Interactive
                  <br /> <span className={tw(`text-teal-500`)}>Q&A</span> Sessions
                </Text>
                <Text className={tw(`max-w-[70%] lg:max-w-xs mb-4 lg:mb-6 mt-3`)}>
                  Engage in live question-and-answer sessions for personalized guidance and advice.
                </Text>
              </div>
            </div>
            <div className={tw(`absolute bottom-0 right-0 w-40 lg:w-1/2`)}>
              <img src="/images/zigzag.svg" alt="Interactive Q&A" className={tw(`w-full h-auto object-contain`)} />
            </div>
          </div>

          {/* Card 3: Scholar Invitation */}
          <div
            className={tw(
              `bg-[#E5F6F2] rounded-3xl p-6 lg:p-8 flex flex-col justify-between relative min-h-[300px] lg:min-h-[378px]`,
            )}
          >
            <div className={tw(`relative z-10 flex flex-col justify-between h-full pr-[45%] lg:pr-[30%]`)}>
              <div>
                <Text as="h3" className={tw(`font-bold mb-1 lg:mb-4 lg:leading-10 break-words`)}>
                  Are You a Scholar/ LifeCoach? <span className={tw(`text-teal-500`)}>Join Us!</span>
                </Text>
                <Text className={tw(`mb-4 lg:mb-6 mt-3 max-w-full lg:max-w-sm break-words`)}>
                  Are you a qualified Islamic scholar? Join My Mufti and help Muslims worldwide by providing authentic
                  and reliable guidance. Simply add your details to become part of our trusted network and assist those
                  seeking knowledge.
                </Text>
              </div>
            </div>

            {/* Decorative image in the corner, not affecting text layout */}
            <div className={tw(`absolute bottom-0 right-0 w-[50%] lg:w-4/6 pointer-events-none`)}>
              <img
                src="/images/round.svg"
                alt="Join Us Decorative"
                className={tw(`w-full h-auto object-contain rounded-br-3xl`)}
              />
            </div>
          </div>

          {/* Card 4: Scholar Image */}
          <div className={tw(`bg-white rounded-3xl overflow-hidden min-h-[250px] lg:min-h-[378px]`)}>
            <img
              src="/images/scholars-meeting.svg"
              alt="Scholars Meeting"
              className={tw(`w-full h-full object-cover rounded-lg`)}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureCards;
