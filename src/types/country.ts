export type ICountryData = {
  name: {
    common: string;
  };
  population: number;
  region: string;
  capital: string;
  flags: {
    png: string;
    alt: string;
  };
};

export type ICountryType = {
  country: ICountryData;
};
