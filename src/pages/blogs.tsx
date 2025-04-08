import React from "react"
import DefaultLayout from "@/components/Layout/DefaultLayout"
import Hero from "@/components/blogs/Hero"
import BlogCards from "@/components/blogs/blogcards"

const Blogs = () => {

  return (
    <DefaultLayout>
      <Hero />
      <BlogCards />
    </DefaultLayout>
  )
}

export default Blogs
