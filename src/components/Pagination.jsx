const Pagination = ({ prevUrl, nextUrl, goToPrevPage, goToNextPage }) => {
  return (
    <div className="m-auto flex w-full items-center justify-evenly bg-slate-600">
      {prevUrl && (
        <button
          onClick={goToPrevPage}
          className="text-md mb-5 cursor-pointer rounded-lg bg-gray-800 px-5 py-2.5 font-inter text-white hover:bg-gray-900 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700"
        >
          Prev
        </button>
      )}
      {nextUrl && (
        <button
          onClick={goToNextPage}
          className="text-md mb-5 cursor-pointer rounded-lg bg-gray-800 px-5 py-2.5 font-inter text-white hover:bg-gray-900 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700"
        >
          Next
        </button>
      )}
    </div>
  );
};

export default Pagination;
