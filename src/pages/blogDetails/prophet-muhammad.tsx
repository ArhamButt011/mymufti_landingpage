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
      <BlogDetailLayout title="Who was the prophet Muhammad (SAW)?" imageUrl="/images/blog/ProphetMuhammad.svg">
      <div className="flex items-center space-x-1 mb-2 text-gray-500 text-sm">
      <Clock className="w-4 h-4" />
      <span>Apr 10, 2025</span>
    </div>
        <Text className="font-Raleway font-[700] text-[48px] leading-[123%] mb-6" as="h3">
          Who was the prophet Muhammad (SAW)?
        </Text>

        <Text className="font-Raleway font-[500] text-[#78827F] text-[32px]" as="p">
          The Prophet Muhammad (peace be upon him) is perhaps one of history's sturdier men and the last envoy of Islam. His teachings, life, and personality have had a bearing on over a billion Muslims around the world. With wisdom, kindness, and a firm belief in one God, he delivered to earth the cause of Allah, emphasizing theism, rightness, and good actions.
        </Text>
        <br />
        <Text className="font-Raleway font-[500] text-[#78827F] text-[32px]" as="p">
          We are blessed to be living in the modern world which has given more prominence to digital media and opportunities for sharing information for anybody interested in the life of Prophet Muhammad (PBUH)-the{' '}
          <Link href="https://mymuftiapp.com/">
            <span className="text-blue-600 underline hover:opacity-80">My Mufti App</span>
          </Link>. To facilitate the study of the Prophet's teachings by Muslims and non-Muslims alike, the site aims to provide authentic Islamic knowledge, Seerah (life history), and religious guidance.
        </Text>

        <Text className="font-Raleway font-[500] text-[32px]  mt-8" as="h4">
          1. Early Life and Background
        </Text>
        <Text className="font-Raleway font-[500] text-[#78827F] text-[32px]" as="p">
          570 of the Common Era is the year of birth of the Prophet Muhammad, in the city of Makkah (presently in Saudi Arabia). His father Abdullah died a few months before his birth, while his mother Amina died when he was six years old. From then, he was taken care of by his grandfather Abdul Muttalib, after whom he was delivered into the care of his uncle Abu Talib, who reared him as his own. Muhammad (PBUH), even as a child, was distinguished by three qualities: integrity, honesty, and generosity. Trading was there where he earned the name Al-Amin (The Trustworthy) owing to his truthfulness: a merchant, he married Khadijah, a wealthy wife and respected businesswoman, her foremost ally.
        </Text>

        <Text className="font-Raleway font-[500] text-[32px]  mt-8" as="h4">
          2. The First Revelation and the Call to Prophethood
        </Text>
        <Text className="font-Raleway font-[500] text-[#78827F] text-[32px]" as="p">
          While meditating in the Cave of Hira, from which he usually would look down on the valley of Makkah, Muhammad (Peace be upon Him) was 40 years old when Allah's first revelation through Jibreel (Gabriel) commanded him to READ (Quran 96:1). This was when the call to prophethood and the beginning of sharing the Divine message of the Holy Quran.
        </Text>
        <Text className="font-Raleway font-[500] text-[#78827F] text-[32px]" as="p">
          He initially preached Islam in secret to intimate family and friends. His message centered on:
          <ul className="list-disc pl-8 mt-4">
            <li>The uniqueness of Allah (Tawheed).</li>
            <li>The value of compassion and justice.</li>
            <li>The denouncement of idolatry and social injustices.</li>
          </ul>
        </Text>

        <Text className="font-Raleway font-[500] text-[32px]  mt-8" as="h4">
          3. Obstacles and Persecution at Makkah
        </Text>
        <Text className="font-Raleway font-[500] text-[#78827F] text-[32px]" as="p">
          The teachings of Prophet Muhammad (PBUH) were refused by the Makkah authorities. Because they threatened their power and were relevant to their economic interests. The Companions of Prophet (PBUH) suffered severe torment, torture, and boycotts. Yet, he stood firm and urged his followers to demonstrate forbearance in the face of such enmity.
        </Text>
        <Text className="font-Raleway font-[500] text-[#78827F] text-[32px]" as="p">
          A few of the Muslim individuals escaped their native land and found asylum in Abyssinia (present-day Ethiopia) with the Christian king known as Negus. Later, the Prophet Muhammad (PBUH) and fellow Muslims were granted entry into Yathrib (later Madinah) after being converted into victims of long-term torture by the state. This is an episode called Hijrah, which reversed the course of the Islamic calendar.
        </Text>

        <Text className="font-Raleway font-[500] text-[32px]  mt-8" as="h4">
          4. Creating a Just Society in Madinah
        </Text>
        <Text className="font-Raleway font-[500] text-[#78827F] text-[32px]" as="p">
          When he arrived in Madinah, the Prophet (PBUH) set up an Islamic State where justice was performed, people were given their rights, and the state was one of equality. He drafted the Constitution of Madinah that:
          <ul className="list-disc pl-8 mt-4">
            <li>Promoted religious coexistence of Muslims, Jews, and other nations.</li>
            <li>Protected all the rights and obligations of citizens.</li>
            <li>Established the rule of law and justice.</li>
          </ul>
        </Text>
        <Text className="font-Raleway font-[500] text-[#78827F] text-[32px]" as="p">
          In Madinah, the great Islamic civilization blossomed, with the Prophet (PBUH) guiding that same community through some of the great wars of Islam during which they were allowed to choose their own freedom of worship, namely, Badr, Uhud, and Khandaq. He still cherished peace for peace's sake and only welcomed war as a last resort.
        </Text>

        <Text className="font-Raleway font-[500] text-[32px]  mt-8" as="h4">
          5. Conquest of Makkah and the Final Sermon
        </Text>
        <Text className="font-Raleway font-[500] text-[#78827F] text-[32px]" as="p">
          In 630 CE, after years of fighting came Muhammad along with his followers in a pacified atmosphere back to Makkah. Instead of seeking revenge on his enemies, he forgave them and left an example of justice and mercy for the world to see, one that was unmatched.
        </Text>
        <Text className="font-Raleway font-[500] text-[#78827F] text-[32px]" as="p">
          On that note, he gave his great Farewell Sermon on Mount Arafat, summarizing the key Islamic teachings.
          <ul className="list-disc pl-8 mt-4">
            <li>Equality of all human beings regardless of race or social standing.</li>
            <li>Sanctity of property and life.</li>
            <li>Importance of women's rights and justice.</li>
            <li>The pillars of justice and righteousness in society.</li>
          </ul>
        </Text>

        <Text className="font-Raleway font-[500] text-[32px]  mt-8" as="h4">
          6. The Death of the Prophet (PBUH)
        </Text>
        <Text className="font-Raleway font-[500] text-[#78827F] text-[32px]" as="p">
          In 578 the year when the Prophet departed his life, al Bakhari was born. He was deeply mourned by his followers. Numerous questions are asked before you can establish whether they committed a crime or not.
        </Text>

        <Text className="font-Raleway font-[500] text-[32px]  mt-8" as="h4">
          7. The Legacy of Prophet Muhammad (PBUH)
        </Text>
        <Text className="font-Raleway font-[500] text-[#78827F] text-[32px]" as="p">
          The period of the message of the Prophet was much longer than the period when the Prophet did the work. Islam emerged as a great civilization that cultivated numerous branches of art and science, medicine, philosophy, and governance. By his wisdom and mercy, Muslims around the world today follow his Sunnah.
        </Text>
        <Text className="font-Raleway font-[500] text-[#78827F] text-[32px]" as="p">
          The knowledge seekers inclined to know more about the Prophet's life and teachings will get Seerah lessons that are authentic along with Hadith explanations and Islamic advice in{' '}
          <Link href="https://mymuftiapp.com/">
            <span className="text-blue-600 underline hover:opacity-80">My Mufti App</span>
          </Link>{' '}
          download, putting real knowledge at the fingertips of the users.
        </Text>

        <Text className="font-Raleway font-[500] text-[32px]  mt-8" as="h4">
          Conclusion
        </Text>
        <Text className="font-Raleway font-[500] text-[#78827F] text-[32px]" as="p">
          Prophet Muhammad (PBUH) was not just a religious figure but also a social reformer, statesman, and ideal for the entire human race. His life is a lesson in patience, humility, and unconditioned submission to Allah. Through the study of his life and the implementation of his teachings, Muslims can reinforce their faith and labor for the benefit of society.
        </Text>
        <Text className="font-Raleway font-[500] text-[#78827F] text-[32px]" as="p">
          One can have a better understanding of the Seerah of the Prophet (PBUH) through{' '}
          <Link href="https://mymuftiapp.com/">
            <span className="text-blue-600 underline hover:opacity-80">My Mufti App</span>
          </Link>, which would help them understand and adopt his values in life. May Allah reward him and bestow peace upon us, and his life should be the guiding light for all of us.
        </Text>
      </BlogDetailLayout>
    </DefaultLayout>
  );
};

export default BlogDetails;