import { ICountryType } from "../types/country";

export default function CountryCard({ country }: ICountryType) {
  return (
    <article className="bg-white shadow-sm basis-72">
      <img
        src={country["flags"]?.png}
        alt={country["flags"]?.alt}
        className="w-full h-52"
      />
      <div className="p-4">
        <p className="text-black font-bold mb-2 text-xl">
          {country["name"]?.common}
        </p>
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
          <p className="text-darkBlue font-medium">{country.capital}</p>
        </div>
      </div>
    </article>
  );
}
