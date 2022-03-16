export default (number = 0, code = "USD") => {
  const locale = code === "RUB" ? "ru-RU" : "en-US";

  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency: code,
    currencyDisplay: "symbol",
    minimumFractionDigits: 0,
  }).format(number);
};
