import React from 'react';

import { Audio } from 'react-loader-spinner';

const Loader = () => {
  return (
    <Audio
      height='100'
      width='100'
      color='red'
      ariaLabel='loading'
    />
  );
};

export default React.memo(Loader);
