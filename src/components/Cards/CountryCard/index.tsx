import { useNavigate } from "react-router-dom";
import { ICountryType } from "../../../types/country";

export default function CountryCard({ country }: ICountryType) {
  const navigate = useNavigate();

  const handleCardClick = (name: string) => {
    navigate(`/country/${name}`);
  };

  return (
    <article
      className="flex-shrink-0 flex-grow basis-72 cursor-pointer bg-white shadow-sm dark:bg-darkBlueBg dark:shadow-xl"
      onClick={() => handleCardClick(country["name"]?.common)}
    >
      <img
        src={country["flags"]?.png}
        alt={country["flags"]?.alt || ""}
        className="h-52 w-full object-cover"
      />
      <div className="p-4">
        <p className="mb-2 text-xl font-bold text-black dark:text-white">
          {country["name"]?.common}
        </p>
        <div className="mb-2 flex items-center">
          <p className="font-semibold text-black dark:text-white">
            Population:
          </p>
          <p className="font-medium text-darkBlue dark:text-lightGray">
            {country?.population}
          </p>
        </div>
        <div className="mb-2 flex items-center">
          <p className="font-semibold text-black dark:text-white">Region:</p>
          <p className="font-medium text-darkBlue dark:text-lightGray">
            {country?.region}
          </p>
        </div>
        <div className="flex items-center">
          <p className="font-semibold text-black dark:text-white">Capital:</p>
          <p className="font-medium text-darkBlue dark:text-lightGray">
            {country?.capital}
          </p>
        </div>
      </div>
    </article>
  );
}
