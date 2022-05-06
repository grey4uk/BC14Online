import Button from 'components/Button/Button';
import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/authOperations';

const SignOut = () => {
  const dispatch = useDispatch();

  const signOut = () => dispatch(logOut());

  return <Button title='SIGN OUT' onClick={signOut} />;
};

export default SignOut;
