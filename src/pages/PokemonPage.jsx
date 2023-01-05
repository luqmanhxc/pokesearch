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
      <main
        className={`bg-gradient-to-r pt-20 text-white from-${mainType} to-${POKEAPI_TYPE_TO_COLOR[mainType]}`}
      >
        <div>
          {/* ID and NAME */}
          <div className="relative flex items-center justify-center p-5 font-inter">
            <p className="text-9xl font-bold opacity-20">#{id}</p>
            <span className="inset-50 absolute text-4xl font-bold tracking-wider opacity-100 xl:text-6xl">
              {name.charAt(0).toUpperCase() + name.slice(1)}
            </span>
          </div>

          {/* DETAILS */}
          <div className="flex flex-col items-center justify-center py-5 md:flex-row">
            <img src={pokeImg} className="w-2/5 p-5 md:mr-4 md:w-[300px]" />

            <div>
              {/* HEIGHT WEIGHT */}
              <div className="w-full">
                <div className="text-md flex items-center justify-evenly p-5 text-center md:text-xl">
                  <p>
                    HEIGHT{" "}
                    <span className="block text-3xl drop-shadow-md md:text-4xl">
                      {height / 10} m
                    </span>
                  </p>
                  <p>
                    WEIGHT{" "}
                    <span className="block text-3xl drop-shadow-md md:text-4xl">
                      {weight / 10} kg
                    </span>
                  </p>
                </div>

                {/* STATS */}
                <Stats
                  hp={hp}
                  attack={attack}
                  defense={defense}
                  specialAttack={specialAttack}
                  specialDefense={specialDefense}
                  speed={speed}
                />

                {/* TYPE */}
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
      </main>
    </Layout>
  );
};

export default PokemonPage;
