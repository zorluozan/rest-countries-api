import { ChangeEvent } from "react";

import { useRegions } from "../../pages/useRegions";
import { IRegionData } from "../../types/region";

type Props = {
  regionName: string;
  onChange: (newValue: ChangeEvent) => void;
};

export default function Filter({ regionName, onChange }: Props) {
  const { regionsList, isLoading: isRegionsLoading } = useRegions();

  return (
    <select
      value={regionName}
      onChange={onChange}
      disabled={isRegionsLoading}
      className="h-12 w-52 cursor-pointer p-3 dark:bg-darkBlueBg dark:text-white dark:shadow-xl xl:w-auto"
    >
      <option value="">Filter By Region</option>
      {regionsList
        ?.filter(
          (region: IRegionData, index: number, self: any) =>
            self.findIndex((r: IRegionData) => r.region === region.region) ===
            index,
        )
        ?.map((region: IRegionData) => (
          <option key={region.region} value={region.region}>
            {region.region}
          </option>
        ))}
    </select>
  );
}
