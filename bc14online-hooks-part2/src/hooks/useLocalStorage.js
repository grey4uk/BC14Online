import { useState, useEffect } from 'react';

import { Constants } from 'assets/constants';

export const useLocalStorage = () => {
  const [myLocalStorage, setMyLocalStorage] = useState(
    JSON.parse(
      localStorage.getItem(Constants.keys.STORAGE)
    ) ?? null
  );
  useEffect(() => {
    const storage = JSON.parse(
      localStorage.getItem(Constants.keys.STORAGE)
    );
    localStorage.setItem(
      Constants.keys.STORAGE,
      JSON.stringify({ ...storage, ...myLocalStorage })
    );
  }, [myLocalStorage]);
  return [myLocalStorage, setMyLocalStorage];
};
