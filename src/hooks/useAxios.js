import { useState, useEffect } from "react";
import axios from "axios";

const useAxios = () => {
  const [pokeData, setPokeData] = useState([]);
  const [singlePokemon, setSinglePokemon] = useState();
  const [loading, setLoading] = useState(true);
  const [url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon");
  const [nextUrl, setNextUrl] = useState();
  const [prevUrl, setPrevUrl] = useState();

  const getPokemonData = async () => {
    setLoading(true);
    const res = await axios.get(url);
    setNextUrl(res.data.next);
    setPrevUrl(res.data.previous);
    getPokemonDetails(res.data.results);
    setLoading(false);
  };

  const getPokemonDetails = async (res) => {
    res.map(async (item) => {
      const result = await axios.get(item.url);
      setPokeData((state) => {
        state = [...state, result.data];
        return state;
      });
    });
  };

  useEffect(() => {
    getPokemonData();
  }, [url]);

  // const loadMore = () => {
  //   console.log("clicked");
  //   setUrl(nextUrl);
  // };

  return { pokeData, loading };
};

export default useAxios;
