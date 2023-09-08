import { useState, useEffect, ChangeEvent } from "react";
import { useQuery } from "react-query";
import axios from "axios";
import CountryCard from "../components/CountryCard";
import { ICountryData } from "../types/country";

export default function Home() {
  const [term, setTerm] = useState("");
  async function fetchApi() {
    const { data } = await axios.get("https://restcountries.com/v3.1/all");
    return data;
  }

  async function searchByName() {
    const { data } = await axios.get(`https://restcountries.com/v3.1/name/${term}?fullText=true`);
    return data;
  }

  const { data } = useQuery("countries", fetchApi);
  const { data: searchResults } = useQuery(["search", term], searchByName, {
    enabled: term !== "",
  });

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    setTerm(e.target.value);
  }

  useEffect(function () {
    fetchApi();
  }, []);
  return (
    <div className="bg-lightGray">
      <input
        type="text"
        placeholder="Search for a country..."
        className="h-12 bg-white shadow-sm p-4 border-0 focus-within:border-0"
        value={term}
        onChange={handleChange}
      />

      <div className="flex justify-center flex-wrap gap-8 p-10">
        {/* {Object.keys(searchResults || data || {}).map((key) => {
          const country = data[key];      
          return <CountryCard country={country} key={country["name"].official} />;
        })} */}
        {(searchResults || data || []).map((country: ICountryData) => {
          return <CountryCard country={country} key={country?.name?.official} />;
        })}
      </div>
    </div>
  );
}
