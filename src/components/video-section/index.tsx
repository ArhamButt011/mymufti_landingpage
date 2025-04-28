import { tw } from 'twind';
import Text from '../UI/Text';

const scholars = [
  {
    name: 'Mufti Muhammad Naeem',
    image: '/images/Mufti1.svg',
    expertise: 'Zaqat, family Law, Finance',
  },
  {
    name: 'Mufti Tahir ul Qadri',
    image: '/images/Mufti2.svg',
    expertise: 'Zaqat, family Law, Finance',
  },
  {
    name: 'Mufti Muneeb Ur Rehman',
    image: '/images/Mufti3.svg',
    expertise: 'Zaqat, family Law, Finance',
  },
  {
    name: 'Molanan Tariq Jameel',
    image: '/images/Mufti4.svg',
    expertise: 'Zaqat, family Law, Finance',
  },
];

const VideoSection = () => (
  <section className={tw(`bg-[#F9FDFC] py-6`)} id="scholars">
    <div className={tw(`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`)}>
      <div className={tw(`mb-4`)}>
        <Text as="h2" className={tw(`text-3xl font-bold text-gray-900`)}>
          Our <span style={{ color: '#38b89a' }}>Scholars</span>
        </Text>
        <Text className={tw(`mt-2 text-gray-600 max-w-3xl text-[16px] sm:text-[18px]`)}>
          We vet and verify all our scholars and their credentials. Only the best from reputable madrasas and
          universities are selected to ensure authentic and reliable Islamic guidance.
        </Text>
      </div>

      {/* Desktop View: Full-width Image */}
      <div className={tw(`hidden md:block mt-4`)}>
        <img src="/scholar.svg" alt="Our Islamic Scholars" className={tw(`w-full h-auto rounded-lg`)} />
      </div>

      {/* Mobile/Tablet View: Individual Scholar Cards */}
      <div className={tw(`grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-8 mt-6 md:hidden`)}>
        {scholars.map((scholar, index) => (
          <div key={index} className="text-center">
            <img src={scholar.image} alt={scholar.name} className={tw(`w-full max-w-[240px] mx-auto rounded-lg`)} />
            <Text as="h4" className="mt-3">
              {scholar.name}
            </Text>
            <Text className="text-[#38B89A]">{scholar.expertise}</Text>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default VideoSection;
