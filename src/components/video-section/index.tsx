import { tw } from 'twind';
import Text from '../UI/Text';

const VideoSection = () => (
  <section className={tw(`bg-[#F9FDFC]`)} id="scholars">
    <div className={tw(`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6`)}>
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
        <img src="/scholar.svg" alt="Our Islamic Scholars" className={tw(`w-full h-auto rounded-lg`)} />
      </div>
    </div>
  </section>
);

export default VideoSection;
