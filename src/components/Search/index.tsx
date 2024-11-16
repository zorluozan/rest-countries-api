interface Props {
  searchTerm: string;
  onChange: (newValue: any) => void;
}

export default function Search({ searchTerm, onChange }: Props) {
  return (
    <div className="relative mb-8 xl:mb-0">
      <div className="pointer-events-none absolute inset-y-0 start-0 flex items-center ps-3">
        <svg
          className="h-4 w-4 text-gray-500 dark:text-gray-400"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 20 20"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
          />
        </svg>
      </div>
      <input
        type="text"
        className="block w-full border-0 bg-gray-50 p-4 ps-10 text-sm text-gray-900 shadow-sm focus-within:border-0  dark:bg-darkBlueBg dark:text-white dark:placeholder-gray-400 dark:shadow-xl xl:w-auto"
        placeholder="Search for a country..."
        value={searchTerm}
        onChange={onChange}
      />
    </div>
  );
}
