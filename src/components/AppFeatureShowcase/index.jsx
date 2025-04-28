'use client';

import { useState } from 'react';
import { tw } from 'twind';
import Text from '../UI/Text';

const AppFeaturesShowcase = () => {
  const [activeFeature, setActiveFeature] = useState(1);

  const features = [
    {
      id: 1,
      number: '01',
      title: 'Download My Mufti App',
      description: 'Download our app now to unlock a world of Islamic knowledge at your fingertips.',
      images: ['/images/app-screens.svg'],
    },
    {
      id: 2,
      number: '02',
      title: 'Create An Account',
      description:
        'Your account is your gateway to enriching your understanding of Islam. Generte an account now and get solution of your questions',
      images: ['/images/account-screens.svg'],
    },
    {
      id: 3,
      number: '03',
      title: 'Create Events',
      description: 'Post your question by selecting your Fiqa and question category and get feedback from scholars.',
      images: ['/images/question-screen.svg'],
    },
    {
      id: 4,
      number: '04',
      title: 'Book An Appointment',
      description:
        'Book your personal appointment with scholar/Life Coach or discuss your islamic questions personally.',
      images: ['/images/appointment-screen.svg'],
    },
    {
      id: 5,
      number: '05',
      title: 'Are you a scholar? Join Us!',
      description:
        'Are you a Muslim Scholar or Life Coach? Join us? Together we can help and coach muslims around the world.',
      images: ['/images/scholar-screen.svg'],
    },
  ];

  return (
    <div className={tw(`py-2 md:py-20 bg-white`)}>
      <div className={tw(`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10`)}>
        <div className={tw(`flex flex-col lg:flex-row gap-20`)}>
          {/* Left side - Feature list */}
          <div className={tw(`lg:w-1/2 mt-10`)}>
            <ul className={tw(`space-y-8`)}>
              {features.map((feature) => (
                <li
                  key={feature.id}
                  className={tw(
                    `flex items-start cursor-pointer border-b pb-6 ${
                      activeFeature === feature.id ? 'border-teal-500' : 'border-gray-200'
                    }`,
                  )}
                  onClick={() => setActiveFeature(feature.id)}
                >
                  <span
                    className={tw(
                      `text-sm font-medium mr-4 mt-1 ${
                        activeFeature === feature.id ? 'text-teal-500' : 'text-gray-700'
                      }`,
                    )}
                  >
                    {feature.number}
                  </span>
                  <div>
                    <h3
                      className={tw(
                        `text-lg font-medium ${activeFeature === feature.id ? 'text-teal-500' : 'text-gray-700'}`,
                      )}
                    >
                      {feature.title}
                    </h3>
                    {activeFeature === feature.id && feature.description && (
                      <Text className={tw(`mt-2 text-gray-600`)}>{feature.description}</Text>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Right side - Phone mockups */}
          <div className={tw(`lg:w-1/2 relative h-[300px] md:h-[500px] flex items-center justify-center`)}>
            {features.map((feature) => (
              <div
                key={feature.id}
                className={tw(
                  `absolute transition-all duration-500 w-full max-w-[400px] mx-auto ${
                    activeFeature === feature.id
                      ? 'opacity-100 translate-y-0'
                      : 'opacity-0 translate-y-8 pointer-events-none'
                  }`,
                )}
              >
                <div className={tw(`relative w-full h-full flex items-center justify-center`)}>
                  {feature.images.map((image, index) => {
                    // Staggered positions for larger screens
                    const positions = [
                      'md:left-0 md:bottom-0 z-10',
                      'md:left-1/4 md:bottom-4 z-20',
                      'md:left-1/2 md:bottom-0 z-30',
                    ];

                    return (
                      <div
                        key={index}
                        className={tw(
                          `absolute ${
                            positions[index] || 'md:left-0 md:bottom-0'
                          } md:w-full md:h-[600px] w-[250px] h-auto transform transition-all duration-500`,
                          'sm:relative sm:w-[250px] sm:mx-auto', // Ensuring centering on small screens
                        )}
                      >
                        <img
                          src={image || '/placeholder.svg'}
                          alt={`${feature.title} screen ${index + 1}`}
                          className={tw(
                            `${feature.id === 3 ? 'h-[400px]' : 'h-auto'}
                              mx-auto object-contain mx-auto drop-shadow-xl`,
                          )}
                        />
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppFeaturesShowcase;
