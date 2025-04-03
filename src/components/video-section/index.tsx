import { tw } from 'twind';
import Text from '../UI/Text';

const VideoSection = () => (
  <section className={tw(`bg-[#F9FDFC]`)} id="scholars">
    <div className={tw(`max-w-7xl mx-auto  px-4 sm:px-6 lg:px-8 py-6 hidden sm:block`)}>
      <div className={tw(`mb-4`)}>
        <Text as="h2" className={tw(`text-3xl font-bold text-gray-900`)}>
          Our <span style={{ color: '#38b89a' }}>Scholars</span>
        </Text>
        <Text className={tw(`mt-2 text-gray-600 max-w-3xl text-[16px] sm:text-[18px]`)}>
          verify all our scholars and their credentials. Only the best from reputable madrasas and universities are
          selected to ensure authentic and reliable Islamic guidance.
        </Text>
      </div>

      <div className={tw(`mt-4`)}>
        <img src="/scholar.svg" alt="Our Islamic Scholars" className={tw(`w-full h-auto rounded-lg`)} />
      </div>
    </div>
    <div className={tw(`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 md:hidden`)}>
      <div className={tw(`mb-4`)}>
        <Text as="h2" className={tw(`text-3xl font-bold text-gray-900`)}>
          Our <span style={{ color: '#38b89a' }}>Scholars</span>
        </Text>
        <Text className={tw(`mt-2 text-gray-600 max-w-3xl text-[16px] sm:text-[18px]`)}>
          We vet and verify all our scholars and their credentials. Only the best from reputable madrasas and
          universities are selected to ensure authentic and reliable Islamic guidance.
        </Text>
      </div>

      <div className={tw(`mt-4`)}>
        <div className="w-full mx-auto max-w-[240px]">
          <div className="mb-14 mt-12">
            <div>
              <img src="/images/Mufti1.svg" alt="Our Islamic Scholars" className={tw(`w-full h-auto rounded-lg`)} />
            </div>
            <Text as="h4" className="text-center mt-3">
              Mufti Muhammad Naeem
            </Text>
            <Text className="text-[#38B89A] text-center">Zaqat, family Law, Finance</Text>
          </div>
          <div className="mb-14">
            <div>
              <img src="/images/Mufti2.svg" alt="Our Islamic Scholars" className={tw(`w-full h-auto rounded-lg`)} />
            </div>
            <Text as="h4" className="text-center mt-3">
              Mufti Tahir ul Qadri
            </Text>
            <Text className="text-[#38B89A] text-center">Zaqat, family Law, Finance</Text>
          </div>
          <div className="mb-14">
            <div>
              <img src="/images/Mufti3.svg" alt="Our Islamic Scholars" className={tw(`w-full h-auto rounded-lg`)} />
            </div>
            <Text as="h4" className="text-center mt-3">
              Mufti Muneeb Ur Rehman{' '}
            </Text>
            <Text className="text-[#38B89A] text-center">Zaqat, family Law, Finance</Text>
          </div>
          <div className="mb-8">
            <div>
              <img src="/images/Mufti4.svg" alt="Our Islamic Scholars" className={tw(`w-full h-auto rounded-lg`)} />
            </div>
            <Text as="h4" className="text-center mt-3">
              Molanan Tariq Jameel{' '}
            </Text>
            <Text className="text-[#38B89A] text-center">Zaqat, family Law, Finance</Text>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default VideoSection;
