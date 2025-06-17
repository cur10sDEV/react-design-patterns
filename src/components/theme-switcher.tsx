import { useState } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { usePrevious } from "../hooks/usePrevious";

const ThemeSwitcher = () => {
  const { storedValue, setValue } = useLocalStorage("theme", "light");
  const [theme, setTheme] = useState(storedValue);
  // const debouncedThemeValue = useDebounceValue(theme, 1000);
  const previousTheme = usePrevious(theme);

  const toggleTheme = () => {
    const newValue = theme === "light" ? "dark" : "light";
    setTheme(newValue);
    setValue(newValue);
  };

  return (
    <div
      className={
        "h-screen w-screen flex flex-col justify-center items-center gap-4 " +
        (theme === "dark" ? "bg-gray-800 text-white" : "bg-white text-black")
      }
    >
      <h1>Current Theme: {theme}</h1>
      {/* NOTE: debounce and previous wont work as intented together due to the re-render(s) after the delay */}
      {/* <h1>Debounced Theme: {debouncedThemeValue}</h1> */}
      <h1>Previous Theme: {previousTheme}</h1>
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
