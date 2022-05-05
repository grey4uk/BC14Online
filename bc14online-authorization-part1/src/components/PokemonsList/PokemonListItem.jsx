import { useState, useEffect, useCallback } from 'react';
import {
  useParams,
  useLocation,
  Link,
  Route,
  Routes,
  Outlet,
} from 'react-router-dom';
import queryString from 'query-string';

import { getPokemonByName } from 'services/pokemonApi';

const PokemonListItem = () => {
  const [icon, setIcon] = useState({ url: '', name: '' });
  // const history = useHistory();//react-router-dom@5.3.0
  const { pokemonName } = useParams();
  const location = useLocation();
  // const match = useRouteMatch();?//react-router-dom@5.3.0
  // console.log('match :>> ', match);
  // console.log('location :>> ', location);
  // console.log('history :>> ', history);
  // console.log('params.pokemonName :>> ', pokemonName);
  // let searchParams = new URLSearchParams(location.search);
  const queryparams = queryString.parse(location.search);
  console.log('queryparams :>> ', queryparams);

  console.log('location :>> ', location);

  //Iterate the search parameters.
  // console.log('searchParams :>> ', searchParams);
  // for (let p of searchParams) {
  //   console.log(p);
  // }

  const showIcon = useCallback(async () => {
    const { data } = await getPokemonByName({
      query: pokemonName,
      loadingOff: null,
    });
    setIcon({ url: data, name: pokemonName });
  }, [pokemonName]);

  useEffect(() => {
    showIcon();
  }, [showIcon]);

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        background: 'rgba(0,0,0,.4)',
      }}>
      <p>{icon.name}</p>
      <Link
        to={{
          pathname: location.pathname.includes('/info')
            ? `${location.pathname}`
            : `${location.pathname}/info`,
        }}>
        <img src={icon.url} alt={icon.name} width='100' />
      </Link>
      <Outlet />
    </div>
  );
};

export default PokemonListItem;
