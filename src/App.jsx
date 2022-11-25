import PokemonGrid from "./components/PokemonGrid";
import NavBar from "./components/NavBar";
import Pagination from "./components/Pagination";
import { useState, useEffect } from "react";

const App = () => {
  const [pokeData, setPokeData] = useState([]);
  const [url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon");
  const [nextUrl, setNextUrl] = useState();

  const fetchPokeData = async () => {
    const res = await (await fetch(url)).json();
    setNextUrl(res.next);

    function fetchPokeStats(results) {
      results.forEach(async (pokemon) => {
        const res = await fetch(pokemon.url);
        const data = await res.json();
        setPokeData((prevData) => [...prevData, data]);
      });
    }

    fetchPokeStats(res.results);
  };

  useEffect(() => {
    fetchPokeData();
  }, [url]);

  const loadMore = () => {
    setUrl(nextUrl);
  };

  return (
    <div className="bg-gray-900">
      <NavBar />
      <PokemonGrid pokemon={pokeData} />
      <Pagination loadMore={loadMore} />
    </div>
  );
};

export default App;
