import { IsNumber, IsOptional, IsString } from 'class-validator';
import { Currency } from '../currency.interface';

export class ConvertCurrencyDto implements Currency {
  @IsString()
  readonly name: string;

  @IsString()
  readonly code: string;

  @IsString()
  readonly symbol: string;

  @IsNumber()
  readonly rate: number;

  @IsNumber()
  @IsOptional()
  readonly amount?: number;
}
