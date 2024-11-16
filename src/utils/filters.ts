import { ICountryData } from "../types/country";

export const applyFilterCountries = ({
  dataToFiltered,
  searchTerm,
  regionName,
}: {
  dataToFiltered: ICountryData[];
  searchTerm: string;
  regionName: string;
}) => {
  if (searchTerm) {
    dataToFiltered = dataToFiltered.filter((country) =>
      country["name"]?.common
        ?.toLocaleLowerCase()
        ?.includes(searchTerm.toLocaleLowerCase()),
    );
  }
  if (regionName) {
    dataToFiltered = dataToFiltered.filter(
      (country) => country?.region === regionName,
    );
  }
  return dataToFiltered;
};
