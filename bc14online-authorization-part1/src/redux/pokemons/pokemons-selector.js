const pokemonsSelector = (state) =>
  state.pokemons.pokemons.pokemons;

const pokemonImageSelector = (state) =>
  state.pokemons.pokemons.pokemonImage;

const pokemonQuerySelector = (state) => state.query;

const loaderPkemonsSelector = (state) =>
  state.pokemons.loading;

const errorPokemonsSelector = (state) =>
  state.pokemons.error;

const pokemonsSelectors = {
  pokemonsSelector,
  pokemonImageSelector,
  loaderPkemonsSelector,
  errorPokemonsSelector,
  pokemonQuerySelector,
};

export default pokemonsSelectors;
