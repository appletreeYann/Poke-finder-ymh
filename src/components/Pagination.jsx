export const Pagination = ({ currentPage, totalPages, onPageChange }) => {
    return (
      <div className="flex justify-center mt-8 gap-4">
        <button
          disabled={currentPage === 1}
          onClick={() => onPageChange(currentPage - 1)}
          className="px-2 py-1 bg-red-500 text-white rounded-md disabled:opacity-50 hover:cursor-pointer disabled:hover:cursor-auto"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" width="24" height="24" stroke-width="1">
            <path d="M15 6l-6 6l6 6"></path>
          </svg>
        </button>
  
        <span className="text-xl">{currentPage} / {totalPages}</span>
  
        <button
          disabled={currentPage === totalPages}
          onClick={() => onPageChange(currentPage + 1)}
          className="px-2 py-1 bg-red-500 text-white rounded-md disabled:opacity-50 hover:cursor-pointer disabled:hover:cursor-auto"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" width="24" height="24" stroke-width="1">
            <path d="M9 6l6 6l-6 6"></path>
          </svg>
        </button>
      </div>
    );
  };
  