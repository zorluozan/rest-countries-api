import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ICountryData } from "../types/country";
import axios from "axios";
import { useQuery } from "react-query";
import Loading from "../components/Loading";
import { BASE_URL } from "../config";

export default function CountryDetail() {
  const [country, setCountry] = useState<ICountryData | null | undefined>();
  let { name } = useParams();
  const navigate = useNavigate();

  const getCountryByName = async (): Promise<ICountryData> => {
    const { data } = await axios.get(`${BASE_URL}name/${name}`);
    return data[0];
  };

  const { data, isLoading } = useQuery("countryDetail", getCountryByName);

  useEffect(
    function () {
      if (data) {
        setCountry(data);
      }
    },
    [data]
  );

  return isLoading ? (
    <Loading />
  ) : (
    country && (
      <div className="bg-lightGray p-10">
        <button
          className="bg-white py-2 px-6 text-darkBlue font-normal drop-shadow-md mb-6"
          onClick={(e) => {
            e.preventDefault();
            navigate(-1);
          }}
        >
          Back
        </button>
        <div className="flex justify-between items-center">
          <img
            src={country["flags"]?.png}
            alt={country["flags"]?.alt}
            className="w-96 h-96"
          />
          <div className="ml-10 basis-3/4">
            <h2 className="text-black font-bold mb-2 text-3xl">
              {country["name"]?.common}
            </h2>
            <div className="flex items-center mb-2">
              <p className="text-black font-semibold">Native Name:</p>
              <p className="text-darkBlue font-medium ml-2">
                {country["name"]?.official}
              </p>
            </div>
            <div className="flex items-center mb-2">
              <p className="text-black font-semibold">Population:</p>
              <p className="text-darkBlue font-medium ml-2">
                {country?.population}
              </p>
            </div>
            <div className="flex items-center mb-2">
              <p className="text-black font-semibold">Region:</p>
              <p className="text-darkBlue font-medium ml-2">
                {country?.region}
              </p>
            </div>
            <div className="flex items-center mb-2">
              <p className="text-black font-semibold">Sub Region:</p>
              <p className="text-darkBlue font-medium ml-2">
                {country?.subregion}
              </p>
            </div>
            <div className="flex items-center mb-2">
              <p className="text-black font-semibold">Capital:</p>
              <p className="text-darkBlue font-medium ml-2">
                {country?.capital}
              </p>
            </div>
            <div className="flex items-center mb-2">
              <p className="text-black font-semibold">Top Level Domain:</p>
              <p className="text-darkBlue font-medium ml-2">{country?.tld}</p>
            </div>
            <div className="flex items-center mb-2">
              <p className="text-black font-semibold">Currencies:</p>
              <p className="text-darkBlue font-medium ml-2">
                {country?.currencies["TRY"]?.name ||
                  country?.currencies["EUR"]?.name}
              </p>
            </div>
          </div>
        </div>
      </div>
    )
  );
}
