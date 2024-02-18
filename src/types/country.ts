type Currency = {
  name: string;
  symbol: string;
};

type Currencies = {
  [key: string]: Currency;
};

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
  currencies: Currencies;
  languages: {
    [key: string]: string;
  };
  flags: {
    png: string;
    alt: string;
  };
  borders: string[];
};

export type ICountryType = {
  country: ICountryData;
};
