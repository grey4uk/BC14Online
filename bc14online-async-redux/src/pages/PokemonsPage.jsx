import React, { useCallback, Suspense } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Loader from 'components/Loader/Loader';
import SearchBar from 'components/SearchBar/SearchBar';
import Button from 'components/Button';
import { setQuery } from 'redux/pokemons/pokemonsAsyncSlice';
// import operations from 'redux/pokemons/pokemons-operations';
import pokemonsSelectors from 'redux/pokemons/pokemons-selector';
import {
  fetchPokemons,
  fetchOnePokemon,
} from 'redux/pokemons/pokemonsAsyncThunks';

const LazyPokemonsList = React.lazy(() =>
  import(
    'components/PokemonsList/PokemonsList' /* webpackChunkName: "PokemonsList" */
  )
);

const PokemonsPage = () => {
  const {
    pokemonsSelector,
    pokemonImageSelector,
    loaderPkemonsSelector,
    errorPokemonsSelector,
    pokemonQuerySelector,
  } = pokemonsSelectors;
  const pokemons = useSelector((state) =>
    pokemonsSelector(state)
  );
  const query = useSelector((state) =>
    pokemonQuerySelector(state)
  );
  const findedPokemonIco = useSelector((state) =>
    pokemonImageSelector(state)
  );
  const loading = useSelector((state) =>
    loaderPkemonsSelector(state)
  );
  const error = useSelector((state) =>
    errorPokemonsSelector(state)
  );
  const myConnectionWithPokemonsSlice = useDispatch();

  // const {
  //   getPokemonsOperation,
  //   getPokemonByNameOperation,
  // } = operations;

  const handleSearch = (e) => {
    const {
      target: { value },
    } = e;
    myConnectionWithPokemonsSlice(setQuery(value));
  };

  const loadPokemon = useCallback(() => {
    myConnectionWithPokemonsSlice(fetchPokemons()); //From asyncThunkOperations
    // myConnectionWithPokemonsSlice(getPokemonsOperation());//from thunk operations
  }, [myConnectionWithPokemonsSlice]);

  const getOnePokemon = () => {
    myConnectionWithPokemonsSlice(fetchOnePokemon(query)); //From asyncThunkOperations
    // myConnectionWithPokemonsSlice(
    //   getPokemonByNameOperation(query)
    // );
  };

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          {pokemons.length === 0 && (
            <SearchBar
              handleSearch={handleSearch}
              find={query}
            />
          )}
          {!!findedPokemonIco && (
            <img
              src={findedPokemonIco}
              alt={query}
              width='300'
            />
          )}

          {!!pokemons.length ? (
            <Suspense fallback={<Loader />}>
              <LazyPokemonsList pokemons={pokemons} />
            </Suspense>
          ) : (
            <Button
              title={
                query ? `Find ${query}` : 'LOAD POKEMONS'
              }
              onClick={query ? getOnePokemon : loadPokemon}
            />
          )}
        </>
      )}
      {error ? <h3>ERROR</h3> : null}
    </>
  );
};

export default PokemonsPage;
