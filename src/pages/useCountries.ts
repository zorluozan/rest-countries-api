import { useQuery } from "react-query";

import { getCountries } from "../services/apiCountries";

export const useCountries = () => {
  const { data: countriesList, isLoading } = useQuery(
    ["countries"],
    getCountries,
  );

  return { countriesList, isLoading };
};
