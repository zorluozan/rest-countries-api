import { useQuery } from "react-query";
import axios from "axios";
import { useEffect } from "react";
import CountryCard from "../components/CountryCard";

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
        return <CountryCard country={country} key={country["name"].official} />;
      })}
    </div>
  );
}
