const PokemonPreview = ({ id, name, sprite }) => {
  return (
    <div
      key={id}
      className="mx-auto flex w-full cursor-pointer items-center justify-center justify-evenly justify-self-center rounded-lg bg-slate-800 px-2 py-2 shadow-lg transition duration-200 hover:scale-105"
    >
      <img src={sprite} className="w-30 h-30 rounded-full bg-indigo-500" />
      <h1 className="font-inter text-lg text-white">
        {name.charAt(0).toUpperCase() + name.slice(1)}
      </h1>
    </div>
  );
};

export default PokemonPreview;
