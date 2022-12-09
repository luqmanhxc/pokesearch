import PokemonPreview from "./PokemonPreview";
import { Link } from "react-router-dom";

const PokemonGrid = ({ pokeData }) => {
  return (
    <div className="grid  grid-cols-2 gap-4 p-10 md:grid-cols-4">
      {pokeData.map((p) => (
        <Link to={`/pokemon/${p.id}`} state={{ data: p }} key={p.id}>
          <PokemonPreview
            id={p.id}
            name={p.name}
            sprite={p.sprites.front_default}
            type={p.types[0].type.name}
          />
        </Link>
      ))}
    </div>
  );
};

export default PokemonGrid;
