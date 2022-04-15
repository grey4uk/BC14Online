import { Component } from 'react';

import 'assets/rootColors.css';
import Counter from 'components/Counter/Counter';
import Button from 'components/Button';
import Form from 'components/Form/Form';
import PokemonsList from './components/PokemonsList/PokemonsList';

import {
  getPokemons,
  getPokemonByName,
} from 'services/pokemonApi';
import SearchBar from './components/SearchBar/SearchBar';

class App extends Component {
  state = {
    isOpen: false,
    pokemons: [],
    error: false,
    loading: false,
    query: '',
    findedPokemonIco: '',
  };

  handleSearch = (e) => {
    const {
      target: { value },
    } = e;
    this.setState({ query: value });
  };

  componentDidMount() {
    // this.loadPokemon();
  }

  loadingOff = () => this.setState({ loading: false });

  loadPokemon = async () => {
    this.setState({ loading: true });

    const { data, error } = await getPokemons(
      this.loadingOff
    );

    if (error) {
      this.setState((prev) => ({
        ...prev,
        error: error,
      }));
    } else {
      this.setState({ pokemons: data });
    }
  };

  getOnePokemon = async () => {
    const { loadingOff } = this;
    const { query } = this.state;
    this.setState({ loading: true, findedPokemonIco: '' });

    const { data, error } = await getPokemonByName({
      query,
      loadingOff,
    });

    if (error) {
      this.setState((prev) => ({
        ...prev,
        error: error,
      }));
    } else {
      this.setState({ findedPokemonIco: data });
    }
  };

  toggle = () => {
    const { isOpen } = this.state;
    this.setState({ isOpen: !isOpen });
  };

  onSubmitForm = (user) =>
    this.setState((prev) => ({
      ...prev,
      users: [...prev.users, user],
    }));

  render() {
    const {
      isOpen,
      pokemons,
      error,
      loading,
      query,
      findedPokemonIco,
    } = this.state;
    const {
      toggle,
      onSubmitForm,
      loadPokemon,
      handleSearch,
      getOnePokemon,
    } = this;

    return (
      <>
        {loading ? (
          <h1>Loading....</h1>
        ) : (
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            {error ? (
              <h2>Something went wrong...</h2>
            ) : null}
            {/* {isOpen ? (
              <Counter
                toggle={toggle}
                title='Hide counter'
                step={2}
              />
            ) : (
              <div>
                <Button
                  onClick={toggle}
                  title='Show counter'
                />
                <Form onSubmitForm={onSubmitForm} />
              </div>
            )} */}
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
              <PokemonsList pokemons={pokemons} />
            ) : (
              <Button
                title={
                  query ? `Find ${query}` : 'LOAD POKEMONS'
                }
                onClick={
                  query ? getOnePokemon : loadPokemon
                }
              />
            )}
          </div>
        )}
      </>
    );
  }
}

export default App;
