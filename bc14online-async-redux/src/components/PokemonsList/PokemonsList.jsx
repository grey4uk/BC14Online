import {
  useLocation,
  NavLink,
  Outlet,
} from 'react-router-dom';
// import PokemonListItem from './PokemonListItem';

// const LazyPokemonListItem = React.lazy(() =>
//   import(
//     './PokemonListItem' /* webpackChunkName: "PokemonListItem" */
//   )
// );

const PokemonsList = ({ pokemons }) => {
  const { pathname } = useLocation();

  console.log('location :>> ', pathname);
  // console.log('history :>> ', history);

  return (
    <>
      <nav>
        {pokemons.map((el) => (
          <NavLink
            to={{
              pathname: `/pokemons/${el.name}`,
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
      <Outlet />
      {/* <Route path={`${pathname}/:pokemonName`}>
        <Suspense
          fallback={<h2>LazyPokemonListItem...</h2>}>
          <LazyPokemonListItem />
        </Suspense>
      </Route> */}
    </>
  );
};

export default PokemonsList;
