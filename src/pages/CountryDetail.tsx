import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ICountryData } from "../types/country";
import axios from "axios";
import { useQuery } from "react-query";
import Loading from "../components/Loading";
import { BASE_URL } from "../config";
import BackButton from "../components/Buttons/BackButton";

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
      `${BASE_URL}alpha?codes=${borders?.join(",")}`,
    );
    return data;
  };

  const {
    data: countryData,
    isLoading,
    refetch: refetchCountryData,
  } = useQuery("countryDetail", getCountryByName);

  const { data: bordersData } = useQuery(["borders", borders], () =>
    getBordersByCodes(countryData?.borders),
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
      <div className="min-h-screen bg-lightGray p-10 dark:bg-darkBlueBg">
        <BackButton />
        <div className="flex items-center justify-between">
          <img
            src={countryData["flags"]?.png}
            alt={countryData["flags"]?.alt}
            className="h-96 w-96"
          />
          <div className="ml-10 basis-3/4">
            <h2 className="mb-6 text-3xl font-bold text-black dark:text-white">
              {countryData["name"]?.common}
            </h2>
            <div className="flex">
              <div className="mr-16">
                <div className="mb-2 flex items-center">
                  <p className="font-semibold text-black dark:text-white">
                    Native Name:
                  </p>
                  <p className="ml-2 font-medium text-darkBlue dark:text-lightGray">
                    {countryData["name"]?.official}
                  </p>
                </div>
                <div className="mb-2 flex items-center">
                  <p className="font-semibold text-black dark:text-white">
                    Population:
                  </p>
                  <p className="ml-2 font-medium text-darkBlue dark:text-lightGray">
                    {countryData?.population}
                  </p>
                </div>
                <div className="mb-2 flex items-center">
                  <p className="font-semibold text-black dark:text-white">
                    Region:
                  </p>
                  <p className="ml-2 font-medium text-darkBlue dark:text-lightGray">
                    {countryData?.region}
                  </p>
                </div>
                <div className="mb-2 flex items-center">
                  <p className="font-semibold text-black dark:text-white">
                    Sub Region:
                  </p>
                  <p className="ml-2 font-medium text-darkBlue dark:text-lightGray">
                    {countryData?.subregion}
                  </p>
                </div>
                <div className="mb-2 flex items-center">
                  <p className="font-semibold text-black dark:text-white">
                    Capital:
                  </p>
                  <p className="ml-2 font-medium text-darkBlue dark:text-lightGray">
                    {countryData?.capital}
                  </p>
                </div>
              </div>
              <div>
                <div className="mb-2 flex items-center">
                  <p className="font-semibold text-black dark:text-white">
                    Top Level Domain:
                  </p>
                  <p className="ml-2 font-medium text-darkBlue dark:text-lightGray">
                    {countryData?.tld}
                  </p>
                </div>
                <div className="mb-2 flex items-center">
                  <p className="font-semibold text-black dark:text-white">
                    Currencies:
                  </p>
                  <p className="ml-2 font-medium text-darkBlue dark:text-lightGray">
                    {Object.values(countryData?.currencies)
                      ?.map((currency) => currency.name)
                      .join(",")}
                  </p>
                </div>
                <div className="mb-2 flex items-center">
                  <p className="font-semibold text-black dark:text-white">
                    Languages:
                  </p>
                  <p className="ml-2 font-medium text-darkBlue dark:text-lightGray">
                    {Object.values(countryData?.languages)
                      ?.map((item) => item)
                      .join(",")}
                  </p>
                </div>
              </div>
            </div>
            {bordersData?.length > 0 && (
              <div className="mt-10 flex items-center">
                <p className="mb-0 mr-4 font-bold text-black dark:text-white">
                  Border Countries:
                </p>
                <div className="flex flex-wrap gap-4">
                  {bordersData?.map((code: any, index: number) => (
                    <button
                      key={index}
                      onClick={() => navigate(`/country/${code?.name?.common}`)}
                      className="border border-solid border-darkGray px-4 py-1 font-semibold text-darkBlue dark:text-lightGray"
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
