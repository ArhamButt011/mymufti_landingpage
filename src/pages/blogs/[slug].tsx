import { useRouter } from 'next/router';
import Link from 'next/link';
import Image from 'next/image';
import BlogDetailLayout from '@/components/blogs/blogDetailsLayout';
import DefaultLayout from '@/components/Layout/DefaultLayout';
import blogs from './blogs.json';
import { Clock } from 'lucide-react';

export default function BlogDetailsPage() {
  const router = useRouter();
  const { slug } = router.query;

  const blog = blogs.find((b) => b.slug === slug);
  if (!blog) {
    return <div>Blog not found</div>;
  }

  return (
    <DefaultLayout>
      <div className="container mx-auto px-4 py-6 max-w-4xl">
        {/* Back Arrow and Heading */}
        <div className="flex items-center gap-3 mb-6">
          <button onClick={() => router.back()}>
            <Image
              src="/images/blog/ArrowLeft.svg"
              alt="Back to previous page"
              width={32}
              height={32}
              className="cursor-pointer"
            />
          </button>
          <h2 className="text-2xl font-semibold leading-none">Blog Details</h2>
        </div>

        <div className="max-w-4xl mx-auto px-4 py-8">
          {/* Blog Image */}
          <img src={blog.imageUrl} alt={blog.title} className="w-full max-h-[400px] object-cover rounded-xl mb-6" />

          {/* Blog Date */}
          <div className="flex items-center space-x-1 mb-2 text-gray-500 text-sm">
            <Clock className="w-4 h-4" />
            <span>
              <p className="h-4">{blog.date}</p>
            </span>
          </div>

          {/* Blog Title */}
          <h1 className="md:text-[32px] font-Raleway font-[700] text-[48px] leading-[123%] mb-6">{blog.title}</h1>

          {/* Blog Content */}
          {blog.content.map((section, index) => (
            <div key={index} className="mb-6">
              {/* Optional Heading */}
              {section.heading && (
                <h2 className="sm:text-[22px] font-Raleway font-[500] text-[32px]">{section.heading}</h2>
              )}

              {/* Paragraph or List content */}
              {section.text.map((item, idx) => {
                if (typeof item === 'object' && item.list) {
                  return (
                    <ul
                      key={idx}
                      className="list-disc pl-6 mb-2 mt-2 sm:text-[16px] font-Raleway font-[500] text-[#78827F] text-[32px]"
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
                      className="sm:text-[16px] mt-1 font-Raleway font-[500] text-[#78827F] text-[32px]"
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
