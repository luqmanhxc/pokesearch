import axios from "axios";
import { useState, useEffect } from "react";

const usePokemonData = () => {
  const [pokeData, setPokeData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon");
  const [nextUrl, setNextUrl] = useState();
  const [prevUrl, setPrevUrl] = useState();

  const getPokemonData = async () => {
    setPokeData([]);
    const res = await axios.get(url);
    setNextUrl(res.data.next);
    setPrevUrl(res.data.previous);
    getPokemonDetails(res.data.results).then(() => setLoading(false));
  };

  const getPokemonDetails = async (res) => {
    res?.map(async (item) => {
      const result = await axios.get(item.url);
      setPokeData((state) => {
        state = [...state, result.data];
        return state;
      });
    });
  };

  useEffect(() => {
    setLoading(true);
    getPokemonData();
  }, [url]);

  return {
    pokeData,
    loading,
    prevUrl,
    nextUrl,
    goToPrevPage: () => setUrl(prevUrl),
    goToNextPage: () => setUrl(nextUrl),
    setUrl,
    url,
    getPokemonData,
  };
};

export default usePokemonData;
