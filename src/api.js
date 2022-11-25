const searchPokemon = async (pokemon) => {
  const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;
  const res = await fetch(url);
  console.log(await res.json());
};

export default searchPokemon;
