import { map, lastValueFrom } from 'rxjs';
import { HttpService } from '@nestjs/axios';
import { ConfigService } from '@nestjs/config';
import { Injectable, Logger } from '@nestjs/common';
import { Exchange, ExchangeOptions } from './exchange.types';

@Injectable()
export class ExchangeService {
  private logger: Logger;
  private apiUrl: string;
  private accessKey: string;

  constructor(
    private readonly config: ConfigService,
    private readonly http: HttpService,
  ) {
    this.logger = new Logger(ExchangeService.name);
    this.apiUrl = config.get<string>('exchange.apiUrl');
    this.accessKey = config.get<string>('exchange.apiKey');

    if (!this.apiUrl) {
      this.logger.warn('Missing environment EXCHANGE_API_URL');
    }

    if (!this.accessKey) {
      this.logger.warn('Missing environment EXCHANGE_API_KEY');
    }
  }

  public async latest(options?: ExchangeOptions): Promise<Exchange> {
    const { base, symbols } = options;

    const currencies$ = await this.http
      .get('/latest.json', {
        params: {
          app_id: this.accessKey,
          base,
          symbols,
        },
      })
      .pipe(map((res) => res.data));

    return await lastValueFrom(currencies$);
  }
}
