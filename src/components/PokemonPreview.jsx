import { POKEAPI_TYPE_TO_COLOR } from "../utils/utils";

const PokemonPreview = ({ id, name, sprite, type }) => {
  return (
    <div
      key={id}
      className={`w-full max-w-lg rounded-lg border border-gray-700 bg-gradient-to-r px-4 pt-4 shadow-md drop-shadow-md transition duration-150 ease-out hover:scale-95 hover:ease-in from-${type} to-${POKEAPI_TYPE_TO_COLOR[type]} `}
    >
      <div className="flex flex-col items-center p-10">
        <img
          className="h-30 w-30 mb-3 rounded-full border-2 bg-white shadow-lg"
          src={sprite}
          alt={`${name} sprite`}
        />
        <h5 className="text-md font-medium tracking-widest text-gray-900 drop-shadow-lg dark:text-white">
          {name.toUpperCase()}
        </h5>
      </div>
    </div>
  );
};

export default PokemonPreview;
