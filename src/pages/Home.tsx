import { useQuery } from "react-query";
import axios from "axios";
import { useEffect } from "react";

export default function Home() {
  async function fetchApi() {
    const { data } = await axios.get("https://restcountries.com/v3.1/all");
    return data;
  }

  const { data } = useQuery("countries", fetchApi);

  useEffect(function () {
    fetchApi();
  }, []);
  return (
    <div className="flex flex-wrap gap-8 bg-lightGray p-10">
      {Object.keys(data || {}).map((key) => {
        const country = data[key];
        return (
          <article
            className="bg-white shadow-sm basis-72 flex-grow"
            key={country["name"]?.common}
          >
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
                <p className="text-darkBlue font-medium">
                  {country?.population}
                </p>
              </div>
              <div className="flex items-center mb-2">
                <p className="text-black font-semibold">Region:</p>
                <p className="text-darkBlue font-medium">{country?.region}</p>
              </div>
              <div className="flex items-center">
                <p className="text-black font-semibold">Capital:</p>
                <p className="text-darkBlue font-medium">
                  {country.capital?.at(0)}
                </p>
              </div>
            </div>
          </article>
        );
      })}
    </div>
  );
}
