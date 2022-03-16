import { Currency } from './currency.interface';

export type CurrenciesResponse = {
  currencies: Currency[];
  currency: Currency;
  presets: number[];
};

export type ConvertResponse = {
  values: number[];
  amount?: number;
  currency: Currency;
};
