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
      <BlogDetailLayout title="What is the Role of Women in Islam?" imageUrl="/images/blog/IslamicViewOfWomen.svg">
      <div className="flex items-center space-x-1 mb-2 text-gray-500 text-sm">
      <Clock className="w-4 h-4" />
      <span>Apr 10, 2024</span>
    </div>
        <Text className="font-Raleway font-[700] text-[48px] leading-[123%]  mb-6" as="h3">
          What is the Role of Women in Islam?
        </Text>

        <Text className="font-Raleway font-[500] text-[#78827F] text-[16px]" as="p">
          Islam is a religion that values equality, respect, and justice for all people, regardless of gender. The role of women in Islam is one of immense importance, encompassing spiritual, social, economic, and political dimensions. While misconceptions persist about the status of women in Islam, the religion itself grants women rights and responsibilities that contribute to a balanced and just society. With the advancement of technology, platforms like{' '}
          <Link href="https://mymuftiapp.com/">
            <span className="text-blue-600 underline hover:opacity-80">My Mufti App</span>
          </Link>{' '}
          have made it easier for individuals to access authentic Islamic knowledge about the rights and roles of women in Islam. Through expert guidance and scholarly insights, My Mufti App ensures that the true teachings of Islam regarding women’s roles are easily accessible.
        </Text>

        <Text className="font-Raleway font-[500] text-[32px]  mt-8" as="h4">
          1. Spiritual Equality and Role in Worship
        </Text>
        <Text className="font-Raleway font-[500] text-[#78827F] text-[16px]" as="p">
          In Islam, men and women are equal in their devotion to Allah and their pursuit of righteousness. Both are expected to fulfill their religious obligations, such as prayer, fasting, charity, and pilgrimage. The Quran explicitly states:
        </Text>

        <blockquote className="italic text-[#78827F] text-[16px] mt-4">
          "Whoever does righteousness, whether male or female, while they are a believer—We will surely cause them to live a good life, and We will surely give them their reward according to the best of what they used to do." (Quran 16:97)
        </blockquote>

        <Text className="font-Raleway font-[500] text-[#78827F] text-[16px] mt-4" as="p">
          This verse highlights that both men and women have an equal opportunity to attain spiritual success. Women are encouraged to seek knowledge, engage in religious discussions, and contribute to Islamic scholarship. Many prominent female scholars, such as Aisha (may Allah be pleased with her), played crucial roles in the preservation and transmission of Islamic teachings.
        </Text>

        <Text className="font-Raleway font-[500] text-[32px]  mt-8" as="h4">
          2. Education and Intellectual Contributions
        </Text>
        <Text className="font-Raleway font-[500] text-[#78827F] text-[16px]" as="p">
          Education is highly emphasized in Islam, and seeking knowledge is a duty for both men and women. The Prophet Muhammad (peace be upon him) said:
        </Text>

        <blockquote className="italic text-[#78827F] text-[16px] mt-4">
          "Every Muslim is obligated to seek knowledge." (from Ibn Majah)
        </blockquote>

        <Text className="font-Raleway font-[500] text-[#78827F] text-[16px] mt-4" as="p">
          Historically, Muslim women have made significant contributions to education and scholarship. One of the earliest examples is Fatima al-Fihri, who founded the University of Al-Qarawiyyin in Morocco, the world’s oldest continuously operating university. Women have served as scholars, poets, and jurists throughout Islamic history, contributing to various fields of knowledge. Through{' '}
          <Link href="https://mymuftiapp.com/">
            <span className="text-blue-600 underline hover:opacity-80">My Mufti App</span>
          </Link>, women can access Islamic educational resources, learn about their rights, and seek religious guidance from reputable scholars. This empowers them to practice their faith with confidence and clarity.
        </Text>

        <Text className="font-Raleway font-[500] text-[32px]  mt-8" as="h4">
          3. Family and Social Responsibilities
        </Text>
        <Text className="font-Raleway font-[500] text-[#78827F] text-[16px]" as="p">
          Women play an integral role in family life, serving as mothers, daughters, sisters, and wives. In Islam, the family unit is highly prized, and women are accorded respect within it. The Prophet Muhammad (PBUH) said:
        </Text>

        <blockquote className="italic text-[#78827F] text-[16px] mt-4">
          "Paradise lies under the feet of mothers." (Ahmad, Nasai)
        </blockquote>

        <Text className="font-Raleway font-[500] text-[#78827F] text-[16px] mt-4" as="p">
          Motherhood is considered one of the noblest responsibilities, as it involves nurturing and educating future generations. Islam also emphasizes the importance of kindness and respect toward women. The Quran declares:
        </Text>

        <blockquote className="italic text-[#78827F] text-[16px] mt-4">
          "And live with them in kindness. For if you dislike them—perhaps you dislike something in which Allah has placed much good." (Quran 4:19)
        </blockquote>

        <Text className="font-Raleway font-[500] text-[#78827F] text-[16px] mt-4" as="p">
          Women are not confined to the home; they have the right to engage in social and professional activities while maintaining a balance between their personal and communal roles. Islam encourages women to be active members of society, contributing to community welfare and social justice.
        </Text>

        <Text className="font-Raleway font-[500] text-[32px]  mt-8" as="h4">
          4. Economic Rights and Financial Independence
        </Text>
        <Text className="font-Raleway font-[500] text-[#78827F] text-[16px]" as="p">
          Islam provided women with financial rights more than 1,400 years ago, even before most contemporary societies acknowledged them. Women in Islam are entitled to:
        </Text>

        <ul className="list-disc pl-8 mt-4 text-[#78827F] text-[16px]">
          <li>Own and inherit property</li>
          <li>Enter into business and trade</li>
          <li>Retain their earnings without needing to share them with their husbands</li>
          <li>Get financial assistance from their fathers or husbands, even if they possess personal wealth</li>
        </ul>

        <Text className="font-Raleway font-[500] text-[#78827F] text-[16px] mt-4" as="p">
          The Quran states:
        </Text>

        <blockquote className="italic text-[#78827F] text-[16px] mt-4">
          "For men is a share of what they have earned, and for women is a share of what they have earned." (Quran 4:32)
        </blockquote>

        <Text className="font-Raleway font-[500] text-[#78827F] text-[16px] mt-4" as="p">
          There have been numerous successful Muslim businesswomen throughout history. The most well-known example is that of Khadijah bint Khuwaylid, the Prophet Muhammad's (PBUH) wife, who was a successful and dignified merchant. With contemporary technology, empowerment and financial literacy are within reach.{' '}
          <Link href="https://mymuftiapp.com/">
            <span className="text-blue-600 underline hover:opacity-80">My Mufti App</span>
          </Link>{' '}
          is an example of guidance on Islamic finance that assists women in understanding their monetary rights and handling their wealth according to Islamic principles.
        </Text>

        <Text className="font-Raleway font-[500] text-[32px]  mt-8" as="h4">
          5. Political and Leadership Roles
        </Text>
        <Text className="font-Raleway font-[500] text-[#78827F] text-[16px]" as="p">
          Against false impressions, Islam does permit women to become leaders and rulers. Women have assumed crucial roles as politicians, army leaders, and administrators in the course of Islamic history. These include Shajarat al-Durr, an Egyptian ruler, and Amina of Zazzau, a strong leader in West Africa. The Quran refers to the leadership of Queen Bilqis (Queen of Sheba), a wise and governing queen. Women were consulted by the Prophet Muhammad (PBUH) on significant issues and their opinions were respected. Women in the present age continue to make contributions towards social and political advancements in the Islamic context.{' '}
          <Link href="https://mymuftiapp.com/">
            <span className="text-blue-600 underline hover:opacity-80">My Mufti App</span>
          </Link>{' '}
          is an online platform for women interested in knowing about their rights in leadership and governance.
        </Text>

        <Text className="font-Raleway font-[500] text-[32px]  mt-8" as="h4">
          6. Modesty and Women's Dress Code
        </Text>
        <Text className="font-Raleway font-[500] text-[#78827F] text-[16px]" as="p">
          Modesty is an important part of Islamic teachings, and men and women are both taught to dress and conduct themselves with dignity. The Quran teaches that:
        </Text>

        <blockquote className="italic text-[#78827F] text-[16px] mt-4">
          "Say to believing men that they should lower their gaze and guard their chastity. And say to believing women that they should lower their gaze, guard their chastity, and not display their adornments except what is apparent." (Quran 24:30-31)
        </blockquote>

        <Text className="font-Raleway font-[500] text-[#78827F] text-[16px] mt-4" as="p">
          This verse highlights the concept of modesty, which is both a personal and societal value. Women in Islam are given the freedom to choose their attire while maintaining modesty, with many opting for the hijab or other forms of covering. It is important to note that modesty is not just a physical act but a reflection of the inner dignity, character, and values that are cherished in Islam.
        </Text>

        <Text className="font-Raleway font-[500] text-[#78827F] text-[16px] mt-8" as="p">
          In conclusion, the role of women in Islam is multifaceted and dynamic. Women are granted spiritual, social, intellectual, economic, and political rights that enable them to lead fulfilling and impactful lives. Through education and the practice of Islam, women continue to contribute significantly to society. Platforms like{' '}
          <Link href="https://mymuftiapp.com/">
            <span className="text-blue-600 underline hover:opacity-80">My Mufti App</span>
          </Link>{' '}
          empower women by providing access to authentic Islamic knowledge, helping them understand and fulfill their rights and responsibilities.
        </Text>
      </BlogDetailLayout>
    </DefaultLayout>
  );
};

export default BlogDetails;
