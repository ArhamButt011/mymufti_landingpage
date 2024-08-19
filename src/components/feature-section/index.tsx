import { tw } from 'twind';
import Check from '@/constants/svg/check.svg';

interface FeatureCardProps {
  title: string;
  description: string;
  imgSrc: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ title, description, imgSrc }) => (
  <div className={tw(`bg-white rounded-lg shadow-lg p-6 lg:p-8 text-left flex flex-col justify-between`)}>
    <div>
      {imgSrc && (
        <div className={tw(`mb-4`)}>
          <img src={imgSrc} alt={title} className={tw(`w-full h-80 object-cover rounded-md`)} />
        </div>
      )}
      <div className={tw(`flex items-center mb-6`)}>
        <Check width={20} height={20} fill="currentColor" className={tw(`h-6 w-6 text-teal-600`)} />
        <div className={tw(`ml-4 text-xl font-bold text-gray-800`)}>{title}</div>
      </div>
      <p className={tw(`leading-loose text-gray-500`)}>{description}</p>
    </div>
  </div>
);

const FeatureSection = () => {
  const features = [
    {
      title: 'Download My Mufti App',
      description: 'Download our app now to unlock a world of Islamic knowledge at your fingertips.',
      imgSrc: 'images/img1.svg',
    },
    {
      title: 'Create An Account',
      description:
        'Your account is your gateway to enriching your understanding of Islam. Generte an account now and get solution of your questions.',
      imgSrc: 'images/img2.svg',
    },
    {
      title: 'Post Questions',
      description: 'Post your question by selecting your Fiqa and question category and get feedback from everyone.',
      imgSrc: 'images/img3.svg',
    },
    {
      title: 'Book An Appointment',
      description:
        'Book your personal appointment by selecting scholar of your own choice and discuss your islamic questions personally.',
      imgSrc: 'images/img4.svg',
    },
    {
      title: 'Become A Scholar',
      description:
        'Are you a Muslim Scholar or Life Coach? Join us? Together we can help and coach muslims around the world.',
      imgSrc: 'images/img5.svg',
    },
    {
      title: 'Public Review',
      description:
        'Join live Q&A sessions, ask your questions,Post your question by selecting your Fiqa and question category and get feedback from everyone.',
      imgSrc: 'images/img6.svg',
    },
  ];

  // const FeatureCard = ({ title, description, imgSrc }) => (
  //   <div className={tw(`bg-white rounded-lg shadow-lg p-6 lg:p-8 text-left flex flex-col justify-between`)}>
  //     <div>
  //       {imgSrc && (
  //         <div className={tw(`mb-4`)}>
  //           <img src={imgSrc} alt={title} className={tw(`w-full h-80 object-cover rounded-md`)} />
  //         </div>
  //       )}
  //       <div className={tw(`flex items-center mb-6`)}>
  //         <Check width={20} height={20} fill="currentColor" className={tw(`h-6 w-6 text-teal-600`)} />
  //         <div className={tw(`ml-4 text-xl font-bold text-gray-800`)}>{title}</div>
  //       </div>
  //       <p className={tw(`leading-loose text-gray-500`)}>
  //         {description}
  //       </p>
  //     </div>
  //   </div>
  // );

  return (
    <section className={tw(`bg-white pb-6`)}>
      <div className={tw(`max-w-7xl mx-auto p-4 sm:p-6 lg:p-8`)}>
        <div className={tw(`text-center mb-16`)}>
          <p className={tw(`mt-2 text-5xl lg:text-7xl font-bold tracking-tight text-gray-900`)}>
            Why you <span style={{ color: '#38b89a' }}>Choose</span> Us?
          </p>
          <p className={tw(`text-white text-gray-400 text-center text-xl mt-12`)}>
            Our platform offers direct access to esteemed scholars for private consultations, fosters open dialogue
            through public discussions, keeps you updated on Islamic events, and facilitates convenient appointments.
          </p>
        </div>
        <div className={tw(`grid gap-6 md:grid-cols-2 lg:grid-cols-3`)}>
          {features.map((feature, index) => (
            <FeatureCard key={index} title={feature.title} description={feature.description} imgSrc={feature.imgSrc} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
