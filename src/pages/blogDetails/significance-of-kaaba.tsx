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
      <BlogDetailLayout title="Why is the Significance of Kaaba important?" imageUrl="/images/blog/Kaaba.svg">
      <div className="flex items-center space-x-1 mb-2 text-gray-500 text-sm">
      <Clock className="w-4 h-4" />
      <span>July 18, 2025</span>
    </div>
        <Text className="font-Raleway font-[500] text-[48px] leading-[123%] mb-6" as="h3">
          Why is the Significance of Kaaba important?
        </Text>

        <Text className="font-Raleway font-[500] text-[#78827F] text-[16px]" as="p">
          The Kaaba or the House of Allah is Islam's holiest place. Situated at the center of Masjid al-Haram in Mecca,
          Saudi Arabia, it is the target of Muslim prayers and the journey of millions of pilgrims each year. The Kaaba
          is of monumental religious, historic, and spiritual importance to all Muslims.
        </Text>
        <br />
        <Text className="font-Raleway font-[500] text-[#78827F] text-[16px]" as="p">
          With advancements in technology improving religious knowledge, sites such as{' '}
          <Link href="https://mymuftiapp.com/">
            <span className="text-blue-600 underline hover:opacity-80">My Mufti App</span>
          </Link>{' '}
          assist Muslims in learning more about the significance, history, and place of the Kaaba in Islamic practice.
          My Mufti App offers genuine resources, scholarly analysis, and advice on how to perform religious rituals
          surrounding the Kaaba.
        </Text>

        <Text className="font-Raleway font-[700] text-[32px]  mt-8" as="h4">
          1. The Historical Origins of the Kaaba
        </Text>
        <Text className="font-Raleway font-[500] text-[#78827F] text-[16px]" as="p">
          The Kaaba was built in the days of Prophet Ibrahim (Abraham, peace be upon him) and Prophet Ismail (Ishmael,
          peace be upon him). They were commanded by Allah to build the Kaaba as the very first place of worship on
          Earth, as per Islamic history.
        </Text>

        <Text className="font-Raleway font-[500] text-[32px]  mt-8" as="h4">
          2. The Kaaba as Qibla (Direction of Prayer)
        </Text>
        <Text className="font-Raleway font-[500] text-[#78827F] text-[16px]" as="p">
          One of the deepest points about the Kaaba is that it is the Qibla, or the direction in which Muslims
          everywhere face when they pray. Muslims originally prayed facing Jerusalem, but then Allah instructed them to
          turn around and face the Kaaba. This shift is described in the Quran:
        </Text>

        <blockquote className="italic text-[#78827F] text-[16px] mt-4">
          "We have indeed turned your face toward a direction of worship, [O Muhammad], toward heaven, and We will
          surely turn you to a Qibla with which you will be pleased. So turn your face toward al-Masjid al-Haram. And
          wherever you [believers] are, turn your faces toward it." (Quran 2:144)
        </blockquote>

        <Text className="font-Raleway font-[500] text-[#78827F] text-[16px] mt-4" as="p">
          This combined practice of prayer reflects Muslim solidarity, asserting the belief that the faithful worship a
          single God, irrespective of the location or culture.
        </Text>

        <Text className="font-Raleway font-[500] text-[32px]  mt-8" as="h4">
          3. The Kaaba and the Hajj Pilgrimage
        </Text>
        <Text className="font-Raleway font-[500] text-[#78827F] text-[16px]" as="p">
          The Kaaba is at the center of Hajj, the yearly pilgrimage that is one of the Five Pillars of Islam. Millions
          of Muslims make their way to Mecca each year to undertake Hajj, following the rituals instituted by Prophet
          Ibrahim and re-established by Prophet Muhammad (peace be upon him).
        </Text>

        <ul className="list-disc pl-8 mt-4 text-[#78827F] text-[16px]">
          <li>
            <strong>Tawaf:</strong> Pilgrims make seven counterclockwise circuits around the Kaaba, a gesture of
            devotion and submission to Allah.
          </li>
          <li>
            <strong>Sa'i:</strong> Pilgrims move between the Safa and Marwa hills, recalling Hajar's (Hagar's) quest
            for water for her son, Ismail.
          </li>
          <li>
            <strong>Standing at Arafat:</strong> Pilgrims congregate on Mount Arafat in a deep expression of worship
            and repentance.
          </li>
        </ul>

        <Text className="font-Raleway font-[500] text-[#78827F] text-[16px] mt-4" as="p">
          Completing Hajj is a time of spiritual rejuvenation for Muslims.{' '}
          <Link href="https://mymuftiapp.com/">
            <span className="text-blue-600 underline hover:opacity-80">My Mufti App</span>
          </Link>{' '}
          offers step-by-step instructions on how to perform Hajj and Umrah so that pilgrims can get their rituals done
          in the right way.
        </Text>

        <Text className="font-Raleway font-[500] text-[32px]  mt-8" as="h4">
          4. The Kaaba and Umrah
        </Text>
        <Text className="font-Raleway font-[500] text-[#78827F] text-[16px]" as="p">
          The Kaaba is equally central to Umrah, the lesser pilgrimage that can be performed any time of the year. While
          Umrah is not obligatory, it holds great spiritual merit and includes similar rituals to Hajj:
        </Text>

        <ul className="list-disc pl-8 mt-4 text-[#78827F] text-[16px]">
          <li>
            <strong>Ihram:</strong> The sacred state of purification entered before approaching Mecca
          </li>
          <li>
            <strong>Tawaf:</strong> Seven circumambulations around the Kaaba
          </li>
          <li>
            <strong>Sa'i:</strong> Walking between Safa and Marwah seven times
          </li>
          <li>
            <strong>Halq/Taqsir:</strong> Shaving or trimming hair upon completion
          </li>
        </ul>

        <Text className="font-Raleway font-[500] text-[#78827F] text-[16px] mt-4" as="p">
          <Link href="https://mymuftiapp.com/">
            <span className="text-blue-600 underline hover:opacity-80">My Mufti App</span>
          </Link>{' '}
          provides detailed guides and supplication recommendations for those planning to perform Umrah.
        </Text>

        <Text className="font-Raleway font-[500] text-[32px]  mt-8" as="h4">
          5. The Black Stone and Other Holy Features
        </Text>
        <Text className="font-Raleway font-[500] text-[#78827F] text-[16px]" as="p">
          The Kaaba contains several sacred elements, most notably:
        </Text>

        <ul className="list-disc pl-8 mt-4 text-[#78827F] text-[16px]">
          <li>
            <strong>Hajr al-Aswad (Black Stone):</strong> Set in the eastern corner, believed to have descended from
            Paradise
          </li>
          <li>
            <strong>Maqam Ibrahim:</strong> The stone where Prophet Ibrahim stood during Kaaba's construction
          </li>
          <li>
            <strong>Hijr Ismail:</strong> A semi-circular wall marking the original Kaaba boundaries
          </li>
          <li>
            <strong>Kiswa:</strong> The ornate black cloth covering renewed annually
          </li>
        </ul>

        <Text className="font-Raleway font-[500] text-[#78827F] text-[16px] mt-4" as="p">
          While pilgrims often seek to touch the Black Stone, Islamic teachings emphasize that worship is directed
          solely to Allah, not physical objects.
        </Text>

        <Text className="font-Raleway font-[500] text-[32px]  mt-8" as="h4">
          6. Symbolism and Spiritual Significance
        </Text>
        <Text className="font-Raleway font-[500] text-[#78827F] text-[16px]" as="p">
          The Kaaba embodies profound spiritual meanings:
        </Text>

        <ul className="list-disc pl-8 mt-4 text-[#78827F] text-[16px]">
          <li>Universal center of monotheistic worship</li>
          <li>Symbol of unity in diversity for 1.8 billion Muslims</li>
          <li>Physical manifestation of divine connection</li>
          <li>Reminder of Prophet Ibrahim's legacy</li>
        </ul>

        <Text className="font-Raleway font-[500] text-[#78827F] text-[16px] mt-4" as="p">
          The circular Tawaf around the Kaaba mirrors celestial movements, symbolizing cosmic harmony and submission to
          Allah's divine order.
        </Text>

        <Text className="font-Raleway font-[500] text-[32px]  mt-8" as="h4">
          7. Kaaba as a Unifying Agent of Muslims
        </Text>
        <Text className="font-Raleway font-[500] text-[#78827F] text-[16px]" as="p">
          The Kaaba transcends human divisions, creating unparalleled unity:
        </Text>

        <blockquote className="italic text-[#78827F] text-[16px] mt-4">
          "Indeed, this nation of yours is one nation, and I am your Lord, so worship Me." (Quran 21:92)
        </blockquote>

        <ul className="list-disc pl-8 mt-4 text-[#78827F] text-[16px]">
          <li>Wear identical white garments (Ihram)</li>
          <li>Chant the same supplications</li>
          <li>Perform identical rituals</li>
          <li>Face the same direction in prayer</li>
        </ul>

        <Text className="font-Raleway font-[500] text-[#78827F] text-[16px] mt-4" as="p">
          The Kaaba thus stands as an eternal symbol of Islamic brotherhood beyond racial, national, and social
          boundaries.
        </Text>

        <Text className="font-Raleway font-[500] text-[32px]  mt-8" as="h4">
          Conclusion
        </Text>
        <Text className="font-Raleway font-[500] text-[#78827F] text-[16px]" as="p">
          The Kaaba remains the spiritual heartbeat of Islam, connecting:
        </Text>

        <ul className="list-disc pl-8 mt-4 text-[#78827F] text-[16px]">
          <li>Historical legacy with modern practice</li>
          <li>Earthly worship with cosmic order</li>
          <li>Individual devotion with collective identity</li>
        </ul>

        <Text className="font-Raleway font-[500] text-[#78827F] text-[16px] mt-4" as="p">
          For deeper exploration of Kaaba's significance and pilgrimage guidance,{' '}
          <Link href="https://mymuftiapp.com/">
            <span className="text-blue-600 underline hover:opacity-80">My Mufti App</span>
          </Link>{' '}
          provides:
        </Text>

        <ul className="list-disc pl-8 mt-4 text-[#78827F] text-[16px]">
          <li>Historical timelines</li>
          <li>Ritual tutorials</li>
          <li>Scholarly interpretations</li>
          <li>Virtual tour features</li>
        </ul>

        <Text className="font-Raleway font-[500] text-[#78827F] text-[16px] mt-4" as="p">
          As technology enhances religious understanding, platforms like{' '}
          <Link href="https://mymuftiapp.com/">
            <span className="text-blue-600 underline hover:opacity-80">My Mufti App</span>
          </Link>{' '}
          ensure the Kaaba's legacy continues to inspire generations of believers worldwide.
        </Text>
      </BlogDetailLayout>
    </DefaultLayout>
  );
};

export default BlogDetails;