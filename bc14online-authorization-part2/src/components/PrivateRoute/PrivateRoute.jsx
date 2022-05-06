import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { isAuthSelector } from 'redux/auth/authSelectors';

const PrivateRoute = ({ children }) => {
  const isAuth = useSelector(isAuthSelector);
  return isAuth ? children : <Navigate to='/auth' />;
};
// const PrivateRoute = ({ children, ...props }) => {
//   const isAuth = useSelector(isAuthSelector);
//   return isAuth ? <Route {...props}>{children}</Route> : <Redirect to='/auth' />;
// };

export default PrivateRoute;
