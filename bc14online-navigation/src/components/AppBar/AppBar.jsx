import { NavLink, useLocation } from 'react-router-dom';

const linkStyle = { color: 'grey', marginRight: '10px' };

const AppBar = () => {
  const location = useLocation();
  //   console.log('location :>> ', location);
  return (
    <nav>
      <NavLink
        to='/'
        exact
        style={linkStyle}
        activeStyle={{ color: 'green' }}>
        START
      </NavLink>
      <NavLink
        to='/clicker'
        style={linkStyle}
        activeStyle={{ color: 'green' }}>
        CLICKER
      </NavLink>
      <NavLink
        to='/counter'
        style={linkStyle}
        activeStyle={{ color: 'green' }}>
        COUNTER
      </NavLink>
      <NavLink
        to='/form'
        style={linkStyle}
        activeStyle={{ color: 'green' }}>
        FORM
      </NavLink>
      <NavLink
        to='/pokemons'
        style={linkStyle}
        activeStyle={{ color: 'green' }}>
        POKEMONS
      </NavLink>
    </nav>
  );
};

export default AppBar;
