import React from 'react';
import Text from '@/components/UI/Text';
import DefaultLayout from '@/components/Layout/DefaultLayout';
import BlogDetailLayout from '@/components/blogs/blogDetailsLayout';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Clock } from 'lucide-react';


const IslamicCharity = () => {
 
 const [mounted, setMounted] = useState(false);
 
   useEffect(() => {
     setMounted(true);
   }, []);
 
   if (!mounted) return null;
  return (
    <DefaultLayout>
      <BlogDetailLayout title="What Does Islam Teach About Charity?" imageUrl="/images/blog/halalFood.svg">
      <div className="flex items-center space-x-1 mb-2 text-gray-500 text-sm">
      <Clock className="w-4 h-4" />
      <span>Aug 30, 2025</span>
    </div>
        <Text className="font-Raleway font-[700] text-[48px] leading-[123%]  mb-6" as="h3">
          What Does Islam Teach About Charity?
        </Text>

        <Text className="font-Raleway text-[#78827F] text-[32px]" as="p">
          Charity holds a central place in Islam. It is not merely a good deed, but a divine obligation that reflects a Muslim’s faith, compassion, and sense of responsibility. Islam emphasizes charity as a means of purifying wealth, reducing economic disparities, and fostering unity among people.
          <br /><br />
          In today’s digital world, apps like{' '}
          <Link href="https://mymuftiapp.com/">
            <span className="text-blue-600 underline hover:opacity-80">My Mufti App</span>
          </Link> have made it easier for Muslims to fulfill their charitable duties. From Zakat calculators to guidance on Sadaqah, My Mufti App empowers believers with practical tools to navigate their religious obligations.
        </Text>

        <Text className="font-Raleway font-[500] text-[32px] text-[#78827F]  mt-8" as="h4">
          The Concept of Charity in Islam
        </Text>
        <Text className="font-Raleway text-[#78827F] text-[32px]" as="p">
          Islam teaches that everything belongs to Allah, and humans are only trustees. Giving to the less fortunate is both an act of obedience and a means to uplift society.
          Charity comes in many forms: financial aid, feeding others, supporting orphans, or even offering a kind word or smile.
          <br /><br />
          The Quran says:
          <blockquote className="italic text-[#78827F] mt-2">
            "The example of those who spend their wealth in the way of Allah is like a seed of grain that sprouts seven ears; in every ear, there are a hundred grains. And Allah multiplies (reward) for whom He wills." (Quran 2:261)
          </blockquote>
        </Text>

        <Text className="font-Raleway font-[500] text-[32px] text-[#78827F]  mt-8" as="h4">
          Types of Charity in Islam
        </Text>

        <Text className="font-Raleway font-[500] text-[#78827F] text-[32px] mt-4" as="p">1. Zakat – The Obligatory Charity</Text>
        <Text className="font-Raleway text-[#78827F] text-[32px]" as="p">
          Zakat is a pillar of Islam and a mandatory act for financially capable Muslims. It requires donating 2.5% of savings annually to specific beneficiaries:
          <br />
          <blockquote className="italic text-[#78827F] mt-2">
            "Zakat expenditures are only for the poor and needy, and for those who collect it..." (Quran 9:60)
          </blockquote>
          Its purpose is to purify wealth and promote economic balance. The{' '}
          <Link href="https://mymuftiapp.com/">
            <span className="text-blue-600 underline hover:opacity-80">My Mufti App</span>
          </Link> provides a Zakat calculator and educational resources to simplify this obligation.
        </Text>

        <Text className="font-Raleway font-[500] text-[#78827F] text-[32px] mt-8" as="p">2. Sadaqah – The Voluntary Charity</Text>
        <Text className="font-Raleway text-[#78827F] text-[32px]" as="p">
          Sadaqah refers to voluntary charity. There are no specific conditions, amounts, or restrictions on who can receive it. It may include money, food, clothes, or acts of kindness.
          <br /><br />
          The Prophet ﷺ said:
          <blockquote className="italic text-[#78827F] mt-2">
            "Charity does not reduce wealth." (Sahih Muslim)
          </blockquote>
        </Text>

        <Text className="font-Raleway font-[500] text-[#78827F] text-[32px] mt-8" as="p">3. Sadaqah Jariyah – Ongoing Charity</Text>
        <Text className="font-Raleway text-[#78827F] text-[32px]" as="p">
          This is a form of charity that continues to benefit others long after the giver’s death. Examples include:
          <ul className="list-disc pl-8 mt-4">
            <li>Building a mosque or school</li>
            <li>Donating books or religious material</li>
            <li>Providing clean water</li>
          </ul>
          <br />
          The Prophet ﷺ said:
          <blockquote className="italic mt-2">
            "When a person dies, their deeds end except for three: continuous charity, beneficial knowledge, or a righteous child who prays for them." (Sahih Muslim)
          </blockquote>
        </Text>

        <Text className="font-Raleway font-[500] text-[32px] text-[#78827F]  mt-8" as="h4">
          Benefits of Charity
        </Text>
        <Text className="font-Raleway text-[#78827F] text-[32px]" as="p">
          Charity in Islam yields spiritual and worldly benefits:
          <ul className="list-disc pl-8 mt-4">
            <li><strong>Purifies the soul</strong> from greed and attachment</li>
            <li><strong>Brings barakah (blessings)</strong> and multiplies wealth</li>
            <li><strong>Acts as a shield</strong> against hardships and trials</li>
            <li><strong>Leads to forgiveness</strong> of sins and divine reward</li>
          </ul>
          <blockquote className="italic mt-4">
            "Charity extinguishes sins just like water extinguishes fire." (Tirmidhi)
          </blockquote>
        </Text>

        <Text className="font-Raleway font-[500] text-[32px] text-[#78827F]  mt-8" as="h4">
          Charity as a Social Responsibility
        </Text>
        <Text className="font-Raleway text-[#78827F] text-[32px]" as="p">
          Charity is not just a personal virtue, but a collective duty. It nurtures a compassionate society, reduces poverty, and builds economic justice. Muslims are encouraged to give frequently and look for opportunities to help—be it local communities, educational causes, or global crises.
        </Text>

        <Text className="font-Raleway font-[500] text-[32px] text-[#78827F]  mt-8" as="h4">
          Conclusion
        </Text>
        <Text className="font-Raleway text-[#78827F] text-[32px]" as="p">
          Charity is a cornerstone of Islam—vital for spiritual growth, social equity, and community well-being. Through Zakat, Sadaqah, and Sadaqah Jariyah, Muslims are encouraged to share their blessings.
          <br /><br />
          Tools like{' '}
          <Link href="https://mymuftiapp.com/">
            <span className="text-blue-600 underline hover:opacity-80">My Mufti App</span>
          </Link> make fulfilling these obligations easier, ensuring our giving is meaningful, sincere, and aligned with Islamic values.
        </Text>
      </BlogDetailLayout>
    </DefaultLayout>
  );
};

export default IslamicCharity;
