import {
  createApi,
  fetchBaseQuery,
} from '@reduxjs/toolkit/query/react';

export const pokemonsApi = createApi({
  reducerPath: 'pokemonsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://pokeapi.co/api/v2/pokemon',
  }),
  endpoints: (builder) => ({
    fetchPokemons: builder.query({
      query: (name) => ({ url: name, method: 'GET' }),
      transformResponse: (response) => response.results,
    }),
    fetchOnePokemonByName: builder.query({
      query: (name) => {
        console.log(name);
        return { url: `/${name}`, method: 'GET' };
      },
      transformResponse: (pokemon) =>
        pokemon.sprites.front_default,
    }),
  }),
});

export const {
  // useFetchPokemonsQuery,
  useFetchOnePokemonByNameQuery,
  useLazyFetchPokemonsQuery,
} = pokemonsApi;

// export default pokemonApi;
