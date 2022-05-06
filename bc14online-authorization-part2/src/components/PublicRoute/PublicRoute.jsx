import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { isAuthSelector } from 'redux/auth/authSelectors';
const PublicRoute = ({ children, restricted = false }) => {
  const isAuth = useSelector(isAuthSelector);
  return (
    <>
      {isAuth && restricted ? (
        <Navigate to='/' />
      ) : (
        children
      )}
    </>
  );
};

export default PublicRoute;
