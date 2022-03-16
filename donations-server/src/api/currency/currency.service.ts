import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { ExchangeService } from 'src/module/exchange/exchange.service';
import {
  getCurrencyName,
  getCurrencySymbol,
  roundCurrency,
} from 'src/utils/helpers';
import { Currency } from './currency.interface';
import { ConvertResponse, CurrenciesResponse } from './currency.types';
import { ConvertCurrencyDto } from './dto/convert-currency.dto';

@Injectable()
export class CurrencyService {
  private currencies: Currency[];
  private currency: Currency;
  private baseCurrency: string;
  private needCurrencies: string[];
  private presets: number[];

  constructor(
    private readonly config: ConfigService,
    private readonly exchange: ExchangeService,
  ) {
    this.baseCurrency = config.get<string>('baseCurrency');
    this.needCurrencies = config.get<string[]>('needCurrencies');
    this.presets = this.config.get<number[]>('presets');
  }

  public async fetch(): Promise<CurrenciesResponse> {
    const { rates } = await this.exchange.latest({
      base: this.baseCurrency,
      symbols: this.needCurrencies.join(','),
    });

    this.currencies = [...Object.keys(rates)]
      .map((code) => CurrencyService._formatCurrency(code, rates[code]))
      .reverse();

    this.currency = this.currencies.find(
      (currency) => currency.code === this.baseCurrency,
    );

    return {
      currencies: this.currencies,
      currency: this.currency,
      presets: this.presets,
    };
  }

  public async convert(data: ConvertCurrencyDto): Promise<ConvertResponse> {
    const { rates } = await this.exchange.latest({
      base: this.baseCurrency,
      symbols: data.code,
    });

    const rate = rates[data.code];
    const values = this.presets.map((value) => roundCurrency(value * rate));
    const amount = Math.round(data.amount * rate) || undefined;
    const currency = CurrencyService._formatCurrency(
      data.code,
      rates[data.code],
    );

    return {
      amount,
      values,
      currency,
    };
  }

  private static _formatCurrency(code: string, rate: number): Currency {
    return {
      name: getCurrencyName('en', code),
      code,
      symbol: getCurrencySymbol('en-US', code),
      rate: rate,
    };
  }
}
