import { useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { useSelector, useDispatch } from 'react-redux';
import ButtonGoogle from 'components/ButtonGoogle/ButtonGoogle';
import FormAuth from 'components/FormAuth/FormAuth';
import SignOut from 'components/SignOut/SignOut';
import { tokenSelector } from 'redux/auth/authSelectors';
import { refreshUser } from 'redux/auth/authSlice';
import { auth } from 'services/firebase';

const App = () => {
  const token = useSelector(tokenSelector);
  const dispatch = useDispatch();

  const refreshCurrentUse = () => {
    onAuthStateChanged(auth, (user) => {
      token &&
        dispatch(
          refreshUser({
            name: user.displayName,
            email: user.email,
          })
        );
    });
  };

  useEffect(() => {
    refreshCurrentUse();
  }, []);
  return (
    <>
      {token ? (
        <SignOut />
      ) : (
        <>
          <FormAuth />
          <p>or register by google account</p>
          <ButtonGoogle />
        </>
      )}
    </>
  );
};

export default App;
