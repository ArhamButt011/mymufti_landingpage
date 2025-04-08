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
      <BlogDetailLayout title="What is the Islamic View of Marriage?" imageUrl="/images/blog/marriage.svg">
      <div className="flex items-center space-x-1 mb-2 text-gray-500 text-sm">
      <Clock className="w-4 h-4" />
      <span>Aug 30, 2025</span>
    </div>
        <Text className="font-Raleway font-[700] text-[48px] leading-[123%] mb-6" as="h3">
          What is the Islamic View of Marriage?
        </Text>

        <Text className="font-Raleway font-[500] text-[#78827F] text-[32px]" as="p">
          Marriage is a sacred and core institution in Islam, forming a pillar for an harmonious and moral community. It is more than just a legal bond but a deep spiritual connection between husband and wife that aims to unite them in love, mercy, and peace. The Quran and Hadith reiterate the sanctity of marriage, enunciating the rights, obligations, and excellencies involved in this sacred institution.
        </Text>
        <br />
        <Text className="font-Raleway font-[500] text-[#78827F] text-[32px]" as="p">
          With contemporary issues and changing social norms, most Muslims are looking for authentic advice on marriage. My Mufti App{' '}
          <Link href="https://mymuftiapp.com/">
            <span className="text-blue-600 underline hover:opacity-80">My Mufti App</span>
          </Link>{' '}
          offers a convenient platform for couples and individuals to learn about Islamic teachings on marriage, providing scholarly guidance, marriage counseling, and responses to commonly asked questions on Islamic matrimonial life.
        </Text>

        <Text className="font-Raleway font-[500] text-[32px] mt-8" as="h4">
          1. The Role and Significance of Marriage in Islam
        </Text>
        <Text className="font-Raleway font-[500] text-[#78827F] text-[32px]" as="p">
          Marriage in Islam is not just a way of companionship but also a way of fulfilling religious and social obligations. The Quran declares: 
          <br />
          <blockquote className="italic text-[#78827F] mt-2">
            "And among His signs is that He created for you mates from amongst yourselves, that you may find tranquility in them, and He places between you love and mercy. Verily, in that are signs for people who reflect." (Quran 30:21)
          </blockquote>
        </Text>
        <Text className="font-Raleway font-[500] text-[#78827F] text-[32px]" as="p">
          This verse depicts the prime requisites of a successful marriage—love, peace, and mercy. Islam advocates for marriage to construct a civilized society, protect people from indecency, and offer a platform to raise obedient children.
        </Text>

        <Text className="font-Raleway font-[500] text-[32px] mt-8" as="h4">
          2. The Parameters of Spouse Selection in Islam
        </Text>
        <Text className="font-Raleway font-[500] text-[#78827F] text-[32px]" as="p">
          Islam clearly outlines how to choose a spouse, based on religion, character, and compatibility. The Prophet Muhammad (PBUH) counseled:
          <ul className="list-disc pl-8 mt-4">
            <li>Religious dedication and good morals</li>
            <li>Value concordance and goals in life</li>
            <li>Respect and understanding each other</li>
            <li>Emotional and mental affinity</li>
          </ul>
        </Text>
        <Text className="font-Raleway font-[500] text-[#78827F] text-[32px]" as="p">
          The Prophet advised:
          <blockquote className="italic text-[#78827F] mt-2">
            "A woman can be married for four reasons: her money, her family, her looks, and her religion. Marry the one who is religious, and you will prosper." (Bukhari and Muslim)
          </blockquote>
        </Text>

        <Text className="font-Raleway mt-2 font-[500] text-[#78827F] text-[32px]" as="p">
          My Mufti App provides advice on how to make faith-inspired and informed choices when looking for a life partner, assisting users in approaching the marriage process in a halal and dignified way.{' '}
          <Link href="https://play.google.com/store/apps/details?id=com.mlbranch.mymufti&hl=en&gl=US">
            <span className="text-blue-600 underline hover:opacity-80">My Mufti App download</span>
          </Link>{' '}
          offers genuine Islamic guidance for individuals and couples to walk the path of marriage in wisdom and belief.
        </Text>
      </BlogDetailLayout>
    </DefaultLayout>
  );
};

export default BlogDetails;