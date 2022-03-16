import { ConvertCurrencyDto } from './dto/convert-currency.dto';
import { CurrencyService } from './currency.service';
import { Body, Controller, Get, Post } from '@nestjs/common';

@Controller('currency')
export class CurrencyController {
  constructor(private readonly currencyService: CurrencyService) {}

  @Get()
  getCurrencies() {
    return this.currencyService.fetch();
  }

  @Post('convert')
  convertCurrency(@Body() data: ConvertCurrencyDto) {
    return this.currencyService.convert(data);
  }
}
