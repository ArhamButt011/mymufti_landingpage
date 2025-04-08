import React from 'react';
import Text from '@/components/UI/Text';
import DefaultLayout from '@/components/Layout/DefaultLayout';
import BlogDetailLayout from '@/components/blogs/blogDetailsLayout';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Clock } from 'lucide-react';


const BlogDetails = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

 
  return (
    <DefaultLayout>
      <BlogDetailLayout title="What are the Five Pillars of Islam?" imageUrl="/images/blog/pillarofislam.svg">
      <div className="flex items-center space-x-1 mb-2 text-gray-500 text-sm">
      <Clock className="w-4 h-4" />
      <span>Oct 25, 2025</span>
    </div>
        <Text className="font-Raleway font-[700] text-[48px] leading-[123%] mb-6" as="h3">
          What are the Five Pillars of Islam?
        </Text>

        <Text className="font-Raleway font-[500] text-[#78827F] text-[32px]" as="p">
          To live a complete life is to have regulations for each aspect of man's life. The religion itself is based on five acts of worship known as the Five Pillars of Islam. These pillars are the foundation of the Muslim faith and practice, providing it with structure and discipline so that one can be near Allah. It is not until Allah's servants, be they believers or unbelievers, acquire this knowledge of the pillars that they can enjoy the marvelous teaching thereof.
        </Text>
        <br />
        <Text className="font-Raleway font-[500] text-[#78827F] text-[32px]" as="p">
          For all those interested in knowing genuine Islamic wisdom and advice, sources such as{' '}
          <Link href="https://mymuftiapp.com/">
            <span className="text-blue-600 underline hover:opacity-80">MY Mufti App</span>
          </Link>{' '}
          become of great use for intellectual insight into Islamic philosophy. With the application of wise advice and scholar-provided comments, individuals get empowered in the context of knowledge development about Islam. And now let us know more deeply about the Five Pillars of Islam.
        </Text>

        <Text className="font-Raleway font-[500] text-[32px]  mt-8" as="h4">
          1. Shahada (Faith and Testimony)
        </Text>
        <Text className="font-Raleway font-[500] text-[#78827F] text-[32px]" as="p">
          The Shahada is the first and most basic pillar of Islam and is the proclamation of faith. It reads:
          <br />
          <blockquote className="italic text-[#78827F] mt-2">
            "La ilaha illallah, Muhammadur Rasulullah."
          </blockquote>
        </Text>
        <Text className="font-Raleway font-[500] text-[#78827F] text-[32px]" as="p">
          This is a translation of: "There is no god but Allah, and Muhammad is His Messenger."
          This declaration confirms the monotheistic faith in a single God (Allah) and accepts Prophet Muhammad (peace be upon him) as the last messenger. The Shahada is not merely a verbal confirmation but an affirmation of living by Islamic teachings. It is the total submission to Allah and marks the gateway into the Islamic religion.
        </Text>

        <Text className="font-Raleway font-[500] text-[32px]  mt-8" as="h4">
          2. Salah (Prayer)
        </Text>
        <Text className="font-Raleway font-[500] text-[#78827F] text-[32px]" as="p">
          The second is Salah, or the five prayers performed daily. Muslims pray at the following times during the day:
          <ul className="list-disc pl-8 mt-4">
            <li>Fajr (before dawn)</li>
            <li>Dhuhr (noon)</li>
            <li>Asr (afternoon)</li>
            <li>Maghrib (sunset)</li>
            <li>Isha (night)</li>
          </ul>
        </Text>
        <Text className="font-Raleway font-[500] text-[#78827F] text-[32px]" as="p">
          Prayer is an immediate form of communication between Allah and a believer. It induces discipline, mindfulness, and closeness to God. Every prayer has certain recitations, actions, and supplications.{' '}
          <Link href="https://mymuftiapp.com/">
            <span className="text-blue-600 underline hover:opacity-80">MY Mufti App</span>
          </Link>{' '}
          can guide Muslims in the proper manner to offer Salah, making their prayers in accordance with true Islamic guidelines.
        </Text>

        <Text className="font-Raleway mt-2 font-[500] text-[#78827F] text-[32px]" as="p">
          For those who wish to deepen their belief and acquire authentic Islamic knowledge,{' '}
          <Link href="https://mymuftiapp.com/">
            <span className="text-blue-600 underline hover:opacity-80">MY Mufti App</span>
          </Link>{' '}
          is an asset. It offers expert advice, educational resources, and practical tools to aid each and every phase of a Muslim's religious life.
        </Text>

        <Text className="font-Raleway font-[500] text-[32px]  mt-8" as="h4">
          3. Zakat (Charity and Almsgiving)
        </Text>
        <Text className="font-Raleway font-[500] text-[#78827F] text-[32px]" as="p">
          Zakat is the third pillar of Islam and focuses on economic justice and social responsibility. Zakat obliges financially capable Muslims to contribute 2.5% of their yearly savings to the poor so that wealth can be distributed and the poor are taken care of.
        </Text>
        <Text className="font-Raleway font-[500] text-[#78827F] text-[32px]" as="p">
          The advantages of Zakat are:
        </Text>
        <ul className="list-disc pl-8 mt-4 text-[#78827F]">
          <li>Cleaning one's wealth</li>
          <li>Helping the poor and downtrodden</li>
          <li>Lessening economic inequality</li>
        </ul>

        <Text className="font-Raleway font-[500] text-[#78827F] text-[32px]" as="p">
          Zakat differs from voluntary charity (Sadaqah) since it is compulsory. Most Muslims use online resources, such as{' '}
          <Link href="https://mymuftiapp.com/">
            <span className="text-blue-600 underline hover:opacity-80">MY Mufti App</span>
          </Link>, to compute and pay Zakat in the right manner so that it can reach needy individuals.
        </Text>

        <Text className="font-Raleway font-[500] text-[32px]  mt-8" as="h4">
          4. Sawm (Fasting during Ramadan)
        </Text>
        <Text className="font-Raleway font-[500] text-[#78827F] text-[32px]" as="p">
          The fourth pillar is Sawm, or fasting, during the month of Ramadan. Muslim people abstain from food, drink, smoking, and sex from sunrise to sunset as a sign of worship and self-control. The fast is broken every day at sundown with the Iftar meal, and the morning meal is Suhoor.
        </Text>
        <Text className="font-Raleway font-[500] text-[#78827F] text-[32px]" as="p">
          Fasting promotes compassion for the needy, increases self-discipline, and enhances religious awareness. Besides physical abstinence, it is a period for more worship, prayer, and recitation of the Quran.
        </Text>

        <Text className="font-Raleway font-[500] text-[#78827F] text-[32px]" as="p">
          For the inexperienced or in need of instruction on correct observance,{' '}
          <Link href="https://mymuftiapp.com/">
            <span className="text-blue-600 underline hover:opacity-80">MY Mufti App</span>
          </Link> provides instructional materials and reminders to ensure spiritual direction throughout Ramadan.
        </Text>

        <Text className="font-Raleway font-[500] text-[32px]  mt-8" as="h4">
          5. Hajj (Pilgrimage to Mecca)
        </Text>
        <Text className="font-Raleway font-[500] text-[#78827F] text-[32px]" as="p">
          The fifth pillar is Hajj, the holy pilgrimage to Mecca. It is mandatory for all financially and physically able Muslims to make at least once in their lifetime. Hajj takes place once a year in the Islamic month of Dhul-Hijjah and is made up of a set of religious rituals that signify unity, humility, and obedience to Allah.
        </Text>
        <Text className="font-Raleway font-[500] text-[#78827F] text-[32px]" as="p">
          Major rituals of Hajj are:
        </Text>
        <ul className="list-disc pl-8 mt-4 text-[#78827F]">
          <li>Tawaf (rounding the Kaaba seven times)</li>
          <li>Sa'i (walking back and forth between hills Safa and Marwah)</li>
          <li>Standing at Arafat (the peak of Hajj)</li>
          <li>Mina and the symbolic devil stoning</li>
        </ul>

        <Text className="font-Raleway font-[500] text-[#78827F] text-[32px]" as="p">
          Hajj brings together Muslims worldwide, binding them in the idea of equality before Allah. With the intricacies involved in the pilgrimage,{' '}
          <Link href="https://mymuftiapp.com/">
            <span className="text-blue-600 underline hover:opacity-80">MY Mufti App</span>
          </Link> provides assistance as a useful guide, providing step-by-step information on how to carry out Hajj properly.
        </Text>

        <Text className="font-Raleway font-[500] text-[32px]  mt-8" as="h4">
          The Importance of Five Pillars
        </Text>
        <Text className="font-Raleway font-[500] text-[#78827F] text-[32px]" as="p">
          The Five Pillars of Islam define the identity and everyday life of a Muslim. They encourage faith, discipline, charity, spiritual association, and community among believers. Through the pillars, Muslims keep a systematic relationship with Allah and adherence to righteousness.
        </Text>
        <Text className="font-Raleway font-[500] text-[#78827F] text-[32px]" as="p">
          Technology has brought religious practice to people's fingertips more than ever before. Apps like{' '}
          <Link href="https://mymuftiapp.com/">
            <span className="text-blue-600 underline hover:opacity-80">MY Mufti App</span>
          </Link> enable people to maintain connection with their religion by providing Islamic counsel, prayer reminders, and learning material. From a new Muslim to a believer throughout one's life or even someone who is interested in learning more about Islam, these tools close the gap between conventional teachings and contemporary convenience.
        </Text>

        <Text className="font-Raleway font-[500] text-[32px]  mt-8" as="h4">
          Conclusion
        </Text>
        <Text className="font-Raleway font-[500] text-[#78827F] text-[32px]" as="p">
          The Five Pillars of Islam are the pillars of Islamic practice and faith. They help Muslims to be devoted to Allah and lead a life of worship, charity, and discipline. Learning about these pillars not only increases religious knowledge but also helps to show more respect and appreciation for Islam's teachings.
        </Text>
        <Text className="font-Raleway font-[500] text-[#78827F] text-[32px]" as="p">
          For those who wish to deepen their belief and acquire authentic Islamic knowledge,{' '}
          <Link href="https://mymuftiapp.com/">
            <span className="text-blue-600 underline hover:opacity-80">MY Mufti App</span>
          </Link> is an asset. It offers expert advice, educational resources, and practical tools to aid each and every phase of a Muslim's religious life.
        </Text>
      </BlogDetailLayout>
    </DefaultLayout>
  );
};

export default BlogDetails;
