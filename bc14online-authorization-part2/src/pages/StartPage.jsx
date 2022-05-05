import { useSelector } from 'react-redux';
import { userEmailSelector } from 'redux/auth/authSelectors';

const StartPage = () => {
  const user = useSelector(userEmailSelector);
  return <h1>{`HELLO, ${user ? user : 'NONAME'}!!!`}</h1>;
};

export default StartPage;
