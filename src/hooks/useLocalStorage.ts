import { useState } from "react";

export const useLocalStorage = <T>(key: string, initialValue: T) => {
  const [storedValue, setStoredValue] = useState<T>(() => {
    const value = window.localStorage.getItem(key);

    if (value) {
      return JSON.parse(value);
    }

    return initialValue;
  });

  const setValue = (value: T | ((val: T) => T)) => {
    try {
      const valueToStore =
        value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      console.error(`Error updating localstorage for ${key}`, error);
    }
  };

  return { storedValue, setValue } as const;
};
