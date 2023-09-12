import { IRegionData } from "../types/region";
import { ChangeEvent } from "react";

type Props = {
  regionName: string;
  onChange: (newValue: ChangeEvent) => void;
  regionsArray: [];
};

export default function Filter({ regionName, onChange, regionsArray }: Props) {
  return (
    <select value={regionName} onChange={onChange} className="h-12 p-3 cursor-pointer">
      <option value="">Filter By Region</option>
      {regionsArray
        .filter(
          (region: IRegionData, index, self) => self.findIndex((r: IRegionData) => r.region === region.region) === index
        )
        .map((region: IRegionData) => (
          <option key={region.region} value={region.region}>
            {region.region}
          </option>
        ))}
    </select>
  );
}
