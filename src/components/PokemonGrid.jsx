import PokemonPreview from "./PokemonPreview";
import useAxios from "../hooks/useAxios";
import { Link } from "react-router-dom";

const PokemonGrid = () => {
  const { pokeData } = useAxios();
  // console.log(pokeData);
  return (
    <div className="grid grid-cols-4  gap-4 p-10">
      {pokeData.map((p) => (
        <Link to={`/${p.id}`} state={{ data: p }} key={p.id}>
          <PokemonPreview
            id={p.id}
            name={p.name}
            sprite={p.sprites.front_default}
          />
        </Link>
      ))}
    </div>
  );
};

export default PokemonGrid;
