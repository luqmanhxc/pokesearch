import PokemonPreview from "./PokemonPreview";
import useFetch from "../hooks/useAxios";

const PokemonGrid = () => {
  const { pokeData } = useFetch();
  return (
    <div className="grid grid-cols-4  gap-4 p-10">
      {pokeData.map((p) => (
        <PokemonPreview
          key={p.id}
          id={p.id}
          name={p.name}
          sprite={p.sprites.front_default}
        />
      ))}
    </div>
  );
};

export default PokemonGrid;
