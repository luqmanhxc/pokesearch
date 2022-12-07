import { useLocation } from "react-router-dom";
import Stats from "../components/pokemonPage/Stats";

const PokemonPage = () => {
  const location = useLocation();
  const data = location.state.data;
  const typesArr = data.types.map((type) => {
    return {
      typeSlot: type.slot,
      type: type.type.name,
    };
  });
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

  return (
    <div className="m-auto h-full p-10 text-white">
      <div className=" flex justify-center p-5 font-inter text-4xl">
        <p className="mr-5 mt-6">#{id}</p>
        <p className="mt-6">{name.charAt(0).toUpperCase() + name.slice(1)}</p>
      </div>
      <div className="m-auto mt-16 flex w-9/12 items-center justify-evenly">
        <img src={pokeImg} className="rounded-xl border-2 bg-gray-200" />
        <div>
          <div className="w-full">
            <div className="flex items-center justify-evenly p-5 text-center text-xl">
              <p>
                HEIGHT <span className="block text-4xl">{height / 10} m</span>
              </p>
              <p>
                WEIGHT <span className="block text-4xl">{weight / 10} kg</span>
              </p>
            </div>
            {
              <Stats
                hp={hp}
                attack={attack}
                defense={defense}
                specialAttack={specialAttack}
                specialDefense={specialDefense}
                speed={speed}
              />
            }
            <div className="m-auto flex justify-center text-xl">
              {typesArr.map((type) => (
                <p
                  className="px-5 py-2 text-center text-2xl"
                  key={type.typeSlot}
                >
                  {type.type.toUpperCase()}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PokemonPage;
