import {
  getPokemons,
  getPokemonByName,
} from 'services/pokemonApi';
import {
  setPokemons,
  setPokemonImage,
  setError,
  resetError,
  loadingOn,
  loadingOff,
} from './pokemonsSlice';

const getPokemonsOperation = () => async (dispatch) => {
  dispatch(loadingOn());
  dispatch(resetError());
  const { data, error } = await getPokemons();
  if (error) {
    dispatch(loadingOff());
    dispatch(setError());
    return;
  }
  dispatch(loadingOff());
  dispatch(setPokemons(data));
};

const getPokemonByNameOperation =
  (query) => async (dispatch) => {
    dispatch(loadingOn());
    dispatch(resetError());
    const { data, error } = await getPokemonByName({
      query,
    });
    if (error) {
      dispatch(loadingOff());
      dispatch(setError());

      return;
    }
    dispatch(loadingOff());
    dispatch(setPokemonImage(data));
  };

const operations = {
  getPokemonsOperation,
  getPokemonByNameOperation,
};

export default operations;
