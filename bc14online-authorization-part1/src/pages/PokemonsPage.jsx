import React, {
  useCallback,
  Suspense,
  useState,
} from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Loader from 'components/Loader/Loader';
import SearchBar from 'components/SearchBar/SearchBar';
import Button from 'components/Button';
import { setQuery } from 'redux/pokemons/query/querySlice';
import operations from 'redux/pokemons/thunk/pokemons-operations';
import pokemonsSelectors from 'redux/pokemons/pokemons-selector';
import { fetchPokemons } from 'redux/pokemons/asyncThunk/pokemonsAsyncThunks';
import {
  // useFetchPokemonsQuery,
  useFetchOnePokemonByNameQuery,
  useLazyFetchPokemonsQuery,
} from 'redux/pokemons/api/pokemonsApi';

const LazyPokemonsList = React.lazy(() =>
  import(
    'components/PokemonsList/PokemonsList' /* webpackChunkName: "PokemonsList" */
  )
);

const PokemonsPage = () => {
  const [skipAllPokemons, setSkipAllPokemons] =
    useState(true);
  const [queryValue, setQueryValue] = useState('');
  const query = useSelector(
    pokemonsSelectors.pokemonQuerySelector
  );

  console.log('query :>> ', query);
  const dispatch = useDispatch();
  const [
    getPokemonsAll,
    {
      data: pokemons = [],
      error: allPokemonsError,
      isLoading: allPokemonsLoading,
    },
  ] = useLazyFetchPokemonsQuery();

  const {
    data: findedPokemonIco,
    isloading: onePokemonLoading,
    error: onePokemonError,
  } = useFetchOnePokemonByNameQuery(query, {
    skip: query === '',
  });

  console.log('findedPokemonIco :>> ', findedPokemonIco);

  const loadPokemons = useCallback(() => {
    // getPokemonsAll();
    getPokemonsAll();
    // myConnectionWithPokemonsSlice(fetchPokemons()); //From asyncThunkOperations
    // myConnectionWithPokemonsSlice(getPokemonsOperation());//from thunk operations
  }, []);

  const getOnePokemon = () => {
    dispatch(setQuery(queryValue));
  };

  return (
    <>
      {allPokemonsLoading || onePokemonLoading ? (
        <Loader />
      ) : (
        <>
          {pokemons.length === 0 && (
            <SearchBar
              handleSearch={(e) =>
                setQueryValue(e.target.value)
              }
              find={queryValue}
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
                queryValue
                  ? `Find ${queryValue}`
                  : 'LOAD POKEMONS'
              }
              onClick={
                queryValue ? getOnePokemon : loadPokemons
              }
            />
          )}
        </>
      )}
      {onePokemonError || allPokemonsError ? (
        <h3>ERROR</h3>
      ) : null}
    </>
  );
};

export default PokemonsPage;
