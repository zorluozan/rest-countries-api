import { useQuery } from "react-query";

import { getRegionNames } from "../services/apiCountries";

export const useRegions = () => {
  const { data: regionsList, isLoading } = useQuery(
    ["regions"],
    getRegionNames,
  );
  return { regionsList, isLoading };
};
