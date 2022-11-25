import PokemonPreview from "./PokemonPreview";

const PokemonGrid = ({ pokemon }) => {
  return (
    <div className="grid grid-cols-4  gap-4 p-10">
      {pokemon.map((p) => (
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
