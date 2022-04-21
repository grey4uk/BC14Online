import { useState, useEffect, useCallback } from 'react';
import {
  useHistory,
  useParams,
  useLocation,
} from 'react-router-dom';

import { getPokemonByName } from 'services/pokemonApi';

const PokemonListItem = () => {
  const [icon, setIcon] = useState({ url: '', name: '' });
  const history = useHistory();
  const params = useParams();
  const location = useLocation();
  console.log('location :>> ', location);
  console.log('history :>> ', history);
  console.log('params :>> ', params);
  let searchParams = new URLSearchParams(location.search);

  //Iterate the search parameters.
  console.log('searchParams :>> ', searchParams);
  for (let p of searchParams) {
    console.log(p);
  }

  const showIcon = useCallback(async () => {
    const { name } = params;
    const { data } = await getPokemonByName({
      query: name,
      loadingOff: null,
    });
    setIcon({ url: data, name });
  }, [params]);

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
      <img src={icon.url} alt={icon.name} width='100' />
    </div>
  );
};

export default PokemonListItem;
