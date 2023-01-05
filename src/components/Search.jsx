import { useNavigate } from "react-router-dom";
import { useState } from "react";

const SearchSection = () => {
  const [value, setValue] = useState("");
  const navigate = useNavigate();

  const handleSearch = (event) => {
    event.preventDefault();
    if (value) {
      navigate(`/search/${value.toLowerCase()}`, {
        state: value.toLowerCase(),
        replace: true,
      });
    }
  };

  return (
    <>
      <form onSubmit={handleSearch}>
        <div className="relative hidden md:block">
          <input
            className="my-3 block w-[350px] rounded-lg border border-gray-300 bg-gray-50 p-4 pl-10 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
            id="input-search-header"
            value={value}
            onChange={(event) => setValue(event.target.value.toLowerCase())}
            placeholder="Search Pokemon or ID"
          />
          <button
            type="submit"
            className="absolute right-2.5 bottom-2.5 rounded-lg bg-blue-700 px-4 py-2 text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Search
          </button>
        </div>
      </form>
    </>
  );
};

export default SearchSection;
