import { tw } from "twind"
import Button from "@/components/button"

const PublicReviewSection = () => {
  const publicReviewData = {
    title: "Get Public review on your query",
    description:
      "Join live Q&A sessions, ask your questions, post your question by selecting your Fiqa and question category and get feedback from everyone.",
    image: "/images/review-screen.png",
  }

  return (
    <section className={tw(`py-20 bg-white`)}>
      <div className={tw(`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`)}>
        <div className={tw(`grid grid-cols-1 md:grid-cols-2 gap-12 items-center`)}>
          {/* Left Column - Image */}
          <div className={tw(`flex justify-center`)}>
            <img
              src={"/images/iPhone15.svg"}
              alt="Public Review"
              className={tw(`w-full max-w-[300px] h-auto object-contain drop-shadow-xl transform -rotate-6`)}
            />
          </div>

          {/* Right Column - Text and Button */}
          <div className={tw(`flex flex-col items-end`)}>
            <h1 className={tw(`text-3xl font-bold mb-4 text-right`)}>
              Get <span className={tw(`text-teal-500`)}>Public review</span> on <br />
              your query
            </h1>
            <p className={tw(`text-gray-600 mb-6 text-right`)}>{publicReviewData.description}</p>
            <div className={tw(`flex justify-end`)}>
              <Button primary modifier="inline-flex items-center">
                Post A Question Now
                <svg
                  className={tw(`ml-2 w-5 h-5`)}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PublicReviewSection

