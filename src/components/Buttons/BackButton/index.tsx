import { useNavigate } from "react-router-dom";

const BackButton = () => {
  const navigate = useNavigate();
  return (
    <button
      className="mb-6 flex items-center bg-white px-6 py-2 font-normal text-darkBlue drop-shadow-md dark:bg-darkBlue dark:text-white dark:drop-shadow-xl"
      onClick={(e) => {
        e.preventDefault();
        navigate("/");
      }}
    >
      <svg
        className="mr-2 h-3.5 w-3.5"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 14 10"
      >
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M13 5H1m0 0 4 4M1 5l4-4"
        ></path>
      </svg>
      Back
    </button>
  );
};

export default BackButton;
