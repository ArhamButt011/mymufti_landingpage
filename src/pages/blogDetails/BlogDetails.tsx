import React from 'react';
import Text from '@/components/UI/Text';
import DefaultLayout from '@/components/Layout/DefaultLayout';
import BlogDetailLayout from '@/components/blogs/blogDetailsLayout';
import Link from 'next/link';
import { Clock } from 'lucide-react';
import blogData from './blogsData.json';

// Explicitly type blogData
type BlogData = {
  [key: string]: {
    title: string;
    imageUrl: string;
    date: string;
    content: {
      type: 'paragraph' | 'heading' | 'quote' | 'list';
      text?: string;
      level?: number;
      items?: string[];
      list?: string[];
    }[];
  };
};

const typedBlogData: BlogData = blogData as BlogData;

// Define TypeScript interfaces for your data structure
interface BlogContentSection {
  type: 'paragraph' | 'heading' | 'quote' | 'list';
  text?: string;
  level?: number;
  items?: string[];
  list?: string[];
}

interface BlogPost {
  title: string;
  imageUrl: string;
  date: string;
  content: BlogContentSection[];
}

interface BlogDetailsProps {
  blogPost: BlogPost | null;
}

const BlogDetails: React.FC<BlogDetailsProps> = ({ blogPost }) => {
  if (!blogPost) {
    return (
      <DefaultLayout>
        <div className="flex justify-center items-center h-screen">
          <Text as="h2">Blog post not found</Text>
        </div>
      </DefaultLayout>
    );
  }

  const renderTextWithLinks = (text: string): React.ReactNode => {
    const linkRegex = /\[(.*?)\]\((.*?)\)/g;
    const parts: React.ReactNode[] = [];
    let lastIndex = 0;
    let match;
    
    while ((match = linkRegex.exec(text)) !== null) {
      if (match.index > lastIndex) {
        parts.push(text.substring(lastIndex, match.index));
      }
      
      parts.push(
        <Link href={match[2]} key={lastIndex} passHref legacyBehavior>
          <a className="text-blue-600 underline hover:opacity-80" target="_blank" rel="noopener noreferrer">
            {match[1]}
          </a>
        </Link>
      );
      
      lastIndex = match.index + match[0].length;
    }
    
    if (lastIndex < text.length) {
      parts.push(text.substring(lastIndex));
    }
    
    return parts.length > 0 ? parts : text;
  };

  const renderContent = (content: BlogContentSection[]): React.ReactNode => {
    return content.map((section, index) => {
      switch (section.type) {
        case 'paragraph':
          return (
            <React.Fragment key={index}>
              <Text className="font-Raleway font-[500] text-[#78827F] text-[32px]" as="p">
                {section.text && renderTextWithLinks(section.text)}
              </Text>
              {section.list && (
                <ul className="list-disc pl-8 mt-4 text-[#78827F] text-[32px]">
                  {section.list.map((item, i) => (
                    <li key={i}>{renderTextWithLinks(item)}</li>
                  ))}
                </ul>
              )}
              <br />
            </React.Fragment>
          );
        case 'heading':
          return (
            <Text 
              key={index}
              className={`font-Raleway font-[500] text-[32px] mt-8`}
              as={`h${section.level || 4}` as 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'}
            >
              {section.text}
            </Text>
          );
        case 'quote':
          return (
            <blockquote key={index} className="italic text-[#78827F] mt-2 text-[32px] pl-4 border-l-4 border-gray-300">
              {section.text}
            </blockquote>
          );
        case 'list':
          return (
            <ul key={index} className="list-disc pl-8 mt-4 text-[#78827F] text-[32px]">
              {section.items?.map((item, i) => (
                <li key={i}>{renderTextWithLinks(item)}</li>
              ))}
            </ul>
          );
        default:
          return null;
      }
    });
  };

  return (
    <DefaultLayout>
      <BlogDetailLayout title={blogPost.title} imageUrl={blogPost.imageUrl}>
        <div className="flex items-center space-x-1 mb-2 text-gray-500 text-sm">
          <Clock className="w-4 h-4" />
          <span>{blogPost.date}</span>
        </div>
        <Text className="font-Raleway font-[700] text-[48px] leading-[123%] mb-6" as="h3">
          {blogPost.title}
        </Text>
        
  const blogPost = typedBlogData[params.slug as keyof typeof typedBlogData] || null;
      </BlogDetailLayout>
    </DefaultLayout>
  );
};

export async function getStaticPaths() {
  const paths = Object.keys(blogData).map(slug => ({
    params: { slug }
  }));

  return {
    paths,
    fallback: 'blocking'
  };
}

export async function getStaticProps({ params }: { params: { slug: string } }) {
  const blogPost = blogData[params.slug as keyof typeof blogData] || null;

  if (!blogPost) {
    return {
      notFound: true
    };
  }

  return {
    props: {
      blogPost
    },
    revalidate: 60 * 60
  };
}

export default BlogDetails;