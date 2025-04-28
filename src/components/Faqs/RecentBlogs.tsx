'use client';

import Image from 'next/image';
import Link from 'next/link';
import Pagination from '@/components/blogs/Pagination';

interface BlogCardProps {
  imageUrl: string;
  date: string;
  title: string;
  description: string;
  link: string;
}

export default function RecentBlogs() {
  const blogCardsData: BlogCardProps[] = [
    {
      imageUrl: '/images/blog/FastInRamadan.svg',
      date: '28 Feb 2025',
      title: 'How Muslims Keep Fast in Ramadan',
      description: 'Fasting during Ramadan is one of the Five Pillars of Islam...',
      link: '/blogs/how-muslims-keep-fast-in-ramadan',
    },
    {
      imageUrl: '/images/blog/RoleOfZakat.svg',
      date: '15 Mar 2025',
      title: 'What is Zakat in Islam?',
      description: 'Zakat is an abstract obligation from the Five Pillars of Islam...',
      link: '/blogs/what-is-zakat-in-islam',
    },
    {
      imageUrl: '/images/blog/ProphetMuhammad.svg',
      date: '10 Apr 2025',
      title: 'Who was the Prophet Muhammad (SAW)?',
      description: 'Exploring the life and teachings of Prophet Muhammad...',
      link: '/blogs/who-was-the-prophet-muhammad-saw',
    },
    {
      imageUrl: '/images/blog/shiaSunni.svg',
      date: '22 May 2025',
      title: 'What is the Difference Between Sunni and Shia?',
      description: 'Understanding different sects in Islam...',
      link: '/blogs/difference-between-sunni-and-shia',
    },
    {
      imageUrl: '/images/blog/halalFood.svg',
      date: '05 Jun 2025',
      title: 'What is Halal Food?',
      description: 'Exploring what makes food halal in Islam...',
      link: '/blogs/what-is-halal-food',
    },
    {
      imageUrl: '/images/blog/kaaba.svg',
      date: '18 Jul 2025',
      title: 'Why is the Kaaba Important?',
      description: 'A look into the significance of the Kaaba...',
      link: '/blogs/why-is-the-significance-of-kaaba-important',
    },
  ];

  return (
    <div className="bg-gray-100 p-6 rounded-lg font-raleway">
      <h2 className="text-[34px] font-semibold font-raleway mb-4">Recent Blogs</h2>
      <div className="space-y-3">
        {blogCardsData.map((post, index) => (
          <Link
            href={post.link}
            key={index}
            className="block bg-white p-3 rounded-md hover:shadow-md transition-shadow cursor-pointer"
          >
            <div className="flex items-center gap-3">
              <div className="w-24 h-24 relative flex-shrink-0">
                <Image
                  src={post.imageUrl || '/placeholder.svg'}
                  alt={post.title}
                  fill
                  className="rounded-md object-cover"
                />
              </div>

              <div className="flex-1 flex flex-col justify-between">
                <div>
                  <p className="text-xs text-gray-500 mb-1">{post.date}</p>
                  <h3 className="text-[18px] font-semibold leading-[120%] font-raleway text-gray-900 mb-1">
                    {post.title}
                  </h3>
                  <p className="text-[14px] font-medium leading-[120%] font-raleway text-gray-600 mb-1">
                    {post.description}
                  </p>
                </div>
                <span className="text-sm text-teal-500 hover:text-teal-600 hover:underline font-raleway">
                  Read More
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
