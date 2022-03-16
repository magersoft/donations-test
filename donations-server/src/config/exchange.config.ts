import { registerAs } from '@nestjs/config';

export default registerAs('exchange', () => ({
  apiUrl: process.env.EXCHANGE_API_URL || null,
  apiKey: process.env.EXCHANGE_API_KEY || null,
}));
