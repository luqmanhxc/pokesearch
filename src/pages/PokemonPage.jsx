import useFetch from "../hooks/useAxios";
import { useParams, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

const PokemonPage = () => {
  const { pokeData, loading } = useFetch();
  const location = useLocation();
  const data = location.state;
  console.log(data.data);

  return (
    <div>
      {loading ? (
        <h1 className="text-white">Loading...</h1>
      ) : (
        pokeData && <h1 className="text-white">fff</h1>
      )}
    </div>
  );
};

export default PokemonPage;
