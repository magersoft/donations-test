export type ExchangeOptions = {
  base?: string;
  symbols?: string;
};

export type Rates = {
  [key: string]: number;
};

export type Exchange = {
  timestamp: number;
  base: string;
  rates: Rates;
};
