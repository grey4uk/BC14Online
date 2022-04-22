import React, {
  useState,
  useEffect,
  useCallback,
  Suspense,
} from 'react';

import {
  getPokemons,
  getPokemonByName,
} from 'services/pokemonApi';
import { useLocalStorage } from 'hooks';
import Constants from 'assets/constants';
import Loader from 'components/Loader/Loader';
import SearchBar from 'components/SearchBar/SearchBar';
// import PokemonsList from 'components/PokemonsList/PokemonsList';
import Button from 'components/Button';

const LazyPokemonsList = React.lazy(() =>
  import(
    'components/PokemonsList/PokemonsList' /* webpackChunkName: "PokemonsList" */
  )
);

const PokemonsPage = () => {
  const [pokemons, setPokemons] = useState([]);
  const [findedPokemonIco, setFindedPokemonIco] =
    useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const [local, setLocal] = useLocalStorage();

  const [query, setQuery] = useState(
    local[Constants.keys.QUERY] ?? ''
  );

  const handleSearch = (e) => {
    const {
      target: { value },
    } = e;
    setQuery(value);
  };

  const loadingOff = () => setLoading(false);

  const loadPokemon = useCallback(async () => {
    setLoading(true);

    const { data, error } = await getPokemons(loadingOff);

    if (error) {
      setError(error);
    } else {
      setPokemons(data);
    }
  }, []);

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
  // useEffect(() => {
  //   loadPokemon(loadingOff);
  // }, []);

  useEffect(() => {
    setLocal({ [Constants.keys.QUERY]: query });
  }, [query, setLocal]);
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
            // <PokemonsList pokemons={pokemons} />
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
