import { Module } from '@nestjs/common';
import { ExchangeModule } from 'src/module/exchange/exchange.module';
import { CurrencyController } from './currency.controller';
import { CurrencyService } from './currency.service';

@Module({
  imports: [ExchangeModule],
  providers: [CurrencyService],
  controllers: [CurrencyController],
  exports: [CurrencyService],
})
export class CurrencyModule {}
