/**
 * Retrieves the currency symbol for a given currency code.
 *
 * @param currencyCode - The currency code for which to retrieve the symbol.
 * @returns The currency symbol if found, otherwise the original currency code.
 */
export const getCurrencySymbol = (currencyCode: string) => {
  const numberFormat = new Intl.NumberFormat("en", {
    style: "currency",
    currency: currencyCode,
  });
  const currencySymbol = numberFormat
    .formatToParts(0)
    .find((part) => part.type === "currency")?.value;
  return currencySymbol || currencyCode;
};
