import { useTheme } from "../contexts/ThemeContext";

const Header = () => {
  const { toggleDarkMode } = useTheme();
  return (
    <div className="flex items-center justify-between bg-white px-4 py-6 drop-shadow-sm dark:bg-darkBlueBg dark:drop-shadow-lg xl:px-10">
      <h1 className="text-xl font-extrabold text-black dark:text-white xl:text-2xl">
        Where in the world?
      </h1>

      <button
        className="flex items-center text-xs font-semibold dark:text-white xl:text-sm"
        onClick={toggleDarkMode}
      >
        <svg
          className="mr-2 h-6 w-6 text-gray-800 dark:fill-white dark:text-white"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 21a9 9 0 0 1-.5-18v0A9 9 0 0 0 20 15h.5a9 9 0 0 1-8.5 6Z"
          />
        </svg>
        <span>Dark Mode</span>
      </button>
    </div>
  );
};

export default Header;
