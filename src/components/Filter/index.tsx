import { ChangeEvent } from "react";

import { IRegionData } from "../../types/region";

type Props = {
  regionName: string;
  onChange: (newValue: ChangeEvent) => void;
  regionsArray: [];
};

export default function Filter({ regionName, onChange, regionsArray }: Props) {
  return (
    <select
      value={regionName}
      onChange={onChange}
      className="h-12 w-52 cursor-pointer p-3 dark:bg-darkBlueBg dark:text-white dark:shadow-xl xl:w-auto"
    >
      <option value="">Filter By Region</option>
      {regionsArray
        .filter(
          (region: IRegionData, index, self) =>
            self.findIndex((r: IRegionData) => r.region === region.region) ===
            index,
        )
        .map((region: IRegionData) => (
          <option key={region.region} value={region.region}>
            {region.region}
          </option>
        ))}
    </select>
  );
}
