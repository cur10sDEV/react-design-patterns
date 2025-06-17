import { useEffect, useRef } from "react";

export const usePrevious = <T>(value: T) => {
  const valueRef = useRef<T | undefined>(undefined);

  useEffect(() => {
    valueRef.current = value;
  });

  return valueRef.current;
};
