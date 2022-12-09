import { useState } from "react";
import usePokemonData from "../hooks/usePokemonData";

const SearchBox = () => {
  const [query, setQuery] = useState("");
  const [url, setUrl] = useState("");
  const { getPokemonDetailsQuery } = usePokemonData();

  const handleChange = (event) => {
    setQuery(event.target.value.toLowerCase());
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setUrl(`https://pokeapi.co/api/v2/pokemon/${query}`);
    getPokemonDetailsQuery(url);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label
        htmlFor="search"
        className="sr-only mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        Search
      </label>
      <div className="relative">
        <input
          type="search"
          id="search"
          value={query}
          className="block w-[300px] rounded-lg border border-gray-300 bg-gray-50 p-4 pl-10 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
          placeholder="Enter Pokemon name"
          onChange={handleChange}
          required
        />
        <button
          type="submit"
          className="absolute right-2.5 bottom-2.5 rounded-lg bg-blue-700 px-4 py-2 text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Search
        </button>
      </div>
    </form>
  );
};

export default SearchBox;
