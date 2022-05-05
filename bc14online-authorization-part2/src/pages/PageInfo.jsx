import { useLocation } from 'react-router-dom';

const PageInfo = () => {
  const location = useLocation();
  console.log('location', location);
  return (
    <>
      <h1>INFO PAGE</h1>
      <p>{location?.state?.error ?? ''}</p>
    </>
  );
};

export default PageInfo;
