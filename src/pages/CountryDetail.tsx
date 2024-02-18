import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ICountryData } from "../types/country";
import axios from "axios";
import { useQuery } from "react-query";
import Loading from "../components/Loading";
import { BASE_URL } from "../config";

export default function CountryDetail() {
  let { name } = useParams();

  const navigate = useNavigate();
  const [borders, setBorders] = useState<string[]>([]);

  const getCountryByName = async (): Promise<ICountryData> => {
    const { data } = await axios.get(`${BASE_URL}name/${name}`);
    return data[0];
  };

  const getBordersByCodes = async (borders: string[] | undefined) => {
    if (!borders || borders.length === 0) return [];
    const { data } = await axios.get(
      `${BASE_URL}alpha?codes=${borders?.join(",")}`
    );
    return data;
  };

  const {
    data: countryData,
    isLoading,
    refetch: refetchCountryData,
  } = useQuery("countryDetail", getCountryByName);

  const { data: bordersData } = useQuery(["borders", borders], () =>
    getBordersByCodes(countryData?.borders)
  );

  useEffect(() => {
    if (countryData) {
      refetchCountryData();
      setBorders(countryData?.borders);
    }
  }, [countryData]);

  useEffect(() => {
    if (name) {
      refetchCountryData();
    }
  }, [name]);

  return isLoading ? (
    <Loading />
  ) : (
    countryData && (
      <div className="bg-lightGray p-10">
        <button
          className="bg-white py-2 px-6 text-darkBlue font-normal drop-shadow-md mb-6"
          onClick={(e) => {
            e.preventDefault();
            navigate("/");
          }}
        >
          Back
        </button>
        <div className="flex justify-between items-center">
          <img
            src={countryData["flags"]?.png}
            alt={countryData["flags"]?.alt}
            className="w-96 h-96"
          />
          <div className="ml-10 basis-3/4">
            <h2 className="text-black font-bold text-3xl mb-6">
              {countryData["name"]?.common}
            </h2>
            <div className="flex">
              <div className="mr-16">
                <div className="flex items-center mb-2">
                  <p className="text-black font-semibold">Native Name:</p>
                  <p className="text-darkBlue font-medium ml-2">
                    {countryData["name"]?.official}
                  </p>
                </div>
                <div className="flex items-center mb-2">
                  <p className="text-black font-semibold">Population:</p>
                  <p className="text-darkBlue font-medium ml-2">
                    {countryData?.population}
                  </p>
                </div>
                <div className="flex items-center mb-2">
                  <p className="text-black font-semibold">Region:</p>
                  <p className="text-darkBlue font-medium ml-2">
                    {countryData?.region}
                  </p>
                </div>
                <div className="flex items-center mb-2">
                  <p className="text-black font-semibold">Sub Region:</p>
                  <p className="text-darkBlue font-medium ml-2">
                    {countryData?.subregion}
                  </p>
                </div>
                <div className="flex items-center mb-2">
                  <p className="text-black font-semibold">Capital:</p>
                  <p className="text-darkBlue font-medium ml-2">
                    {countryData?.capital}
                  </p>
                </div>
              </div>
              <div>
                <div className="flex items-center mb-2">
                  <p className="text-black font-semibold">Top Level Domain:</p>
                  <p className="text-darkBlue font-medium ml-2">
                    {countryData?.tld}
                  </p>
                </div>
                <div className="flex items-center mb-2">
                  <p className="text-black font-semibold">Currencies:</p>
                  <p className="text-darkBlue font-medium ml-2">
                    {Object.values(countryData?.currencies)
                      ?.map((currency) => currency.name)
                      .join(",")}
                  </p>
                </div>
                <div className="flex items-center mb-2">
                  <p className="text-black font-semibold">Languages:</p>
                  <p className="text-darkBlue font-medium ml-2">
                    {Object.values(countryData?.languages)
                      ?.map((item) => item)
                      .join(",")}
                  </p>
                </div>
              </div>
            </div>
            {bordersData?.length > 0 && (
              <div className="flex items-center mt-10">
                <p className="text-black font-bold mb-0 mr-4">
                  Border Countries:
                </p>
                <div className="flex flex-wrap gap-4">
                  {bordersData?.map((code: any, index: number) => (
                    <button
                      key={index}
                      onClick={() => navigate(`/country/${code?.name?.common}`)}
                      className="border border-solid border-darkGray text-darkBlue font-semibold px-4 py-1"
                    >
                      {code?.name?.common}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    )
  );
}
