import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { NavLink } from 'react-router-dom';
import Button from 'components/Button';
import { logout } from 'redux/auth/authOperations';

const linkStyle = { color: 'grey', marginRight: '10px' };
const linkActiveStyle = {
  color: 'red',
  marginRight: '10px',
};

const toggle = ({ isActive }) => {
  return isActive ? linkActiveStyle : linkStyle;
};

const AppBar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSignOut = async () => {
    dispatch(logout(navigate));
  };

  return (
    <>
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
        <Button title='LOGOUT' onClick={handleSignOut} />
      </nav>
    </>
  );
};

export default AppBar;
