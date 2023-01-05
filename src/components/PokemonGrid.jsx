import PokemonPreview from "./PokemonPreview";
import { Link } from "react-router-dom";

const PokemonGrid = ({ pokeData }) => {
  return (
    <main className="h-full bg-slate-600 pt-20">
      <div className="grid grid-cols-2 gap-4 p-10 md:grid-cols-4">
        {pokeData
          ?.sort((a, b) => (a.id > b.id ? 1 : -1))
          .map((p) => (
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
    </main>
  );
};

export default PokemonGrid;
