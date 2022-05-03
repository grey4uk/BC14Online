import { NavLink, useLocation } from 'react-router-dom';

const linkStyle = { color: 'grey', marginRight: '10px' };
const linkActiveStyle = {
  color: 'red',
  marginRight: '10px',
};

const toggle = ({ isActive }) => {
  return isActive ? linkActiveStyle : linkStyle;
};

const AppBar = () => {
  const location = useLocation();
  //   console.log('location :>> ', location);
  return (
    <nav>
      <NavLink to='/' style={toggle}>
        START
      </NavLink>
      <NavLink to='/clicker' style={toggle}>
        CLICKER
      </NavLink>
      <NavLink to='/counter' style={toggle}>
        COUNTER
      </NavLink>
      <NavLink to='/form' style={toggle}>
        FORM
      </NavLink>
      <NavLink to='/pokemons' style={toggle}>
        POKEMONS
      </NavLink>
      <NavLink to='/todos' style={toggle}>
        TODOS
      </NavLink>
    </nav>
  );
};

export default AppBar;
