import { useRouter } from 'next/router';
import Link from 'next/link';
import Image from 'next/image';
import Text from '@/components/UI/Text';
import BlogDetailLayout from '@/components/blogs/blogDetailsLayout';
import DefaultLayout from '@/components/Layout/DefaultLayout';
import blogs from './blogs.json';
import { Clock } from 'lucide-react';

export default function BlogDetailsPage() {
  const router = useRouter();
  const { slug } = router.query;

  const blog = blogs.find((b) => b.slug === slug);
  if (!blog) {
    return <div className="text-center text-gray-600 py-10">Blog not found</div>;
  }

  return (
    <DefaultLayout>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 max-w-[1300px]">
        {/* Back Arrow and Heading */}
        <div className="flex items-center gap-3 mb-6">
          <button onClick={() => router.back()} className="focus:outline-none">
            <Image
              src="/images/blog/ArrowLeft.svg"
              alt="Back to previous page"
              width={32}
              height={32}
              className="cursor-pointer"
            />
          </button>
          <Text as="h2" className="font-bold text-lg sm:text-2xl">Blog Details</Text>
        </div>

        <div className="max-w-[1262px] mx-auto">
          {/* Blog Image */}
          <img src={blog.imageUrl} alt={blog.title} className="w-full max-h-[400px] object-cover rounded-xl mb-4" />

          {/* Blog Date */}
          <div className="flex items-center space-x-1 mb-2 text-gray-500 text-sm">
            <Clock className="w-4 h-4" />
            <span className="h-4 flex items-center">{blog.date}</span>
          </div>

          {/* Blog Title */}
          <Text as="h3" className="text-[24px] sm:text-[32px] lg:text-[40px] font-Raleway font-bold leading-tight mb-4">
            {blog.title}
          </Text>

          {/* Blog Content */}
          {blog.content.map((section, index) => (
            <div key={index} className="mb-8">
              {/* Optional Heading */}
              {section.heading && (
                <Text
                  as="h2"
                  className="text-[20px] sm:text-[24px] lg:text-[28px] font-semibold mb-3 text-gray-800"
                >
                  {section.heading}
                </Text>
              )}

              {/* Paragraph or List content */}
              {section.text.map((item, idx) => {
                if (typeof item === 'object' && item.list) {
                  return (
                    <ul
                      key={idx}
                      className="list-disc pl-6 mb-4 text-[16px] sm:text-[18px] text-gray-700"
                    >
                      {item.list.map((listItem, liIndex) => (
                        <li key={liIndex}>{listItem}</li>
                      ))}
                    </ul>
                  );
                } else {
                  return typeof item === 'string' ? (
                    <p
                      key={idx}
                      className="text-[16px] sm:text-[18px] text-gray-700 leading-relaxed mb-4"
                      dangerouslySetInnerHTML={{ __html: item }}
                    />
                  ) : null;
                }
              })}
            </div>
          ))}
        </div>
      </div>
    </DefaultLayout>
  );
}
