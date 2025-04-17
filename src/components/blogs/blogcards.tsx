'use client'

import { useState, useMemo } from 'react'
import Text from '@/components/UI/Text'
import Image from 'next/image'
import Pagination from '@/components/blogs/Pagination'
import Link from 'next/link'

interface BlogCardsProps {
  searchTerm: string
  layout?: '1xN' | '3x3' // Optional layout prop
}

interface BlogCardProps {
  imageUrl: string
  date: string
  title: string
  description: string
  link: string
  priority?: boolean
}

// Blog data
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
  {
    imageUrl: '/images/blog/marriage.svg',
    date: '30 Aug 2025',
    title: 'Islamic View of Marriage',
    description: 'The importance of marriage in Islam...',
    link: '/blogs/islamic-view-of-marriage',
  },
  {
    imageUrl: '/images/blog/IslamicViewOfWomen.svg',
    date: '25 Oct 2025',
    title: 'Role of Women in Islam',
    description: "Understanding women's rights in Islam...",
    link: '/blogs/role-of-women-in-islam',
  },
  {
    imageUrl: '/images/blog/charity.png',
    date: '25 Oct 2025',
    title: "Islam's Teachings About Charity",
    description: 'The importance of charity in Islam...',
    link: '/blogs/islamic-charity',
  },
  {
    imageUrl: '/images/blog/pillarofislam.svg',
    date: '25 Oct 2025',
    title: 'The Five Pillars of Islam',
    description: 'The core beliefs of Islam...',
    link: '/blogs/what-are-the-five-pillars-of-islam',
  },
]

// Blog Card Component
const BlogCard: React.FC<BlogCardProps> = ({
  imageUrl,
  date,
  title,
  description,
  link,
  priority = false,
}) => {
  return (
    <Link href={link} className="block h-full">
      <div className="group h-[460px] rounded-[20px] overflow-hidden shadow-sm transition-all duration-300 hover:shadow-md flex flex-col cursor-pointer">
        <div className="relative w-full h-[250px]">
          <Image
            src={imageUrl || '/placeholder.svg'}
            alt={title}
            fill
            priority={priority}
            loading={priority ? 'eager' : 'lazy'}
            className="object-cover transition-transform duration-300 group-hover:scale-105 rounded-t-[20px]"
          />
        </div>
        <div className="p-4 bg-white flex flex-col flex-1 rounded-b-[20px]">
          <Text className="text-Raleway text-500 text-[14px] text-[#A6A6A6] mb-2">{date}</Text>
          <Text
            as="h3"
            className=" mb-2 line-clamp-2 font-[24px] leading-[1.1] font-500 font-raleway text-[#000000] group-hover:text-500 transition-colors tracking-[0%]"
          >
            {title}
          </Text>
          <Text className="line-clamp-4 font-700 font-Raleway text-[24px] flex-1">
            {description}
          </Text>
          <span className="text-[#38B89A] hover:underline transition-colors font-medium mt-auto">
            Read More
          </span>
        </div>
      </div>
    </Link>
  )
}

// Blog Cards Container
const BlogCards: React.FC<BlogCardsProps> = ({ searchTerm, layout = '3x3' }) => {
  const [currentPage, setCurrentPage] = useState(1)
  const cardsPerPage = 9

  const filteredBlogs = useMemo(() => {
    return blogCardsData.filter((card) =>
      card.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      card.description.toLowerCase().includes(searchTerm.toLowerCase())
    )
  }, [searchTerm])

  const totalPages = Math.ceil(filteredBlogs.length / cardsPerPage)
  const indexOfLastCard = currentPage * cardsPerPage
  const indexOfFirstCard = indexOfLastCard - cardsPerPage
  const currentCards = filteredBlogs.slice(indexOfFirstCard, indexOfLastCard)

  const handlePageChange = (page: number) => {
    setCurrentPage(page)
    window.scrollTo({
      top: document.getElementById('blog-cards-section')?.offsetTop || 0,
      behavior: 'smooth',
    })
  }

  const gridClass =
    layout === '1xN'
      ? 'grid-cols-1'
      : 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'

  return (
    <section id="blog-cards-section" className="container mx-auto px-4 py-12">
      <div className="relative ml-1 mr-1 bg-[#5F6A6714]">
        <div className="relative ml-4 mr-4 mt-4 mb-4 pt-10 pl-6 pr-6 pb-6">
          {currentCards.length > 0 ? (
            <>
              <div className={`grid ${gridClass} gap-6`}>
                {currentCards.map((card, index) => (
                  <BlogCard
                    key={`${currentPage}-${index}`}
                    imageUrl={card.imageUrl}
                    date={card.date}
                    title={card.title}
                    description={card.description}
                    link={card.link}
                    priority={true}
                  />
                ))}
              </div>
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
  )
}

export default BlogCards