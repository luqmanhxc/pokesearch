import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Layout from "../layout/Layout";
import Stats from "../components/pokemonPage/Stats";
import { POKEAPI_TYPE_TO_COLOR } from "../utils/utils";
import axios from "axios";
import Spinner from "../components/Spinner";
import ErrorPage from "./ErrorPage";

const Search = () => {
  const [results, setResults] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const { state } = useLocation();

  useEffect(() => {
    setIsLoading(true);
    const url = `https://pokeapi.co/api/v2/pokemon-species/${state || ""}`;

    axios
      .get(url)
      .then((res) => {
        const pokemonUrl = `https://pokeapi.co/api/v2/pokemon/${res.data.name}`;

        axios
          .get(pokemonUrl)
          .then((response) => {
            setResults(response.data);
            setIsLoading(false);
          })
          .catch((error) => {
            setError(error.response.data);
          });
      })
      .catch((error) => {
        setError(error.response.data);
      });
  }, [state]);

  const typesArr = results?.types?.map((type) => {
    return {
      typeSlot: type.slot,
      type: type.type.name,
    };
  });

  return (
    <Layout>
      {error ? (
        <ErrorPage />
      ) : isLoading ? (
        <Spinner />
      ) : (
        <div
          className={`m-auto from-${results.types[0].type.name} to-${
            POKEAPI_TYPE_TO_COLOR[results.types[0].type.name]
          } h-full bg-gradient-to-r pb-5 text-white`}
        >
          <div className="relative mb-4 flex items-center justify-center p-5 font-inter">
            <p className="text-9xl font-bold tracking-wider opacity-20">
              #{results.id}
            </p>
            <span className="z-5 inset-50 absolute text-6xl font-bold tracking-wider opacity-100">
              {results.name.charAt(0).toUpperCase() + results.name.slice(1)}
            </span>
          </div>

          <div className="m-auto flex w-9/12 flex-col items-center justify-evenly md:flex-row">
            <img
              src={results.sprites.other["official-artwork"].front_default}
              className={`w-[300px] p-5 md:mr-4`}
            />
            <div>
              <div className="w-full">
                <div className="flex items-center justify-evenly p-5 text-center text-xl">
                  <p>
                    HEIGHT{" "}
                    <span className="block text-4xl drop-shadow-md">
                      {results.height / 10} m
                    </span>
                  </p>
                  <p>
                    WEIGHT{" "}
                    <span className="block text-4xl drop-shadow-md">
                      {results.weight / 10} kg
                    </span>
                  </p>
                </div>

                <Stats
                  hp={results.stats[0].base_stat}
                  attack={results.stats[1].base_stat}
                  defense={results.stats[2].base_stat}
                  specialAttack={results.stats[3].base_stat}
                  specialDefense={results.stats[4].base_stat}
                  speed={results.stats[5].base_stat}
                />

                <div className="m-auto my-5 flex justify-center text-xl">
                  {typesArr.map((type) => (
                    <div
                      key={type.typeSlot}
                      className={`text-md mr-4 rounded-lg px-5 py-2 text-center shadow-lg bg-${type.type}`}
                    >
                      <p className="drop-shadow-md">
                        {type.type.toUpperCase()}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </Layout>
  );
};

export default Search;
