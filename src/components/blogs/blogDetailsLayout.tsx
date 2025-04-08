import React from "react"
import Image from "next/image"
import Link from "next/link"
import Text from "@/components/UI/Text"

interface BlogDetailLayoutProps {
  title: string
  imageUrl: string
  children: React.ReactNode
}

const BlogDetailLayout: React.FC<BlogDetailLayoutProps> = ({ title, imageUrl, children }) => {
  return (
    <div className="container mx-auto px-4 py-6 max-w-4xl">
      <div className="flex items-center mb-4">
        <Link href="/blogs" className="inline-block mr-3">
          <div className="relative w-8 h-8">
            <Image
              src="/images/blog/ArrowLeft.svg"
              alt="Back to blogs"
              width={32}
              height={32}
              className="cursor-pointer"
              priority 
            />
          </div>
        </Link>
        <Text as="h2">Blog Details</Text>
      </div>

      <div className="bg-white w-full  overflow-hidden">
        <div className="p-4">
          <div className="relative h-[50vh] w-full mb-6 rounded-[30px] overflow-hidden">
            <Image src={imageUrl} alt={title} fill className="object-cover" />
          </div>

          {children}
        </div>
      </div>
    </div>
  )
}

export default BlogDetailLayout
