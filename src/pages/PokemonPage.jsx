import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import Stats from "../components/pokemonPage/Stats";
import { POKEAPI_TYPE_TO_COLOR } from "../utils/utils";
import Layout from "../layout/Layout";

const PokemonPage = () => {
  const location = useLocation();
  const data = location.state.data;
  const typesArr = data.types.map((type) => {
    return {
      typeSlot: type.slot,
      type: type.type.name,
    };
  });
  const mainType = typesArr[0].type;
  const {
    id,
    name,
    height,
    weight,
    sprites: {
      other: {
        "official-artwork": { front_default: pokeImg },
      },
    },
    stats: {
      0: { base_stat: hp },
      1: { base_stat: attack },
      2: { base_stat: defense },
      3: { base_stat: specialAttack },
      4: { base_stat: specialDefense },
      5: { base_stat: speed },
    },
  } = data;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Layout>
      <div
        className={`m-auto h-full bg-gradient-to-r text-white from-${mainType} to-${POKEAPI_TYPE_TO_COLOR[mainType]} flex flex-col items-center justify-center pb-5`}
      >
        <div className="relative mb-4 flex items-center justify-center p-5 font-inter">
          <p className="text-9xl font-bold opacity-20">#{id}</p>
          <span className="z-5 inset-50 absolute text-6xl font-bold tracking-wider opacity-100">
            {name.charAt(0).toUpperCase() + name.slice(1)}
          </span>
        </div>

        <div className="m-auto flex w-9/12 flex-col items-center justify-evenly md:flex-row">
          <img src={pokeImg} className={`w-[300px] p-5 md:mr-4`} />
          <div>
            <div className="w-full">
              <div className="flex items-center justify-evenly p-5 text-center text-xl">
                <p>
                  HEIGHT{" "}
                  <span className="block text-4xl drop-shadow-md">
                    {height / 10} m
                  </span>
                </p>
                <p>
                  WEIGHT{" "}
                  <span className="block text-4xl drop-shadow-md">
                    {weight / 10} kg
                  </span>
                </p>
              </div>

              <Stats
                hp={hp}
                attack={attack}
                defense={defense}
                specialAttack={specialAttack}
                specialDefense={specialDefense}
                speed={speed}
              />

              <div className="m-auto my-5 flex justify-center text-xl">
                {typesArr.map((type) => (
                  <div
                    key={type.typeSlot}
                    className={`text-md mr-4 rounded-lg px-5 py-2 text-center shadow-lg bg-${type.type}`}
                  >
                    <p className="drop-shadow-md">{type.type.toUpperCase()}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default PokemonPage;
