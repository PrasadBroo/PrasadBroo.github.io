import { useTheme } from "@/contexts/ThemeContext";
import clsx from "clsx";
import { FaMoon, FaSun } from "react-icons/fa6";

export default function ToggleThemeButton() {
  const { toggleDarkMode, isDarkMode } = useTheme();

  return (
    <label
      className="flex h-6 w-full cursor-pointer items-center"
      htmlFor="theme-toggle"
    >
      <div
        className={clsx(
          "relative inline-block  w-12 rounded-full transition-colors duration-300",
          isDarkMode ? "bg-blue-500" : "bg-gray-400"
        )}
      >
        <div
          className={`${
            isDarkMode ? "translate-x-6" : "translate-x-0"
          } bg-white w-6 h-6 relative  flex items-center justify-center  rounded-full shadow-md transform transition-transform duration-300`}
        >
          {!isDarkMode ? (
            <span className="absolute text-yellow-500">
              <FaSun />
            </span>
          ) : (
            <span className="absolute text-purple-800">
              <FaMoon />
            </span>
          )}
        </div>

        <input
          type="checkbox"
          id="theme-toggle"
          className="opacity-0 absolute w-full h-full"
          checked={isDarkMode}
          onChange={toggleDarkMode}
        />
      </div>
    </label>
  );
}
