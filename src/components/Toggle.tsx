import { useState, useContext, useEffect } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

export default function Toggle() {
  const [isChecked, setIsChecked] = useState<boolean>(false);
  const { toggleDarkMode, isDarkMode } = useContext(ThemeContext);

  useEffect(() => {
    setIsChecked(isDarkMode);
  }, [isDarkMode]);
  const handleChange = () => {
    setIsChecked(!isChecked);
    toggleDarkMode();
  };

  return (
    <label className="flex h-6 w-full cursor-pointer    items-center ">
      <div
        className={`${
          isChecked ? "bg-blue-500" : "bg-gray-400"
        } relative inline-block  w-12 rounded-full transition-colors duration-300`}
      >
        <div
          className={`${
            isChecked ? "translate-x-6" : "translate-x-0"
          } bg-white w-6 h-6 relative  flex items-center justify-center  rounded-full shadow-md transform transition-transform duration-300`}
        >
          {!isChecked ? (
            <span className="absolute text-yellow-500">
              <i className="fa-regular fa-sun"></i>
            </span>
          ) : (
            <span className="absolute text-yellow-500">
              <i className="fa-solid fa-moon"></i>
            </span>
          )}
        </div>

        <input
          type="checkbox"
          className="opacity-0 absolute w-full h-full"
          checked={isChecked}
          onChange={handleChange}
        />
      </div>
    </label>
  );
}
