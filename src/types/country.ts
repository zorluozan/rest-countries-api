export type ICountryData = {
  name: {
    common: string;
    official: string;
  };
  population: number;
  region: string;
  subregion: string;
  tld: string;
  capital: string;
  flags: {
    png: string;
    alt: string;
  };
};

export type ICountryType = {
  country: ICountryData;
};
