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
      <BlogDetailLayout title="How Muslims Keep Fast in Ramadan" imageUrl="/images/blog/FastInRamadan.svg">
        <div className="flex items-center space-x-1 mb-2 text-gray-500 text-sm">
          <Clock className="w-4 h-4" />
          <span>Feb 28, 2025</span>
        </div>
        <Text className="font-Raleway font-[700] text-[48px] leading-[123%] mb-6" as="h3">
          How Muslims Keep Fast in Ramadan
        </Text>

        <Text className="font-Raleway font-[500] text-[#78827F] text-[32px]" as="p">
          Fasting during Ramadan is one of the Five Pillars of Islam and the most blessed month of the year, related to
          prayers and zeal within the clear Form of Religion. For millions of Muslims around the world, fasting is such
          a valued religious practice because it gives rise to the feelings of community, thankfulness, and restraint.
        </Text>
        <br />
        <Text className="font-Raleway font-[500] text-[#78827F] text-[32px]" as="p">
          To find out more about fasting and the right way of doing it, you can use{' '}
          <Link href="https://mymuftiapp.com/">
            <span className="text-blue-600 underline hover:opacity-80">My Mufti App</span>
          </Link>{' '}
          authentic advisory services, daily fasting reminders, Islamic fiqh on fasting, and some useful advice for
          Muslims to pass with assurance through Ramadan.
        </Text>

        <Text className="font-Raleway font-[500] text-[32px] mt-8" as="h4">
          1. The Purpose and Meaning of Fasting in Islam
        </Text>
        <Text className="font-Raleway font-[500] text-[#78827F] text-[32px]" as="p">
          Ramadan fasting is a command of God, as it is said in the Quran.
          <br />
          <blockquote className="italic text-[#78827F] mt-2">
            "You who have believed. Worship is ordained on you in the way that it was ordained on those before you so
            that perhaps you might remain mindful." (Quran 2:183)
          </blockquote>
        </Text>
        <Text className="font-Raleway font-[500] text-[#78827F] text-[32px]" as="p">
          The main goals of fasting are:
          <ul className="list-disc pl-8 mt-4">
            <li>Building self-control and willpower.</li>
            <li>Building a stronger relationship with Allah.</li>
            <li>Practicing gratitude through the hardships of the poor.</li>
            <li>Cleansing the body and soul through fasting from food, liquids, and sinful acts.</li>
          </ul>
        </Text>

        <Text className="font-Raleway font-[500] text-[32px] mt-8" as="h4">
          2. Ramadan Fasting: The Basics
        </Text>
        <Text className="font-Raleway font-[500] text-[#78827F] text-[32px]" as="p">
          Ramadan fasting means staying away from food and drink, cigarettes, and sex from dawn (Fajr) to dusk (Maghrib)
          — not just physical renunciation but also renouncing misdeeds such as lying, backbiting, anger, and gossip.
        </Text>
        <Text className="font-Raleway font-[500] text-[#78827F] text-[32px]" as="p">
          The Prophet Muhammad (peace be upon him) related:
          <br />
          <blockquote className="italic text-[#78827F] mt-2">
            "Whosoever does not leave off false speech (i.e., lying), and evil deeds, and cursing individuals, Allah
            does not need him to leave off his food and drink." (Bukhari)
          </blockquote>
        </Text>

        <Text className="font-Raleway font-[500] mt-2 text-[#78827F] text-[32px]" as="p">
          There are two major phases of fasting in Islam:
          <ul className="list-disc pl-8 mt-4">
            <li>Suhoor (Pre-Dawn Meal): A light nutritious meal consumed before the morning prayer.</li>
            <li>
              Iftar (Breaking of the Fast): An evening meal traditionally opened with dates and water, followed by a
              wholesome meal.
            </li>
          </ul>
        </Text>

        <Text className="font-Raleway mt-2 font-[500] text-[#78827F] text-[32px]" as="p">
          With My Mufti App, users come to know precise suhoor and iftar time based on where they are in order to take
          the right fasting schedule.
        </Text>

        <Text className="font-Raleway font-[500] text-[32px] mt-8" as="h4">
          3. Who Should Fast?
        </Text>
        <Text className="font-Raleway font-[500] text-[#78827F] text-[32px]" as="p">
          It is obligatory upon all adult Muslim men and women who have normal physical and mental health to observe
          fasting. It is, however, exempt for those experiencing sincere hardships, namely:
          <ul className="list-disc pl-8 mt-4">
            <li>Children (under puberty)</li>
            <li>The elderly (who are weak and may not be able to bear the fast)</li>
            <li>Nursing women and pregnant females (if fasting may adversely affect their health or the fetus)</li>
            <li>Sick people (with medical issues that make fasting difficult)</li>
            <li>Travelers (embarking on long journeys)</li>
            <li>Women on menstruation or Nifas (they will have to catch up on missed fasts later)</li>
          </ul>
        </Text>
        <Text className="font-Raleway font-[500] text-[#78827F] text-[32px]" as="p">
          Those unable to fast due to continuous illness or extreme old age can compensate by giving food to a poor
          person for every missed fast (Fidya). My Mufti App provides Fidya calculation advice and instructions on how
          to fulfill this responsibility.
        </Text>

        <Text className="font-Raleway font-[500] text-[32px] mt-8" as="h4">
          4. Suhoor for Fasting: Importance of Pre-Fasting Breakfast
        </Text>
        <Text className="font-Raleway font-[500] text-[#78827F] text-[32px]" as="p">
          Suhoor is of prime importance since it keeps one going throughout the day. The Prophet Muhammad (PBUH)
          explained:
          <br />
          <blockquote className="italic text-[#78827F] mt-2">
            "Eat Suhoor, as it definitely holds a blessing." (Sahih Bukhari & Muslim)
          </blockquote>
        </Text>
        <Text className="font-Raleway font-[500] text-[#78827F] text-[32px]" as="p">
          A healthy Suhoor consists of:
          <ul className="list-disc pl-8 mt-4">
            <li>Complex carbohydrates (e.g., oats, whole-grain bread, brown rice)</li>
            <li>Proteins (e.g., eggs, yogurt, cheese, nuts)</li>
            <li>Fresh fruits and vegetables loaded with vitamins and water</li>
            <li> Regardless, one must have enough water intake to avoid dehydration during the day.</li>
          </ul>
        </Text>

        <Text className="font-Raleway mt-2 font-[500] text-[#78827F] text-[32px]" as="p">
          My Mufti App also provides meal planning for Suhoor to help users maintain a healthy balanced diet throughout
          Ramadan.
        </Text>

        <Text className="font-Raleway font-[500] text-[32px] mt-8" as="h4">
          5. Breaking the Fast: Sunnah of Iftar
        </Text>
        <Text className="font-Raleway font-[500] text-[#78827F] text-[32px]" as="p">
          At sunset, Muslims break their fasting according to the Sunnah of Prophet Muhammad (PBUH):
          <br />
          <blockquote className="italic text-[#78827F] mt-2">
            "When one of you breaks his fast, let him break it with dates, for they are blessed. If he does not have
            dates, then with water, for it is pure." (Abu Dawood)
          </blockquote>
        </Text>
        <Text className="font-Raleway font-[500] text-[#78827F] text-[32px]" as="p">
          A healthy Iftar should consist of:
          <ul className="list-disc pl-8 mt-4">
            <li>Dates and water to replenish energy and hydration.</li>
            <li>Lean protein and vegetables for a balanced diet.</li>
            <li>Avoiding fried and highly processed foods to avoid sluggishness.</li>
          </ul>
        </Text>

        <Text className="font-Raleway font-[500] text-[#78827F] text-[32px]" as="p">
          Numerous families and communities gather together for Iftar, creating a feeling of togetherness and
          brotherhood. My Mufti App offers Duas (supplications) for opening the fast and suggested dietary principles
          for a healthy Ramadan.
        </Text>

        <Text className="font-Raleway font-[500] text-[32px] mt-8" as="h4">
          6. Acts of Worship with Fasting
        </Text>
        <Text className="font-Raleway font-[500] text-[#78827F] text-[32px]" as="p">
          Fasting in Ramadan is not just an absence of food; it is also an opportunity to ramp up worship. Other acts
          performed during fasting include:
        </Text>
        <Text className="font-Raleway font-[500] text-[#78827F] text-[32px]" as="p">
          Living in the Quran: Ramadan is the month during which the Quran was revealed, so it is a special moment for
          reflection and study.
          <ul className="list-disc pl-8 mt-4">
            <li>Extra Salah: Taraweeh prayers attract very big spiritual prizes and are offered at night.</li>
            <li>Charity: Ramadan is an important time for increasing acts of charity and helping the poor.</li>
            <li>
              Asking for forgiveness and making du'a: Muslims seek Allah's mercy through very heart-touching
              supplications, particularly during the last 10 nights.
            </li>
          </ul>
        </Text>

        <Text className="font-Raleway font-[500] text-[#78827F] text-[32px]" as="p">
          The My Mufti App offers special features like a Quran reading tracker, Taraweeh prayer timings, and even Zakat
          calculators to help you maximize your spiritual growth this Ramadan.
        </Text>

        <Text className="font-Raleway font-[500] text-[32px] mt-8" as="h4">
          7. Common Problems and How to Deal with Them
        </Text>
        <Text className="font-Raleway font-[500] text-[#78827F] text-[32px]" as="p">
          Fasting can incite physical and mental problems. Staying ready and disciplined can make fasting challenges
          less hectic. Some common issues are as follows:
          <ul className="list-disc pl-8 mt-4">
            <li>Dehydration: Drinking lots of water during normal times is important.</li>
            <li>Fatigue and Low Energy: Proper rest and balanced food help.</li>
            <li>Cravings: Reminding oneself of the spiritual rewards of fasting helps in resisting temptations.</li>
            <li>
              Work and Study Balance: Planning the day well according to prayer and fasting schedules ensures
              productivity.
            </li>
          </ul>
        </Text>
        <Text className="font-Raleway font-[500] text-[#78827F] text-[32px]" as="p">
          My Mufti App provides tips and methods to overcome these difficulties successfully, thereby making fasting a
          successful experience.
        </Text>

        <Text className="font-Raleway font-[800] text-[32px] mt-8" as="h4">
          8. The Last Ten Nights and Laylatul Qadr
        </Text>
        <Text className="font-Raleway font-[500] text-[#78827F] text-[32px]" as="p">
          The last ten nights of Ramadan are those that have the most spiritual significance, as they harbor within them
          Laylatul Qadr, a night better than a thousand months (Quran 97:3). These are the nights during which Muslims
          engage themselves the most in prayers, recitation of the Quran, and requests for forgiveness.
          <br />
          The Prophet (PBUH) made me confident in locating Laylatul Qadr on odd nights of the remaining ten days. My
          Mufti App gives reminders and suggested acts of obedience to maximize the holy period.
        </Text>

        <Text className="font-Raleway font-[500] text-[32px] mt-8" as="h4">
          9. Ending Ramadan: Eid al-Fitr Celebration
        </Text>
        <Text className="font-Raleway font-[500] text-[#78827F] text-[32px]" as="p">
          Eid al-Fitr is celebrated at the end of Ramadan with a special prayer. Collective charity referred to as Zakat
          al-fitr is where people participate. It also serves as a reason for the family reunion. It expresses a point
          of thanks for the weaknesses involved in upholding the fast and a celebration of the blessings of Ramadan.
        </Text>
        <Text className="font-Raleway font-[500] text-[#78827F] text-[32px]" as="p">
          It is necessary for Zakat al-Fitr to be extended on account of the fact that the needy people should have the
          opportunity to partake in the Eid festivities before the Eid prayers are conducted.
          <br />
          My Mufti App is just a means of doing right for Fitr Zakat and celebration preparation as per the teachings of
          Islam.
        </Text>
        <Text className="font-Raleway font-[500] text-[32px] mt-8" as="h4">
          Conclusion
        </Text>
        <Text className="font-Raleway font-[500] text-[#78827F] text-[32px]" as="p">
          Fasting during Ramadan is a very spiritual experience that deepens faith, develops discipline, and promotes
          the feeling of unity among Muslims. Through Islamic regulation of fasting, suhoor, iftar, and acts of worship,
          Muslims are able to reap all the benefits from this holy month. <br /> For those looking for in-depth
          guidance,{' '}
          <Link href="https://apps.apple.com/us/app/my-mufti/id6446103667">
            <span className="text-blue-600 underline hover:opacity-80">MY Mufti App download</span>
          </Link>{' '}
          is a must-have, offering fasting timetables, Duas, Quran study timetables, and expert tips to maximize
          Ramadan.
        </Text>
      </BlogDetailLayout>
    </DefaultLayout>
  );
};

export default BlogDetails;
