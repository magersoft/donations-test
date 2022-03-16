export default () => ({
  environment: process.env.NODE_ENV || 'development',
  port: parseInt(process.env.PORT, 10) || 3000,
  baseCurrency: 'USD',
  needCurrencies: ['USD', 'EUR', 'GBP', 'RUB'],
  presets: [40, 100, 200, 1000, 3000, 5000],
});
