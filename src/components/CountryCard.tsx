import { useNavigate } from "react-router-dom";
import { ICountryType } from "../types/country";

export default function CountryCard({ country }: ICountryType) {
  const navigate = useNavigate();

  const handleCardClick = (name: string) => {
    navigate(`/country/${name}`);
  }

  return (
    <article className="bg-white shadow-sm basis-72 cursor-pointer" onClick={() => handleCardClick(country["name"]?.common)}>
      <img src={country["flags"]?.png} alt={country["flags"]?.alt} className="w-full h-52 object-cover" />
      <div className="p-4">
        <p className="text-black font-bold mb-2 text-xl">{country["name"]?.common}</p>
        <div className="flex items-center mb-2">
          <p className="text-black font-semibold">Population:</p>
          <p className="text-darkBlue font-medium">{country?.population}</p>
        </div>
        <div className="flex items-center mb-2">
          <p className="text-black font-semibold">Region:</p>
          <p className="text-darkBlue font-medium">{country?.region}</p>
        </div>
        <div className="flex items-center">
          <p className="text-black font-semibold">Capital:</p>
          <p className="text-darkBlue font-medium">{country?.capital}</p>
        </div>
      </div>
    </article>
  );
}
