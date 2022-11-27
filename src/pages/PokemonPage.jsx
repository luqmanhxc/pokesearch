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
  const abilitiesArr = data.abilities.map((ability) => {
    return ability.ability.name;
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
  // feature: maybe add moves later

  return (
    <div className="text-white">
      <div className="flex justify-center p-5 font-inter text-4xl">
        <p className="mr-5">#{id}</p>
        <p className="">{name.charAt(0).toUpperCase() + name.slice(1)}</p>
      </div>
      <div className="m-auto flex items-center justify-evenly border-2">
        <img src={pokeImg} className="rounded-xl border-2 bg-gray-200" />
        <div className="w-full">
          <div className="flex justify-center p-5 text-2xl">
            <p className="mr-7">
              Height <span>{height / 10} m</span>
            </p>
            <p>Weight: {weight / 10} kg</p>
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
          <div className="m-auto mt-5 flex justify-center text-xl">
            {typesArr.map((type) => (
              <p className="px-5 py-2 text-center text-xl" key={type.typeSlot}>
                {type.type.toUpperCase()}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PokemonPage;
