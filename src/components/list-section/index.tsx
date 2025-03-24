'use client';

import { tw } from 'twind';
import { useState } from 'react';
import Text from '../UI/Text';

const faqItems = [
  {
    title: `Can you explain the concept of Zakat in Islam?`,
    description: `Zakat is a mandatory charitable contribution in Islam, typically calculated as a percentage of one's wealth and assets, and distributed to those in need, such as the poor, needy, and those in debt.`,
  },
  {
    title: `What is the significance of Hajj in the Islamic Faith?`,
    description: `Hajj is a pilgrimage to Mecca, obligatory for Muslims once in a lifetime if physically and financially able. It symbolizes unity, equality, and spiritual cleansing, fostering a deep connection to Allah and reinforcing the sense of Muslim brotherhood.`,
  },
  {
    title: `Explain the role of prayer (Salah) and Fasting in Islam?`,
    description: `Salah (prayer) is a daily spiritual practice, strengthening the bond between Muslims and Allah, fostering discipline, mindfulness, and spiritual connection. Fasting during Ramadan is an act of devotion, self-discipline, and purification, promoting empathy, gratitude, and spiritual growth among Muslims worldwide.`,
  },
  {
    title: `Why do you make distinction among our messengers?`,
    description: `In Islam, we are taught to respect all messengers equally as they all conveyed Allah's message. The Quran states that we should not make distinctions between them as they all served the same purpose of guiding humanity.`,
  },
  {
    title: `Can you explain the rights of Parents?`,
    description: `In Islam, parents hold a position of high honor. Children are obligated to show respect, obedience, and kindness to their parents at all times. Taking care of parents, especially in their old age, is considered a religious duty and a path to Paradise.`,
  },
];

const ListSection = () => {
  const [expandedIndex, setExpandedIndex] = useState(0);

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? -1 : index);
  };

  return (
    <section className={tw(`py-20 overflow-hidden bg-white`)} id="faqs">
      <div className={tw(`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`)}>
        <div className={tw(`mb-16`)}>
          <Text as="h2" className={tw(`text-center`)}>
            Frequently Asked <span style={{ color: '#38b89a' }}>Questions</span>
          </Text>
        </div>

        <div className={tw(`flex flex-col lg:flex-row items-center`)}>
          {/* Left side - Illustration */}
          <div className={tw(`w-full lg:w-1/2 mb-12 lg:mb-0 flex justify-center`)}>
            <div className={tw(`relative`)}>
              <img src="/images/fqa.svg" alt="FAQ Illustration" className={tw(`w-full max-w-md`)} />
            </div>
          </div>

          {/* Right side - FAQ accordion */}
          <div className={tw(`w-full lg:w-1/2`)}>
            <div className={tw(`space-y-4`)}>
              {faqItems.map((item, index) => (
                <div key={index} className={tw(`border-b border-gray-200 pb-4 ${index === 0 ? 'pt-0' : 'pt-4'}`)}>
                  <button
                    onClick={() => toggleExpand(index)}
                    className={tw(`flex justify-between items-center w-full text-left focus:outline-none`)}
                  >
                    <span className={tw(`text-base font-medium text-gray-900`)}>{item.title}</span>
                    <span className={tw(`ml-6 flex-shrink-0`)}>
                      {expandedIndex === index ? (
                        <svg
                          className={tw(`h-5 w-5 text-teal-500`)}
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M5 10a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1z"
                            clipRule="evenodd"
                          />
                        </svg>
                      ) : (
                        <svg
                          className={tw(`h-5 w-5 text-teal-500`)}
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                            clipRule="evenodd"
                          />
                        </svg>
                      )}
                    </span>
                  </button>
                  {expandedIndex === index && (
                    <div className={tw(`mt-2 pr-12`)}>
                      <Text className={tw(``)}>{item.description}</Text>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ListSection;
