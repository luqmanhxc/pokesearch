import useFetch from "../hooks/useAxios";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const PokemonPage = () => {
  const [data, setData] = useState();
  const { pokeData, loading } = useFetch();
  const { id } = useParams();

  useEffect(() => {
    if (pokeData && pokeData.data) setData(pokeData);
  }, [pokeData]);
  console.log(loading);
  return (
    <div>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        pokeData && <h1 className="text-white">{pokeData[id - 1].name}</h1>
      )}
    </div>
  );
};

export default PokemonPage;
