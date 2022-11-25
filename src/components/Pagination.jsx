import useFetch from "../hooks/useAxios";

const Pagination = () => {
  const { loadMore } = useFetch();

  return (
    <div className="flex items-center justify-center">
      <button
        onClick={loadMore}
        className="mb-5 cursor-pointer rounded-lg bg-gray-800 px-5 py-2.5 font-inter text-sm font-medium text-white hover:bg-gray-900 focus:outline-none focus:ring-gray-300 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700"
      >
        Load More
      </button>
    </div>
  );
};

export default Pagination;
