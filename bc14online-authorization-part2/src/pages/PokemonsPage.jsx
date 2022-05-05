import React, {
  useCallback,
  Suspense,
  useState,
} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import Loader from 'components/Loader/Loader';
import SearchBar from 'components/SearchBar/SearchBar';
import Button from 'components/Button';
import { setQuery } from 'redux/pokemons/query/querySlice';

import pokemonsSelectors from 'redux/pokemons/pokemons-selector';
import {
  useFetchOnePokemonByNameQuery,
  useLazyFetchPokemonsQuery,
} from 'redux/pokemons/api/pokemonsApi';

const LazyPokemonsList = React.lazy(() =>
  import(
    'components/PokemonsList/PokemonsList' /* webpackChunkName: "PokemonsList" */
  )
);

const PokemonsPage = () => {
  const navigate = useNavigate();
  const [queryValue, setQueryValue] = useState('');
  const query = useSelector(
    pokemonsSelectors.pokemonQuerySelector
  );
  // const query = useSelector(
  //   pokemonsSelectors.pokemonQuerySelector
  // );

  const handleQuerySet = ({ target: { value } }) =>
    setQueryValue(value);

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

  const loadPokemons = useCallback(() => {
    // getPokemonsAll();
    getPokemonsAll();
    // myConnectionWithPokemonsSlice(fetchPokemons()); //From asyncThunkOperations
    // myConnectionWithPokemonsSlice(getPokemonsOperation());//from thunk operations
  }, [getPokemonsAll]);

  const getOnePokemon = () => {
    dispatch(setQuery(queryValue));
  };

  if (allPokemonsError?.originalStatus === 404) {
    navigate('/error', {
      state: {
        error: 'Check your request. Nothing not found',
      },
    });
  }

  return (
    <>
      {allPokemonsLoading || onePokemonLoading ? (
        <Loader />
      ) : (
        <>
          {pokemons.length === 0 && (
            <SearchBar
              handleSearch={handleQuerySet}
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
              isActive={!allPokemonsLoading}
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
