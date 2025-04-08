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
      <BlogDetailLayout title="What is Zakat in Islam?" imageUrl="/images/blog/RoleOfZakat.svg">
      <div className="flex items-center space-x-1 mb-2 text-gray-500 text-sm">
      <Clock className="w-4 h-4" />
      <span>March 15, 2025</span>
    </div>
        <Text className="font-Raleway font-[700] text-[48px] leading-[123%]  mb-6" as="h3">
          What is Zakat in Islam?
        </Text>

        <Text className="font-Raleway font-[500] text-[#78827F] font-[32px]" as="p">
          Zakat is an abstract obligation from the Five Pillars of Islam: it signifies social justice, charity, and the balance of economics. Zakat itself is from the Arabic root that refers to purification and to growth, implying that when the right Zakat is given, it purifies one's wealth and creates an economic balance for society. It means that among the Muslims who are qualified in paying their Zakah, should take part in spending a certain portion of wealth in charity to ensure equal distribution of wealth and it is not hoarded.
        </Text>

        <Text className="font-Raleway font-[500] text-[#78827F] font-[32px] mt-6" as="p">
          It is about time that increased awareness and development of the internet have led to the emergence of websites such as{' '}
          <Link href="https://mymuftiapp.com/">
            <span className="text-blue-600 underline hover:opacity-80">My Mufti App</span>
          </Link>{' '}
          for the convenience of the Muslims in accessing Zakat calculators, learning how to distribute Zakat, and more particularly, knowing how to fulfill this important duty in the correct way.
        </Text>

        {/* Section 1 */}
        <Text className="font-Raleway font-[500] font-[32px] mt-8" as="h4">
          1. Zakat: Its Importance and Relevance
        </Text>
        <Text className="font-Raleway font-[500] text-[#78827F] font-[32px]" as="p">
          It is indeed compulsory charity forced by Allah to wipe out all forms of social injustices and inequalities. The Quran very explicitly says:
        </Text>
        <blockquote className="italic text-[#78827F] mt-2 font-[32px] font-Raleway font-[500]">
          "Take from their wealth a charity with which you purify them and increase them, and invoke blessings upon them. Indeed, your invocations are reassurance for them." (Quran 9:103)
        </blockquote>
        <Text className="font-Raleway font-[500] text-[#78827F] font-[32px] mt-4" as="p">
          This ayah lays down an incontestable collective claim to Zakat; it purifies the wealth of the one giving it but can also add to the benefactor's public consequences. Compared to Zakat, which is an obligation (mandatory) for certain Muslims and has to be given to specific categories of persons, voluntary charity (Sadaqah) is zakat.
        </Text>

        {/* Section 2 */}
        <Text className="font-Raleway font-[500] font-[32px] mt-8" as="h4">
          2. Who Has to Pay Zakat?
        </Text>
        <Text className="font-Raleway font-[500] text-[#78827F] font-[32px]" as="p">
          Zakat is compulsory upon every Muslim fulfilling the following conditions:
        </Text>
        <ul className="list-disc pl-8 mt-4 text-[#78827F] font-[32px] font-Raleway font-[500]">
          <li>Adult Muslim: Zakat is obligatory on Muslims who have attained the age of majority.</li>
          <li>Ownership of Wealth: One must own wealth in excess of the Nisab (minimum amount) after subtracting expenditure and debts.</li>
          <li>Possession for One Lunar Year: The wealth should have been in one's possession for a complete Islamic (lunar) year.</li>
        </ul>

        <Text className="font-Raleway font-[500] text-[#78827F] font-[32px] mt-4" as="p">
          The minimum threshold (Nisab) is set as follows:
        </Text>
        <ul className="list-disc pl-8 text-[#78827F] font-[32px] font-Raleway font-[500]">
          <li>85 grams of gold or equivalent wealth.</li>
          <li>595 grams of silver or equivalent wealth.</li>
        </ul>

        <Text className="font-Raleway font-[500] text-[#78827F] font-[32px] mt-4" as="p">
          My Mufti App includes a simple Zakat calculator that assists Muslims in calculating their Nisab based on today's gold and silver prices.
        </Text>

        {/* Section 3 */}
        <Text className="font-Raleway font-[500] font-[32px] mt-8" as="h4">
          3. How Much Zakat Must Be Paid?
        </Text>
        <Text className="font-Raleway font-[500] text-[#78827F] font-[32px]" as="p">
          The normal rate of Zakat is 2.5% of one's eligible assets. This includes:
        </Text>
        <ul className="list-disc pl-8 mt-4 text-[#78827F] font-[32px] font-Raleway font-[500]">
          <li>Cash savings and bank accounts</li>
          <li>Gold and silver (jewelry or bullion)</li>
          <li>Investments (stocks, bonds, shares)</li>
          <li>Business profits and assets</li>
          <li>Agricultural produce and livestock (if applicable)</li>
          <li>Rent from property</li>
        </ul>
        <Text className="font-Raleway font-[500] text-[#78827F] font-[32px] mt-4" as="p">
          For example: if someone's savings exceed the Nisab for a lunar year by $10,000, they will have to pay Zakat at a rate of $250. The{' '}
          <Link href="https://mymuftiapp.com/">
            <span className="text-blue-600 underline hover:opacity-80">My Mufti App</span>
          </Link>{' '}
          calculates Zakat obligations for users to ensure they don’t miss fulfilling this important duty.
        </Text>

        {/* Section 4 */}
        <Text className="font-Raleway font-[500] font-[32px] mt-8" as="h4">
          4. Who Can Receive Zakat?
        </Text>
        <Text className="font-Raleway font-[500] text-[#78827F] font-[32px]" as="p">
          The Quran identifies eight categories eligible to receive Zakat (Quran 9:60):
        </Text>
        <ul className="list-disc pl-8 mt-4 text-[#78827F] font-[32px] font-Raleway font-[500]">
          <li>The Poor (Al-Fuqara)</li>
          <li>The Needy (Al-Masakin)</li>
          <li>Administrators of Zakat</li>
          <li>New Muslims and Those Whose Hearts Need Strengthening</li>
          <li>Slaves and Captives</li>
          <li>Debtors</li>
          <li>In the Name of Allah (for Islamic causes)</li>
          <li>Travelers in distress</li>
        </ul>
        <Text className="font-Raleway font-[500] text-[#78827F] font-[32px] mt-4" as="p">
          My Mufti App gives advice on how to share Zakat appropriately, ensuring it reaches the rightful recipients according to Islamic principles.
        </Text>

        {/* Section 5 */}
        <Text className="font-Raleway font-[500] font-[32px] mt-8" as="h4">
          5. Zakat's Spiritual and Social Gains
        </Text>
        <Text className="font-Raleway font-[500] text-[#78827F] font-[32px]" as="p">
          Zakat has profound spiritual and social benefits:
        </Text>
        <ul className="list-disc pl-8 mt-4 text-[#78827F] font-[32px] font-Raleway font-[500]">
          <li>Spiritual Purification: Purifies wealth and heart from greed.</li>
          <li>Economic Balance: Promotes equitable distribution of wealth.</li>
          <li>Social Welfare: Helps meet the basic needs of the poor and reduces poverty.</li>
        </ul>
        <blockquote className="italic text-[#78827F] mt-4 font-[32px] font-Raleway font-[500]">
          "The shade of a believer on the Day of Resurrection will be his charity." (Tirmidhi)
        </blockquote>

        {/* Section 6 */}
        <Text className="font-Raleway font-[500] font-[32px] mt-8" as="h4">
          6. Zakat vs. Sadaqah
        </Text>
        <Text className="font-Raleway font-[500] text-[#78827F] font-[32px]" as="p">
          Key differences:
        </Text>
        <ul className="list-disc pl-8 mt-4 text-[#78827F] font-[32px] font-Raleway font-[500]">
          <li>Zakat is obligatory, while Sadaqah is voluntary.</li>
          <li>Zakat is fixed at 2.5%; Sadaqah has no set amount.</li>
          <li>Zakat must go to specific categories; Sadaqah can go to anyone.</li>
          <li>Zakat is due only if one meets the Nisab; Sadaqah can be given anytime.</li>
        </ul>

        {/* Section 7 */}
        <Text className="font-Raleway font-[500] font-[32px] mt-8" as="h4">
          7. The Contemporary Use of Zakat
        </Text>
        <Text className="font-Raleway font-[500] text-[#78827F] font-[32px]" as="p">
          With digital tools and apps like My Mufti App, Muslims can now:
        </Text>
        <ul className="list-disc pl-8 mt-4 text-[#78827F] font-[32px] font-Raleway font-[500]">
          <li>Compute Zakat based on up-to-date financial data</li>
          <li>Give securely to verified Zakat causes</li>
          <li>Track and manage payments</li>
          <li>Learn about Zakat obligations</li>
        </ul>

        {/* Section 8 */}
        <Text className="font-Raleway font-[500] font-[32px] mt-8" as="h4">
          8. Zakat Common Misconceptions
        </Text>
        <Text className="font-Raleway font-[500] text-[#78827F] font-[32px]" as="p">
          Common misconceptions:
        </Text>
        <ul className="list-disc pl-8 mt-4 text-[#78827F] font-[32px] font-Raleway font-[500]">
          <li>"Zakat is only for my family" – Not true; Zakat must follow Quranic categories.</li>
          <li>"Zakat is only on income" – It applies to savings, gold, business assets, etc.</li>
          <li>"Zakat can be given as services" – It must be monetary or material.</li>
          <li>"Zakat is a tax" – It is an act of worship and purification, not a tax.</li>
        </ul>

        {/* Conclusion */}
        <Text className="font-Raleway font-[500] font-[32px] mt-10" as="h4">
          Conclusion
        </Text>
        <Text className="font-Raleway font-[500] text-[#78827F] font-[32px] mt-2" as="p">
          Zakat is a foundational pillar of Islam that ensures justice, social balance, and personal purification. By paying Zakat, Muslims fulfill religious obligations and uplift those in need. For accurate Zakat calculation and effective distribution, tools like{' '}
          <Link href="https://mymuftiapp.com/">
            <span className="text-blue-600 underline hover:opacity-80">My Mufti App</span>
          </Link>{' '}
          offer vital resources to give with confidence and sincerity.
        </Text>
      </BlogDetailLayout>
    </DefaultLayout>
  );
};

export default BlogDetails;
