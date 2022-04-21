import { useHistory } from 'react-router-dom';

const PageNotFound = () => {
  const history = useHistory();
  console.log('history :>> ', history);
  return <h1>Nothing not foud</h1>;
};

export default PageNotFound;
