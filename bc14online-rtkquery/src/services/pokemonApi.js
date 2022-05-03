import axios from 'axios';

axios.defaults.baseURL =
  'https://pokeapi.co/api/v2/pokemons';

const getPokemons = async (loadingOff) => {
  try {
    const pokemons = await axios.get().finally(loadingOff);
    return { error: false, data: pokemons.data.results };
  } catch (error) {
    return { error: true, data: error };
  }
};

const getPokemonByName = async ({ query, loadingOff }) => {
  try {
    console.log('query', query);
    const pokemon = await axios
      .get(`/${query}`)
      .finally(loadingOff);

    return {
      error: false,
      data: pokemon.data.sprites.front_default,
    };
  } catch (error) {
    return { error: true, data: error };
  }
};

export { getPokemons, getPokemonByName };
