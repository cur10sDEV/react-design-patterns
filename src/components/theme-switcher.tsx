import { useState } from "react";
import { useDebouceValue } from "../hooks/useDebouce";
import { useLocalStorage } from "../hooks/useLocalStorage";

const ThemeSwitcher = () => {
  const { storedValue, setValue } = useLocalStorage("theme", "light");
  const [theme, setTheme] = useState(storedValue);
  const debouncedThemeValue = useDebouceValue(theme, 1000);

  const toggleTheme = () => {
    const newValue = theme === "light" ? "dark" : "light";
    setTheme(newValue);
    setValue(newValue);
  };

  return (
    <div
      className={
        "h-screen w-screen flex flex-col justify-center items-center " +
        (theme === "dark" ? "bg-gray-800 text-white" : "bg-white text-black")
      }
    >
      <h1>Current Theme: {debouncedThemeValue}</h1>
      <button
        className={
          "border py-2 px-4 rounded-md cursor-pointer hover:scale-105 transition-transform duration-200"
        }
        onClick={toggleTheme}
      >
        ToggleTheme
      </button>
    </div>
  );
};

export default ThemeSwitcher;
