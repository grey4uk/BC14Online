import React, {
  useState,
  useCallback,
  Suspense,
} from 'react';
import { useSelector, useDispatch } from 'react-redux';

import {
  getPokemons,
  getPokemonByName,
} from 'services/pokemonApi';
import Loader from 'components/Loader/Loader';
import SearchBar from 'components/SearchBar/SearchBar';
import Button from 'components/Button';
import {
  setQuery,
  setPokemons,
} from 'redux/pokemons/pokemonsSlice';

const LazyPokemonsList = React.lazy(() =>
  import(
    'components/PokemonsList/PokemonsList' /* webpackChunkName: "PokemonsList" */
  )
);

const PokemonsPage = () => {
  const myConnectionWithPokemonsSlice = useDispatch();
  const { query, pokemons } = useSelector(
    (state) => state.pokemons
  );

  const [findedPokemonIco, setFindedPokemonIco] =
    useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  console.log('error', error);

  const handleSearch = (e) => {
    const {
      target: { value },
    } = e;
    myConnectionWithPokemonsSlice(setQuery(value));
  };

  const loadingOff = () => setLoading(false);

  const loadPokemon = useCallback(async () => {
    setLoading(true);

    const { data, error } = await getPokemons(loadingOff);

    if (error) {
      setError(error);
    } else {
      myConnectionWithPokemonsSlice(setPokemons(data));
    }
  }, [myConnectionWithPokemonsSlice]);

  const getOnePokemon = async () => {
    setLoading(true);
    setFindedPokemonIco('');
    console.log('<<<<<<<<<<getOnePokemon Run>>>>>>>>');
    setTimeout(async () => {
      const { data, error } = await getPokemonByName({
        query,
        loadingOff,
      });
      if (error) {
        setError(error);
      } else {
        setFindedPokemonIco(data);
      }
    }, 1000);
  };

  return (
    <>
      {' '}
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
            <Suspense
              fallback={<h2>Loading pokemons...</h2>}>
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
    </>
  );
};

export default PokemonsPage;
