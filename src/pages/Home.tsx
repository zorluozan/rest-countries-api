import { useState, useEffect, ChangeEvent } from "react";
import { useQuery } from "react-query";
import axios from "axios";
import CountryCard from "../components/CountryCard";
import { ICountryData } from "../types/country";
import Loading from "../components/Loading";
import Filter from "../components/Filter";
import Search from "../components/Search";
import { BASE_URL } from "../config";

export default function Home() {
  const [term, setTerm] = useState("");
  const [regionName, setRegionName] = useState("");
  const [regionsArray, setRegionsArray] = useState<[]>([]);

  async function fetchApi() {
    const { data } = await axios.get(`${BASE_URL}all`);
    return data;
  }

  async function searchByName() {
    const { data } = await axios.get(`${BASE_URL}name/${term}`);
    return data;
  }

  async function fetchRegionNames() {
    const { data } = await axios.get(`${BASE_URL}all?fields=region`);
    setRegionsArray(data);
  }

  async function filterByRegion(region: string) {
    const { data } = await axios.get(`${BASE_URL}region/${region}`);
    return data;
  }

  const { data: countriesData, isLoading } = useQuery("countries", fetchApi);

  const { data: searchResults } = useQuery(["search", term], searchByName, {
    enabled: term !== "",
  });

  const { data: filteredCountries } = useQuery(
    ["filteredCountries", regionName],
    () => filterByRegion(regionName),
    {
      enabled: regionName !== "",
    },
  );

  const getCountries = function () {
    if (term) return searchResults;
    if (regionName) return filteredCountries;
    return countriesData;
  };

  const newData = getCountries();

  function handleSearchChange(e: ChangeEvent<HTMLInputElement>) {
    setTerm(e.target.value);
  }

  function handleFilterChange(e: any) {
    setRegionName(e.target.value);
  }

  useEffect(function () {
    fetchApi();
    fetchRegionNames();
  }, []);

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      if (term) {
        searchByName();
      }
    }, 500);

    return () => clearTimeout(delayDebounceFn);
  }, [term]);

  return (
    <>
      {isLoading && <Loading />}
      {
        <div className="min-h-screen bg-lightGray dark:bg-darkBlueBg">
          <div className="flex flex-col justify-between px-10 py-6 xl:flex-row xl:items-center">
            <Search term={term} onChange={handleSearchChange} />
            <Filter
              regionName={regionName}
              onChange={handleFilterChange}
              regionsArray={regionsArray}
            />
          </div>

          <div className="flex flex-wrap gap-12 p-10">
            {(newData || []).map((country: ICountryData) => {
              return (
                <CountryCard country={country} key={country?.name?.official} />
              );
            })}
          </div>
        </div>
      }
    </>
  );
}
