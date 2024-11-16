import axios from "axios";

import { BASE_URL } from "../config";
import { ICountryData } from "../types/country";

export const getCountries = async () => {
  const { data } = await axios.get(`${BASE_URL}all`);
  return data;
};

export const getRegionNames = async () => {
  const { data } = await axios.get(`${BASE_URL}all?fields=region`);
  return data;
};

export const getCountryByName = async (name: string): Promise<ICountryData> => {
  const { data } = await axios.get(`${BASE_URL}name/${name}`);
  return data[0];
};

export const getBordersByCodes = async (borders: string[] | undefined) => {
  if (!borders || borders.length === 0) return [];
  const { data } = await axios.get(
    `${BASE_URL}alpha?codes=${borders?.join(",")}`,
  );
  return data;
};
