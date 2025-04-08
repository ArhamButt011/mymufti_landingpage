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
      <BlogDetailLayout title="What is the Difference between Sunni and Shia?" imageUrl="/images/blog/FastInRamadan.svg">
      <div className="flex items-center space-x-1 mb-2 text-gray-500 text-sm">
      <Clock className="w-4 h-4" />
      <span>May 22, 2025</span>
    </div>
        <Text className="font-Raleway font-[700] text-[48px] leading-[123%] mb-6" as="h3">
          What is the Difference between Sunni and Shia?
        </Text>

        <Text className="font-Raleway font-[500] text-[#78827F] text-[32px]" as="p">
          Islam is a religious faith, millions more than 1.9 billions today follow it around the world. It can generally be divided into two large groups:{' '}
          <Link href="https://mymuftiapp.com/">
            <span className="text-blue-600 underline hover:opacity-80"> Sunni and Shia</span>
          </Link>. Although both have the same elementary belief in the one God (Allah), in prophethood of Muhammad (peace be filtered over him), and Quranic holy scriptures, there are considerable differences between them in terms of leadership, religious practices, historical views, and theological meanings. The article in question is a comparative analysis of the major differences between Sunni Islam and Shia Islam, aimed at creating clarity on various shades of these two respective sects.
        </Text>

        <Text className="font-Raleway font-[500] text-[32px]  mt-8" as="h4">
          Historical Background
        </Text>
        <Text className="font-Raleway font-[500] text-[#78827F] text-[32px]" as="p">
          The earliest historical split between Sunni and Shia resulted from a debate over the rightful heir of Prophet Muhammad (saw) following his death in 632. Protestants argue that succession must be determined through consent whereas Shia cite that all genuine leadership should emanate only from the Prophet's family, i.e. his cousin and son-in-law, Ali Ibn Abi Talib.
        </Text>
        <Text className="font-Raleway font-[500] text-[#78827F] text-[32px]" as="p">
          Sunni Perspective: Sunnis say that Abu Bakr, the Prophet's friend and in-law, was the rightful first caliph following the consensus of most companions of the Prophet. Sunnis trace the sola line through the first four caliphs as the "Rightly Guided Caliphs": Abu Bakr, Umar, Uthman, and Ali.
        </Text>
        <Text className="font-Raleway font-[500] text-[#78827F] text-[32px]" as="p">
          Shia Perspective: Shia believe that Prophet Muhammad (PBUH) had already nominated Ali as his rightful successor. Shia believe that the leadership must remain within the family of the Prophet, i.e., within the institution of Imamate, i.e., a succession of divinely appointed leaders beginning from Ali and going through his family.
        </Text>

        <Text className="font-Raleway font-[500] text-[32px]  mt-8" as="h4">
          Religious Leadership and Authority
        </Text>
        <Text className="font-Raleway font-[500] text-[#78827F] text-[32px]" as="p">
          Of course, the Sunni-Shia divide is one of the reasons for consociational republicanism.
        </Text>
        <Text className="font-Raleway font-[500] text-[#78827F] text-[32px]" as="p">
          Sunni Islam: Sunnis lack a single religious authority. Religious affairs are instead directed by scholars, jurists, and religious institutions such as Egypt's Al-Azhar University. Sunnis place a very high premium on scholars' consensus (Ijma) and analogy (Qiyas) in interpreting religion.
        </Text>
        <Text className="font-Raleway font-[500] text-[#78827F] text-[32px]" as="p">
          Shia Islam: Shias believe in a hierarchical religious authority, where ayatollahs and grand ayatollahs play a central role. Shias believe in the Imams, divinely appointed infallible leaders, and are traced back to Ali and his progeny.
        </Text>

        <Text className="font-Raleway font-[500] text-[32px]  mt-8" as="h4">
          Key Doctrinal Differences
        </Text>
        <Text className="font-Raleway font-[500] text-[#78827F] text-[32px]" as="p">
          Despite sharing the same faith in the Five Pillars of Islam—Shahada (faith), Salah (prayer), Zakat (charity), Sawm (fasting), and Hajj (pilgrimage)—variances occur with how some of the practices are done.
        </Text>
        <Text className="font-Raleway font-[500] text-[#78827F] text-[32px]" as="p">
          Prayer (Salah)
          <ul className="list-disc pl-8 mt-4">
            <li>Sunnis offer five daily prayers: Fajr, Dhuhr, Asr, Maghrib, and Isha.</li>
            <li>Shias tend to conjoin Dhuhr and Asr, and Maghrib and Isha, praying three times a day while still fulfilling the complete five prayers.</li>
            <li>Their hand positioning also varies, with Sunnis folding their hands and Shias placing their hands on their sides.</li>
          </ul>
        </Text>
        <Text className="font-Raleway font-[500] text-[#78827F] text-[32px]" as="p">
          Ashura Remembrance
          <ul className="list-disc pl-8 mt-4">
            <li>Sunnis have observed the day of Asura (10th of Muharram) as the day of remembrance and fasting; after having escaped Pharaoh, Prophet Musa (Moses) had entered his people.</li>
            <li>The Shia observances of Ashura are, nevertheless, regarded as mourning the martyrdom of Imam Hussein, the Prophet Muhammad (PBUH)'s grandson, in the Karbala War. Mourning processions, recitals, and in some instances self-flagellating are just some of the activities to mourn their loss.</li>
          </ul>
        </Text>
        <Text className="font-Raleway font-[500] text-[#78827F] text-[32px]" as="p">
          Hadith and Religious Scriptures
        </Text>
        <Text className="font-Raleway font-[500] text-[#78827F] text-[32px]" as="p">
          Both Sunni and Shia sects hold the belief that the Quran is the divinely revealed scripture. Still, there exists an area of difference in the compilation of Hadith (prophetic sayings).
          <ul className="list-disc pl-8 mt-4">
            <li>Almost fully on the collection of hadith, Sunni depend on the contributions of scholars like Muslim and Bukhari.</li>
            <li>Shias prefer those hadiths which are narrated by the Prophet's family members and their companions and are included in works such as Al-Kafi.</li>
          </ul>
        </Text>

        <Text className="font-Raleway font-[500] text-[32px]  mt-8" as="h4">
          Differences in Religious Practice
        </Text>
        <Text className="font-Raleway font-[500] text-[#78827F] text-[32px]" as="p">
          Mut'ah (Temporary Marriage):
          <ul className="list-disc pl-8 mt-4">
            <li>Temporary marriage (Mut'ah) is forbidden by Sunni Islam as a practice abrogated by the Prophet.</li>
            <li>Mut'ah is permitted by Shia Islam under certain conditions as a valid contract with mutual agreement.</li>
          </ul>
        </Text>
        <Text className="font-Raleway font-[500] text-[#78827F] text-[32px]" as="p">
          Call to Prayer (Adhan):
          <ul className="list-disc pl-8 mt-4">
            <li>Sunni and Shia Muslims differ only slightly in the wording of the Adhan. Shias include "Ali is the Wali (friend) of Allah" in the call to prayer.</li>
          </ul>
        </Text>

        <Text className="font-Raleway font-[500] text-[32px]  mt-8" as="h4">
          Differences and Unity in Modern Perspective
        </Text>
        <Text className="font-Raleway font-[500] text-[#78827F] text-[32px]" as="p">
          Notwithstanding these differences, one would find that the Sunni and Shia share far more similarities than differences; belief in one God, the Quran, and the prophethood of the Prophet Muhammad (PBUH). In this respect, attempts at uniting Muslims around the world have been made by various Islamic scholars and institutions, including internet platforms like the{' '}
          <Link href="https://mymuftiapp.com/">
            <span className="text-blue-600 underline hover:opacity-80">MY Mufti App</span>
          </Link>, which aims to furnish authentic Islamic guidance for all Muslims regardless of sectarian affiliation.
        </Text>

        <Text className="font-Raleway font-[500] text-[32px]  mt-8" as="h4">
          Conclusion
        </Text>
        <Text className="font-Raleway font-[500] text-[#78827F] text-[32px]" as="p">
          Shia and Sunni Islam ideologies have been divided mainly due to historical accounts, differences in theological understanding, and issues pertaining to political superiority. Although the differences have on occasion resulted in conflicts, both sects observe the same essential principles of Islam. Admiration of these differences with an open heart fosters respect and harmony among Muslims everywhere while maintaining the unity which Islam teaches. Regardless of sect, belief, righteousness, and obedience to Allah must be the focus.
        </Text>
      </BlogDetailLayout>
    </DefaultLayout>
  );
};

export default BlogDetails;