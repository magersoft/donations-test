import { ConfigService } from '@nestjs/config';
import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { ExchangeService } from './exchange.service';

@Module({
  imports: [
    HttpModule.registerAsync({
      useFactory: (config: ConfigService) => ({
        baseURL: config.get<string>('exchange.apiUrl'),
      }),
      inject: [ConfigService],
    }),
  ],
  providers: [ExchangeService],
  exports: [ExchangeService],
})
export class ExchangeModule {}
