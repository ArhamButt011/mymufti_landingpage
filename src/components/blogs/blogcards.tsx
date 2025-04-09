'use client';
import { useState, useMemo } from 'react';
import Text from '@/components/UI/Text';
import Image from 'next/image';
import Pagination from '@/components/blogs/Pagination';
import Link from 'next/link';

// Props
interface BlogCardsProps {
  searchTerm: string;
}

// Blog card type
interface BlogCardProps {
  imageUrl: string;
  date: string;
  title: string;
  description: string;
  link: string;
}

// Blog data
const blogCardsData: BlogCardProps[] = [
  {
    imageUrl: '/images/blog/FastInRamadan.svg',
    date: '28 Feb 2025',
    title: 'How Muslims Keep Fast in Ramadan',
    description: 'Fasting during Ramadan is one of the Five Pillars of Islam...',
    link: '/blogDetails/fast-in-ramadan',
  },
  {
    imageUrl: '/images/blog/RoleOfZakat.svg',
    date: '15 Mar 2025',
    title: 'What is Zakat in Islam?',
    description: 'Zakat is an abstract obligation from the Five Pillars of Islam...',
    link: '/blogDetails/zakat-in-islam',
  },
  {
    imageUrl: '/images/blog/ProphetMuhammad.svg',
    date: '10 Apr 2025',
    title: 'Who was the Prophet Muhammad (SAW)?',
    description: 'Exploring the life and teachings of Prophet Muhammad...',
    link: '/blogDetails/prophet-muhammad',
  },
  {
    imageUrl: '/images/blog/shiaSunni.svg',
    date: '22 May 2025',
    title: 'What is the Difference Between Sunni and Shia?',
    description: 'Understanding different sects in Islam...',
    link: '/blogDetails/sunni-vs-shia',
  },
  {
    imageUrl: '/images/blog/halalFood.svg',
    date: '05 Jun 2025',
    title: 'What is Halal Food?',
    description: 'Exploring what makes food halal in Islam...',
    link: '/blogDetails/halal-food',
  },
  {
    imageUrl: '/images/blog/kaaba.svg',
    date: '18 Jul 2025',
    title: 'Why is the Kaaba Important?',
    description: 'A look into the significance of the Kaaba...',
    link: '/blogDetails/significance-of-kaaba',
  },
  {
    imageUrl: '/images/blog/marriage.svg',
    date: '30 Aug 2025',
    title: 'Islamic View of Marriage',
    description: 'The importance of marriage in Islam...',
    link: '/blogDetails/islamic-marriage',
  },
  {
    imageUrl: '/images/blog/IslamicViewOfWomen.svg',
    date: '25 Oct 2025',
    title: 'Role of Women in Islam',
    description: "Understanding women's rights in Islam...",
    link: '/blogDetails/women-in-islam',
  },
  {
    imageUrl: '/images/blog/charity.png',
    date: '25 Oct 2025',
    title: "Islam's Teachings About Charity",
    description: 'The importance of charity in Islam...',
    link: '/blogDetails/islamic-charity',
  },
  {
    imageUrl: '/images/blog/pillarofislam.svg',
    date: '25 Oct 2025',
    title: 'The Five Pillars of Islam',
    description: 'The core beliefs of Islam...',
    link: '/blogDetails/five-pillars',
  },
];

// Blog Card Component
const BlogCard: React.FC<BlogCardProps> = ({ imageUrl, date, title, description, link }) => {
  return (
    <div className="group h-[460px] rounded-[20px] overflow-hidden shadow-sm transition-all duration-300 hover:shadow-md flex flex-col">
      <div className="relative w-full h-[250px]">
        <Image
          src={imageUrl || '/placeholder.svg'}
          alt={title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105 rounded-t-[20px]"
        />
      </div>
      <div className="p-4 bg-white flex flex-col flex-1 rounded-b-[20px]">
        <Text className="text-Raleway text-500 text-[14px] text-[#A6A6A6]">{date}</Text>
        <Text
          as="h3"
          className="line-clamp-2 font-[24px] font-500 font-raleway text-[#000000] group-hover:text-500 transition-colors tracking-[0%]"
        >
          {title}
        </Text>
        <Text className="line-clamp-3 font-700 font-Raleway text-[24px] flex-1 ">{description}</Text>
        <Link href={link}>
          <button className="text-[#38B89A] hover:underline transition-colors font-medium mt-auto">Read More</button>
        </Link>
      </div>
    </div>
  );
};

// Blog Cards Container with Search & Pagination
const BlogCards: React.FC<BlogCardsProps> = ({ searchTerm }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const cardsPerPage = 9;

  // Filtered list based on search
  const filteredBlogs = useMemo(() => {
    return blogCardsData.filter((card) =>
      card.title.toLowerCase().includes((searchTerm || '').toLowerCase()) ||
      card.description.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm]);

  const totalPages = Math.ceil(filteredBlogs.length / cardsPerPage);
  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCards = filteredBlogs.slice(indexOfFirstCard, indexOfLastCard);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    window.scrollTo({
      top: document.getElementById('blog-cards-section')?.offsetTop || 0,
      behavior: 'smooth',
    });
  };

  return (
    <section id="blog-cards-section" className="container mx-auto px-4 py-12">
      <div className="relative ml-1 mr-1 bg-[#5F6A6714]">
        <div className="relative ml-4 mr-4 mt-4 mb-4 bg-[##5F6A6714] pt-10 pl-6 pr-6 pb-6">
          {currentCards.length > 0 ? (
            <>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {currentCards.map((card, index) => (
                  <BlogCard
                    key={`${currentPage}-${index}`}
                    imageUrl={card.imageUrl}
                    date={card.date}
                    title={card.title}
                    description={card.description}
                    link={card.link}
                  />
                ))}
              </div>
              {/* Pagination */}
              {filteredBlogs.length > cardsPerPage && (
                <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
              )}
            </>
          ) : (
            <div className="text-center text-gray-500 text-xl font-semibold">
              No blogs match your search.
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default BlogCards;
