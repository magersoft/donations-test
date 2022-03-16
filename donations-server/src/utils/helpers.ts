import * as decimalAdjust from 'decimal-adjust';

/**
 * Get currency symbol from locale
 * @param locale
 * @param currency
 */
export function getCurrencySymbol(locale: string, currency: string): string {
  locale = currency === 'RUB' ? 'ru-RU' : locale;

  return (0)
    .toLocaleString(locale, {
      style: 'currency',
      currency,
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    })
    .replace(/\d/g, '')
    .trim();
}

/**
 * Get currency name from locale
 * @param locale
 * @param currency
 */
export function getCurrencyName(locale: string, currency: string): string {
  const currencyNames = new Intl.DisplayNames([locale], { type: 'currency' });
  return currencyNames.of(currency);
}

/**
 * Round currency for beautiful view
 * @param value
 */
export function roundCurrency(value: number): number {
  const exp = String(Math.round(value)).length - 1;
  return decimalAdjust('ceil', value, exp);
}
