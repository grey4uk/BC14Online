import {
  useLocation,
  NavLink,
  Route,
} from 'react-router-dom';
import PokemonListItem from './PokemonListItem';

const PokemonsList = ({ pokemons }) => {
  const location = useLocation();

  // console.log('location :>> ', location);
  // console.log('history :>> ', history);

  return (
    <>
      <nav>
        {pokemons.map((el) => (
          <NavLink
            to={{
              pathname: `/pokemons/${el.name}`,
              state: { name: el.name },
              search: `?category=${el.name}&query=${el.url}`,
            }}
            key={el.name}
            style={{
              display: 'flex',
              flexDirection: 'column',
            }}>
            {el.name}
          </NavLink>
        ))}
      </nav>
      <Route path='/pokemons/:name'>
        <PokemonListItem />
      </Route>
    </>
  );
};

export default PokemonsList;
