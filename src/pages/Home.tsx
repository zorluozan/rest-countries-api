import { ChangeEvent, useState } from "react";

import CountryCard from "../components/Cards/CountryCard";
import Filter from "../components/Filter";
import Loading from "../components/Loading";
import Search from "../components/Search";
import { ICountryData } from "../types/country";
import { applyFilterCountries } from "../utils/filters";
import { useCountries } from "./useCountries";

export default function Home() {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [regionName, setRegionName] = useState<string>("");

  const { countriesList, isLoading: isCountriesLoading } = useCountries();

  const filteredCountries = applyFilterCountries({
    dataToFiltered: countriesList,
    searchTerm,
    regionName,
  });

  function handleSearchChange(e: ChangeEvent<HTMLInputElement>) {
    setSearchTerm(e.target.value);
  }

  function handleFilterChange(e: any) {
    setRegionName(e.target.value);
  }

  return (
    <>
      {isCountriesLoading ? (
        <Loading />
      ) : (
        <div className="min-h-screen bg-lightGray dark:bg-darkBlueBg">
          <div className="flex flex-col justify-between px-10 py-6 xl:flex-row xl:items-center">
            <Search searchTerm={searchTerm} onChange={handleSearchChange} />
            <Filter regionName={regionName} onChange={handleFilterChange} />
          </div>

          <div className="flex flex-wrap gap-12 p-10">
            {filteredCountries?.map((country: ICountryData, index: number) => {
              return <CountryCard country={country} key={index} />;
            })}
          </div>
        </div>
      )}
    </>
  );
}
