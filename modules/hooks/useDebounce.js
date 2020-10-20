import { useState, useEffect } from 'react';

export default function useDebounce(value, delay = 500) {
  const [stateValue, setStateValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setStateValue(value);
    }, delay);
    return () => clearTimeout(handler);
  }, [delay, value]);

  return stateValue;
}