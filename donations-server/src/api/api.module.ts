import { Module } from '@nestjs/common';
import { CurrencyModule } from './currency/currency.module';
import { DonationModule } from './donation/donation.module';

@Module({
  imports: [CurrencyModule, DonationModule],
  exports: [CurrencyModule, DonationModule],
})
export class ApiModule {}
