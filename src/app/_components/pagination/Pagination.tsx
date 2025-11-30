"use client"
import { PageInfo } from '@/types/product.type';
import React, { useEffect } from 'react';

export default function MyPagination({ data, setCurrentPage, currentPage }: { data: PageInfo, setCurrentPage: (page: number) => void, currentPage: number }) {

  const totalPages: number = data?.totalPages;


  // Get page from URL on mount
  useEffect(() => {
    function confirm() {
      const params = new URLSearchParams(window.location.search);
      const pageParam = params.get('page');
      if (pageParam) {
        const page = parseInt(pageParam);
        if (page >= 1 && page <= totalPages) {
          setCurrentPage(page);
        }
      }
    }
    confirm()
  }, [totalPages, setCurrentPage]);

  // Update URL when page changes
  const handlePageChange = (page: number) => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
    setCurrentPage(page);
    const newUrl = `${window.location.pathname}?page=${page}`;
    window.history.pushState({ page }, '', newUrl);
  };


  const getPageNumbers = () => {
    const pages = [];
    const showEllipsis = totalPages > 7;

    if (!showEllipsis) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      if (currentPage <= 4) {
        for (let i = 1; i <= 5; i++) pages.push(i);
        pages.push('...');
        pages.push(totalPages);
      } else if (currentPage >= totalPages - 3) {
        pages.push(1);
        pages.push('...');
        for (let i = totalPages - 4; i <= totalPages; i++) pages.push(i);
      } else {
        pages.push(1);
        pages.push('...');
        for (let i = currentPage - 1; i <= currentPage + 1; i++) pages.push(i);
        pages.push('...');
        pages.push(totalPages);
      }
    }
    return pages;
  };

  return (
    <section className=" flex  items-center justify-center ">

      <section className="flex flex-wrap items-center gap-2">
        {/* Previous Button */}
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className={`px-4 py-2 rounded-md font-medium transition-all ${currentPage === 1
            ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
            : 'bg-white text-gray-700 hover:bg-gray-50 shadow-sm'
            }`}
        >
          Previous
        </button>

        {/* Page Numbers */}
        {getPageNumbers().map((page, index) => {
          console.log(page);

          return <section key={index}>
            {page === '...' ? (
              <span className="px-3 py-2 text-gray-400">...</span>
            ) : (
              <button
                onClick={() => handlePageChange(page as number)}
                className={`px-4 py-2 rounded-md font-medium transition-all ${currentPage === page
                  ? 'bg-black text-white shadow-md'
                  : 'bg-white text-gray-700 hover:bg-gray-50 shadow-sm'
                  }`}
              >
                {page}
              </button>
            )}
          </section>

        }
        )}

        {/* Next Button */}
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className={`px-4 py-2 rounded-md font-medium transition-all ${currentPage === totalPages
            ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
            : 'bg-white text-gray-700 hover:bg-gray-50 shadow-sm'
            }`}
        >
          Next
        </button>
      </section>
    </section>
  );
}