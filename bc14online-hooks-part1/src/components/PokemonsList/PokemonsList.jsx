import { Component } from 'react';
import { getPokemonByName } from 'services/pokemonApi';

class PokemonsList extends Component {
  state = { icon: { url: '', name: '' } };

  showIcon = async (e) => {
    const {
      target: { id: query },
    } = e;
    if (this.state.icon) {
      this.setState({ icon: '' });
    } else {
      const { data } = await getPokemonByName({
        query,
        loadingOff: null,
      });
      this.setState({ icon: { url: data, name: query } });
    }
  };

  render() {
    const { pokemons } = this.props;
    const { showIcon } = this;
    const { icon } = this.state;
    return (
      <ul>
        {pokemons.map((el) => (
          <li
            key={el.name}
            onClick={showIcon}
            id={el.name}
            style={{
              display: 'flex',
              flexDirection: 'column',
            }}>
            {el.name}
            {icon.name === el.name && (
              <img src={icon.url} alt='alt' width='100' />
            )}
          </li>
        ))}
      </ul>
    );
  }
}

export default PokemonsList;
