"use client"

import type React from "react"

interface PaginationProps {
  currentPage: number
  totalPages: number
  onPageChange: (page: number) => void
}

const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages, onPageChange }) => {
  const getPageNumbers = () => {
    const pages = []
    pages.push(1)

    if (currentPage > 3) pages.push(-1)

    for (let i = Math.max(2, currentPage - 1); i <= Math.min(totalPages - 1, currentPage + 1); i++) {
      pages.push(i)
    }

    if (currentPage < totalPages - 2) pages.push(-1)

    if (totalPages > 1) pages.push(totalPages)

    return pages
  }

  return (
    <div className="flex items-center justify-center mt-10 space-x-2">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className={`w-10 h-10 flex items-center justify-center rounded-full ${
          currentPage === 1 ? "bg-gray-100 text-gray-400 cursor-not-allowed" : "bg-gray-200 hover:bg-gray-300"
        }`}
      >
        {"<-"}
      </button>

      {getPageNumbers().map((page, index) =>
        page === -1 ? (
          <span key={index} className="w-10 h-10 flex items-center justify-center">...</span>
        ) : (
          <button
            key={page}
            onClick={() => onPageChange(page)}
            className={`w-10 h-10 rounded-full ${
              page === currentPage ? "bg-[#38B89A] text-white" : "bg-gray-200 hover:bg-gray-300"
            }`}
          >
            {page}
          </button>
        )
      )}

      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className={`w-10 h-10 flex items-center justify-center rounded-full ${
          currentPage === totalPages ? "bg-gray-100 text-gray-400 cursor-not-allowed" : "bg-gray-200 hover:bg-gray-300"
        }`}
      >
        {"->"}
      </button>
    </div>
  )
}

export default Pagination
