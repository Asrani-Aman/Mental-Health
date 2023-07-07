import { useState } from "react";

export default function useLocalStorage(key) {
  const getValue = () => {
    const value = localStorage.getItem(key);
    return JSON.parse(value);
  };

  const [value, setValue] = useState(getValue());

  const saveValue = (value) => {
    localStorage.setItem(key, JSON.stringify(value));
    setValue(value);
  };

  return {
    value,
    setValue: saveValue,
  };
}
