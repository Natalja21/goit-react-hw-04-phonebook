import { useState, useEffect } from 'react';

const useLocalStorage = (key, defaultValues) => {
  const [state, setState] = useState(
    () => JSON.parse(localStorage.getItem(key)) ?? defaultValues
  );
  useEffect(() => {
   localStorage.setItem(key, JSON.stringify(state));
  }, [key, state]);
  return [state, setState];
};
export default useLocalStorage;