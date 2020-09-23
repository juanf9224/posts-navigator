/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";

const useDebounce = (value, delay) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(
    () => {
      // Set debouncedValue to value (passed in) after the specified delay
      const handler = setTimeout(() => {
        setDebouncedValue(value);
      }, delay);

      // Cleanup when component will unmount
      return () => {
        clearTimeout(handler);
      };
    },
    [value]
  );

  return debouncedValue;
};

export { useDebounce as default };
